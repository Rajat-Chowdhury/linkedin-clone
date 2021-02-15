import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src=' https://i.pinimg.com/originals/d3/f8/e1/d3f8e11d95940bb78b1dc08a73fb3af2.jpg' alt='' />
                <Avatar className='sidebar__avatar' />
                <h2> Gonpachiro </h2>
                <h4>Demon Slayer</h4>
            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>100</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on posts</p>
                    <p className='sidebar__statNumber'>1000</p>
                </div>
            </div>
            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('nodejs')}
                {recentItem('mongodb')}
                {recentItem('express')}
                {recentItem('design')}
            </div>
        </div>
    )
}

export default Sidebar
