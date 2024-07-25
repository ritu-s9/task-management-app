import { Component, inject, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Task } from 'src/app/common/interfaces/tasks.model';
import { ManageTaskService } from 'src/app/common/services/manage-task.service';
import { Message } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddTaskComponent } from './add-task/add-task.component';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [ConfirmationService, MessageService,DialogService],
})
export class TaskListComponent implements OnInit {
  ref! : DynamicDialogRef;
  tasksList: Task[] = [];
  messages: Message[] = [];
  messageShowingFlag: boolean = false;
  private _manageTasksService = inject(ManageTaskService);
  private _confirmService = inject(ConfirmationService);
  private _dialogService = inject(DialogService);

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this._manageTasksService.getTasks().subscribe({
      next: (res) => {
        this.tasksList = res;
      },
      error: (err) => {},
    });
  }
  deleteTask(id: number) {
    if (id) {
      this._confirmService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this._manageTasksService.deleteTasks(id).subscribe({
            next: (res) => {
              this.getAllTasks();
              this.messageShowingFlag = true;
              this.messages = [
                {
                  severity: 'success',
                  summary: 'Success',
                  detail: 'Successfully deleted',
                },
              ];
              setTimeout(() => {
                this.messageShowingFlag = false;
              }, 2000);
              this._confirmService.close();
            },
            error: (err) => {
              // Handle error if needed
            },
          });
        },
        reject: () => {
          this.messageShowingFlag = true;
          this.messages = [
            { severity: 'info', summary: 'Info', detail: 'Operation Cancelled' },
          ];
          setTimeout(() => {
            this.messageShowingFlag = false;
          }, 2000);
          this._confirmService.close(); 
        },
      });
    }
  }
  

  addTask(){
    this.ref = this._dialogService.open(AddTaskComponent,{
      header :'Add Task',
      width: '50%',
      baseZIndex: 10000,
      maximizable : true,
      resizable: true,
      draggable:true
    });

    this.ref.onClose.subscribe((task: Task) => {
      if (task) {
        this._manageTasksService.addTasks(task).subscribe({
          next: (res) => {
            this.getAllTasks();
            this.messageShowingFlag = true;
            this.messages = [
              {
                severity: 'success',
                summary: 'Success',
                detail: 'Successfully added',
              },
            ];
            setTimeout(() => {
              this.messageShowingFlag = false;
            }, 2000);
           
          },
          error: (err) => {
            // Handle error if needed
          },
        });
      }
  });
  }
}
