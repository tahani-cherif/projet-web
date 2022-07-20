import React,{Component} from 'react';
import ReactPlayer from 'react-player'
class Test extends Component {
  render(){
  return (
    <>
    <div>
      <ReactPlayer url={this.props.url}
       height='200px' width="320px" controls/>
       <img src="/images/image.png" className="img"/>
       <p className="titre">{this.props.titre}</p>
      <p className="chaine">PROJECT TEAM</p>
      <p className="view">{this.props.view}</p>
     </div>
     </>
     )
     }
    }
export default Test;
