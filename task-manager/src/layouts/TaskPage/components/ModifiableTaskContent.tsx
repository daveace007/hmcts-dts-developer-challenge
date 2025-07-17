import TaskModel from "../../../model/TaskModel";

export const ModifiableTaskContent: React.FC<{ task: TaskModel }> = (props) => {
    return (
        <div className='vw-100 p-3'>
            <div className='card p-5'>
                <div className='card-body'>
                    <form>
                        <div className='mb-3 card shadow-sm p-3'>
                            <label className='form-label' htmlFor="task-title">Title:</label>
                            <input id='task-title' className='form-control' type="text" value={props.task.title} />
                        </div>
                        <div className='mb-3 card shadow-sm p-3'>
                            <label className='form-label' htmlFor='task-description'>Description:</label>
                            <textarea id='task-description' className='form-control' rows={10}>{props.task.description}</textarea>
                        </div>
                        <div className='row mb-3 mx-0 p-3 border rounded shadow-sm'>
                            <div className='mb-3 col-sm-9 col-md-5 col-lg-5'>
                                <label className='form-label' htmlFor='task-status'>Status:</label>
                                <select className='form-select' aria-label='select status'>
                                    <option selected>{props.task.status}</option>
                                    <option value='To do'>To do</option>
                                    <option value='In Progress'>In Progress</option>
                                    <option value='Completed'>Completed</option>
                                    <option value='On Hold'>On Hold</option>
                                    <option value='Cancelled'>Cancelled</option>
                                    <option value='Pending'>Pending</option>
                                    <option value='Reviewing'>Reviewing</option>
                                    <option value='Failed'>Failed</option>
                                    <option value='Deffered'>Deffered</option>
                                </select>
                            </div>

                            <div className='mb-3 col-sm-9 col-md-5 col-lg-5'>
                                <label className='form-label' htmlFor='task-datetime'>Due Date/Time</label>
                                <input id='task-datetime' className='form-control' type='datetime-local' value={props.task.dueDateTime.toString()} />
                            </div>
                        </div>
                        <button className='btn bg-dark text-light' type='submit'>Modify</button>
                    </form>
                </div>
            </div>
        </div>
    );
} 
