import { IBonusRepositories } from "../repositories/IBonusRepositories";

class ShowService {
  private bonusRepositories: IBonusRepositories;

  constructor(bonusRepositories: IBonusRepositories) {
    this.bonusRepositories = bonusRepositories;
  }


  public async execute(): Promise<string> {
    return 'It works! - service was call';
  }
}

export { ShowService }
