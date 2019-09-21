import React, { Component } from 'react';
import {FacebookIcon,TwitterIcon,TelegramIcon,WhatsappIcon,GooglePlusIcon,LinkedinIcon,PinterestIcon,VKIcon,
  OKIcon,RedditIcon,TumblrIcon,LivejournalIcon,MailruIcon,ViberIcon,WorkplaceIcon,EmailIcon,
} from 'react-share';
import {FacebookShareButton,GooglePlusShareButton,LinkedinShareButton,TwitterShareButton,TelegramShareButton,
  WhatsappShareButton,PinterestShareButton,VKShareButton,OKShareButton,RedditShareButton,TumblrShareButton,
  LivejournalShareButton,MailruShareButton,ViberShareButton,WorkplaceShareButton,EmailShareButton,
  } from 'react-share';
import { FacebookShareCount,
  GooglePlusShareCount,LinkedinShareCount,PinterestShareCount,VKShareCount,OKShareCount,RedditShareCount,TumblrShareCount,
} from 'react-share';

import "../../stylesheets/NavBar.css";

class ShareIcons extends Component {

  constructor(props){
    super(props);
    this.state = { fb: false, tw: false, li: false, rd: false, em: false };
  }

onMouseEnterHandler = (icon) => {
  console.log('entered container!');

  switch(icon){
    case 'fb':
      this.setState({fb: true});
      break;
    case 'tw':
    this.setState({tw: true});
      break;
    case 'li':
    this.setState({li: true});
      break;
    case 'rd':
    this.setState({rd: true});
      break;
    case 'em':
    this.setState({em: true});
      break;
    default:
      break;
  }

}

onMouseExitHandler = (icon) => {
  console.log('exited container!');

  switch(icon){
    case 'fb':
      this.setState({fb: false});
      break;
    case 'tw':
    this.setState({tw: false});
      break;
    case 'li':
    this.setState({li: false});
      break;
    case 'rd':
    this.setState({rd: false});
      break;
    case 'em':
    this.setState({em: false});
      break;
    default:
      break;
  }
}

getIconSize(icon){

  const smallSize = 32;
  const largeSize= 50;

  switch(icon){
    case 'fb':
      if(this.state.fb === true){
        return largeSize;
      } else {
        return smallSize;
      }
      break;
    case 'tw':
      if(this.state.tw === true){
        return largeSize;
      } else {
        return smallSize;
      }
      break;
    case 'li':
        if(this.state.li === true){
          return largeSize;
        } else {
          return smallSize;
        }
      break;
    case 'rd':
      if(this.state.rd === true){
        return largeSize;
      } else {
        return smallSize;
      }
      break;
    case 'em':
      if(this.state.em === true){
        return largeSize;
      } else {
        return smallSize;
      }
      break;
    default:
      break;
  }

}

render() {
	return(
    <div class="share-container">
      <div class="share-icon" onMouseEnter={() => this.onMouseEnterHandler('fb')} onMouseLeave={() => this.onMouseExitHandler('fb')}>
          <FacebookShareButton

          url={window.location.href}

          title={"Hey everyone! Check out this website!"}
          windowWidth={750}
          windowHeight={600}
          className="button">
            <FacebookIcon

              size={this.getIconSize('fb')}
              round={true}
            />
        </FacebookShareButton>
      </div>

      <div class="share-icon" onMouseEnter={() => this.onMouseEnterHandler('tw')} onMouseLeave={() => this.onMouseExitHandler('tw')}>
          <TwitterShareButton
          url={window.location.href}
          title={"Hey everyone! Check out this website!"}
          windowWidth={750}
          windowHeight={600}
          className="button">
            <TwitterIcon
              size={this.getIconSize('tw')}
              round={true} />
        </TwitterShareButton>
      </div>

      <div class="share-icon" onMouseEnter={() => this.onMouseEnterHandler('li')} onMouseLeave={() => this.onMouseExitHandler('li')}>
          <LinkedinShareButton
          url={window.location.href}
          title={"Hey everyone! Check out this website!"}
          windowWidth={750}
          windowHeight={600}
          className="button">
            <LinkedinIcon
              size={this.getIconSize('li')}
              round={true} />
        </LinkedinShareButton>

      </div>

      <div class="share-icon" onMouseEnter={() => this.onMouseEnterHandler('rd')} onMouseLeave={() => this.onMouseExitHandler('rd')}>
          <RedditShareButton
          url={window.location.href}
          title={"Hey everyone! Check out this website!"}
          windowWidth={750}
          windowHeight={600}
          className="button">
            <RedditIcon
              size={this.getIconSize('rd')}
              round={true} />
        </RedditShareButton>

      </div>

      <div class="share-icon" onMouseEnter={() => this.onMouseEnterHandler('em')} onMouseLeave={() => this.onMouseExitHandler('em')}>
          <EmailShareButton
          url={window.location.href}
          title={"Hey everyone! Check out this website!"}
          windowWidth={750}
          windowHeight={600}
          className="button">
            <EmailIcon
              size={this.getIconSize('em')}
              round={true} />
        </EmailShareButton>

      </div>

    </div>
	);
}

}
export default ShareIcons;
