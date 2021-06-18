import { BonusRepositories } from "../repositories/implementations/BonusRepositories";
import { ShowService } from "./ShowService";

const bonusRepositories = new BonusRepositories();

const showService = new ShowService(bonusRepositories);

export { showService };
