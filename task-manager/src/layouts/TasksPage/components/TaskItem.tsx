
export const TaskItem = () =>{

    return (
        <div className='d-flex flex-row bg-light text-dark p-2 mb-1'>

            <span className="rounded-circle bg-dark text-light d-flex justify-content-center align-items-center" style={{width: '2em', height: '2em', fontSize: '1em'}}>
                {1}
            </span>
            <span className='flex-grow-1 text-center'>Dev Ops Task</span>
            <div className='d-flex flex-row gap-1'>
                <button className='btn btn-primary' type='button' >More</button>
                <button className='btn btn-danger' type='button'>Delete</button>
            </div>

        </div>
    );
    
}