import * as React from "react";
import { connect, useDispatch } from 'react-redux';
import { CounterShower } from "../CounterShower";
import { addCounter } from "../../store/actions/actionCreators";

type Props = Record<string, any>;

const putStateToProps = (state: Record<string, any>) => state.counters;

const CounterCreator: React.FC<Props> = (props) => {
    const {counters} = props;
    const dispatch = useDispatch();

    const handleCreateCounter = () => {
        dispatch(addCounter());
    }

    const CountShower = (counters: any) => {
        return counters.map((counter: number, index: number) => {
            const data: Record<string, number> = { counter, index }
            return <CounterShower data={data}/>
        });
    }

    return (
        <React.Fragment>
            <button onClick={handleCreateCounter}>CreateCounter</button>
            { CountShower(counters) }
        </React.Fragment>
    )
}

const WrappedCounterCreator = connect(putStateToProps)(CounterCreator);
export default WrappedCounterCreator;