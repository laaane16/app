import { Status } from "./../../../types/types";
import { ICard } from "../../../types/types";

export interface CardsState {
    items: ICard[];
    status: Status;
}