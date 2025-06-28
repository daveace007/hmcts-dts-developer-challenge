
export const ModifiableTask  = () =>{
    return (
        <div className='vw-100 p-3'>
            <div className='card p-5'>
                <div className='card-body'>
                    <h5 className='card-title display-5 fw-bolder'>Modify Task</h5>
                    <form>
                        <div className='mb-3 card shadow-sm p-3'>
                            <label className='form-label' htmlFor="task-title">Title:</label>
                            <input id='task-title' className='form-control' type="text" value={'Dev Ops'}/>
                        </div>
                        <div className='mb-3 card shadow-sm p-3'>
                            <label className='form-label' htmlFor='task-description'>Description:</label>
                            <textarea id='task-description' className='form-control' rows={10}>
                                Automating the build, test, and deployment process using tools like Jenkins,
                        GitHub Actions, or GitLab CI to ensure fast and reliable software releases.
                        Defining and provisioning infrastructure using code with tools like Terraform,
                        Ansible, or AWS CloudFormation — making environments reproducible and version-controlled.
                            </textarea>
                        </div>
                        <div className='row mb-3 mx-0 p-3 border rounded shadow-sm'>
                            <div className='mb-3 col-sm-9 col-md-5 col-lg-5'>
                                <label className='form-label' htmlFor='task-status'>Status:</label>
                                <select className='form-select' aria-label='select status'>
                                    <option selected>Select status</option>
                                    <option value='To do' selected>To do</option>
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
                                <input id='task-datetime' className='form-control' type='datetime-local' value={'2025-06-25 01:30:00'}/>
                            </div>
                        </div>
                        <button className='btn bg-dark text-light' type='submit'>Modify</button>
                    </form>
                </div>
            </div>
        </div>
    );
} 