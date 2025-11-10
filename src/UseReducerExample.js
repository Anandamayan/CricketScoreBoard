import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function UseReducerExample() {
    const initialState = { count: 0 };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            case 'reset':
                return { count: 0 };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div>
                <h3>UseReducerExample</h3>
                <h1>Count: {state?.count} </h1>
                <div className='d-flex gap-2'>
                    <button onClick={()=>dispatch({ type: 'increment' })}>Increment</button>
                    <button onClick={()=>dispatch({type: 'decrement' })}>Decrement</button>
                    <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
                </div>

            </div>

        </div>
    )
}
