import React, { Component } from 'react'
import ColorShadeBox from './ColorShadeBox'
import {Link} from 'react-router-dom'


export default class ColorShades extends Component {
    constructor(props){
        super(props)
        this._shades=this.gatherShades(this.props)

    }
    state={

    }
    gatherShades=(props)=>{
        let shades=[]
        console.log(this.props)
        for (const color in props.palette.colors) {
                const element = props.palette.colors[color];
                 shades=shades.concat(element.filter((color)=>{
                     console.log(color.id,props.id,'lpolpolpopop')
                     return color.id===props.id
                 }))
        }
        
        return shades.map((shade)=>{
            return shade.rgb
        })
        
      
    }

    render() {
         const shadesToShow=this._shades.map((shade)=>{
           return <ColorShadeBox color={shade}></ColorShadeBox>
        })
        return (
            
            <div>
                <Link to={`/${this.props.palette.id}`}>
                <button className="back-button-shades" >back</button>
                </Link>
                <div className="shades-to-show">
                {shadesToShow}
                </div>
            </div>
        )
    }
}
