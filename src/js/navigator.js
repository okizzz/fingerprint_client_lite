const navigator = async () => {

  let nv = window.navigator
  let navigatorParametr = {}

  navigatorParametr.appCodeName = nv.appCodeName
  navigatorParametr.appName = nv.appName
  navigatorParametr.appVersion = nv.appVersion
  navigatorParametr.buildID = nv.buildID
  //navigatorParametr.clipboard: = nv.clipboard
  if (nv.connection) {
    navigatorParametr.connection = {downlink: nv.connection.downlink, effectiveType: nv.connection.effectiveType, onchange: nv.connection.onchange, rtt: nv.connection.rtt, saveData: nv.connection.saveData}
  }
  navigatorParametr.cookieEnabled = nv.cookieEnabled
  //navigatorParametr.credentials = nv.credentials
  navigatorParametr.deviceMemory = nv.deviceMemory
  navigatorParametr.doNotTrack = nv.doNotTrack
  //navigatorParametr.geolocation = nv.geolocation
  navigatorParametr.hardwareConcurrency = nv.hardwareConcurrency
  //navigatorParametr.keyboard = nv.keyboard
  navigatorParametr.language = nv.language
  navigatorParametr.languages = nv.languages
  //navigatorParametr.locks = nv.locks
  navigatorParametr.maxTouchPoints = nv.maxTouchPoints
  //navigatorParametr.mediaCapabilities = nv.mediaCapabilities
  //navigatorParametr.mediaDevices = nv.mediaDevices
  //navigatorParametr.mediaSession = nv.mediaSession
  //navigatorParametr.mimeTypes = nv.mimeTypes
  navigatorParametr.oscpu = nv.oscpu
  navigatorParametr.onLine = nv.onLine
  //navigatorParametr.permissions = nv.permissions
  navigatorParametr.platform = nv.platform
  //navigatorParametr.plugins = nv.plugins
  //navigatorParametr.presentation = nv.presentation
  navigatorParametr.product = nv.product
  navigatorParametr.productSub = nv.productSub
  //navigatorParametr.serviceWorker = nv.serviceWorker
  //navigatorParametr.storage = nv.storage
  //navigatorParametr.usb = nv.usb
  //navigatorParametr.userActivation = nv.userActivation
  navigatorParametr.userAgent = nv.userAgent
  navigatorParametr.vendor = nv.vendor
  navigatorParametr.vendorSub = nv.vendorSub
  //navigatorParametr.webkitPersistentStorage = nv.webkitPersistentStorage
  //navigatorParametr.webkitTemporaryStorage = nv.webkitTemporaryStorage
  navigatorParametr.webdriver = nv.webdriver
  
  await nv.mediaDevices.enumerateDevices().then((letDevices) => {navigatorParametr.mediaDevices = letDevices})

  return(navigatorParametr)
}

export default navigator