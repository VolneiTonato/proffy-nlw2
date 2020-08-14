import React, { useCallback, useEffect } from 'react';
import { ToastMessage, useToast } from '@context/ToastContext';
import {
    FiAlertCircle,
    FiXCircle,
    FiCheckCircle,
    FiInfo,
} from 'react-icons/fi';

import { Container, ContainerMessage } from './styles';

interface ToastProps {
    message: ToastMessage;
    style: any;
}

const icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
    const { removeToast } = useToast();

    const handleRemoveToast = useCallback(
        (id: string) => {
            removeToast(id);
        },
        [removeToast],
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [message, removeToast]);

    return (
        <Container
            style={style}
            hasDescription={!!message.description}
            type={message.type}
        >
            {icons[message.type || 'info']}

            <ContainerMessage>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </ContainerMessage>

            <button onClick={() => handleRemoveToast(message.id)} type="button">
                <FiXCircle size={20} />
            </button>
        </Container>
    );
};

export default Toast;
