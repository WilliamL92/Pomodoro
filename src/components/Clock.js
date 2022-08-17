import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomProgressBar from './CustomProgressBar'
import NavigationClock from './NavigationClock'
import { customRound } from '../functions/function'
import sound from "../media/audio/alarme/1.wav"

const Clock = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(25)
    const [globalSeconds, setGlobalSeconds] = useState(0)
    const [currentTotal, setCurrentTotal] = useState(25)
    const globalTimer = useRef(null)
    const showPause = useRef(false)
    const [currentProgress, setCurrentProgress] = useState(0)
    const [currentAudio] = useState(new Audio(sound))
    const [updatePause, setUpdatePause] = useState(0)
    const [canBePaused, setCanBePaused] = useState(true)

    useEffect(() => {
        if (showPause.current) {
            setSeconds(e => e - 1)
            if (seconds <= 0) {
                setSeconds(e => 59)
                setMinutes(e => e - 1)
            }
            if (globalSeconds >= 60 * currentTotal) {
                clearInterval(globalTimer.current)
                currentAudio.play()
            }
        }
    }, [globalSeconds])

    function startTimer() {
        clearInterval(globalTimer.current)
        const newInterval = setInterval(() => {
            setGlobalSeconds(e => e + 1)
        }, 1000)
        globalTimer.current = newInterval
    }

    function leftClick() {
        setCanBePaused(true)
        if (currentProgress > 0) {
            setCurrentProgress(e => e - 1)
        }
        if (currentProgress === 1) {
            resetTimer(25)
        }
        else if (currentProgress === 2) {
            resetTimer(5)
        }
        else if (currentProgress === 3) {
            resetTimer(25)
        }
        else if (currentProgress === 4) {
            resetTimer(5)
        }
        else if (currentProgress === 5) {
            resetTimer(25)
        }
        else if (currentProgress === 6) {
            resetTimer(5)
        }
        if (minutes <= 0 && seconds <= 0) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }

    function resetTimer(time) {
        clearInterval(globalTimer.current)
        setGlobalSeconds(e => 0)
        setSeconds(e => 0)
        setMinutes(e => time)
        setUpdatePause(e => e + 1)
        setCurrentTotal(e => time)
        showPause.current = false
    }

    function reloadClick() {
        setCanBePaused(true)
        if (currentProgress === 0) {
            resetTimer(25)
        }
        else if (currentProgress === 1) {
            resetTimer(5)
        }
        else if (currentProgress === 2) {
            resetTimer(25)
        }
        else if (currentProgress === 3) {
            resetTimer(5)
        }
        else if (currentProgress === 4) {
            resetTimer(25)
        }
        else if (currentProgress === 5) {
            resetTimer(5)
        }
        else if (currentProgress === 6) {
            resetTimer(25)
        }
        if (minutes <= 0 && seconds <= 0) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }

    function pauseClick(props) {
        if (minutes > 0 || seconds > 0) {
            if (!props) {
                startTimer()
                showPause.current = true
            }
            else {
                clearInterval(globalTimer.current)
                showPause.current = false
            }
        }
        else {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            setCanBePaused(false)
        }
    }
    function rightClick() {
        setCanBePaused(true)
        if (currentProgress < 6) {
            setCurrentProgress(e => e + 1)
        }
        if (currentProgress === 0) {
            resetTimer(5)
        }
        else if (currentProgress === 1) {
            resetTimer(25)
        }
        else if (currentProgress === 2) {
            resetTimer(5)
        }
        else if (currentProgress === 3) {
            resetTimer(25)
        }
        else if (currentProgress === 4) {
            resetTimer(5)
        }
        else if (currentProgress === 5) {
            resetTimer(25)
        }
        if (minutes <= 0 && seconds <= 0) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }

    function outerRightClick() {
        setCanBePaused(true)
        setCurrentProgress(e => 6)
        resetTimer(25)
        if (minutes <= 0 && seconds <= 0) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }

    function outerLeftClick() {
        setCanBePaused(true)
        setCurrentProgress(e => 0)
        resetTimer(25)
        if (minutes <= 0 && seconds <= 0) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }
    return (
        <div>
            <div style={{ width: 400, height: 300, display: "flex" }}>
                <CircularProgressbar strokeWidth={3} styles={buildStyles({
                    textSize: '13px',
                    textColor: "#0d6efd",
                    strokeLinecap: "round", // other value is "butt"
                    pathTransitionDuration: 0.5,
                    pathColor: "#0d6efd",
                    trailColor: '#F5F2CB',
                })}
                    value={globalSeconds} maxValue={(60 * currentTotal)} text={`${customRound(minutes, 2)}:${customRound(seconds, 2)}`} />
            </div>
            <br />
            <div>
                <CustomProgressBar currentProgress={currentProgress} />
            </div>
            <br />
            <NavigationClock canBePaused={canBePaused} showPause={updatePause} leftClick={leftClick} reloadClick={reloadClick} pauseClick={pauseClick} rightClick={rightClick} outerRightClick={outerRightClick} outerLeftClick={outerLeftClick} />
        </div>
    );
};

export default Clock;