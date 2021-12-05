import React from 'react';
import ReactPlayer from 'react-player'
import Video from './video';
import {Link} from 'react-router-dom'
import'./play.css'
import Test from './test';

class Playliste extends React.Component{
    render(){
    return (
        <div className="liste">
            <Test url="https://youtu.be/yR25V80yMgM" titre="un mini projet dans le but de créer un site web" view="Aucune vue .4 déc 2021"/>
            <Test url="https://youtu.be/CFBP8gVyx3w" titre="création d'un site pour une club de robotique pour des enfants" view="8 vues .3 déc 2021"/>
            <Test url="https://youtu.be/09KtDCeutbM" titre="PHP Pour débutants (avec des exemples d'utilisation)" view="Aucune vue .5 déc 2021"/>
            <Test url="https://youtu.be/aMj711t8FzY" titre="Savoir le fonctionnement du poo java" view="Aucune vue .4 déc 2021"/>
            <Test url="https://youtu.be/iJ2heZGCqvQ" titre="How to build a website from scratch with wix" view="Aucune vue .5 déc 2021"/>
            <Test url="https://youtu.be/C5TWT9mCr1w" titre="présentation d'un projet avec langage c" view="Aucune vue .5 déc 2021"/>
        </div>
    );
}
}
export default Playliste;
