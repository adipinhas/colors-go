import React, { Component } from 'react'
import { MaterialPicker } from 'react-color';
import chroma from 'chroma-js'


export default class colorSample extends Component {
state={
    color:this.props.colorDetails.color,
    name:'',
    id:this.props.id
}
onChangeComplete=(color)=>{
      
        this.setState({
            color:color.hex
        })
        this.props.saveColor(this.props.index,this.state)
}
  handleChange=(evt)=>{
      
     this.setState({
        [evt.target.name]:evt.target.value
    },()=>{
        this.handleSave()
    })
}

handleDeleteColor=()=>{
    this.props.deleteColor(this.props.index)
}
handleFocus=(evt)=>{
    evt.target.select()
}
handleSave=()=>{
    this.props.saveColor(this.props.index,this.state)
}



    render() {
        const color=this.state.color
        const isDark= chroma(color).luminance()<0.30
        return (
            <div className={`color-sample ${isDark && 'white'}`} style={{backgroundColor:this.state.color}}>
                <button onClick={this.handleDeleteColor} className="delete-color">X</button>
                <form onSubmit={this.complete}>
                 <label htmlFor="name">name</label>
                   <input
                //    onFocus={this.handleFocus}
                   id="name"
                   name="name"
                   placeholder="name"
                   value={this.state.name}
                   onChange={this.handleChange}
                   
                   />
                
                </form>
                <MaterialPicker
                color={color}
                onChangeComplete={this.onChangeComplete}
                />
                
                {!this.state.name&&'...'}
                {this.state.name&&this.state.name}

              

            </div>
        )
    }
}
