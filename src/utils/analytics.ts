import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const initGA = (): void => {
    ReactGA.initialize('TU-ID-DE-GA4');
};

export const logPageView = (): void => {
    ReactGA.send({
        page_path: window.location.pathname,
        page_location: window.location.href,
        page_title: document.title
    });
};

export interface AnalyticsEvent {
    category: string;
    action: string;
    label: string;
}

export const logEvent = ({ category, action, label }: AnalyticsEvent): void => {
    ReactGA.event('user_interaction', {
        category,
        action,
        label
    });
};

export const useAnalytics = (): void => {
    useEffect(() => {
        initGA();
        logPageView();
    }, []);
}; 