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

  ngOnInit(): void {
    this.columns$ = this.store.select(selectColumnsWithCards);
  }

  onAddCard(text: string, columnId: string): void {
    this.store.dispatch(BoardActions.addCard({ text, columnId }));
  }
}
