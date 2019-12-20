const screen = () => {
  let sc = window.screen;
  let screenParametr = {};

  screenParametr.availHeight = sc.availHeight
  screenParametr.availLeft = sc.availLeft
  screenParametr.availTop = sc.availTop
  screenParametr.availWidth = sc.availWidth
  screenParametr.colorDepth = sc.colorDepth
  screenParametr.height = sc.height
  if (sc.orientation) {
    screenParametr.orientation = {angle: sc.orientation.angle, onchange: sc.orientation.onchange, type: sc.orientation.type}
  }
  screenParametr.pixelDepth = sc.pixelDepth
  screenParametr.width = sc.width

  return(screenParametr)
}

export default screen