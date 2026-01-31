import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, windowState, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowsState={setWindowsState} width={"50vw"} height={"60vh"}>
        <div className="resume-window">
            <embed 
            src="/resume.pdf" frameBorder="0"
            ></embed>
        </div>
    </MacWindow>
  )
}

export default Resume