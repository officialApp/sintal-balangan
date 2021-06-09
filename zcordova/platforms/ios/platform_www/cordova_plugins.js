cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-fullscreen.AndroidFullScreen",
      "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
      "pluginId": "cordova-plugin-fullscreen",
      "clobbers": [
        "AndroidFullScreen"
      ]
    },
    {
      "id": "cordova-plugin-printer.Printer",
      "file": "plugins/cordova-plugin-printer/www/printer.js",
      "pluginId": "cordova-plugin-printer",
      "clobbers": [
        "cordova.plugins.printer"
      ]
    },
    {
      "id": "onesignal-cordova-plugin.OneSignal",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-fullscreen": "1.3.0",
    "cordova-plugin-printer": "0.8.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-window-background": "1.1.2",
    "onesignal-cordova-plugin": "2.11.3"
  };
});