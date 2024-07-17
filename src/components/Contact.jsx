import React from 'react'
import './Contact.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Email, LinkedIn } from '@mui/icons-material';
import { Web } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';

export const Contact = () => {
  return (
    <section className='contact-container'> 
        <div className='contact-content'>
            <div className='contact-left'>
            <h1 className='contact-title'>Contact Us!</h1>
            <p className='hero-description'>Vox<span className='scribe'>scribe</span> is helping reporters and journalists streamline their workflow by providing a reliable and efficient platform for transcription and translation of audio content. <br></br>Project made by Carla Hau</p>
            </div>
            <div className='contact-right'>
                <p className='contact-socials'>Socials</p>
                <ul className='contact-items'>
                    <li><GitHubIcon color='primary' className="social-icons"/><a href=''>Github</a></li>
                    <li><LinkedIn color='primary' className="social-icons"/><a href=''>Linkedin</a></li>
                    <li><Web color='primary' className="social-icons"/><a href=''>Devpost</a></li>
                    <li><Mail color='primary' className="social-icons"/><a href='mailto:carlahau110@gmail.com'>Email</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}
