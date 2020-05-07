import navigatorfp from './navigator.js'
import screenfp from './screen.js'
import webglfp from './webgl.js'
import fontsfp from './fonts.js'
const xhr = new XMLHttpRequest()

const startfp = async () => {
  let navigatorparams = await navigatorfp()
  let screen = await screenfp()
  let webglparams = await webglfp()
  let fonts = await fontsfp()
  let json = JSON.stringify({navigatorparams,screen,webglparams,fonts})
  xhr.open("POST", 'http://192.255.255.145:8888/create', true)
  xhr.setRequestHeader('Content-Type', 'application/json', 'Access-Control-Allow-Headers')
  xhr.send(json)
}

startfp()