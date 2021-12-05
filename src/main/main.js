import React,{Component}  from "react";
import './main.css'
import{MdHome,MdVideoLibrary,MdHistory,MdWatchLater,MdRssFeed,MdPlaylistPlay} from  'react-icons/md'
import {FaGripfire,FaFutbol,FaNewspaper,FaMusic} from 'react-icons/fa'
import{BsFillCollectionPlayFill} from 'react-icons/bs'
import {GiGamepad} from 'react-icons/gi'
import Video from "./video";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Videoroute from "./videoRoute";
import Playliste from "./playliste";


class Main extends Component{
    render(){
        return(
            <div className="main">
            <div className="sidebar">
                <div className="home">
                    <div className='quik_icon'>
                         <MdHome color='red' fontSize="3tem"/>
                        <div>Home</div>
                    </div>
                    <div className='quik_icon'>
                    <FaGripfire color='grey' fontSize="3tem"/>
                        <div>Trending</div>
                    </div>
                    <div className='quik_icon'>
                        <BsFillCollectionPlayFill color='grey' fontSize="3tem"/>
                        <div>Subscriptions</div>
                    </div>
                </div>
                <div className='library'>
                    <div className='quik_icon'>
                        <MdHome color='grey' fontSize="3tem"/>
                        <div>Home</div>
                    </div>
                    <div className='quik_icon'>
                        <MdVideoLibrary  color='grey' fontSize="3tem"/>
                        <div>Video Library</div>
                    </div>
                    <div className='quik_icon'>
                        <MdHistory color='grey' fontSize="3tem"/>
                        <div>History</div>
                    </div>
                    <div className='quik_icon'>
                        <MdWatchLater color='grey' fontSize="3tem"/>
                        <div>Watch Later</div>
                    </div>
                    <div className='quik_icon'>
                        <MdPlaylistPlay color='grey' fontSize="3tem"/>
                        <div>YouTube Clone</div>
                    </div>
                </div>
                <div className='more_from_youtube'>
                    <div className='quik_icon'>
                        <GiGamepad color='grey' fontSize="3tem"/>
                        <div>Gaming</div>
                    </div>
                    <div className='quik_icon'>
                        <MdRssFeed color='grey' fontSize="3tem"/>
                        <div>Live</div>
                    </div>
                    <div className='quik_icon'>
                        <FaFutbol color='grey' fontSize="3tem"/>
                        <div>Sports</div>
                    </div>
                    <div className='quik_icon'>
                        <FaMusic color='grey' fontSize="3tem"/>
                        <div>Musics</div>
                    </div>
                    <div className='quik_icon'>
                        <FaNewspaper color='grey' fontSize="3tem"/>
                        <div>News</div>
                    </div>
                </div>
            </div>
            <div className='Main'>
                <div className="videos">
                   <Video/>                    
                    </div>
                </div>
               
            </div>
            
        )
    }
}
export default Main ;