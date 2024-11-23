import { ITask } from "../../interface/Task.interface"

export interface ITaskProps {
    task: ITask,
    uniqueKey: number
    deleteTask: (evt: any | undefined) => void,
}