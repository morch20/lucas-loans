declare namespace JSX {
    interface IntrinsicElements {
        "lord-icon": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        > & {
            src: string;
            trigger: string;
            class?: string;
            colors?: string;
        };

        "l-helix": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        > & {
            size: string;
            speed: string;
            color: string;
        };
    }
}
