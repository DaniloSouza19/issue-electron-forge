import { contextBridge, ipcRenderer } from 'electron';
import { showService } from './api/module/services/index';

console.log('hello from preload');

contextBridge.exposeInMainWorld('dgsApi', {
  getAppVersion: (args: any) => ipcRenderer.invoke('get-app-version', args),
  showService: async () => await showService.execute()
})
