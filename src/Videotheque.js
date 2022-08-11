

 class Videotheque extends React.Component { 

    renderNameMedias(clip){ //renvoie la liste des videos à partir de leur numero

        var nameMedias=[]
        var nVideos=clip.nVideos

        for(var i=1;i<=nVideos;i++){
            var zero=''
            if(i<=9){
                zero='0'
            }
            var nameMedia=zero+ i.toString() 
            nameMedias.push(nameMedia)
        }
        clip.nameMedias=nameMedias

        return clip

    }

    renderVideotheque(){

        var clips=[ //c'est ici que vous signalez à l'appli l'ajout de vos videos ==> cf les 2 exemples ci-dessous
            //{'name':'RHCP','repo':'rhcp','nVideos':1,'nameMedias':[]},  //exemple 1
            //{'name':'Muse','repo':'muse','nVideos':2,'nameMedias':[]},  //exemple 2
        ]
        clips.map(this.renderNameMedias);

        var videotheque=clips.map(function(clip){ 
            return (
                <Video
                    clip={clip}
                />
            )
        });
        return videotheque
    }

    render(){

        return(
            <div id="videotheque">
				{this.renderVideotheque()}
            </div>            
        )
    }          
 }