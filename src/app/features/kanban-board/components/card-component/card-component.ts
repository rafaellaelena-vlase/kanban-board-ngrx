import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../models/board.model';

@Component({
  selector: 'app-card-component',
  standalone: false,
  templateUrl: './card-component.html',
  styleUrl: './card-component.scss'
})
export class CardComponent {
  @Input() card: Card;
  @Output() move = new EventEmitter<void>();
}
