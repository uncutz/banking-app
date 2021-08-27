
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