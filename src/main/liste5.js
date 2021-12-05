import React from 'react';
import Playliste from './playliste';
import Videoroute from './videoRoute';
class Liste5 extends React.Component {
    render(){
    return (
        <div>
        <Videoroute url="https://youtu.be/iJ2heZGCqvQ" dec="Description: In this video you will
         learn the basic tools that you’ll need to build a beautiful website with wix.com" 
         titre="How to build a website from scratch with wix" view="Aucune vue .5 déc 2021" /> 
        <Playliste/>
        </div>
    );
}}

export default Liste5;
