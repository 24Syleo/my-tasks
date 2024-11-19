export interface IModal {
    name: string;
    open: boolean;
    children: JSX.Element;
    onClose: () => void;
}