
export const Header = () =>{
    return (
        <header className='bg-dark text-light p-3 text-center d-flex align-items-center justify-items-center' style={{height:'20vh', position: 'sticky', top:0, zIndex:1020}}>
            <div className='container'>
                <h1 className='display-5'>Task Manager</h1>
            </div>
        </header>
    );
}