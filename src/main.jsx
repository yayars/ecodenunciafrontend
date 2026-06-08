import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import MainLayout from './layouts/MainLayout.jsx'

import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import Noticias from './pages/Noticias.jsx'
import Denunciar from './pages/Denunciar.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Comunidade from './pages/Comunidade.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/faleconosco' element={<Contato />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/denunciar' element={<Denunciar />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/comunidade' element={<Comunidade />} />

        
        </Route>

           {/* 404 SEM HEADER E FOOTER */}
        <Route path="*" element={<NotFound />} />
       
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)