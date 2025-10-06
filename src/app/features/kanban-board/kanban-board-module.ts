import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanBoardRoutingModule } from './kanban-board-routing-module';
import { Column } from './components/column/column';
import { BoardPage } from './pages/board-page/board-page';
import { Store, StoreModule } from '@ngrx/store';
import { boardReducer } from './store/board.reducer';


@NgModule({
  declarations: [
    Column,
    BoardPage
  ],
  imports: [
    CommonModule,
    KanbanBoardRoutingModule,
    StoreModule.forFeature('board', boardReducer),
  ],
  exports: [
    Column,
    BoardPage
  ]
})
export class KanbanBoardModule { }
