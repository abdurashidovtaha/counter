import {CounterAction} from '../../types';

export const increaseCounter = (index: number) => {
    return {
        type: CounterAction.INCREMENT,
        payload: { index }
    }
}

export const decreaseCounter = (index: number) => {
    return {
        type: CounterAction.DICREMENT,
        payload: { index }
    }
}

export function addCounter() {
    return {
        type: CounterAction.ADD
    }
}