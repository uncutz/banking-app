import itemlist from "./itemlist.js";

/*export default function store() {

    if (!localStorage) {
        console.error('No Localstorage')
    }*/

        const setItem = (key, value) => {
            window.localStorage.setItem(key, value);
        }

        const getItem = (key) => {
            return window.localStorage.getItem(key);
        }

const store = {
            setItem,
            getItem
}

export default store;