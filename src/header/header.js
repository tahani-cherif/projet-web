import React,{Component} from 'react'
import './header.css'
import {FaYoutube} from 'react-icons/fa'
import {MdSearch,MdVideoCall,MdViewComfy } from 'react-icons/md'
import {AiTwotoneBell} from 'react-icons/ai'
import { Link } from 'react-router-dom'

 class Header extends Component{
     render ()
     {
         return(
             <body>
             <div className='headerarea'>
                <div className="Header">
                    <header className='header' >
                        <button className='button'>
                            &#9776;
                        </button>
                        <Link to="/">  <FaYoutube color='red' fontSize='3rem'/></Link>
                        <div>
                            YouTube
                        </div>
                    </header>
                    <div className='Search'>
                        <input type='search' placeholder='search'/>
                        <div className='search'>
                          <div className="s">  <MdSearch fontSize='3rem' /></div>
                        </div>
                    </div>
                    <div className='Icon'>
                        <div className='icon'><MdVideoCall fontSize='2.8rem'/></div>
                        <div className='icon'><MdViewComfy fontSize='2.8rem'/></div>
                        <div className='icon'><AiTwotoneBell fontSize='2.8rem'/></div>
                        <div className='icon'>
                            <img src='/images/image.png' alt='image1'/>
                        </div>

                    </div>
                </div>
             </div>
             </body>
         )
     }
 }
 export default Header ;