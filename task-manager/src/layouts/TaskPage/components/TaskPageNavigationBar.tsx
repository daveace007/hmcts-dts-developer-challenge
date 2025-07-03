
import { NavLink } from "react-router-dom";
import * as Routes from "../../../Routes";
import { useLocation } from "react-router-dom";




export const TaskPageNavigationBar = () => {
    
    const currentLocation = useLocation();
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
                            <NavLink className='nav-link' aria-current='page' to={Routes.TASKS_PAGE}>All Tasks</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link active' to={`${currentLocation.pathname}`}>Task</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}