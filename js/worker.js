onmessage = function (e) {
    postMessage(e.data.one * 50 + e.data.two * 30 + e.data.three * 600);
};
