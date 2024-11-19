export interface IInput {
    type: "text" | "date" | "number" | "submit",
    value: string,
    change: (evt?: any) => void,
    placeholder: string,
    name: string

}