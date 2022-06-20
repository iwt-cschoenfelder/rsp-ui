import {Choice} from '../enum/Choice';
import {GameResult} from '../enum/GameResult';

export type RspResult = {
  userChoice: Choice,
  computerChoice: Choice,
  userGameResult: GameResult,
}
