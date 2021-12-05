import React,{Component} from 'react';
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
class Video extends Component {
  render(){
  return (
    <>
    <div >
      <ReactPlayer url='https://youtu.be/yR25V80yMgM'
       height='200px' width="320px" controls className="x" />
       <img src="/images/image.png" className="img"/>
       <Link to="/liste"> <p className="titre">un mini projet dans le but de créer un site web</p></Link>
      <p className="chaine">PROJECT TEAM</p>
      <p className="view">Aucune vue .4 déc 2021</p>
     </div>
     <div>
      <ReactPlayer url='https://youtu.be/CFBP8gVyx3w'
       height='200px' width="320px" controls className="x" />
       <img src="/images/image.png" className="img"/>
       <Link to="/liste2"> <p className="titre">création d'un site pour une club de robotique pour des enfants</p></Link>
      <p className="chaine">PROJECT TEAM</p>
      <p className="view">8 vues .3 déc 2021</p>
     </div>
     <div>
      <ReactPlayer url='https://youtu.be/09KtDCeutbM'
       height='200px' width="320px" controls className="x" />
       <img src="/images/image.png" className="img"/>
       <Link to="/liste3"> <p className="titre">PHP Pour débutants (avec des exemples d'utilisation)</p></Link>
      <p className="chaine">PROJECT TEAM</p>
      <p className="view">Aucune vue .5 déc 2021</p>
     </div>
     <div>
      <ReactPlayer url='https://youtu.be/aMj711t8FzY'
       height='200px' width="320px" controls className="x" />
       <img src="/images/image.png" className="img"/>
       <Link to="/liste4"> <p className="titre">Savoir le fonctionnement du poo java</p></Link>
      <p className="chaine">PROJECT TEAM</p>
      <p className="view">Aucune vue .4 déc 2021</p>
     </div>
     <div>
      <ReactPlayer url='https://youtu.be/iJ2heZGCqvQ'
       height='200px' width="320px" controls className="x" />
       <img src="/images/image.png" className="img"/>
       <Link to="/liste5"> <p className="titre">How to build a website from scratch with wix</p></Link>
      <p className="chaine">PROJECT TEAM</p>
      <p className="view">Aucune vue .5 déc 2021</p>
     </div>
     <div>
      <ReactPlayer url='https://youtu.be/C5TWT9mCr1w'
       height='200px' width="320px" controls className="x" />
       <img src="/images/image.png" className="img"/>
       <Link to="/liste6"> <p className="titre">présentation d'un projet avec langage c</p></Link>
      <p className="chaine">PROJECT TEAM</p>
      <p className="view">Aucune vue .5 déc 2021</p>
     </div>

     </>
  );
}}

export default Video;
