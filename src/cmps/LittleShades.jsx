import React, { Component } from 'react'
import chroma from 'chroma-js'
import LittleOneShade from './littleOneShade'
import { Link } from 'react-router-dom'


export default class LittleShades extends Component {


    colorUpdate=(color)=>{
        this.props.updateColor(chroma(color).hex())
    }
    render() {
        const color=this.props.color
        console.log(this.props,'pojpkrfkrfno')
        const hex =chroma(color).hex();
        const colors=chroma.scale([chroma(hex).brighten(1.0002).hex(),hex,chroma(hex).darken(1.0002).hex()]).colors(12);
        const shadesToShow= colors.map((color)=>{
            return <LittleOneShade colorUpdate={this.colorUpdate} color={color} ></LittleOneShade>
        })
        return (
            <div className="little-shade" style={{backgroundColor:color}}>
                <Link  to={`/${this.props.paletteId}/${this.props.id}`} onClick={(e)=>e.stopPropagation()}>
               <span onClick={this.clickMore} className="see-more">click here to see all shades</span>
               </Link>
                {shadesToShow}
            </div>
        )
    }
}
