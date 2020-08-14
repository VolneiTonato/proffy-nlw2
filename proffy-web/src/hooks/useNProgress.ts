import { useCallback } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

export const useNProgress = () => {
    const handleUseRoute = useCallback(() => {
        NProgress.configure({ showSpinner: false });

        Router.events.on('routeChangeStart', () => NProgress.start());
        Router.events.on('routeChangeComplete', () => NProgress.done());
        Router.events.on('routeChangeError', () => NProgress.done());
    }, []);

    return {
        startProgress: NProgress.start,
        stopProgress: NProgress.done,
        handleProgressRouter: handleUseRoute,
    };
};
