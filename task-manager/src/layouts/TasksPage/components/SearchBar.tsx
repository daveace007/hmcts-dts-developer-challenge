
export const SearchBar = () => {
    return (
        <div className='d-flex flex-row bg-dark p-3'>
            {/* search input */}
            <div className='input-group mb-1'>
                <input className='form-control' type="text" style={{fontSize:'1.5em'}} placeholder='Search by title' />
                <span className='input-group-text'>
                    <i className='bi bi-search'></i>
                </span>
            </div>
            {/* dropdown button */}
            <div className='dropdown'>
                <button className='btn btn-success dropdown-toggle' type='button' id='dropdownMenuButton1' style={{fontSize:'1.5em'}} data-bs-toggle='dropdown' aria-expanded='false'>
                    Status
                </button>
                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                    <li><a className='dropdown-item' href="#">To do</a></li>
                    <li><a className='dropdown-item' href="#">In Progress</a></li>
                    <li><a className='dropdown-item' href="#">Completed</a></li>
                    <li><a className='dropdown-item' href="#">On Hold</a></li>
                    <li><a className='dropdown-item' href="#">Cancelled</a></li>
                    <li><a className='dropdown-item' href="#">Pending</a></li>
                    <li><a className='dropdown-item' href="#">Reviewing</a></li>
                    <li><a className='dropdown-item' href="#">Failed</a></li>
                    <li><a className='dropdown-item' href="#">Deffered</a></li>
                </ul>
            </div>
        </div>

    );
}