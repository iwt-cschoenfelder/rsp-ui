import {Component} from '@angular/core';
import {RspService} from './rsp.service';
import {Choice} from '../enum/Choice';
import {RspResult} from '../type/RspResult';
import {GameResult} from '../enum/GameResult';

@Component({
  selector: 'rock-scissor-paper',
  templateUrl: './rsp.component.html',
  styleUrls: ['./rsp.component.css']
})
export class RspComponent {
  title = 'rsp-component';
  constructor(private rspService: RspService) {}

  public rspResult: RspResult | undefined;

  public computeResultHeadline() {
    switch (this.rspResult?.userGameResult) {
      case GameResult.WON: return "Congratulations, You won this round";
      case GameResult.LOST: return "Bad luck you lost, perhaps next round";
      case GameResult.DRAW: return "It was a draw";
      default:  return "";
    }
  }

  public resetSubmit() {
    this.rspResult = undefined;
  }

  public submitRock() {
    this.submitChoice(Choice.ROCK)
  }

  public submitScissor() {
    this.submitChoice(Choice.SCISSOR)
  }
  public submitPaper() {
    this.submitChoice(Choice.PAPER)
  }

  private submitChoice(userChoice: Choice) {
    this.rspService.submitChoice(userChoice).subscribe(
      result => this.rspResult = result
    )
  }

}
