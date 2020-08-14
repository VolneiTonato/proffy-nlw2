import React, { createContext, useContext, useCallback, useState } from 'react';
import ToastNotification from '@components/ToastNotification';
import { uuid } from 'uuidv4';

interface ToastContextData {
    addToast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(id: string): void;
}

export interface ToastMessage {
    id: string;
    type?: 'success' | 'error' | 'info';
    title: string;
    description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<ToastMessage[]>([]);

    const addToast = useCallback((message: Omit<ToastMessage, 'id'>): void => {
        const id = uuid();

        const toast = {
            id,
            ...message,
        };

        setMessages(prev => [...prev, toast]);
    }, []);

    const removeToast = useCallback(
        (id: string): void => {
            const messagesNew = messages.filter(message => message.id !== id);

            setMessages(messagesNew);
        },
        [messages],
    );

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastNotification messages={messages} />
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);

    if (!context) throw new Error(`useToast not set provider`);

    return context;
};
