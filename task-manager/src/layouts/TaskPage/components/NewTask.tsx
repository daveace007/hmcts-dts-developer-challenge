import { useState } from "react"
import TaskModel from "../../../model/TaskModel"
import * as Routes from '../../../Routes';
import { TaskPageNavigationBar } from "./TaskPageNavigationBar";


export const NewTask: React.FC = () => {

    const [task, setTask] = useState<TaskModel>(
        new TaskModel(
            0,
            '',
            '',
            '',
            new Date()
        )
    );

    const [message, setMessage] = useState('');

    const options = ["To do", "In Progress", "Completed", "On Hold", "Cancelled", "Pending", "Reviewing", "Failed", "Deferred"];

    const [successAlert, setSuccessAlert] = useState(false);

    const [errorAlert, setErrorAlert] = useState(false);

    const handleTextChangeEvent = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTask(prev => new TaskModel(
            name === 'id' ? parseInt(value, 10) : prev.id,
            name === 'title' ? value : prev.title,
            name === 'description' ? value : prev.description,
            name === 'status' ? value : prev.status,
            name === 'dueDateTime' ? new Date(value) : prev.dueDateTime

        ));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(Routes.BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            });

            if (response.status !== 201) {
                const result = await response.json();
                throw new Error(result.Message);
            }
            setMessage("Task successfully scheduled")
            setSuccessAlert(true);
            setErrorAlert(false);
        } catch (error: any) {
            console.log(error);
            setMessage(error.message);
            setErrorAlert(true);
            setSuccessAlert(false);
        }
    };

    return (
        <>
        <TaskPageNavigationBar/>
        <div className='vw-100 p-3'>
            <div className='card p-5'>
                <div className='card-body'>
                    <h5 className='card-title display-5 fw-bolder'>Schedule a task</h5>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3 card shadow-sm p-3'>
                            <label className='form-label' htmlFor="task-title">Title:</label>
                            <input id='task-title' className='form-control' type="text" placeholder="Title"
                                name='title' value={task.title} onChange={handleTextChangeEvent} required />
                        </div>
                        <div className='mb-3 card shadow-sm p-3'>
                            <label className='form-label' htmlFor='task-description'>Description:</label>
                            <textarea id='task-description' className='form-control' rows={10} placeholder='Description'
                                name='description' value={task.description} onChange={handleTextChangeEvent} />
                        </div>
                        <div className='row mb-3 mx-0 p-3 border rounded shadow-sm'>
                            <div className='mb-3 col-sm-9 col-md-5 col-lg-5'>
                                <label className='form-label' htmlFor='task-status'>Status:</label>
                                <select className='form-select' aria-label='select status' name='status'
                                    value={task.status} onChange={handleTextChangeEvent} required>
                                    <option defaultValue={'Select status'}>Select status</option>
                                    {options.map((option, index) => <option value={option} key={index}>{option}</option>)}
                                </select>
                            </div>

                            <div className='mb-3 col-sm-9 col-md-5 col-lg-5'>
                                <label className='form-label' htmlFor='task-datetime'>Due Date/Time</label>
                                <input id='task-datetime' className='form-control' type='datetime-local' name='dueDateTime'
                                    value={task.dueDateTime.toISOString().slice(0, 16)} onChange={handleTextChangeEvent} required />
                            </div>
                        </div>
                        <button className='btn bg-dark text-light' type='submit'>Schedule</button>
                        {/* alert user */}
                        {
                            successAlert &&
                            (<div className='alert alert-success alert-dismissible fade show mt-3' role='alert'>
                                <strong>{message}</strong>
                                <button
                                    type='button'
                                    className='btn-close' data-bs-dismiss='alert'
                                    aria-label='Close'
                                    onClick={() => (setSuccessAlert(false))}></button>
                            </div>)
                        }
                        {
                            errorAlert &&
                            (<div className='alert alert-danger alert-dismissible fade show mt-3' role='alert'>
                                <strong>{message}</strong>
                                <button
                                    type='button'
                                    className='btn-close' data-bs-dismiss='alert'
                                    aria-label='Close'
                                    onClick={() => (setErrorAlert(false))}></button>
                            </div>)
                        }
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

