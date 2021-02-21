import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';


const Feed = () => {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       db.collection('posts').onSnapshot(snapshot => (
           setPosts(snapshot.docs.map(doc => (
               {
                   id: doc.id,
                   data: doc.data()
               }
           )))
       ))
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: ' Gonpachiro',
            description: ' this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

    }

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input' >
                    <CreateIcon />
                    <form >
                        <input type='text' value={input} onChange={e => setInput(e.target.value)} />
                        <button type='submit' onClick={sendPost} >Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption title='Photo ' color='#70b5f9' Icon={ImageIcon} />
                    <InputOption title='Video' color='#e7a33e' Icon={SubscriptionsIcon} />
                    <InputOption title=' Event ' color='#c0cbcd' Icon={EventNoteIcon} />
                    <InputOption title='Write article ' color='#7fc15e' Icon={CalendarViewDayIcon} />
                </div>
            </div>

            {posts.map(({ id, data: { name, message, description, photoUrl } }) => (
                <Post 
                key={id} 
                name={name} 
                message={message} 
                description={description}  
                photoUrl={photoUrl} />

            ))}

           
        </div>
    )
}

export default Feed
