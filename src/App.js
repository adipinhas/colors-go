import React, { Component } from 'react';
import {Route, Switch, Router} from 'react-router-dom'
import seedColor from './SeedColor'

import Palette from './cmps/palette'
import Footer from './cmps/Footer'
import './style/App.css'
import {generatePalette} from './helperColor'
import PalleteLinks from './cmps/PalleteLinks';
import palette from './cmps/palette';
import ColorShades from './cmps/ColorShades'
import CreatePalette from './cmps/CreatePalette'




class App extends Component {
  

  findPalette=(ID)=>{
    return seedColor.palettes.find((p)=>{
     return p.id === ID
   });
  
 }
 find

  
  render(){ 
    
    return (
      <div className="App">
        {/* <PalleteLinks list={seedColor}></PalleteLinks> */}

        <Switch className="main">
          <Route
        exact
        path='/create'
        render={(routerProps)=> <CreatePalette {...routerProps}/>
        }/>
          <Route
          exact
          path='/'
          render={()=><PalleteLinks list={seedColor.palettes}></PalleteLinks>}
          />
          <Route
          exact
          path='/:id'
          render={routerProps=>(
            <Palette palette={generatePalette(this.findPalette(routerProps.match.params.id))}
            />
          )}/>
           <Route
          exact
          path='/:palettename/:colorId'
          render={routerProps=>(
          <ColorShades id={routerProps.match.params.colorId} palette={generatePalette(this.findPalette(routerProps.match.params.palettename))}
          />
          )}/>
        </Switch>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default App;
