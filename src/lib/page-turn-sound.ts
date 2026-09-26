let ctx: AudioContext | null = null;
let noise: AudioBuffer | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AC =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx ??= new AC();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function getNoise(audio: AudioContext): AudioBuffer {
  if (noise && noise.sampleRate === audio.sampleRate) return noise;
  const length = Math.floor(audio.sampleRate * 2);
  const buffer = audio.createBuffer(1, length, audio.sampleRate);
  const data = buffer.getChannelData(0);
  // brown-ish noise: much softer / warmer than white noise
  let last = 0;
  for (let i = 0; i < length; i++) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.035 * white) / 1.035;
    data[i] = last * 3.2;
  }
  noise = buffer;
  return buffer;
}

/**
 * Called inside a real user gesture (pointerdown / keydown) so the browser
 * allows audio later, when the page actually turns.
 */
export function primePageTurnSound() {
  try {
    getCtx();
  } catch {
    /* ignore */
  }
}

/**
 * One continuous, smooth paper sweep — like a page arcing over in an
 * online flipbook. Silently does nothing if the browser blocks audio.
 */
export function playPageTurnSound() {
  try {
    const audio = getCtx();
    if (!audio) return;

    const t0 = audio.currentTime + 0.01;
    const dur = 0.95;

    const source = audio.createBufferSource();
    source.buffer = getNoise(audio);
    source.loop = true;
    source.playbackRate.value = 0.9;

    // sweeping band: low as the sheet lifts, brighter mid-arc, low as it lands
    const band = audio.createBiquadFilter();
    band.type = "bandpass";
    band.Q.value = 0.7;
    band.frequency.setValueAtTime(500, t0);
    band.frequency.exponentialRampToValueAtTime(2400, t0 + dur * 0.45);
    band.frequency.exponentialRampToValueAtTime(700, t0 + dur);

    const tame = audio.createBiquadFilter();
    tame.type = "lowpass";
    tame.frequency.value = 4200;

    const gain = audio.createGain();
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(0.075, t0 + dur * 0.35);
    gain.gain.exponentialRampToValueAtTime(0.055, t0 + dur * 0.7);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

    source.connect(band).connect(tame).connect(gain).connect(audio.destination);
    source.start(t0);
    source.stop(t0 + dur + 0.05);

    // soft settle tap as the sheet lands
    const tap = audio.createBufferSource();
    tap.buffer = getNoise(audio);
    const tapFilter = audio.createBiquadFilter();
    tapFilter.type = "lowpass";
    tapFilter.frequency.value = 1400;
    const tapGain = audio.createGain();
    const t1 = t0 + dur * 0.86;
    tapGain.gain.setValueAtTime(0.0001, t1);
    tapGain.gain.exponentialRampToValueAtTime(0.05, t1 + 0.03);
    tapGain.gain.exponentialRampToValueAtTime(0.0001, t1 + 0.2);
    tap.connect(tapFilter).connect(tapGain).connect(audio.destination);
    tap.start(t1);
    tap.stop(t1 + 0.25);
  } catch {
    /* audio is a nicety — never break navigation */
  }
}
