export interface IButton {
    type: "button" | "submit" | "reset",
    click?: (evt: any | undefined) => void,
    title: string,
    size: "small" | "medium" | "large",
    color: "success" | "danger" | "warning" | "primary"
    shadow: boolean
    className?: string
}