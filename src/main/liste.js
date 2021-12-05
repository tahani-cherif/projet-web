import React from 'react';
import Playliste from './playliste';
import Videoroute from './videoRoute';
class Liste extends React.Component {
    render(){
    return (
        <div>
        <Videoroute url="https://youtu.be/yR25V80yMgM" dec="Suite au phénomène de l'harcèlement sexuelle qui est trop développer 
        dan les dernières décennies on a décidé
         de créer un suite web HOPE afin d'encourager les victimes
         d'en parler sur l'effet de l'harcèlement et être un moyen pour les aider" 
         titre="un mini projet dans le but de créer un site web" view="Aucune vue .4 déc 2021" /> 
        <Playliste/>
        </div>
    );
}}

export default Liste;
