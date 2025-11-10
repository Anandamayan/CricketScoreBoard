import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function UseReducerExample2() {
    const initialState = { count: 0 }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 0 + action.payload.increaseby};
            case 'decrement':
                return { count: state.count - 0 - action.payload.decreaseby };
            case 'reset':
                return { count: 0 }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div>
                <h3>UseReducerExample2</h3>
                <h4>Count:{state.count}</h4>
                <div className='d-flex gap-2'>
                    <button onClick={() => dispatch({ type: 'increment',  payload:{increaseby:1} })}>Increment</button>
                    <button onClick={() => dispatch({ type: 'decrement', payload:{decreaseby:1} })}>Decrement</button>
                    <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                </div>
            </div>

        </div>
    )
}
