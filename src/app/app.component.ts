import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionOption } from './question-option';
import { QuestionSection } from './question-section';
import { Questionaire } from './questionaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'QuestionsWithAnswerButtonsDemo';

  public questionaire: Questionaire = new Questionaire();

  ngOnInit(): void {
    this.setupQuestionaire();
  }

  private setupQuestionaire(): void {
    const question1 = new Question();
    question1.text = "How does this look?";
    question1.options.push(...[
      <QuestionOption>{ label: 'Bad', value: 1 },
      <QuestionOption>{ label: 'Poor', value: 2 },
      <QuestionOption>{ label: 'Okay', value: 3 },
      <QuestionOption>{ label: 'Good', value: 4 },
      <QuestionOption>{ label: 'Great', value: 5 }
    ]);

    const question2 = new Question();
    question2.text = "How do you feel?";
    question2.options.push(...[
      <QuestionOption>{ label: 'Lousy', value: 1 },
      <QuestionOption>{ label: 'Okay', value: 2 },
      <QuestionOption>{ label: 'Good', value: 3 },
    ]);

    const question3 = new Question();
    question3.text = "How fast has your day been going?";
    question3.options.push(...[
      <QuestionOption>{ label: 'Slow', value: 1 },
      <QuestionOption>{ label: 'Moderate', value: 2 },
      <QuestionOption>{ label: 'Fast', value: 3 },
      <QuestionOption>{ label: 'Lightspeed', value: 4 },
    ]);

    const question4 = new Question();
    question4.text = "Any plans for the weekend?";
    question4.options.push(...[
      <QuestionOption>{ label: 'Yes', value: 1 },
      <QuestionOption>{ label: 'No', value: 2 }
    ]);

    const question5 = new Question();
    question5.text = "Why are you here?";
    question5.options.push(...[
      <QuestionOption>{ label: 'Thought it was Ceti Alpha 6', value: 1 },
      <QuestionOption>{ label: 'No Reason', value: 2 }
    ]);

    this.questionaire.questionSections
      .push(<QuestionSection>{ heading: 'Intro Questions', questions: [ question1, question2 ] });

    this.questionaire.questionSections
      .push(<QuestionSection>{ heading: 'Standard Questions', questions: [ question3, question4, question5 ] });
  }
}
