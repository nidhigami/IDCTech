import { Component } from '@angular/core';
import { TrainingService } from '../training.service';
import { Training } from '../training';


@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.css']
})
export class TrainingFormComponent {

  model = new Training();
  submitted = false;
  successful = false;
  message = "Something went wrong! Please try again!!";

  constructor(private trainingService: TrainingService) { }

  onSubmit() {
    this.CreateTraining(this.model);
  }

  CreateTraining(training: Training) {
    this.trainingService.createTraining(training).subscribe(
      (data) => {
        this.submitted = true;
        if (data.hasError == false) {
          this.successful = true;
        }
        this.message = data.message;
      }
    );
  }

  reset()
  {
    this.model = new Training();
    this.submitted = false;
    this.successful = false;
  }
}

