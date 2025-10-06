import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanBoardRoutingModule } from './kanban-board-routing-module';
import { Column } from './components/column/column';
import { BoardPage } from './pages/board-page/board-page';
import { StoreModule } from '@ngrx/store';
import { boardReducer } from './store/board.reducer';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardComponent } from './components/card-component/card-component';


@NgModule({
  declarations: [
    Column,
    BoardPage,
    CardComponent,
  ],
  imports: [
    CommonModule,
    KanbanBoardRoutingModule,
    StoreModule.forFeature('board', boardReducer),
    PanelModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  exports: [
    Column,
    BoardPage,
    CardComponent,
  ]
})
export class KanbanBoardModule { }
