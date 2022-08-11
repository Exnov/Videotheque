

 class Buttons extends React.Component { 

    constructor(props){
        super(props)
        this.resizeVideo=this.resizeVideo.bind(this)      
        this.toggleVisibility=this.toggleVisibility.bind(this)
        this.state={
            visibility:true,
            text:'Bye', //texte du bouton toggle
            sBackground:'rgba(95, 158, 160, 0.5)', //background du block
            sVisibility:'visible', //visibilite des 3 btns size
        }
    }

    resizeVideo(update,sizeScreen){
        update(sizeScreen)
    }

    toggleVisibility(){

        var visibility=! this.state.visibility
        this.setState({visibility:visibility});
        if(visibility){
            this.setState({sBackground:'rgba(95, 158, 160, 0.5)'});
            this.setState({sVisibility:'visible'});  
            this.setState({text:'Bye'});
        }
        else{
            this.setState({sBackground:'none'});
            this.setState({sVisibility:'hidden'});        
            this.setState({text:'Hello'});
        }

    }

    render(){

        var sBackground={
            background:this.state.sBackground,
        }  
        var sVisibility={
            visibility:this.state.sVisibility,
        }   

        return(
            //---------------------------
            <SizeContext.Consumer>
                {({update}) => ( 
                <div id="block-btns" style={sBackground}>
                    <button type="button" className="btn btn-light" id="resize1" style={sVisibility} onClick={() => this.resizeVideo(update,1)}>petit</button> 
                    <button type="button" className="btn btn-light" id="resize2" style={sVisibility} onClick={() => this.resizeVideo(update,2)}>moyen</button> 
                    <button type="button" className="btn btn-light" id="resize3" style={sVisibility} onClick={() => this.resizeVideo(update,3)}>grand</button>  
                    <button type="button" className="btn btn-primary" id="toggle" onClick={this.toggleVisibility}>{this.state.text}</button> 
                </div>
                //--------------------------
                )}
            </SizeContext.Consumer> 
            //---------------------------
        )
    }         
 }