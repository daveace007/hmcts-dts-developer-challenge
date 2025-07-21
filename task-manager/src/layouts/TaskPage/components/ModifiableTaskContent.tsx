import { useEffect, useState } from "react";
import TaskModel from "../../../model/TaskModel";
import { BASE_URL } from "../../../Routes";
import { useParams } from "react-router-dom";
import { Alert } from "../../utils/Alert";

export const ModifiableTaskContent: React.FC<{ task: TaskModel }> = (props) => {

    const [task, setTask] = useState<TaskModel>(props.task);

    const [message, setMessage] = useState('');

    const [selected, setSelected] = useState(task.status);

    const options = ["To do", "In Progress", "Completed", "On Hold", "Cancelled", "Pending",
        "Reviewing", "Failed", "Deferred"];

    const { id } = useParams<{ id: string }>();

    const [successAlert, setSuccessAlert] = useState(false);

    const [errorAlert, setErrorAlert] = useState(false);

    useEffect(() => {
        if (task) setTask(task);
    }, [task]);

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
        const url = `${BASE_URL}/${id}`;
        e.preventDefault();
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.Message);
            }
            setMessage("Task successfully modified")
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
        <div className='vw-100 p-3'>
            <div className='card p-5'>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3 card shadow-sm p-3'>
                            <label className='form-label' htmlFor="task-title">Title:</label>
                            <input id='task-title' className='form-control' type="text"
                                name='title' value={task.title} onChange={handleTextChangeEvent} required placeholder="Title" />
                        </div>
                        <div className='mb-3 card shadow-sm p-3'>
                            <label className='form-label' htmlFor='task-description'>Description:</label>
                            <textarea id='task-description' className='form-control' rows={10} name='description'
                                value={task.description} onChange={handleTextChangeEvent} placeholder="Description" />
                        </div>
                        <div className='row mb-3 mx-0 p-3 border rounded shadow-sm'>
                            <div className='mb-3 col-sm-9 col-md-5 col-lg-5'>
                                <label className='form-label' htmlFor='task-status'>Status:</label>
                                <select className='form-select' aria-label='select status' name='status'
                                    value={task.status} onChange={handleTextChangeEvent}>
                                    {
                                        options.map((option, index) => <option value={option} key={index}>{option}</option>)
                                    }
                                </select>
                            </div>

                            <div className='mb-3 col-sm-9 col-md-5 col-lg-5'>
                                <label className='form-label' htmlFor='task-datetime'>Due Date / Time</label>
                                <input id='task-datetime' className='form-control' type='datetime-local'
                                    name='dueDateTime' value={new Date(task.dueDateTime).toISOString().slice(0, 16)}
                                    onChange={handleTextChangeEvent} required />
                            </div>
                        </div>
                        <button className='btn bg-dark text-light' type='submit'>Modify</button>
                        {/* alert user */}
                        {
                            successAlert &&
                            <Alert background={'bg-success'} message={message} setIsVisible={() => setSuccessAlert(false)} />
                        }
                        {
                            errorAlert &&
                            <Alert background={'bg-danger'} message={message} setIsVisible={() => (setErrorAlert(false))} />

                        }
                    </form>
                </div>
            </div>
        </div>
    );
} 
