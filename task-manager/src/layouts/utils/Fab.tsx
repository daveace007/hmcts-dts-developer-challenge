import { useHistory } from "react-router-dom";
import * as Routes from '../../Routes'

export const Fab = () => {

    const history = useHistory();

    return (
        <button className='btn bg-dark text-light rounded-circle p-0 d-block d-lg-none shadow'
        onClick ={()=> history.push(`${Routes.NEW_TASK}`)}
            style={{
                position: 'fixed',
                bottom: 'clamp(172px, 20vw, 256px)',
                right: 'clamp(16px, 5vw, 32px)',
                width: 'clamp(48px, 10vw, 64px)',
                height: 'clamp(48px, 10vw, 64px)',
                fontSize: 'clamp(20px, 5vw, 28px)',
                zIndex: 1050
            }}>
            +
        </button>
    );
}
