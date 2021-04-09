import webglfp from "../webgl/webgl.js";
import fontsfp from "./fonts/fonts.js";
import browserfp from "./browserParams.js";

const xhr = new XMLHttpRequest();

const startfp = async () => {
  const result = Object.assign({}, await browserfp(), { fonts: fontsfp().toString() }, webglfp());
  //const json = JSON.stringify({ webglparams, fonts, browser });
  xhr.open("POST", "http://localhost:8888/create", true);
  xhr.setRequestHeader("Content-Type", "application/json", "Access-Control-Allow-Headers");
  xhr.send(JSON.stringify(result));
};

startfp();
