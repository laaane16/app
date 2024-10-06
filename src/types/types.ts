export interface ICard {
    id: string;
    urlImage: string;
    title: string;
    price: number;
    metall?: string;
    type?: string;
    available?: boolean;
    body?: string;
}

export interface ICardFromCart extends ICard{
    count: number;
    size: string;
}

export interface IFilter {
    value: boolean | string;
    title: string;
}

export interface IAccordeon{
    id: number;
    isOpen: boolean;
    title: string;
    body: string;
}

export interface ISearchFilter{
    type: string;
    available: boolean;
    sortValue: string
}

export enum Status{
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
    DEFAULT = 'default'
}