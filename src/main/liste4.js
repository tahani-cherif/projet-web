import React from 'react';
import Playliste from './playliste';
import Videoroute from './videoRoute';
class Liste4 extends React.Component {
    render(){
    return (
        <div>
        <Videoroute url="https://youtu.be/aMj711t8FzY" dec="Dans le contexte du poo (ektebha kemla ) on a présenter dans ce vidéo les 
        fonctionnements et les parties différentes du Java" 
         titre="Savoir le fonctionnement du poo java" view="Aucune vue .4 déc 2021" /> 
        <Playliste/>
        </div>
    );
}}

export default Liste4;
