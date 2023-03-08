import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Question } from '../question';
import { QuestionOption } from '../question-option';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '100%',
        opacity: 1
      })),
      state('closed', style({
        height: '0px',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),    
  ]
})
export class QuestionComponent {
  @Input()
  question!: Question;

  public isOpen: boolean = true;
  public selectedAnswer: string = '';
  public selectedOption: QuestionOption | null = null;

  public optionSelected(option: QuestionOption): void {
    this.selectedOption = option;
    this.toggle();
    this.selectedAnswer = 'Your answer: ' + option.label;
  }

  public toggle(): void {
    this.isOpen = !this.isOpen;    
  }

}
