import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/common/interfaces/tasks.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ManageTaskService } from 'src/app/common/services/manage-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
addTaskForm!:FormGroup;
private _formBuilder = inject(FormBuilder);
private _managetaskService = inject(ManageTaskService)
constructor(public ref : DynamicDialogRef){
  this.addTaskForm = this._formBuilder.group({
    id: [],
    taskName: ['', Validators.required],
    taskDescription: ['', Validators.required],
    completed: [],
  });
}

submitCreatedTaskData(){
  
  if(!this.addTaskForm.valid){
    this.markFormGroupTouched(this.addTaskForm);
  }else{
    const newTask: Task = {
      id: Date.now(),
      taskName: this.addTaskForm.get('taskName')?.value,
      taskDescription: this.addTaskForm.get('taskDescription')?.value,
      completed: false,
    };
    this.ref.close(newTask);
    
  }
}

private markFormGroupTouched(formGroup: FormGroup): void {
  for (const i in formGroup.controls) {
    if (formGroup.controls.hasOwnProperty(i)) {
      formGroup.controls[i].markAsDirty();
      formGroup.controls[i].updateValueAndValidity();
    }
  }
}
}
