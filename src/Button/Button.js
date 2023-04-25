import css from './Button.module.css';

const Button = ({children, bgColor, width='20px', height='10px',styles, ...other}) => {
    return (
        <div className={css.Button} style={{backgroundColor:bgColor, width:width, height:height, ...styles}} {...other}>
            {children}
        </div>
    );
};

export {Button};
