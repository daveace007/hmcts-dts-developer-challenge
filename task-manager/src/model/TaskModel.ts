
import LocalDateTime from 'ts-time/LocalDateTime';


class TaskModel{

    id:number;
    title: string;
    description?: string;
    status:string;
    dueDateTime:LocalDateTime;

    constructor(
        id:number, 
        title:string,
        description:string,
        status:string, 
        dueDateTime:LocalDateTime){

        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.dueDateTime = dueDateTime;

    }
}

export default TaskModel;