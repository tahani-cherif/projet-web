import React from 'react';
import Playliste from './playliste';
import Videoroute from './videoRoute';
class Liste3 extends React.Component {
    render(){
    return (
        <div>
         <Videoroute url="https://youtu.be/09KtDCeutbM" dec="Dans cette vidéo, vous verrez comment le langage 
        PHP peut vous aider à prendre le contrôle de votre site Web 
        et à gérer les données sur le site Web." 
         titre="PHP Pour débutants (avec des exemples d'utilisation)" view="Aucune vue .5 déc 2021" /> 
        <Playliste/>
        </div>
    );
}}

export default Liste3;
