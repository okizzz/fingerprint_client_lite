import navigatorfp from './navigator.js'
import screenfp from './screen.js'
import webglfp from './webgl.js'
import fontsfp from './fonts.js'
const xhr = new XMLHttpRequest()

const startfp = async () => {
  let navigatorparams = await navigatorfp()
  let screenparams = await screenfp()
  let webglparams = await webglfp()
  let fonts = await fontsfp()
  let json = JSON.stringify({navigatorparams,screenparams,webglparams,fonts})
  console.log()
  xhr.open("POST", 'http://localhost:8888/create', true)
  xhr.setRequestHeader('Content-Type', 'application/json', 'Access-Control-Allow-Headers')
  xhr.send(json)
}

startfp()
