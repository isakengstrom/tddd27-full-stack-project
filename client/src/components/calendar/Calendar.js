import React, { useState } from 'react';

import "./styles.scss";
import CalendarSidebar from "./CalendarSidebar";
import {Col, Row} from "react-bootstrap";
import IsoWeekCalendar from "./IsoWeekCalendar";


const Calendar = (props) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleSidebarToggle = () => {
        console.log('regging sidebar toggle v2')
        setIsToggled(wasToggled => !wasToggled);
    }

    return(
        <Row>
            <Col className="px-0">
                {isToggled && (
                    <CalendarSidebar />
                )}
            </Col>
            <Col>
                <Row>
                    <div id="content">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <button onClick={handleSidebarToggle} type="button" id="sidebarCollapse" className="btn btn-info" >
                                    <span>Toggle Sidebar</span>
                                </button>
                            </div>
                        </nav>
                    </div>
                </Row>
                <Row>
                    <IsoWeekCalendar/>
                </Row>
            </Col>
        </Row>
    );
}

export default Calendar;
