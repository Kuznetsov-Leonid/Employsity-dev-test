import Fade from 'react-reveal/Fade';


export const AnimBottom = ({children}) => {
    return(
        <>
            <Fade bottom>
                {children}
            </Fade>
        </>
    );
}
