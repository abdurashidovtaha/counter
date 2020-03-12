import {CounterAction} from '../../types';

interface ActionParams {
    type: string;
    payload: Record<string, any>
}

const counters = [0];

export const counterReducer = (state = counters, action: ActionParams) => {
    const { type, payload } = action;
    console.log(action);
    switch (type) {
        case CounterAction.ADD:
            state.push(0);
            break;
        case CounterAction.INCREMENT:
            state[payload.index]++;
            break;
        case CounterAction.DICREMENT:
            state[payload.index]--;
            break;
        default:
            console.warn('Wrong action');
            break;
    }
    console.log(state);
    return state;
}