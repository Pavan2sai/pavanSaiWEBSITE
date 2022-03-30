import {SocialMediaIconsReact} from 'social-media-icons-react';






function SocialMedia({hide}) {
    return (
        <div className="social-menu" style={{display:hide?'block':'none'}}>
        <ul>
            <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="#5A5B5B" iconSize="5" roundness="100%" url="https://github.com/pavan2sai" size="30" /></li>
            <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="#5A5B5B" iconSize="5" roundness="100%" url="https://instagram.com/pavan_.sai_" size="30" /></li>
            <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="#5A5B5B" iconSize="5" roundness="100%" url="" size="30" /></li>
            <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="#5A5B5B" iconSize="5" roundness="50%" url="https://linkedin.com/in/pavanrapeti" size="30" /></li>
        </ul>
      </div>


      );
}

export default SocialMedia;