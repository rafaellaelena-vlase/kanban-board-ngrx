import { createFeatureSelector, createSelector, select } from "@ngrx/store";
import { Board, ColumnWithCards } from "../models/board.model";

export const selectBoardState = createFeatureSelector<Board>('board');

export const selectAllCards = createSelector(
  selectBoardState,
  (state: Board) => state.cards
);

export const selectAllColumns = createSelector(
  selectBoardState,
  (state: Board) => state.columns
);

export const selectColumnOrder = createSelector(
  selectBoardState, 
  (state: Board) => state.columnOrder
);

export const selectColumnsWithCards = createSelector(
    selectAllColumns,
    selectAllCards,
    selectColumnOrder,
    (columns, cards, columnOrder): ColumnWithCards[] => {
        return columnOrder.map(columnId => {
            const column = columns[columnId];
            const cardsInColumn = column.cardIds.map(cardId => cards[cardId]);
            return {
                ...column,
                cards: cardsInColumn
            };
        });
    }
);