import { useState, useRef } from 'react';

// let timer;

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();

    const [timerActive, setTimerActive] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    
    
    function handleStart() {
        setTimerActive(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }
    
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>Time's up!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerActive ? handleStop : handleStart}>
                    {timerActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerActive ? 'active' : undefined}>
                {timerActive? 'Challenge in progress...' : 'Challenge not started'}
            </p>
        </section>
    );
}