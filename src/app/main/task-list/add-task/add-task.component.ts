import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/common/interfaces/tasks.model';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ManageTaskService } from 'src/app/common/services/manage-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  formIdentityFlagButton: string ='';
  dialogData: any;
addTaskForm!:FormGroup;
private _formBuilder = inject(FormBuilder);
private _managetaskService = inject(ManageTaskService)
constructor(public ref : DynamicDialogRef,public config: DynamicDialogConfig){
  this.addTaskForm = this._formBuilder.group({
    id: [],
    taskName: ['', Validators.required],
    taskDescription: ['', Validators.required],
    completed: [],
  });
  this.formIdentityFlagButton = this.config.data.formIdentityFlagButton;
    this.dialogData = this.config.data.rawdata;

    if(this.dialogData)
      {
        this.addTaskForm.controls['taskName'].setValue(this.dialogData.taskName);
        this.addTaskForm.controls['taskDescription'].setValue(this.dialogData.taskDescription);
      }
}

ngOnInit(): void {
  
}

submitCreatedTaskData(){
  if(!this.dialogData){
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
  else{
    if(!this.addTaskForm.valid){
      this.markFormGroupTouched(this.addTaskForm);
    }else{
      const editedTask: Task = {
        id: this.dialogData.id,
        taskName: this.addTaskForm.get('taskName')?.value,
        taskDescription: this.addTaskForm.get('taskDescription')?.value,
        completed: false,
      };
      this.ref.close(editedTask);
      
    }
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
