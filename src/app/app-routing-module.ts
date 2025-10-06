import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardPage } from './features/kanban-board/pages/board-page/board-page';

const routes: Routes = [
  {
    path: 'board',
    loadChildren: () => import('./features/kanban-board/kanban-board-module').then(m => m.KanbanBoardModule)
  },
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
