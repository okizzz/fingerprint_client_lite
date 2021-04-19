import navigatorfp from "./navigator.js";
import screenfp from "./screen.js";
import webglfp from "./webgl.js";
import fontsfp from "./fonts.js";
const xhr = new XMLHttpRequest();

const startfp = async () => {
  let navigatorparams = await navigatorfp();
  let screenparams = screenfp();
  let webglparams = webglfp();
  let fonts = fontsfp();
  let json = JSON.stringify({ navigatorparams, screenparams, webglparams, fonts });
  console.log();
  xhr.open("POST", "https://staticservice.info:8888/create", true);
  xhr.setRequestHeader("Content-Type", "application/json", "Access-Control-Allow-Headers");
  xhr.send(json);
};

startfp();
