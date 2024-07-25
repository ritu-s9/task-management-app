import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PrimengSharedModule } from '../common/primeng-shared/primeng-shared.module';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './task-list/add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewTaskComponent } from './task-list/view-task/view-task.component';


@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengSharedModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
