
export const PaginationBar = () => {
  return (

    <nav aria-label='Task pages'>
      <ul className='pagination'>
        <li className='page-item'>
          <span className='page-link'>Previous</span>
        </li>
        <li className='page-item active' aria-current='page'>
          <a className='page-link' href='#'>1</a>
        </li>
        <li className='page-item'>
          <span className="page-link">2</span>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>3</a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>Next</a>
        </li>
      </ul>
    </nav>

  );
}