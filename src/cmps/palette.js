import React, { Component } from 'react'
import ColorBox from './ColorBox'
import '../style/palette.css'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {Link} from 'react-router-dom'
import img from '../img/cool.png'
import {CopyToClipboard} from 'react-copy-to-clipboard'

export default class palette extends Component {
state={
    shadeLevel:500,
}
changeLevel=(newLevel)=>{
    this.setState({
        shadeLevel:newLevel
    })

}
paletteCopied=()=>{
    alert('copied')
}


    render() {
      
            const LEVEL=this.state.shadeLevel
            const paletteName=this.props.palette.paletteName
            const emoji =this.props.palette.emoji
            // console.log(this.props.palette.colors[LEVEL],'bdik')
            const colors = this.props.palette.colors[LEVEL].map((color,i)=>{
                console.log(this.props,'mi ba')
                             return <ColorBox index={i} paletteId={this.props.palette.id} colorDetails={color}></ColorBox>
                         })
            const paletteToCopy= colors.map((color)=>{
                return color.props.colorDetails.rgb
            })
        
        return (
            <div className='palette'>
                <div className="slider">
            <Link to='/'> <img className="logo-img" src={img} style={{width:'100px'}} />
 </Link>
        <h2>{paletteName}{emoji}</h2>
                <Slider style={{width:'150px' ,padding:'50px',margin:'15px'}}
                 defaultValue={this.state.shadeLevel}
                 onChange={this.changeLevel} 
                 step={25} min={50} max={950}  />
                 <CopyToClipboard text={paletteToCopy} >
                    <button onClick={this.paletteCopied}>copy palette</button>
                 </CopyToClipboard>
                 
                </div>
                <div className='color-boxes'>
               {colors}
                </div>    

            </div>
        )
    }
}
