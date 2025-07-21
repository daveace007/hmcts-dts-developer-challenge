
type AlertProperties = {
    background: string,
    message: string,
    setIsVisible: Function
}

export const Alert: React.FC<AlertProperties> = (props) => {
    return (
        <div className='position-fixed top-50 start-50 translate-middle-x p-3 rounded' style={{ zIndex: 1050 }}>
            <div className={`'toast align-items-center text-white ${props.background} border-0 show p-3 mt-3'`} role='alert' aria-live='assertive' aria-atomic='true' >
                <div className='d-flex'>
                    <div className='toast-body'>
                        {props.message}
                    </div>
                    <button type='button' className='btn-close btn-close-white me-2 m-auto' data-bs-dismiss='toast' aria-label='Close' onClick={() => props.setIsVisible(false)}></button>
                </div>
            </div>
        </div>
    );
};