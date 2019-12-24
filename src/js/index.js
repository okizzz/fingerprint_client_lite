import navigatorfp from './navigator.js'
import screenfp from './screen.js'
import webglfp from './webgl.js'
import fontsfp from './fonts.js'
const xhr = new XMLHttpRequest()

const startfp = async () => {
  let navigator = await navigatorfp()
  let screen = await screenfp()
  let webglparams = await webglfp()
  let fonts = await fontsfp()
  //let json = JSON.stringify({navigator,screen,webglparams,fonts})
  //let data = btoa(JSON.stringify({navigator,screen,webglparams,fonts}))
  let data = 'data=' + encodeURIComponent(btoa(JSON.stringify({navigator,screen,webglparams,fonts})))
  xhr.open("POST", 'http://localhost:8888/create', true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded', 'Access-Control-Allow-Headers')
  xhr.send(data);
  //xhr.send(json)
}

startfp()