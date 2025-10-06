import { Component, Input } from '@angular/core';
import { ColumnWithCards } from '../../models/board.model';

@Component({
  selector: 'app-column',
  standalone: false,
  templateUrl: './column.html',
  styleUrl: './column.scss'
})
export class Column {
  @Input() column: ColumnWithCards;
}
