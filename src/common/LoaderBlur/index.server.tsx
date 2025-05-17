import React, { ReactElement } from 'react';

// Styles
import styles from './index.module.sass';

const LoaderBlur = (props: {
    children: ReactElement;
    fetch: boolean;
}) => {
    const { children, fetch } = props;
    return (
        <>
            {fetch ? (
                <>
                    <div className={styles['loader-blur']}>
                        <div className={styles['loader-blur__inner']} />
                    </div>
                    <div className={styles['loader-blur__blur']}>{children}</div>
                </>
            ) : (
                children
            )}
        </>
    );
};

export default LoaderBlur;

