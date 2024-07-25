import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PrimengSharedModule } from '../common/primeng-shared/primeng-shared.module';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './task-list/add-task/add-task.component';


@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengSharedModule
  ]
})
export class MainModule { }
