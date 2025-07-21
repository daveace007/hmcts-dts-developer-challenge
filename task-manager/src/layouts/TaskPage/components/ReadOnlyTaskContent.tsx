
import { useLocation } from "react-router-dom";
import TaskModel from "../../../model/TaskModel";

export const ReadOnlyTaskContent:React.FC<{task:TaskModel}> = (props) => {
    
    return (
        <div className='vw-100 p-3'>
            <div className='card p-5'>
                <div className='card-body border shadow-sm'>
                    <h5 className='card-title display-5 fw-bolder'>{props.task.title}</h5>
                    <p className='card-text fs-5 fs-sm-5 fs-md-5 fs-lg-5' style={{ minHeight: '40vh'}}>
                        {props.task.description}
                    </p>
                </div>
                <div className='shadow-sm border d-flex flex-column gap-3 px-3 py-5 fs-6 fs-sm-6 fs-md-6 fs-lg-6'>
                    <div className='d-flex flex-row flex-wrap'>
                        <span className='rounded bg-dark text-light p-1'>Status:</span>
                        <span className='p-1 fw-bold'>{props.task.status}</span>
                    </div>
                    <div className='d-flex flex-row flex-wrap'>
                        <span className='rounded bg-dark text-light p-1'>Due Date/Time:</span>
                        <span className='p-1 fw-bold'>{props.task.dueDateTime.toString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}