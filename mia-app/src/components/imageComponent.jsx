import React from "react"

//Ogni componente a classe dovrà essere esteso da React 

class ImageComponent extends React.Component {
    
    render (){
        return <img src={this.props.url} alt={this.props.alt} />
    }
   
}
console.log(ImageComponent)

export default ImageComponent;