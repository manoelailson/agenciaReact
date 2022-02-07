import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Home from './componentes/pages/Home';
import Destinos from './componentes/pages/Destinos';
import Contato from './componentes/pages/Contato';
import Promocoes from './componentes/pages/Promocoes';
import React,{useState} from 'react';



export default function App() {
  const[nome,Setnome]=useState("VoaVoa")
  
  return (

    <BrowserRouter>
    
      <nav className='navbar  navbar-expand-lg  navbar-dark bg-dark'>
        <div class="container-fluid">
          <a class="navbar-brand">{nome}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav me-auto mx-auto  mb-2 mb-lg-0">
              <li class="nav-item "><Link to="/" class="nav-link">Home</Link></li>
              <li class="nav-item"><Link to="/destinos" class="nav-link">Destinos</Link></li>
              <li class="nav-item"><Link to="/contato" class="nav-link">contato</Link></li>
              <li class="nav-item"> <Link to="/promocoes" class="nav-link">promoções</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinos' element={<Destinos />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/promocoes' element={<Promocoes />} />
      </Routes>
      <footer align="center" style={{ padding: '100px 0px 20px' }}>
        <p>&copy;  VOAVOA-2022 </p>
      </footer>
    </BrowserRouter>
   

);
 
}