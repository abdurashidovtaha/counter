import * as React from "react";
import { useDispatch } from "react-redux";
import { decreaseCounter, increaseCounter } from "../../store/actions/actionCreators";

interface Props {
    data: Record<string, number>
}

export const CounterShower: React.FC<Props> = (props) => {
    const {counter, index} = props.data;
    console.log(123, props.data);
    const dispatch = useDispatch();

    const handleSubtr = () => {
        dispatch(decreaseCounter(index));
    }
    const handleAdd = () => {
        dispatch(increaseCounter(index));
    }

    return (
        <>
            <button onClick={handleSubtr}>-</button>
            <span>counter: {counter}</span>
            <button onClick={handleAdd}>+</button>
        </>
    )
}