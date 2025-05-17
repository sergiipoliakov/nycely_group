"use client"

// Types
import { ButtonType } from './types';

// Styles
import styles from './index.module.sass';

const Button = (props: ButtonType) => {
    const {
        id,
        type = 'primary',
        htmlType = 'button',
        children,
        small,
        classNames: {
            button = '',
            wrapper = ''
          } = {},
        disabled,
        onClick = () => null,
        style
    } = props;

    return (
        <div className={`relative--core z--1 ${wrapper || ''}`}>
            <button
                id={id}
                style={style}
                className={`${styles.button} ${styles[`button--${type}`] || ''} ${small ? styles[`button--small`] : ''} ${disabled ? styles['button--disabled'] : ''} fl fl--align-c fl--justify-c font--400 ${button || ''}`}
                type={htmlType}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
