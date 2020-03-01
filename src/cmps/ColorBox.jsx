import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
// ?import { useHistory } from "react-router-dom";
import chroma from 'chroma-js'
import LittleShades from './LittleShades'
import Copied from './Copied'


import '../style/ColorBox.css'
import { Link } from 'react-router-dom'
import palette from './palette'
// import ColorShades from './cmps/ColorShades'

export default class ColorBox extends Component {
    state={
        isCopied:false,
        showingMoreShades:false,
        isPopup:false
        

    }
    goCopy=()=>{
        this.setState({
            isCopied:true
        })
        setTimeout(()=>{
            this.setState({
                isCopied:false
            })
        },900)
    }
  
    showLittleShades=(evt)=>{
        evt.stopPropagation()
        this.setState({
            showingMoreShades:true
        })
    }
    updateColor=(color)=>{
        
        this.setState({
            showingMoreShades:false,
            isPopup:true
        })
        setTimeout(()=>{
            this.setState({
                isPopup:false
            })
        },3000)
           
     

    }
   
    render() {
        const isCopied =this.state.isCopied
        const color=this.props.colorDetails.rgb
        const paletteId=this.props.paletteId
        const isDark= chroma(color).luminance()<0.25
        const littleShades=this.state.showingMoreShades
        console.log(this.props)
        
        
        return (<>
           {littleShades && <LittleShades id={this.props.colorDetails.id} paletteId={paletteId}  updateColor={this.updateColor} color={color}></LittleShades>}
           {!littleShades&& <CopyToClipboard text={color}>
            <div onClick={this.goCopy} style={{background:color}} className='ColorBox'>
                <div style={{background:color}} className={`copy-grow ${isCopied &&"show"}`}></div>
               <div className="copy-container">
                   <div className ="box-content">
                     <span className={isDark && 'white'} >{this.props.colorDetails.name}</span>
                   </div>
                   <button className={`copy-button ${isDark && 'white'}` }>COPY</button>
                   <div className={`copy-msg ${isCopied &&"show"}`}>
                       <h1>COPIED!</h1>
                       <p className ={(isDark && 'white')}>{color}</p>

                   </div>
               </div>
                    <button className="little-shades-button" onClick={this.showLittleShades}>!more!</button>
               
            </div>
            </CopyToClipboard>}
            <Copied isPopup={this.state.isPopup}></Copied>
            </>
        )
    }
}
