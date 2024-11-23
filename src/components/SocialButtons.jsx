import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function SocialButtons() {
  return (
    <div className="social-links">
      <button className="social-links-button">
        <FacebookIcon style={{opacity: ".5"}}/>
      </button>

      <button className="social-links-button">
        <TwitterIcon style={{opacity: ".5"}}/>
      </button>

      <button className="social-links-button">
        <InstagramIcon style={{opacity: ".5"}}/>
      </button>
    </div>
  )
}

export default SocialButtons