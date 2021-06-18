import { Bonus } from "../model/Bonus";

interface IBonusRepositories {
  findById: (NUMBONUS: number) => Promise<Bonus>;
  openBonus: (NUMBONUS: number) => Promise<void>;
  closeBonus: (NUMBONUS: number) => Promise<void>;
}

export { IBonusRepositories }
