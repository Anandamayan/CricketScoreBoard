import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CricketScoreBoard() {
    const [score, setScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [overs,setOvers] = useState(0);
    const [balls,setBalls] = useState(0);
    const[finalScore,setFinalScore] = useState(null)

    useEffect(()=>{
         if(balls>=6){
            setOvers(overs + 1);
            setBalls(0);
         }
    },[balls,overs])

    useEffect(()=>{
        if(wickets === "ALL OUT" || overs>=3){
            setFinalScore(`Final Score: ${score} - ${wickets} (${overs}.${balls})Overs`);

            setTimeout(()=>{
                setScore(0);
                setWickets(0);
                setOvers(0);
                setBalls(0);
            },2000);
        }
    },[wickets,overs,balls,score])

    const AddScore = (runs) => {
        setScore(score + runs);
        setBalls(balls + 1)
    }

    const AddWicket = () => {
        setWickets(wickets => {
            if(wickets === "ALL OUT") return "ALL OUT";
            if (wickets >= 9) {
                return "ALL OUT";

            } else {
                setWickets(wickets + 1);
                setBalls(balls+1);
            }
        })
    }
    return (
        <div className='container mt-5'>
            <div className='text-center'>
                <h2 className='mb-3'>useState and useEffect</h2>
                <h3 className='mb-4'>CricketScoreBoard</h3>

                {finalScore && (
                    <div>
                        {finalScore}
                    </div>
                )}
                <div className='mb-4'>
                    <h4>Score: {score}</h4>
                    <h4>Wickets: {wickets} </h4>
                    <h4>Overs: {overs}</h4>
                    <h4>Balls: {balls}</h4>
                </div>
                <div className='d-flex justify-content-center flex-wrap gap-2 mb-4'>
                    <button onClick={() => AddScore(1)}>1 Run</button>
                    <button onClick={() => AddScore(2)}>2 Run</button>
                    <button onClick={() => AddScore(3)}>3 Run</button>
                    <button onClick={() => AddScore(4)}>4 Run</button>
                    <button onClick={() => AddScore(6)}>6 Run</button>
                </div>
                <div className='mt-20'>
                    <button className='btn btn-danger' onClick={() => AddWicket()}>
                        Wickets
                    </button>
                </div>
            </div>
        </div>

    )
}
