

 class Video extends React.Component { 

    constructor(props){
        super(props)
        this.state={
            videoName:this.props.clip.name,
            repo:this.props.clip.repo,
            mediaNames:this.props.clip.nameMedias,
        }
    }

    renderVideo(){

        var repo=this.state.repo

        var clip=this.state.mediaNames.map(function(mediaName){ 
            return (
                //---------------------------
                <SizeContext.Consumer>
                    {({sizeBtp}) => ( 
                    //---------------------------
                    <div style={{textAlign: 'center'}} className={sizeBtp}>
                        <video poster={'videos/'+repo+'/'+mediaName+'.png'} width="100%" controls>
                            <source src={'videos/'+repo+'/'+mediaName+'.mp4'} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>         
                    //--------------------------
                    )}
                </SizeContext.Consumer>   
                //---------------------------
            )
        });

        return clip
    }

    render () {
        
        return (
            <div>
                <h2 className="videoCategory">{this.state.videoName}</h2>
                <div className="row">
                    {this.renderVideo()}
                </div>
            </div>
        )
    }         
 }