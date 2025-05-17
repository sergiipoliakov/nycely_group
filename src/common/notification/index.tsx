import notification, { ToastOptions } from 'react-hot-toast';

const Notification = (props: {type: string, message: string, config?: ToastOptions}): void => {
    const { type, message, config } = props;
    (notification as any)[type](message, {
        position: 'bottom-right',
        duration: 4000,
        style: {
            padding: '16px 24px'
        },
        ...config
    } as any);
  };
  
export default Notification;
