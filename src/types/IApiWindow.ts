import { Bonus } from "../api/bonus/model/Bonus";

interface IApiWindow extends Window {
  dgsApi: {
    getAppVersion: () => Promise<string>;
    getBonusById: (numbonus: number) =>Promise<Bonus>;
    closeBonus: (numbonus: number) =>Promise<void>;
    openBonus: (numbonus: number) =>Promise<void>;
  }
}

export { IApiWindow }
