import { useEffect, useState } from "react"
import TaskModel from "../../../model/TaskModel"
import * as Routes from '../../../Routes';
import { TaskPageNavigationBar } from "./TaskPageNavigationBar";
import { Alert } from "../../utils/Alert";
import { validateForm } from "../../utils/FormValidation";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


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
            } else {
                setMessage("Task successfully scheduled")
                setSuccessAlert(true);
                setErrorAlert(false);
            }
        } catch (error: any) {
            setMessage(error.message);
            setErrorAlert(true);
            setSuccessAlert(false);
        }
    };

    useEffect(() => {
        validateForm();
    }, []);

    return (
        <>
            <TaskPageNavigationBar />
            <div className='vw-95 p-3'>
                <div className='p-3'>
                    <div className='card-body'>
                        <h5 className='card-title display-5 fw-bolder'>Schedule a task</h5>
                        <form className='needs-validation' onSubmit={handleSubmit} noValidate>
                            <div className='row border rounded shadow-sm d-flex justify-content-center mb-3 p-3'>
                                <div className='mb-3 mx-3 col-sm-10 col-md-5 col-lg-5'>
                                    <div className='mb-3'>
                                        <label className='form-label' htmlFor="task-title" style={{fontWeight:'bold'}}>Title:</label>
                                        <input id='task-title' className='form-control' type="text" placeholder="Title"
                                            name='title' value={task.title} onChange={handleTextChangeEvent} required />
                                        <div className='invalid-feedback'>Please provide valid title</div>
                                    </div>
                                    <div className='mb-3 mx-0'>
                                        <div className='mb-3'>
                                            <label className='form-label' htmlFor='task-status' style={{fontWeight:'bold'}}>Status:</label>
                                            <select className='form-select' aria-label='select status' name='status'
                                                value={task.status} onChange={handleTextChangeEvent} required>
                                                <option value={''}>Select status</option>
                                                {options.map((option, index) => <option value={option} key={index}>{option}</option>)}
                                            </select>
                                            <div className='invalid-feedback'>Please select valid status</div>
                                        </div>
                                    </div>
                                    <div className='mb-3 mx-0'>
                                        <div className='mb-3'>
                                            <label className='form-label' htmlFor='task-datetime' style={{fontWeight:'bold'}}>Due Date/Time:</label>
                                            <br />
                                            <DatePicker
                                                id='task-datetime'
                                                name="dueDateTime"
                                                selected={task.dueDateTime}
                                                onChange={date => setTask(
                                                    prev => new TaskModel(
                                                        prev.id,
                                                        prev.title,
                                                        prev.description,
                                                        prev.status,
                                                        date ?? prev.dueDateTime
                                                    )
                                                )}
                                                isClearable
                                                className="form-control"
                                                placeholderText="Select due date time"
                                                showTimeSelect
                                                dateFormat="dd-MM-yyyy HH:mm:ss"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-3 mx-0 col-sm-10 col-md-5 col-lg-5'>
                                    <label className='form-label' htmlFor='task-description' style={{fontWeight:'bold'}}>Description:</label>
                                    <textarea id='task-description' className='form-control' rows={10} placeholder='Description'
                                        name='description' value={task.description} onChange={handleTextChangeEvent} required />
                                    <div className='invalid-feedback'>Please provide valid description</div>
                                </div>
                            </div>
                            <button className='btn bg-dark text-light' type='submit'>Schedule</button>
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
        </>
    )
}

