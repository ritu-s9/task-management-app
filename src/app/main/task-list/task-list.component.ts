import { Component, inject, OnInit } from '@angular/core';
import { Task } from 'src/app/common/interfaces/tasks.model';
import { ManageTaskService } from 'src/app/common/services/manage-task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
tasksList:Task[] =[];

private _manageTasksService = inject(ManageTaskService);

ngOnInit(): void {
  this.getAllTasks();
}

getAllTasks(){
  this._manageTasksService.getTasks().subscribe({
    next: (res) => {
      this.tasksList = res;
      console.log(res)
    },
    error: (err) => {
      console.log("request not completed")
    }
  })
}
}
