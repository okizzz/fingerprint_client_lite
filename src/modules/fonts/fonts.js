export default function jsFontsKey() {
  // a font will be compared against all the three default fonts.
  // and if it doesn't match all 3 then that font is not available.
  const extendedFontList = require("./extendedFontList.js");
  let fontList = require("./fontList.js");

  const baseFonts = ["monospace", "sans-serif", "serif"];

  fontList = fontList.concat(extendedFontList);
  let userDefinedFonts = [];
  fontList = fontList.concat(userDefinedFonts);

  //we use m or w because these two characters take up the maximum width.
  // And we use a LLi so that the same matching fonts can get separated
  //let testString = "mmm\u20B9\u2581\u20BA\uA73D\uFFFD\u20B8\u05C6\u1E9E\u097F\uF003mmmmmmmlli"
  let testString = "mmmmmmmmmmlli"; // maxmind

  //we test using 72px font size, we may use any size. I guess larger the better.
  let testSize = "72px"; // maxmind

  let h = document.getElementsByTagName("body")[0];

  // div to load spans for the base fonts
  let baseFontsDiv = document.createElement("div");

  // div to load spans for the fonts to detect
  let fontsDiv = document.createElement("div");

  let defaultWidth = {};
  let defaultHeight = {};

  // creates a span where the fonts will be loaded
  function createSpan() {
    let s = document.createElement("span");
    /*
     * We need this css as in some weird browser this
     * span elements shows up for a microSec which creates a
     * bad user experience
     */
    s.style.position = "absolute";
    s.style.left = "-9999px";
    s.style.fontSize = testSize;
    s.style.lineHeight = "normal";
    s.innerHTML = testString;
    return s;
  }

  // creates a span and load the font to detect and a base font for fallback
  function createSpanWithFonts(fontToDetect, baseFont) {
    let s = createSpan();
    s.style.fontFamily = "'" + fontToDetect + "'," + baseFont;
    return s;
  }

  // creates spans for the base fonts and adds them to baseFontsDiv
  function initializeBaseFontsSpans() {
    let spans = [];
    for (let index = 0, length = baseFonts.length; index < length; index++) {
      let s = createSpan();
      s.style.fontFamily = baseFonts[index];
      baseFontsDiv.appendChild(s);
      spans.push(s);
    }
    return spans;
  }

  // creates spans for the fonts to detect and adds them to fontsDiv
  function initializeFontsSpans() {
    let spans = {};
    for (let i = 0, l = fontList.length; i < l; i++) {
      let fontSpans = [];
      for (let j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
        let s = createSpanWithFonts(fontList[i], baseFonts[j]);
        fontsDiv.appendChild(s);
        fontSpans.push(s);
      }
      spans[fontList[i]] = fontSpans; // Stores {fontName : [spans for that font]}
    }
    return spans;
  }

  // checks if a font is available
  function isFontAvailable(fontSpans) {
    let detected = false;
    for (let i = 0; i < baseFonts.length; i++) {
      detected =
        fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] ||
        fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]];
      if (detected) {
        return detected;
      }
    }
    return detected;
  }

  // create spans for base fonts
  let baseFontsSpans = initializeBaseFontsSpans();

  // add the spans to the DOM
  h.appendChild(baseFontsDiv);

  // get the default width for the three base fonts
  for (let index = 0, length = baseFonts.length; index < length; index++) {
    defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth; // width for the default font
    defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight; // height for the default font
  }

  // create spans for fonts to detect
  let fontsSpans = initializeFontsSpans();

  // add all the spans to the DOM
  h.appendChild(fontsDiv);

  // check available fonts
  let available = [];
  for (let i = 0, l = fontList.length; i < l; i++) {
    if (isFontAvailable(fontsSpans[fontList[i]])) {
      available.push(fontList[i]);
    }
  }

  // remove spans from DOM
  h.removeChild(fontsDiv);
  h.removeChild(baseFontsDiv);

  let js_fonts = available;
  return js_fonts;
}
