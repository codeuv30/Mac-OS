import React, { useState } from 'react'
import "./app.scss";
import Dock from './components/Dock';
import Nav from './components/Nav';
import MacWindow from './components/windows/MacWindow';
import Github from './components/windows/Github';
import Note from './components/windows/Note';
import Resume from './components/windows/Resume';
import Spotify from './components/windows/Spotify';
import CLI from './components/windows/CLI';
import Launchpad from './components/Launchpad';

const App = () => {
  const [windows, setWindows] = useState({
    launchpad: false,
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });
  return (
    <main>
      <Nav />
      {windows.launchpad && <Launchpad windowName={"launchpad"} windowState={windows} setWindowsState={setWindows} />}
      {windows.github && <Github windowName={"github"} windowState={windows} setWindowsState={setWindows} />}
      {windows.note && <Note windowName={"note"} windowState={windows} setWindowsState={setWindows} />}
      {windows.resume && <Resume windowName={"resume"} windowState={windows} setWindowsState={setWindows} />}
      {windows.spotify && <Spotify windowName={"spotify"} windowState={windows} setWindowsState={setWindows} />}
      {windows.cli && <CLI windowName={"cli"} windowState={windows} setWindowsState={setWindows} />}
    <Dock windowState={windows} setWindowsState={setWindows} />
    </main>
  )
}

export default App