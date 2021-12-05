import React from 'react';
import Playliste from './playliste';
import Videoroute from './videoRoute';
class Liste2 extends React.Component {
    render(){
    return (
        <div>
          <Videoroute url="https://youtu.be/CFBP8gVyx3w" titre="création d'un site pour une club de robotique pour des enfants"
          view="8 vues. 3 déc 2021" dec="comment créer un site web en utilisant html css et javascript même si vous vous êtes débutant.
          Vous souhaitez apprendre a coder ou a développer votre propre site web ou peut être approfondir vos connaissances en codage.
          dans cette formation nous vous expliquons étape par étape comment vous pouvez créer votre propre site web en utilisant du html, du css et JavaScript pour créer un site web professionnel.
          vous pouvez utiliser ces technique que nous vous expliquons ici pour développer n'importe quel site web que vous voulez.
          cette formation pourra vous aider dans vos projet personnel."/>  
          <Playliste/>
        </div>
    );
}}

export default Liste2;
