import { useState } from "react";
import VideoThumbnail from "react-video-thumbnail";
import VideoIcon from "@mui/icons-material/PlayCircleFilled";

/* eslint-disable react/prop-types */
const VideosContainer = ({ videos, setIsVideoOpen, setVideoURL }) => {
  if (videos.length > 0) {
    return (
      <div className="videos-container">
        <h2 className="videos-header">Highlights</h2>
        {videos.map((video, index) => {
          const [shown, setIsShown] = useState(false);

          return (
            <div key={index} className="highlight-container">
              <div
                className="thumbnail-container"
                onClick={() => {
                  setVideoURL(video.videoUrl);
                  setIsVideoOpen(true);
                }}
              >
                <VideoThumbnail
                  videoUrl={video.videoUrl}
                  thumbnailHandler={(thumbnail) => {
                    console.log(thumbnail);
                    setIsShown(true);
                  }}
                  width={260}
                  height={146.25}
                  style={{ display: shown ? "block" : "none" }}
                />
                <VideoIcon className="play-icon" htmlColor="white" />
              </div>
              <p>
                {video.minute}', {video.description}
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};

export default VideosContainer;
