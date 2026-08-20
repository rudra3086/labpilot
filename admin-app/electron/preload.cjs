const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('classPilotAdmin', {
  appVersion: 'v1.0.0',
});
