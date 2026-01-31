import React from 'react'
import githubData from "../../assets/github.json"
import MacWindow from './MacWindow'
import "./github.scss"

const GitCard = ({ data={ id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: ""} }) => {
  return (
    <div className='card'>
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>

        <div className="tags">
            {data.tags.map((tag, idx) => {
                return  <p className='tag' key={idx} >{tag}</p>
            })}
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
        </div>
    </div>
  )
}


const Github = ({ windowName, windowState, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowsState={setWindowsState} width={"70vw"} height={"60vh"}>
        <div className="cards">
            {githubData.map((project, idx) => {
                return <div key={idx}>
                    <GitCard data={project} />
                </div>
            })}
        </div>
    </MacWindow>
  )
}

export default Github