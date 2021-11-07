import React ,{Component, component} from 'react' ;
import Star from './star';
import './App.css';
class App extends Component {
  render(){
    return(
      <div className="star">
        <h3>Donne ton avis</h3>
      <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
      </div>
    )
  }
}

export default App;
