import { contextBridge, ipcRenderer } from 'electron';
import {
  showBonusByIdService,
  closeBonusService,
  openBonusService } from './api/bonus/services/index';

console.log('hello from preload');

contextBridge.exposeInMainWorld('dgsApi', {
  getAppVersion: (args: any) => ipcRenderer.invoke('get-app-version', args),
  getBonusById: async (numbonus: number) => await showBonusByIdService.execute({ NUMBONUS: numbonus }),
  closeBonus: async (numbonus: number) => await closeBonusService.execute({ NUMBONUS: numbonus }),
  openBonus: async (numbonus: number) => await openBonusService.execute({ NUMBONUS: numbonus })
})
