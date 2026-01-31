import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DockItemContext from './context/DockItemContext.jsx'

createRoot(document.getElementById('root')).render(
    <DockItemContext>
        <App />
    </DockItemContext>
)
