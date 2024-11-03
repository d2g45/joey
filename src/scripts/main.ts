import "@/styles/main.scss";
import App from "./app";
import Modal from "./components/Modal";
// import header from "./modules/header";
import images from "./modules/images";
import animation from "./modules/animation";

// configure components here
const components = [];

// modals
components.push({
    selector: ".js-modal",
    Component: Modal,
});

window.App = new App({
    // modules: [header, images, animation],
    modules: [images, animation],
    components,
});
