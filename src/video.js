import React from 'react';
import ReactVideo from 'react.video';
 
class Video extends React.Component {
 
  constructor (props) {
    super(props);
    this.onClickPlay = this.onClickPlay.bind(this);
    this.state = {
      muted: false,
      source: [
        {
          src: 'http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4',
          type: 'video/mp4'
        }
      ]
    };
  }
 
  // play() method is called via refs. 
  onClickPlay () {
    this.refs.VideoComp.play();
  }
 
  render () {
    // a basic style object 
    const VideoStyle = {
        backgroundColor: 'green'
    };
 
    return (
      <div style={{marginTop: '20px'}}>
      <ReactVideo
        ref={'VideoComp'}
        cls={'custom-video'} 
        height={500} width={'100%'}
        style={VideoStyle}
        muted={this.state.muted}
        src={'http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4'}
        source={this.state.source}>
      </ReactVideo>
 
      <div>
        <div onClick={this.onClickPlay}></div>
      </div>
      </div>
    );
  }
};
 
export default Video;