const MAX_RETRIES = 5;

module.exports = {
    getViewportSize: function () {
        return browser.execute(() => {
            return {
                width: Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0
                ),
                height: Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                ),
            };
        });
    },

    setViewportSize: async function setViewportSize (
        width,
        height,
        retryNo = 0)
    {
        const windowSize = await browser.getWindowSize();
        const viewportSize = await browser.getViewportSize();

        const widthDiff = windowSize.width - viewportSize.width;
        const heightDiff = windowSize.height - viewportSize.height;

        // change window size with indent
        await browser.setWindowSize(width + widthDiff, height + heightDiff);

        const newViewportSize = await browser.getViewportSize();

        // if viewport size not equals desired size, execute process again
        if (
            retryNo < MAX_RETRIES &&
            (newViewportSize.width !== width || newViewportSize.height !== height)
        ) {
            return await setViewportSize(width, height, retryNo + 1);
        }
    }
};
