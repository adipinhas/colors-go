import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import chroma from 'chroma-js'

export default class littleOneShade extends Component {
    
    handleUpdate=()=>{
        this.props.colorUpdate(this.props.color)
        
    }
    render() {
        // const isCopied= this.state.isCopied
        const isDark= chroma(this.props.color).luminance()<0.25
        return (
            <div   className={`little-one-shade ${isDark &&"white"}`} style={{backgroundColor:this.props.color}}>
                <CopyToClipboard text={this.props.color}>
                    <button onClick={this.handleUpdate} className={`copy-small-button ${isDark &&"white"}`}>COPY</button>
                </CopyToClipboard>
                {/* { isCopied && <Copied></Copied>} */}
               
            </div>
        )
    }
}
