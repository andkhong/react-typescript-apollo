export function injectScript(src: string ): void {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = src;
    document.head.appendChild(script);
};


