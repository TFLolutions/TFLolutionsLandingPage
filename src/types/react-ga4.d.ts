declare module 'react-ga4' {
    interface EventParams {
        category?: string;
        action?: string;
        label?: string;
        value?: number;
        nonInteraction?: boolean;
        [key: string]: any;
    }

    interface PageViewParams {
        page_title?: string;
        page_location?: string;
        page_path?: string;
        send_page_view?: boolean;
    }

    interface InitializeParams {
        gaOptions?: {
            [key: string]: any;
        };
        gtagOptions?: {
            [key: string]: any;
        };
        testMode?: boolean;
    }

    function initialize(
        measurementId: string | string[],
        options?: InitializeParams
    ): void;

    function send(params: PageViewParams): void;

    function event(
        name: string,
        params?: EventParams
    ): void;

    function ga(...args: any[]): void;

    function set(fieldsObject: { [key: string]: any }): void;
} 