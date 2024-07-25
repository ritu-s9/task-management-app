import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DividerModule } from 'primeng/divider';
const modules:any = [
  PanelModule,
  ButtonModule,
  InputTextareaModule,
  DividerModule,
  MenubarModule,
  CardModule,
  TableModule,
  ConfirmPopupModule,
  ConfirmDialogModule,
  ToastModule,
  MessagesModule,
  TooltipModule,
  DynamicDialogModule,
  PasswordModule,
  InputTextModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports:[
    ...modules
  ]
})
export class PrimengSharedModule { }
