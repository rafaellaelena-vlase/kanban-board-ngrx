import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnWithCards } from '../../models/board.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-column',
  standalone: false,
  templateUrl: './column.html',
  styleUrl: './column.scss'
})
export class Column {
  @Input() column: ColumnWithCards;
  @Output() addCard = new EventEmitter<string>();
  @Output() moveCard = new EventEmitter<{cardId: string; fromColumnId: string; fromIndex: number}>();

  isAddingCard = false;
  newCardText = new FormControl('', { nonNullable: true , validators: [Validators.required] });

  onAddCard() {
    if (this.newCardText.invalid) {
      return;
    }

    this.addCard.emit(this.newCardText.value.trim());
    this.newCardText.reset();
    this.isAddingCard = false;
  }

  onMoveCard(cardId: string, fromColumnId: string, fromIndex: number) {
    this.moveCard.emit({cardId, fromColumnId, fromIndex});
  }
}
