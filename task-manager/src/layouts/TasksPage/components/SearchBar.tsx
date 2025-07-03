import { ChangeEvent } from "react";


type SearchBarEvents = {
    onSearchChange: (value: string) => void;
    onItemSelect: (value: string) => void;
};

export const SearchBar: React.FC<SearchBarEvents> = ({ onSearchChange, onItemSelect }) => {

    // handle input change on the text input field
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value);

    // handle select event on the drop down menu
    const handleItemSelect = (value: string) => onItemSelect(value);

    return (
        <div className='d-flex flex-row bg-dark p-3'>
            {/* search input */}
            <div className='input-group mb-1'>
                <input className='form-control' type="text" style={{ fontSize: '1.1em' }} placeholder='Search by title' onChange={handleInputChange} />
                <span className='input-group-text'>
                    <i className='bi bi-search'></i>
                </span>
            </div>
            {/* dropdown button */}
            <div className='dropdown'>
                <button className='btn btn-success dropdown-toggle' type='button' id='dropdownMenuButton1' style={{ fontSize: '1.1em' }} data-bs-toggle='dropdown' aria-expanded='false'>
                    Status
                </button>
                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                    <li><a className='dropdown-item' href="#" onClick={() =>handleItemSelect('To do')}>To do</a></li>
                    <li><a className='dropdown-item' href="#" onClick={() =>handleItemSelect('In Progress')}>In Progress</a></li>
                    <li><a className='dropdown-item' href="#" onClick={() =>handleItemSelect('Completed')}>Completed</a></li>
                    <li><a className='dropdown-item' href="#" onClick={() =>handleItemSelect('On Hold')}>On Hold</a></li>
                    <li><a className='dropdown-item' href="#" onClick={() =>handleItemSelect('Cancelled')}>Cancelled</a></li>
                    <li><a className='dropdown-item' href="#" onClick={() =>handleItemSelect('Pending')}>Pending</a></li>
                    <li><a className='dropdown-item' href="#" onClick={() =>handleItemSelect('Reviewing')}>Reviewing</a></li>
                    <li><a className='dropdown-item' href="#" onClick={() =>handleItemSelect('Failed')}>Failed</a></li>
                    <li><a className='dropdown-item' href="#" onClick={() =>handleItemSelect('Deffered')}>Deffered</a></li>
                </ul>
            </div>
        </div>

    );
}