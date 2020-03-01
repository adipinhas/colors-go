import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import img from '../img/cool.png'


export default class PalleteLinks extends Component {


    
    render() {
        const createLink = <Link className="link create-link" to="/create">
            Create Palette
        </Link>
      
        const links=this.props.list.map((palette)=>{
           return <Link className="link" to={`/${palette.id}`}>
                      {palette.paletteName}
                  </Link>
        

               
        

        })
        
        return (
            <div className="links-container">
                <img className="logo-img" src={img} style={{width:'200px'}} />

                <div className="links">
                 {links}
                 {createLink}

                
                </div>
            </div>
            )
    }
}
