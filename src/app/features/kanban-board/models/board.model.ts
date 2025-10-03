export interface Card {
    id: string;
    text: string;
}

export interface Column {
    id: string;
    title: string;
    cards: Card[];
}

export interface Board {
    cards: {[key: string]: Card};
    columns: {[key: string]: Column};
    columnOrder: string[];
}
