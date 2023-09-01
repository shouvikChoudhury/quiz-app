import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

const CountDownTimer = () => {
    const intTime = 30 * 60;
    const [time, setTime] = useState(intTime);

    const history = useHistory();

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (time > 0) {
                setTime(time - 1);
            } else {
                clearInterval(timerInterval);
                alert("Time Ends, Quiz got Submitted")
                history.push("/result")
            }
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, [time]);

    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const remainsecs = secs % 60;
        return `${minutes}:${remainsecs < 10 ? '0' : ''}${remainsecs}`;
    };

    return (
        <div>
            <p>Time Left : {formatTime(time)}</p>
        </div>
    )
}

export default CountDownTimer