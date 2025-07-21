

export const Dialog:React.FC<{id:string, title:string, body:string, action:Function}> = (props)=>{
    
    return(
        <div id={props.id} className='modal fade' tabIndex={-1}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>{props.title}</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <p>{props.body}</p>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>No</button>
                            <button type='button' className='btn btn-primary bg-dark' data-bs-dismiss='modal' onClick={() => props.action()}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
    );

}