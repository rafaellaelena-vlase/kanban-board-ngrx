import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnWithCards } from '../../models/board.model';
import { Store } from '@ngrx/store';
import { selectColumnsWithCards } from '../../store/board.selectors';
import * as BoardActions from '../../store/board.actions';

@Component({
  selector: 'app-board-page',
  standalone: false,
  templateUrl: './board-page.html',
  styleUrl: './board-page.scss'
})
export class BoardPage implements OnInit{
  columns$: Observable<ColumnWithCards[]>;

  private store = inject(Store);
  private columns: ColumnWithCards[] = [];

  ngOnInit(): void {
    this.columns$ = this.store.select(selectColumnsWithCards);
    this.columns$.subscribe(cols => this.columns = cols);
  }

  onAddCard(text: string, columnId: string): void {
    this.store.dispatch(BoardActions.addCard({ text, columnId }));
  }

  onMovedCard(event: {cardId: string, fromColumnId: string, fromIndex: number}): void {
    const fromColumnIndex = this.columns.findIndex(col => col.id === event.fromColumnId);
    const toColumnIndex = (fromColumnIndex + 1) % this.columns.length;
    const toColumn = this.columns[toColumnIndex];

    this.store.dispatch(BoardActions.moveCard({
      cardId: event.cardId,
      fromColumnId: event.fromColumnId,
      toColumnId: toColumn.id,
      toIndex: 0
    }));
  }
}
