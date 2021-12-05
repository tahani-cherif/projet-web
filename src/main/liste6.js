import React from 'react';
import Playliste from './playliste';
import Videoroute from './videoRoute';
class Liste6 extends React.Component {
    render(){
    return (
        <div>
        <Videoroute url="https://youtu.be/C5TWT9mCr1w" dec="Dans cette vidéo, vous pourrez voir un projet sur 
        lequel notre équipe a travaillé au cours de notre première année de collège avec le langage de
         programmation C. c'est une application développée avec ce langage qui permet de gérer les affectations des voitures ." 
         titre="présentation d'un projet avec langage c" view="Aucune vue .5 déc 2021" /> 
        <Playliste/>
        </div>
    );
}}

export default Liste6;
