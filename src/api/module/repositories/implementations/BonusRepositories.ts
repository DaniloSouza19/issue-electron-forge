import { knex } from "../../../config/knexConfig";
import { Bonus } from "../../model/Bonus";
import { IBonusRepositories } from "../IBonusRepositories";

class BonusRepositories implements IBonusRepositories {
  public async findById(NUMBONUS: number): Promise<Bonus> {
    const result = await knex<Bonus>('PCBONUSC')
    .select('NUMBONUS', 'VALORTOTAL', 'DATABONUS', 'DTFECHAMENTO', 'QTNFS', 'DTCANCEL')
    .where({
      NUMBONUS,
    });

    const bonus = result[0] as Bonus;

    return bonus;
  }

  async openBonus (NUMBONUS: number) : Promise<void> {
    await knex<Bonus>('PCBONUSC').where({
      NUMBONUS
    }).update({
      DTFECHAMENTO: null
    })
  }

  async closeBonus (NUMBONUS: number) : Promise<void> {
    await knex<Bonus>('PCBONUSC').where({
      NUMBONUS
    }).update({
      DTFECHAMENTO: new Date()
    })
  }
}

export { BonusRepositories }
