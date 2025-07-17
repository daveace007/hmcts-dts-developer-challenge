import { Link } from "react-router-dom";
import * as Routes from "../../../Routes"
import TaskModel from "../../../model/TaskModel";
import { useState } from "react";
import { Dialog } from "../../utils/Dialog";

export const TaskItem: React.FC<{ index: number, task: TaskModel }> = (props) => {

    const [httpError, setHttpError] = useState(null);
    const dialogId = 'task-delete-dialog';
    const dialogTitle = 'Delete Task';
    const dialogBody = 'Are sure you want to delete this task item?';

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
            <Dialog
                id={dialogId}
                title={dialogTitle}
                body={dialogBody}
                action={() => onDeleteClick(props.task.id)}
            />
        </>
    );

}