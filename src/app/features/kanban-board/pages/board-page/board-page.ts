import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnWithCards } from '../../models/board.model';
import { select, Store } from '@ngrx/store';
import { selectColumnsWithCards } from '../../store/board.selectors';

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
}
