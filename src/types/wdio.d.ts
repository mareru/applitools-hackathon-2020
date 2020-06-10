declare namespace WebdriverIO {
    // adding command to `browser`
    interface Browser {
        getViewportSize: () => { width, height };
        setViewportSize: (width, height, retryNo?) => Promise<void>;
    }
}