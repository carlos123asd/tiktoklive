import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Send from './pages/send.jsx'
//Styles
import '../src/style/topbar.css'
import '../src/style/nav.css'
import '../src/style/submenu.css'
import '../src/style/contentsend.css'
import '../src/style/inputsend.css'
import '../src/style/moreoptions.css'
import '../src/style/footer.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Send />
  </StrictMode>,
)
