export interface ITextArea {
    value: string;
    change: (evt?: any) => void;
    placeholder: string;
    name: string;
}