export interface ICategory{
    available: boolean;
    type: string;
}

export interface FilterState{
    category: ICategory;
    sort: string;
}
