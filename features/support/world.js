'use strict';

var config = require('../../config');

var fs = require('fs');
var webdriver = require('selenium-webdriver');
var platform = config.platform;

var buildAndroidDriver = function() {
  return new webdriver.Builder().
    usingServer(config.server).
    withCapabilities({
      platformName: config.android.platformName,
      platformVersion: config.android.platformVersion,
      deviceName: config.android.deviceName,
      browserName: config.android.browserName,
      app: config.android.app,
      appPackage: config.android.appPackage,
      appActivity: config.android.appActivity
    }).
    build();
};

var buildIosDriver = function () {
  return new webdriver.Builder().
    usingServer(config.server).
    withCapabilities({
      // ...
    }).
    build();
}

var buildChromeDriver = function() {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
};

switch(platform) {
  case 'ANDROID':
    var driver = buildAndroidDriver();
    break;
  case 'IOS':
    var driver = buildIosDriver();
    break;
  default:
    var driver = buildChromeDriver();
}

var getDriver = function() {
  return driver;
};

var World = function World() {

  var defaultTimeout = config.default_delay_timeout;
  var screenshotPath = "screenshots";

  this.webdriver = webdriver;
  this.driver = driver;

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }
  
  this.waitFor = function(cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function() {
      return driver.isElementPresent({ css: cssLocator });
    }, waitTimeout);
  };
};

module.exports.World = World;
module.exports.getDriver = getDriver;
