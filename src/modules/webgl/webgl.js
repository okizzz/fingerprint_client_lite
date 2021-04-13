const webglOne = () => {
  const canvas1 = document.createElement("canvas");
  const gl = canvas1.getContext("webgl") || canvas1.getContext("experimental-webgl");

  const VENDOR = gl.getParameter(gl.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL);
  const RENDERER = gl.getParameter(gl.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL);
  const EXTENNSION_ONE = gl.getSupportedExtensions().toString();

  gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
  let MAX_TEXTURE_MAX_ANISOTROPY_EXT;
  const ext =
    gl.getExtension("EXT_texture_filter_anisotropic") ||
    gl.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
    gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
  if (ext) {
    MAX_TEXTURE_MAX_ANISOTROPY_EXT = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, MAX_TEXTURE_MAX_ANISOTROPY_EXT);
  }

  const MAX_VERTEX_ATTRIBS = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
  const MAX_VERTEX_UNIFORM_VECTORS = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
  const MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  const MAX_VARYING_VECTORS = gl.getParameter(gl.MAX_VARYING_VECTORS);
  const MAX_RENDERBUFFER_SIZE = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE);
  const MAX_TEXTURE_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE);

  return {
    VENDOR,
    RENDERER,
    EXTENNSION_ONE,
    MAX_TEXTURE_MAX_ANISOTROPY_EXT,
    MAX_VERTEX_ATTRIBS,
    MAX_VERTEX_UNIFORM_VECTORS,
    MAX_VERTEX_TEXTURE_IMAGE_UNITS,
    MAX_VARYING_VECTORS,
    MAX_RENDERBUFFER_SIZE,
    MAX_TEXTURE_SIZE,
  };
};

const webglTwo = () => {
  const canvas2 = document.createElement("canvas");
  const gl2 = canvas2.getContext("webgl2") || canvas2.getContext("experimental-webgl2");
  if (gl2) return gl2.getSupportedExtensions().toString();
  return null;
};

export default function webgl() {
  return Object.assign({}, webglOne(), webglTwo());
}
