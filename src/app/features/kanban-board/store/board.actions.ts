import { createAction, props } from "@ngrx/store";

export const addCard = createAction(
    '[Board] Add Card',
    props<{ text: string; columnId: string }>()
);

export const moveCard = createAction(
    '[Board] Move Card',
    props<{ cardId: string; fromColumnId: string; toColumnId: string; toIndex: number }>()
);