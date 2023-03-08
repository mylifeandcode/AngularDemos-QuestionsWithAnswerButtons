import { Component, Input } from '@angular/core';
import { QuestionSection } from '../question-section';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.scss']
})
export class QuestionSectionComponent {
  @Input()
  questionSection!: QuestionSection;
}
