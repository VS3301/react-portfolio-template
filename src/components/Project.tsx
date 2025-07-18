import React from "react";
import mock11 from '../assets/images/mock11.png';
import mock12 from '../assets/images/mock12.png';
import mock13 from '../assets/images/mock13.png';
import mock14 from '../assets/images/mock14.png';
import mock15 from '../assets/images/mock15.png';
import mock16 from '../assets/images/mock16.png';
import mock17 from '../assets/images/mock17.png';
import mock18 from '../assets/images/mock18.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <img src={mock11} className="zoom" alt="Instrument Droid"  />
          <h2>Instrument Droid</h2>
          <p>
            Designed a 4-layer PCB with ATmega328, DACs, ADCs, and MOSFETs. Solved USB misalignment and overheating, validated power source behavior.
          </p>
          <a href="https://o365coloradoedu-my.sharepoint.com/:b:/r/personal/vasv7549_colorado_edu/Documents/Board_4_Report.pdf?csf=1&web=1&e=vs5TlZ" target="_blank" rel="noreferrer">
            <button className="project-button">View Report</button>
          </a>
        </div>

        <div className="project">
          <img src={mock12} className="zoom" alt="Golden Arduino Board"  />
          <h2>Golden Arduino Board</h2>
          <p>
            Fabricated a custom Arduino board using Altium Designer with CH340G for USB. Reduced emissions and switching noise. Verified functionality under stress.
          </p>
          <a href="https://o365coloradoedu-my.sharepoint.com/:b:/r/personal/vasv7549_colorado_edu/Documents/Board_3_Report.pdf?csf=1&web=1&e=FOJCne" target="_blank" rel="noreferrer">
            <button className="project-button">View Report</button>
          </a>
        </div>

        <div className="project">
          <img src={mock13} className="zoom" alt="Board 3"  />
          <h2>Signal Characterization of Good and Bad Hex Inverter</h2>
          <p>
            Tested noise behavior, Thevenin resistance, and voltage output stability of a custom board. Compared results to commercial Arduino performance benchmarks.
          </p>
          <a href="https://o365coloradoedu-my.sharepoint.com/:b:/r/personal/vasv7549_colorado_edu/Documents/Board_2_Report.pdf?csf=1&web=1&e=zcaqdS" target="_blank" rel="noreferrer">
            <button className="project-button">View Report</button>
          </a>
        </div>

        <div className="project">
          <img src={mock14} className="zoom" alt="Board 4"  />
          <h2>Performance and Noise Study of Astable 555 Timer</h2>
          <p>
            Developed and tested new routing strategies and voltage stability across varying loads. Final board showed improved signal quality.
          </p>
          <a href="https://o365coloradoedu-my.sharepoint.com/:b:/r/personal/vasv7549_colorado_edu/Documents/Board_1_Report.pdf?csf=1&web=1&e=MT5RKv" target="_blank" rel="noreferrer">
            <button className="project-button">View Report</button>
          </a>
        </div>

        <div className="project">
          <img src={mock15} className="zoom" alt="Autonomous Vehicle"  />
          <h2>Autonomous Vehicle (Anti-Lane Departure)</h2>
          <p>
            Built lane-tracking system using Raspberry Pi 4 and trained a CNN model with TensorFlow/Keras. Real-time steering and high lane accuracy achieved.
          </p>
          <a href="https://o365coloradoedu-my.sharepoint.com/:b:/r/personal/vasv7549_colorado_edu/Documents/Autonomous%20Vehicles.pdf?csf=1&web=1&e=FOsReN" target="_blank" rel="noreferrer">
            <button className="project-button">View Report</button>
          </a>
        </div>

        <div className="project">
          <img src={mock16} className="zoom" alt="Gesture Wheelchair"  />
          <h2>Head Gesture-Based Motorized Wheelchair</h2>
          <p>
            Used accelerometers and ESP32 to drive motion via head gestures. Integrated voice feedback and IR-based emergency alert system. Best project of 2023 batch.
          </p>
          <a href="https://o365coloradoedu-my.sharepoint.com/:b:/r/personal/vasv7549_colorado_edu/Documents/Head%20Gesture-Based%20Motorized%20Wheelchair.pdf?csf=1&web=1&e=8doGJ6" target="_blank" rel="noreferrer">
            <button className="project-button">View Report</button>
          </a>
        </div>

        <div className="project">
          <img src={mock17} className="zoom" alt="Intelligent Transport System"  />
          <h2>Intelligent Transport System</h2>
          <p>
            Simulated a traffic management and driver safety system using real-time data and IoT nodes. Focus on inter-vehicle communication and efficiency.
          </p>
          <a href="https://o365coloradoedu-my.sharepoint.com/:b:/r/personal/vasv7549_colorado_edu/Documents/Intelligent%20Transport%20System.pdf?csf=1&web=1&e=dJlqdZ" target="_blank" rel="noreferrer">
            <button className="project-button">View Report</button>
          </a>
        </div>

        <div className="project">
          <img src={mock18} className="zoom" alt="MIDI Controller"  />
          <h2>MIDI Controller</h2>
          <p>
            Created a musical MIDI controller with Raspberry Pi Pico and CircuitPython. Supported multiple sound modules and integrated with Ableton Live.
          </p>
          <a href="https://o365coloradoedu-my.sharepoint.com/:b:/r/personal/vasv7549_colorado_edu/Documents/MIDI%20Controller%20Report.pdf?csf=1&web=1&e=EUzjwX" target="_blank" rel="noreferrer">
            <button className="project-button">View Report</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
