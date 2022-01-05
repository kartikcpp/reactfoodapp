import React from 'react';
import '../styles/Contact.css';
import photo from '../images/photo.jpeg';
function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide' style={{backgroundImage:`url(${photo})`}}>
                
            </div>
            <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
            <lable htmlfor="name">FULL NAME</lable>
            <input name="name"type="text" placeholder='enter your name'/>
            <lable htmlfor="email" >EMAIL</lable>
            <input name="email" type="email" placeholder='enter email'/>
            <lable htmlfor="mesage" >Meassage</lable>
            <textarea name='message'id=''rows='8' placehoder='enter your message'></textarea>
            <button type='submit'>Send message</button>

            </form>

            </div>
            
        </div>
    )
}

export default Contact
