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
}
