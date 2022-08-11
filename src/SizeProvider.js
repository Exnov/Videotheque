//Le provider SizeProvider aide à maj et distribuer les classes Bootstrap des tailles de video à travers les differents composants : de Button (modification) à Video (recuperation)

const SizeContext = React.createContext(
    {
      update: () => {}, //fn de mise à jour des tailles de video
      sizeBtp:'videos col-md-3 col-sm-4 card', //par défaut
    }
  );

/**
 * la classe SizeProvider fera office de... Provider (!)
 * en englobant son enfant direct
 * dans le composant éponyme. De cette façon, ses values
 * seront accessibles de manière globale via le `Consumer`
 */
class SizeProvider extends React.Component {

  constructor(){
    super()
    this.update=this.update.bind(this)
    this.state = {
      update:this.update,
      sizeBtp:'videos col-md-3 col-sm-4 card', //par défaut
    }

  }

  update(sizeScreen){

    var classNameValues=''
    switch(sizeScreen) {
      case 1:
        classNameValues='col-md-3 col-sm-4'
        break;
      case 2:
        //classNameValues='col-md-6 col-sm-3'
        classNameValues='col-md-6 col-sm-3'
        break;
      case 3:
        classNameValues='col-md-12 col-sm-6'      
        break;
      default:
        // code block
    } 
    classNameValues='videos ' + classNameValues + ' card'

    console.log('classNameValues : ' + classNameValues)

    this.setState({sizeBtp:classNameValues}); 
  }   

  setSizeBtp(sizeBtp){
    this.setState({sizeBtp:sizeBtp});
  }

  render() {
    return (
      /**
       * la propriété value est très importante ici, elle rend
       * le contenu du state disponible aux `Consumers` de l'application
       */
      <SizeContext.Provider value={this.state}>
        {this.props.children}
      </SizeContext.Provider>
    );
  }
}


