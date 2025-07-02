import { Link } from "react-router-dom";
import * as Routes from "../../../Routes"
import TaskModel from "../../../model/TaskModel";

export const TaskItem:React.FC<{task:TaskModel}> = (props) => {

    return (
        <div className='card d-flex flex-row bg-light text-dark p-2 mb-1'>

            <span className="rounded-circle bg-dark text-light d-flex justify-content-center align-items-center">
                <span className="rounded-circle bg-light text-dark d-flex justify-content-center align-items-center" style={{ width: '2em', height: '2em', fontSize: '1em' }}>
                    {props.task.id}
                </span>
            </span>
            <span className='flex-grow-1 text-center'>
                {props.task.title}
            </span>
            <div className='d-flex flex-row gap-1'>
                <Link className='btn btn-primary' type='button' to={Routes.CURRENT_TASK_PAGE}>More</Link>
                <button className='btn btn-danger' type='button'>Delete</button>
            </div>

        </div>
    );

}