
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
                            <a className='nav-link active' aria-current='page' href='#'>New Task</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Task</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Modify Task</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}