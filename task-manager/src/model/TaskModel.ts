
import LocalDateTime from 'ts-time/LocalDateTime';


class TaskModel{

    id:number;
    title: string;
    description: string;
    status:string;
    dueDateTime:Date;

    constructor(
        id:number, 
        title:string,
        description:string,
        status:string, 
        dueDateTime:Date){

        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.dueDateTime = dueDateTime;

    }

}

export default TaskModel;