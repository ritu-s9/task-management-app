import { Component } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent {
  dialogData: any;
  constructor(public ref : DynamicDialogRef,public config: DynamicDialogConfig){
    this.dialogData = this.config.data.rawData;
  }

}
