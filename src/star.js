import React ,{Component, component} from 'react' ;
class Star extends Component {
    constructor(){
        super()
        this.state={on : false};
        this.test=this.test.bind(this);
    }
    test(){
        if(this.state.on==false)
        {this.setState({on:true});}
        else
        {
            this.setState({on:false});
        }
    }
  render(){
    return(

        <img src={this.state.on ? process.env.PUBLIC_URL +'/star_On.png' : process.env.PUBLIC_URL +'/star_Off.png' }
        onClick={this.test} />
    )
  }
}

export default Star;