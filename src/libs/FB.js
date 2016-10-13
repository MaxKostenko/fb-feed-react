//let FB = window.FB;
export default () => window.FB ? window.FB.bind(window) : {};