import { createReducer } from "@ngrx/store";
import { Board } from "../models/board.model";

export const initialBoardState: Board = {
    cards: {
        'card-1': { id: 'card-1', text: 'Setup Angular Project' },
        'card-2': { id: 'card-2', text: 'Setup NgRx' },
        'card-3': { id: 'card-3', text: 'Implement Reducer' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            cardIds: ['card-2', 'card-3']
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            cardIds: ['card-1']
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            cardIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
}

export const boardReducer = createReducer(
    initialBoardState
);