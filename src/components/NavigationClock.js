import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight, faPause, faArrowRotateRight, faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function NavigationClock({ leftClick, reloadClick, pauseClick, rightClick, outerRightClick, outerLeftClick, showPause, canBePaused }) {
    const [togglePaused, setTogglePaused] = useState(true)

    useEffect(() => {
        setTogglePaused(false)
    }, [showPause])

    function togglePause() {
        if (togglePaused) {
            setTogglePaused(false)
        }
        else {
            setTogglePaused(true)
        }
    }
    function PauseWidget() {
        if (togglePaused && canBePaused) {
            return <FontAwesomeIcon id="pauseClick" style={{ color: "rgb(13, 110, 253)" }} icon={faPause} />
        }
        else {
            return <FontAwesomeIcon id="pauseClick" style={{ color: "rgb(13, 110, 253)" }} icon={faPlay} />
        }
    }

    return (
        <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Button
                onMouseEnter={(evt) => {
                    document.getElementById('outerLeftClick').style.color = "white";
                    evt.target.style.backgroundColor = "#0d6efd"
                }}
                onMouseLeave={(evt) => {
                    document.getElementById('outerLeftClick').style.color = "rgba(13, 110, 253)";
                    evt.target.style.backgroundColor = "rgba(255, 255, 255, 0)"
                }}
                style={{
                    marginLeft: 10,
                    marginRight: 10
                }}
                onClick={e => outerLeftClick()}
                variant="outline-primary" >
                <FontAwesomeIcon id="outerLeftClick" style={{ color: "rgb(13, 110, 253)" }} icon={faAnglesLeft} />
            </Button>
            <Button
                onMouseEnter={(evt) => {
                    document.getElementById('leftClick').style.color = "white";
                    evt.target.style.backgroundColor = "#0d6efd"
                }}
                onMouseLeave={(evt) => {
                    document.getElementById('leftClick').style.color = "rgb(13, 110, 253)";
                    evt.target.style.backgroundColor = "rgba(255, 255, 255, 0)"
                }}
                style={{
                    marginLeft: 10,
                    marginRight: 10
                }}
                onClick={e => leftClick()}
                variant="outline-primary" >
                <FontAwesomeIcon id="leftClick" style={{ color: "rgb(13, 110, 253)" }} icon={faAngleLeft} />
            </Button>
            <Button
                onMouseEnter={(evt) => {
                    document.getElementById('reloadClick').style.color = "white";
                    evt.target.style.backgroundColor = "#0d6efd"
                }}
                onMouseLeave={(evt) => {
                    document.getElementById('reloadClick').style.color = "rgb(13, 110, 253)";
                    evt.target.style.backgroundColor = "rgba(255, 255, 255, 0)"
                }}
                style={{
                    marginLeft: 10,
                    marginRight: 10
                }}
                onClick={e => reloadClick()}
                variant="outline-primary">
                <FontAwesomeIcon id="reloadClick" style={{ transform: "rotate(-90deg)", color: "rgb(13, 110, 253)" }} icon={faArrowRotateRight} />
            </Button>
            <Button
                onMouseEnter={(evt) => {
                    document.getElementById('pauseClick').style.color = "white";
                    evt.target.style.backgroundColor = "#0d6efd"
                }}
                onMouseLeave={(evt) => {
                    document.getElementById('pauseClick').style.color = "rgb(13, 110, 253)";
                    evt.target.style.backgroundColor = "rgba(255, 255, 255, 0)"
                }}
                onClick={() => {
                    togglePause();
                    return pauseClick(togglePaused)
                }}
                style={{
                    marginLeft: 10,
                    marginRight: 10
                }}
                variant="outline-primary" >
                {PauseWidget()}
            </Button>
            <Button
                onMouseEnter={(evt) => {
                    document.getElementById('rightClick').style.color = "white";
                    evt.target.style.backgroundColor = "#0d6efd"
                }}
                onMouseLeave={(evt) => {
                    document.getElementById('rightClick').style.color = "rgb(13, 110, 253)";
                    evt.target.style.backgroundColor = "rgba(255, 255, 255, 0)"
                }}
                style={{
                    marginLeft: 10,
                    marginRight: 10
                }}
                onClick={e => rightClick()}
                variant="outline-primary" >
                <FontAwesomeIcon id="rightClick" style={{ color: "rgb(13, 110, 253)" }} icon={faAngleRight} />
            </Button>
            <Button
                onMouseEnter={(evt) => {
                    document.getElementById('outerRightClick').style.color = "white";
                    evt.target.style.backgroundColor = "#0d6efd"
                }}
                onMouseLeave={(evt) => {
                    document.getElementById('outerRightClick').style.color = "rgb(13, 110, 253)";
                    evt.target.style.backgroundColor = "rgba(255, 255, 255, 0)"
                }}
                style={{
                    marginLeft: 10,
                    marginRight: 10
                }}
                onClick={e => outerRightClick()}
                variant="outline-primary" >
                <FontAwesomeIcon id="outerRightClick" style={{ color: "rgb(13, 110, 253)" }} icon={faAnglesRight} />
            </Button>
        </div>
    );
};

export default NavigationClock;