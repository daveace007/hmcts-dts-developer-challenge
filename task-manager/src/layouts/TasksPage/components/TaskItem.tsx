import { Link } from "react-router-dom";
import * as Routes from "../../../Routes"
import TaskModel from "../../../model/TaskModel";
import { useState } from "react";

export const TaskItem: React.FC<{ index: number, task: TaskModel }> = (props) => {

    const [httpError, setHttpError] = useState(null);

    const onDeleteClick = (id: number) => deleteTaskById(id);

    const deleteTaskById = async (id: number) => {
        const url: string = `${Routes.BASE_URL}/${id}`;
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) throw new Error("Failed to delete task");
        } catch (error: any) {
            setHttpError(error.message)
        }
    }

    return (
        <>
            <div className='card d-flex flex-row bg-light text-dark p-2 mb-1'>

                <span className="rounded-circle bg-dark text-light d-flex justify-content-center align-items-center">
                    <span className="rounded-circle bg-light text-dark d-flex justify-content-center align-items-center" style={{ width: '2em', height: '2em', fontSize: '1em' }}>
                        {props.index + 1}
                    </span>
                </span>
                <span className='flex-grow-1 text-center'>
                    {props.task.title}
                </span>
                <div className='d-flex flex-row gap-1'>
                    <Link className='btn btn-primary' type='button' to={`${Routes.TASKS}${props.task.id}`}>More</Link>
                    <button className='btn btn-danger' type='button' data-bs-toggle='modal' data-bs-target='#task-delete-dialog'>Delete</button>
                </div>

            </div>
            {/* modal - delete confirmation dialog */}
            <div id='task-delete-dialog' className='modal fade' tabIndex={-1}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Delete Task</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <p>Are sure you want to delete this task item?</p>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>No</button>
                            <button type='button' className='btn btn-primary bg-dark' onClick={() => onDeleteClick(props.task.id)}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}