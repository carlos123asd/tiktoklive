import { createRoot } from 'react-dom/client'
import './index.css'
import Send from './pages/send.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Configsend from './pages/Configsend.jsx'
//Styles
import '../src/style/topbar.css'
import '../src/style/nav.css'
import '../src/style/submenu.css'
import '../src/style/contentsend.css'
import '../src/style/inputsend.css'
import '../src/style/moreoptions.css'
import '../src/style/footer.css'
import '../src/style/contentnumsend.css'
import { AuthProvider } from './context/contextsend.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Send />}></Route>
        <Route path='/comfirm' element={<Configsend />}></Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
)
