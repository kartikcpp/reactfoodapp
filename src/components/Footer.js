import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';
function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <TwitterIcon/>
                <FacebookIcon/>
                <LinkedInIcon/>
            </div>
           
        </div>
    )
}

export default Footer
