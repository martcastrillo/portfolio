import "../styles/Video.scss";
import video from "../images/video.png";
function Video() {
    return (
      <div class='video_div'>
     
        
     <h1 className="video_title">video</h1>
     <a href="https://vimeo.com/498143722" title="Reel" target="_blank" rel="noreferrer">
					<img className="video_img" src={video} alt="" />
				</a>
      </div>
    );
  }

  export default Video;