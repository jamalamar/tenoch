import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/*Components for Spanish and English*/
import Inicio from './Views/Inicio'
import Home from './Views/Home'

import Nosotros from './Views/Nosotros'
import AboutUs from './Views/AboutUs'

import Eventos from './Views/Eventos'
import Events from './Views/Events'

import Espacios from './Views/Espacios'
import Spaces from './Views/Spaces'

import Contacto from './Views/Espacios'
import Contact from './Views/Spaces'

function App() {

  /*Hook to change Language*/
  const [lan, setLang] = useState('es')

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/Inicio' exact component={Inicio} />
          <Route path='/en/Home' exact component={Home} />

          <Route path='/Nosotros' component={Nosotros} />
          <Route path='/en/AboutUs' component={AboutUs} />
          
          <Route path='/Eventos' component={Eventos} />
          <Route path='/en/Events' component={Events} />
          
          <Route path='/Espacios' component={Espacios} />
          <Route path='/en/Spaces' component={Spaces} />

          <Route path='/Contacto' component={Contacto} />
          <Route path='/en/Contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
