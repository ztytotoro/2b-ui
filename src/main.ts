export * from "./components";

import { components } from "./components";

function install(Vue: any, opts: object = {}) {
    components.forEach((component: any) => {
        Vue.component(component.name, component);
    })
}

export default {
    install
};
