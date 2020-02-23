import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import chroma from 'chroma-js'



export default class ColorShadeBox extends Component {
    state={
        isCopied:false
    }
    showCopied=()=>{
        this.setState({
            isCopied:true
        })
        setTimeout(()=>
        { this.setState({
            isCopied:false

        })}, 1000);
    }

    
    render() {
        const rgb = this.props.color
        const isDark =chroma(rgb).luminance()<0.18
        console.log(this.props)
        return ( 
            <div style={{background:rgb }} className={`shade ${isDark && 'white'}`}>
            <span className='span-rgb'> 
            <CopyToClipboard text={rgb}>
            <button onClick={this.showCopied} className={`button-shades ${isDark && 'white'}`  }>copy</button>
     </CopyToClipboard> 
          </span>
          <span className={(this.state.isCopied && 'copy-shade')} style={{opacity:0}}>COPIED!   {rgb}</span>
          </div>
        )
    }
}
