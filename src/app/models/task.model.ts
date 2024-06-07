import { ItemReorderEventDetail } from "@ionic/angular"

export interface Task{
    id: string,
    title: string,
    description: string,
    items: Item[]
}
export interface Item{
    name: string,
    complete: boolean
}