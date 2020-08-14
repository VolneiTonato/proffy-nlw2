import React from 'react';
import { ToastMessage } from '@context/ToastContext';
import { useTransition } from 'react-spring';
import Toast from './Toast';
import { Container } from './styles';

interface ToastNotificationProps {
    messages: ToastMessage[];
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
    messages = [],
}) => {
    const messagesWithTransictions = useTransition(
        messages,
        message => message.id,
        {
            from: { right: '-120%', opacity: 0 },
            enter: { right: '0%', opacity: 1 },
            leave: { right: '-120%', opacity: 0 },
        },
    );
    return (
        <Container>
            {messagesWithTransictions.map(({ item, key, props }) => (
                <Toast key={key} message={item} style={props} />
            ))}
        </Container>
    );
};

export default ToastNotification;
