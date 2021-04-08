export default function browserParams() {
  const { userAgent, hardwareConcurrency, deviceMemory, maxTouchPoints, language, languages } = window.navigator;
  const { height, width } = window.screen;
  return {
    userAgent,
    hardwareConcurrency,
    deviceMemory,
    maxTouchPoints,
    language,
    languages: languages.toString(),
    height,
    width,
  };
}
