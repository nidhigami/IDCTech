import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TrainingService } from '../training.service';
import { Training } from '../training';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  dataSaved = false;
  trainingForm: any;
  allTrainings: Observable<Training[]>;
  trainingIdUpdate = null;
  massage = null;

  constructor(private formbulider: FormBuilder, private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainingForm = this.formbulider.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      
    });
    
  }
  
  onFormSubmit() {
    this.dataSaved = false;
    const training = this.trainingForm.value;
    this.CreateTraining(training);
    
  }
  
  CreateTraining(training: Training) {
    if (this.trainingIdUpdate == null) {
      this.trainingService.createTraining(training).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = 'Record saved Successfully';
          
          
        }
      );
    } 
  }
 
 
  
}
