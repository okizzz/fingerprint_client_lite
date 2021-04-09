export default async function browserParams() {
  const { userAgent, hardwareConcurrency, deviceMemory, maxTouchPoints, language, languages } = window.navigator;
  const { height, width } = window.screen;
  const mediaDevices = await window.navigator.mediaDevices.enumerateDevices();

  let audiooutput = 0,
    videoinput = 0,
    audioinput = 0;

  mediaDevices.forEach((d) => {
    if (d.kind === "audiooutput") audiooutput++;
    if (d.kind === "videoinput") videoinput++;
    if (d.kind === "audioinput") audioinput++;
  });

  return {
    userAgent,
    hardwareConcurrency,
    deviceMemory,
    maxTouchPoints,
    language,
    languages: languages.toString(),
    height,
    width,
    audiooutput,
    videoinput,
    audioinput,
  };
}
