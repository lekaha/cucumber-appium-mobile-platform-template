var config = {};

config.android = {};
config.ios = {};
config.web = {};

config.platform = process.env.PLATFORM || "CHROME";
config.default_delay_timeout = 20000;

switch(config.platform) {
  case 'ANDROID':
      config.android.platformName = process.env.PLATFORM_NAME || 'Android';
      config.android.platformVersion = process.env.PLATFORM_VERSION || '8.0.0';
      config.android.deviceName = process.env.DEVICE_NAME || 'Android SDK built for x86';
      config.android.browserName = process.env.BROWSER_NAME || 'Chrome';
      config.android.app = process.env.APK || '';
      config.android.appPackage = process.env.APP_PACKAGE || '';
      config.android.appActivity = process.env.APP_ACTIVITY || '';
      config.android.server = 'http://127.0.0.1:4723/wd/hub';
    break;
  case 'IOS':
    break;
  default:
    
}


config.default_stuff =  ['red','green','blue','apple','yellow','orange','politics'];
config.twitter.user_name = process.env.TWITTER_USER || 'username';
config.twitter.password=  process.env.TWITTER_PASSWORD || 'password';
config.redis.uri = process.env.DUOSTACK_DB_REDIS;
config.redis.host = 'hostname';
config.redis.port = 6379;
config.web.port = process.env.WEB_PORT || 9980;

module.exports = config;