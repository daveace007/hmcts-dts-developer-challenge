
import { NavLink } from "react-router-dom";
import * as Routes from "../../../Routes";


export const TaskPageNavigationBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-light'>
            <div className='container-fluid'>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown'
                    aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link active' aria-current='page' to={Routes.TASKS_PAGE}>All Tasks</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link active' aria-current='page' to={Routes.NEW_TASK_PAGE}>New Task</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to={Routes.CURRENT_TASK_PAGE}>Task</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to={Routes.MODIFIABLE_TASK_PAGE}>Modify Task</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}