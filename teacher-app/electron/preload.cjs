const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('classPilot', {
  appVersion: 'v0.2.0-week2',
});
