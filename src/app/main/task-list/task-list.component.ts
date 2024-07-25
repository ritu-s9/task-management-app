import { Component, inject, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Task } from 'src/app/common/interfaces/tasks.model';
import { ManageTaskService } from 'src/app/common/services/manage-task.service';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class TaskListComponent implements OnInit {
tasksList:Task[] =[];
messages: Message[] = [];
messageShowingFlag : boolean = false;
private _manageTasksService = inject(ManageTaskService);
private _confirmService = inject(ConfirmationService);
private _messageservice = inject(MessageService);

ngOnInit(): void {
  this.getAllTasks();
 
}

getAllTasks(){
  this._manageTasksService.getTasks().subscribe({
    next: (res) => {
      this.tasksList = res;
    },
    error: (err) => {
      console.log("request not completed")
    }
  })
}
deleteTask(id:number){
  this._confirmService.confirm({
    message: 'Are you sure that you want to proceed?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this._manageTasksService.deleteTasks(id).subscribe(()=>{
        this.getAllTasks();
       this.messageShowingFlag = true;
       this.messages = [{ severity: 'success', summary: 'Success', detail: 'Successfully deleted' }]
       setTimeout(()=>{
        this.messageShowingFlag = false;
       },2000)
      })
    },
    reject: () => {
      this.messageShowingFlag = true;
      this.messages = [{ severity: 'info', summary: 'Info', detail: 'Operation Cancelled' }];
      setTimeout(()=>{
        this.messageShowingFlag = false;
       },2000)
    }
});
  
}
}


