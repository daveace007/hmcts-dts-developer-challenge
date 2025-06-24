
export const Footer = () => {
    const currentYear:number = new Date().getFullYear();
    return (
        <footer className='bg-dark text-light text-center text-lg-start mt-auto py-3'>
            <div className='container'>
                <span>
                    &copy;{currentYear} Task Manager App
                </span>
            </div>
        </footer>
    );
}