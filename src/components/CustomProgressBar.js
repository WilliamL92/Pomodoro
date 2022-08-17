import React from 'react';
// import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomProgressBar = (props) => {
    if (props.currentProgress === 0) {
        return (
            <div>
                <ProgressBar>
                    <ProgressBar animated="true" striped className='progressWork' now={22} key={1} />
                </ProgressBar>
            </div>
        )
    }
    else if (props.currentProgress === 1) {
        return (
            <div>
                <ProgressBar>
                    <ProgressBar striped className='progressWork' now={22} key={1} />
                    <ProgressBar animated="true" striped className='progressPause' now={4} key={2} />
                </ProgressBar>
            </div>
        )
    }
    else if (props.currentProgress === 2) {
        return (
            <div>
                <ProgressBar>
                    <ProgressBar striped className='progressWork' now={22} key={1} />
                    <ProgressBar striped className='progressPause' now={4} key={2} />
                    <ProgressBar animated="true" striped className='progressWork' now={22} key={3} />
                </ProgressBar>
            </div>
        )
    }
    else if (props.currentProgress === 3) {
        return (
            <div>
                <ProgressBar>
                    <ProgressBar striped className='progressWork' now={22} key={1} />
                    <ProgressBar striped className='progressPause' now={4} key={2} />
                    <ProgressBar striped className='progressWork' now={22} key={3} />
                    <ProgressBar animated="true" striped className='progressPause' now={4} key={4} />
                </ProgressBar>
            </div>
        )
    }
    else if (props.currentProgress === 4) {
        return (
            <div>
                <ProgressBar>
                    <ProgressBar striped className='progressWork' now={22} key={1} />
                    <ProgressBar striped className='progressPause' now={4} key={2} />
                    <ProgressBar striped className='progressWork' now={22} key={3} />
                    <ProgressBar striped className='progressPause' now={4} key={4} />
                    <ProgressBar animated="true" striped className='progressWork' now={22} key={5} />
                </ProgressBar>
            </div>
        )
    }
    else if (props.currentProgress === 5) {
        return (
            <div>
                <ProgressBar>
                    <ProgressBar striped className='progressWork' now={22} key={1} />
                    <ProgressBar striped className='progressPause' now={4} key={2} />
                    <ProgressBar striped className='progressWork' now={22} key={3} />
                    <ProgressBar striped className='progressPause' now={4} key={4} />
                    <ProgressBar striped className='progressWork' now={22} key={5} />
                    <ProgressBar animated="true" striped className='progressPause' now={4} key={6} />
                </ProgressBar>
            </div>
        )
    }
    else if (props.currentProgress === 6) {
        return (
            <div>
                <ProgressBar>
                    <ProgressBar striped className='progressWork' now={22} key={1} />
                    <ProgressBar striped className='progressPause' now={4} key={2} />
                    <ProgressBar striped className='progressWork' now={22} key={3} />
                    <ProgressBar striped className='progressPause' now={4} key={4} />
                    <ProgressBar striped className='progressWork' now={22} key={5} />
                    <ProgressBar striped className='progressPause' now={4} key={6} />
                    <ProgressBar animated="true" striped className='progressWork' now={22} key={7} />
                </ProgressBar>
            </div>
        )
    }

};



export default CustomProgressBar;