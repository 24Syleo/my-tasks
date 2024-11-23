import { IListTask } from '../../interface/Task.interface';

export interface ListTasksProps {
    list: IListTask;
    updateTasks: (tasks: IListTask) => void;
}