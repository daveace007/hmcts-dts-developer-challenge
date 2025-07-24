
type FabProperties = {
    background:string,
    textColor: string,
    label: string,
    actionEvent:Function
};

export const Fab:React.FC<FabProperties> = (props) => {

    return (
        <button className={`btn ${props.background} ${props.textColor} rounded-circle p-0 d-block d-lg-none shadow`}
            onClick={()=>props.actionEvent()}
            style={{
                position: 'fixed',
                bottom: 'clamp(172px, 20vw, 256px)',
                right: 'clamp(16px, 5vw, 32px)',
                width: 'clamp(48px, 10vw, 64px)',
                height: 'clamp(48px, 10vw, 64px)',
                fontSize: 'clamp(20px, 5vw, 28px)',
                zIndex: 1050
            }}>
            {props.label}
        </button>
    );
}
