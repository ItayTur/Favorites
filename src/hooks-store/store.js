import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
    const setState = useState(globalState)[1];

    const dispatch = (action, payload) => {
        const newState = actions[action](globalState, payload);
        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener(globalState);
        }
    };

    useEffect(() => {
        listeners.push(setState);

        return () => listeners = listeners.filter(listener => listener !== setState);
    }, []);

    return [globalState, dispatch];
};

export const initStore = (initState, initActions) => {
    globalState = initState && { ...globalState, ...initState };
    actions = { ...actions, ...initActions };
}

export default useStore;