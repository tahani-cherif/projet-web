import React,{Component} from 'react';
import ReactPlayer from 'react-player'
import {BiLike,BiDislike} from 'react-icons/bi'
import {RiShareForwardLine } from 'react-icons/ri'
import {BsTextIndentRight } from 'react-icons/bs'

import {GrSend} from 'react-icons/gr'
import './videoRoute.css'
class Videoroute extends Component{
  constructor(props) {
    super(props);
    this.state = { counter: 0,
                 counter2: 0,
                 on1 :false,
                 on2 :false,
                commt:"",
                commt2:""}
   this.testlike=this.testlike.bind(this);
   this.testdislike=this.testdislike.bind(this);
   //this.handleChange = this.handleChange.bind(this);
   
   
  }

  testlike(){
    if(this.state.on1===false)
    {this.setState({on1:true,
        counter: this.state.counter+1,
        counter2: 0,
       })
       if(this.state.on2===true)
       {{this.setState({on2:false,
           counter2: this.state.counter2-1,})}}
       
    }
    else
    {
        this.setState({on1:false,
            counter: this.state.counter-1
            });         
    }

}
  testdislike(){
    if(this.state.on2===false)
    {this.setState({on2:true,
        counter2: this.state.counter2+1,
        counter1: 0,
        color:"bleu"
                 })
        if(this.state.on1===true)
        {{this.setState({on1:false,
            counter: this.state.counter-1})}}
     
    }
    else
    {
        this.setState({on2:false,
            counter2: this.state.counter2-1});         
    }

}
  change=e=>{
    this.setState({commt : e.target.value});
  }
  msg()
  {
    alert("votre commontaire a été envoyer")
  }
 render(){
   return (
    <div >
      <div className="a">
    <ReactPlayer url={this.props.url} height='506px' width="900px"  controls />
    <p>{this.props.titre}</p>
    <p className="viewvideo">{this.props.view}</p>
    <div className="like">
    <div>
      <button onClick={this.testlike} > <BiLike /></button>
     <p  className="nb">{this.state.counter}</p>
     </div>
     <div>
     <button  onClick={this.testdislike} > <BiDislike/></button>
     <p className="nb">{this.state.counter2}</p>
     </div>
     <button className="partage"><RiShareForwardLine /></button>
     <p className="p">PARTAGER</p>
     <div className="enr">
     <button className='enrg'>  <BsTextIndentRight /></button> 
      <p className="eng">ENREGISTRER</p>
      </div>
    </div>
    <hr/>
    <div>
     <img src="/images/image.png" className="img1"/>
     <p className="chaine1">PROJECT TEAM</p>
     <p className="discp">{this.props.dec}</p>
     </div>
     <div className="commt">
       <hr className="hr2"/>
       <label  className="label">Commontaire</label>
       <input className="input" type="text" onChange={this.change} value={this.state.commt}/>
       <button className="sub" type="submit" onClick={this.msg}><GrSend/></button>
       <p>{this.state.commt}</p>
       

     </div>
    </div>
  </div>
   )
}}

export default Videoroute;
