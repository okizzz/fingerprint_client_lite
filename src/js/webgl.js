const webglparams = require('./webglParams')
const webgl2params = require('./webgl2Params')

const webgl = () => {
  let canvas1 = document.createElement('canvas')
  let canvas2 = document.createElement('canvas')
  let gl = canvas1.getContext('webgl') || canvas1.getContext('experimental-webgl')
  let gl2 = canvas2.getContext('webgl2') || canvas2.getContext('experimental-webgl2')
  let WebGlGetParametr = {}

  const getWebgl = (webgl_obj, gl_get, array_params) => {
    let extensions = new Object()
    let extensionobj = new Object()
    let objgl = new Object()
    array_params.forEach(function(param) {
      objgl[param] = gl_get.getParameter(gl_get[param])
    })
    gl_get.getSupportedExtensions().forEach(function(extension) {
      extensionobj = {}
      let keys = (Object.keys(gl_get.getExtension(extension).__proto__))
        keys.forEach(function(key) {
          let value = gl_get.getParameter(gl_get.getExtension(extension)[key])
          extensionobj[key] = value
          extensions[extension] = extensionobj
        })
    })
    objgl['EXTENSIONS'] = extensions
    WebGlGetParametr[webgl_obj] = objgl
  }
  getWebgl.call(this, 'webgl', gl, webglparams)
  if (gl2 != null) {
     getWebgl.call(this, 'webgl2', gl2, webgl2params)  
  }

  return(WebGlGetParametr)
}

export default webgl