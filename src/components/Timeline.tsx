import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 – Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Admin Student Employee</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Colorado Boulder, US</h4>
            <p>
              • Supported administrative operations and requests proactively.<br />
              • Acted as liaison between full-time staff and student employees.<br />
              • Maintained records for 90+ student employees with strict HIPAA compliance.<br />
              • Interviewed over 200 students for the CU Bookstore.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2024 – Mar 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Finance Board Member</h3>
            <h4 className="vertical-timeline-element-subtitle">CU Boulder Student Government</h4>
            <p>
              • Participated in student government financial planning and budgeting initiatives.<br />
              • Contributed to transparent and equitable distribution of university resources.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2023 – May 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Hindustan Aeronautics Limited, Bangalore, India</h4>
            <p>
              • Observed day-to-day helicopter system operations and maintenance.<br />
              • Supported communication, documentation, and administrative workflows.<br />
              • Attended technical briefings and team meetings for hands-on learning.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2022 – Nov 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Design Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Phyelements Pvt Ltd, Bangalore, India</h4>
            <p>
              • Designed and verified SRAM/DRAM layouts in Cadence Virtuoso (40nm).<br />
              • Completed DRC and LVS for 50+ standard cells with Vt conversion.<br />
              • Optimized layout area and improved functional block performance.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2022 – Mar 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Public Liaison</h3>
            <h4 className="vertical-timeline-element-subtitle">ISA – RVCE Student Chapter
</h4>
            <p>
              • Acted as liaison between industry professionals and students.<br />
              • Organized events related to automation and control systems.<br />
              • Promoted collaboration in the student community.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;