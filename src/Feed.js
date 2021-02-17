import React from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

const Feed = () => {

  

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input' >
                    <CreateIcon />
                    <form >
                        <input type='text'  />
                        <button type='submit' >Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption title='Photo ' color='#70b5f9' Icon={ImageIcon} />
                    <InputOption title='Video' color='#e7a33e' Icon={SubscriptionsIcon} />
                    <InputOption title=' Event ' color='#c0cbcd' Icon={EventNoteIcon} />
                    <InputOption title='Write article ' color='#7fc15e' Icon={CalendarViewDayIcon } />
                </div>
            </div>
           <Post name='Gonpachiro' description='this is a test ' message=' nezukoo' />
  

            
        </div>
    )
}

export default Feed
