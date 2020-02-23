import uuid from 'uuid'


 

 if((localStorage.getItem('palettes')&&localStorage.getItem('palettes')[0])){
  //  console.log('papa')
    var arr=(localStorage.getItem('palettes'))
 }else {
   
   
   var arr=[
    {
      paletteName: "Strong",
        id: "brands",
        emoji: "🎨",
        colors: [
          { name: "red", color: "rgb(65,93,155)",id:uuid() },
          { name: "pink", color: "#E91E63",id:uuid() },
          { name: "purple", color: "#9C27B0",id:uuid() },
          { name: "deeppurple", color: "#673AB7",id:uuid() },
          { name: "indigo", color: "#3F51B5" ,id:uuid() },
        ]
      },
     
      
      
      {
        paletteName: "Aussie",
        id: "flat-ui-colors-aussie",
        emoji: "",
        colors: [
          { name: "Beekeeper", color: "#f3e58d",id:uuid() },
          { name: "SpicedNectarine", color: "#ffbe76",id:uuid() },
          { name: "PinkGlamour", color: "#ff7979" ,id:uuid() },
          { name: "DeepCove", color: "#130f40" ,id:uuid() },
          { name: "WizardGrey", color: "#535c68" ,id:uuid() }
        ]
      },
      
      {
        paletteName: "Spanish",
        id: "flat-ui-colors-spanish",
        emoji: "",
        colors: [
          { name: "JacksonsPurple", color: "#40407a",id:uuid() },
          { name: "C64Purple", color: "#706fd3" ,id:uuid() },
          { name: "GreyPorcelain", color: "#84817a" ,id:uuid() },
          { name: "AlamedaOchre", color: "#cc8e35" ,id:uuid() },
          { name: "Desert", color: "#ccae62" ,id:uuid() }
        ]
      },
     
     
    ]
    localStorage.setItem('palettes',JSON.stringify(arr))
 }
 var palettes=JSON.parse(localStorage.getItem('palettes'))
 
 
 
  
  export default {
    palettes,


  }