import React, { Component } from 'react'
import SeedColors from '../SeedColor'
import {Link,useHistory} from 'react-router-dom'
import img from '../img/cool.png'
import uuid from 'uuid'
import ColorSample from './colorSample'
import 'emoji-mart/css/emoji-mart.css'
import {Picker} from 'emoji-mart'
import chroma from 'chroma-js'



export default class CreatePalette extends Component {
    state={
        palette:{
            paletteName: '',
                id: uuid(),
                emoji: '',
                colors:[]
        },
        isSelectingEmoji:false
    }
        
        handleChange=(evt)=>{
            
            this.setState({
                palette:{...this.state.palette,[evt.target.name]:evt.target.value}
                // palette :{
                //     [evt.target.name]:evt.target.value
                //     }
            })
        }
        handleSubmit=async(evt)=>{
            evt.preventDefault()
           console.log(this.state)
           
            await SeedColors.palettes.push(this.state.palette)
            console.log(SeedColors,'seede')
            localStorage.setItem('palettes',JSON.stringify(SeedColors.palettes))
            this.props.history.push(`/${this.state.palette.id}`)
    }
    // changeColorComplete=(color)=>{
    //     let colors=this.state.colors
    //     colors[colors.length-1]=color.hex
       
    //     this.setState({
    //         colors:colors
    //     })
    // }
   
    pushColor=()=>{
        this.setState({
           palette:{...this.state.palette, colors:[...this.state.palette.colors,{color:chroma(`rgb(${Math.floor(Math.random()*100)+150},
           ${Math.floor(Math.random()*100)+150},${Math.floor(Math.random()*200)+50})`).hex(),id:uuid(),name:''}]}
        })
    }
    saveColor=(i,st)=>{
        const newColors= this.state.palette.colors.slice()
        newColors[i]=st
        this.setState({
           palette:{...this.state.palette,colors:newColors}
        })
    }
    deleteColor=(i)=>{
        const newColors=this.state.palette.colors.slice()
        newColors.splice(i,1)
        console.log(newColors,'nohan')
        this.setState({
            palette:{...this.state.palette,colors:newColors}
        })

    }
    toggleSelect=()=>{
        this.setState({
            isSelectingEmoji:!this.state.isSelectingEmoji
        })
    }
    selectEmoji=(e)=>{
        const emoji=e.native
        this.setState({
            palette:{...this.state.palette,emoji:emoji},
            isSelectingEmoji:!this.state.isSelectingEmoji
        })
    }
    handleFocus=(evt)=>{
        evt.target.select()
    }

    render() { 
        const emoji= this.state.palette.emoji
        const isSelectingEmoji=this.state.isSelectingEmoji
        const colorsSampels= this.state.palette.colors.map((color,i)=>{
            return <ColorSample id={color.id} key={color.id} deleteColor={this.deleteColor} saveColor={this.saveColor} colorDetails={color} index={i}/>
        });
               
           
        return (
            <div>
                <Link to="/">
                    <img className="logo-img" saveColor={this.saveColor} src={img} style={{width:'100px'}} />
                </Link>
               <form className="create-form" onSubmit={this.handleSubmit}>
              
                   <input className="input-name"
                   onFocus={this.handleFocus}
                   placeholder="Palette name"
                   id="paletteName"
                   name="paletteName"
                   value={this.state.palette.paletteName}
                   onChange={this.handleChange}
                   />
                   <div className="pick-emoji" onClick={this.toggleSelect}>pick emoji{` ${emoji}`}</div>
                   <div className={`emoji-picker-container ${isSelectingEmoji && 'show-emoji-modal'}` }>
                    <Picker onSelect={this.selectEmoji}/> 
                   </div>
                  
                   <button className="save-palette" type="submit" >save</button>
               </form>
               <div className="color-sampels-container">
                  {colorsSampels}
                   <button className="add-color" onClick={this.pushColor}>Add color</button>
               </div>

               
            </div>
        )
    }
}
