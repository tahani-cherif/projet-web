import Commentaire from './commentaire';
import React ,{Component} from 'react';
import Pictogramme from './pictograme';

class App extends Component {
  constructor(){
    super();
    this.state={msg :"Bon ne découverte des composants React Components!!!"};
  }
  change=()=>{
    this.setState({msg :"prmiére défi réussi" });
  }

  render() {
  return (
    <div class="col-6 offset-3">
      <div class="card">
        <div class="card-block">
          <div class="row">
            <div class="col-2">
              <img src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg"  class="rounded float-left" class="img-thumbnail" width="80" height="70" />
            </div>
            <div class="col-10 profile-row">
              <div class="row">
                <a href="#"><h1> Débuter avec React </h1></a>
              </div>
            </div>
          </div>
          <p>{this.state.msg}</p>
      
          <div>
            <Pictogramme x={this.change}/>
          </div>
        </div>
  
        <div class="card-footer text-muted">
         <Commentaire x={this.change}/>
        </div>
  
      </div>
    </div>
      )
  }
  }

export default App ;