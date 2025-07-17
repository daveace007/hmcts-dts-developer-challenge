import { useHistory } from 'react-router-dom';
import * as Routes from '../../Routes'

export const Header = () =>{

    const history = useHistory()
    return (
        <header className='bg-dark text-light p-3 text-center d-flex align-items-center justify-items-center' style={{height:'20vh', position: 'sticky', top:0, zIndex:1020}}>
            <div className='container'>
                <h1 className='display-5 fw-bold'>Task Manager</h1>
            </div>
            <button className='btn bg-light text-dark fs-4 w-25 fw-bold d-none d-lg-block' onClick={()=> history.push(`${Routes.NEW_TASK}`)}>Schedule Task</button>
        </header>
    );
}