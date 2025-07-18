import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faRobot, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "ATmega328", "STM32", "ESP32", "Raspberry Pi", "Arduino",
    "Altium Designer", "OrCAD", "Embedded C", "Oscilloscope"
];

const labelsSecond = [
    "MATLAB", "Simulink", "TensorFlow",  "Python",
     "Image Processing", "Automation"
];

const labelsThird = [
    "CircuitPython", "Linux", "UART", "USB Protocols",
    "CH340G", "Ableton Live", "LabView", "Git", "Python", "Assembly Level Language"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrochip} size="3x" />
                        <h3>Embedded Systems & PCB Design</h3>
                        <p>
                            Designed and built custom hardware systems including multi-layer PCBs and embedded controllers.
                            Proficient in debugging, performance testing, and firmware development for microcontrollers.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faRobot} size="3x" />
                        <h3>Signal Processing & Automation</h3>
                        <p>
                            Applied image processing and automation techniques in systems like anti-lane departure vehicles
                            and gesture-controlled wheelchairs. Skilled in MATLAB, Simulink, and hardware-in-the-loop integration.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                        <h3>Data Communication & Software Tools</h3>
                        <p>
                            Worked with USB communication protocols, bootloading, and MIDI signal transmission. 
                            Experienced in LabView, CircuitPython, and Linux-based development environments.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
