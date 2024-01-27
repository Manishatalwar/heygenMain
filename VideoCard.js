import React, { useState, useRef } from 'react';
import "./VideoCard.css";

const videoData = [
  {
    id: 1,
    title: 'Free Instant Avatar',
    content: 'Demo',
    finetune: 'Finetune',
    thumbnail: 'https://files.heygen.ai/avatar/v3/2072d60780d042b0908b09ea4fc1c6b7_3011/preview_target_medium.webp',
    videoUrl: 'https://files.heygen.ai/avatar/v3/2072d60780d042b0908b09ea4fc1c6b7_3011/preview_video_target.mp4',
    creator: 'Joshua HeyGen CEO',
  },
  
  {
    id: 2,
    title: "Another Video Title",
    content: "Another Demo",
    finetune: "Another Finetune",
    thumbnail: "https://files.heygen.ai/avatar/v3/10063c743f114722ab6538b35905c51c_3013/preview_target_medium.webp",
    videoUrl: "https://files.heygen.ai/avatar/v3/10063c743f114722ab6538b35905c51c_3013/preview_video_target.mp4",
    creator: "John Doe"
  },
  {
    id: 3,
    title: "Yet Another Title",
    content: "Yet Another Demo",
    finetune: "Yet Another Finetune",
    thumbnail: "https://files.heygen.ai/avatar/v3/3be86de8adfc430baa5902f77eb9e5b3_2625/preview_target_medium.webp",
    videoUrl: "https://files.heygen.ai/avatar/v3/3be86de8adfc430baa5902f77eb9e5b3_2625/preview_video_target.mp4",
    creator: "Blake"
  }
  ,
  {
    id: 4,
    title: 'Video Title 6',
    content: 'Demo 6',
    finetune: 'Finetune 6',
    thumbnail: 'https://files.heygen.ai/avatar/v3/8cf8ec8d3ca84bd489150779b16a6861_2624/preview_target_medium.webp',
    videoUrl: 'https://files.heygen.ai/avatar/v3/8cf8ec8d3ca84bd489150779b16a6861_2624/preview_video_target.mp4',
    creator: 'Blake'
  }
,  
  {
    id: 5,
    title: 'Free Instant Avatar',
    content: 'Demo',
    finetune: 'Finetune',
    thumbnail:   'https://files.heygen.ai/avatar/v3/10063c743f114722ab6538b35905c51c_3013/preview_target_medium.webp',   videoUrl: 'https://files.heygen.ai/avatar/v3/2072d60780d042b0908b09ea4fc1c6b7_3011/preview_video_target.mp4',
    videoUrl:"https://files.heygen.ai/avatar/v3/e259aabd01a24e958299ce130b6f4928_2623/preview_video_target.mp4",
    creator: 'Edward',
  },
  {
    id: 6,
    title: 'Free Instant Avatar',
    content: 'Demo',
    finetune: 'Finetune',
    thumbnail:   'https://files.heygen.ai/avatar/v3/10063c743f114722ab6538b35905c51c_3013/preview_target_medium.webp',   videoUrl: 'https://files.heygen.ai/avatar/v3/2072d60780d042b0908b09ea4fc1c6b7_3011/preview_video_target.mp4',
    videoUrl:"https://files.heygen.ai/avatar/v3/b596c0849b7942778ad27f63c5995e33_2626/preview_video_talk_1.mp4",
    creator: 'Leah',
  },
  {
    id: 7,
    title: 'Free Instant Avatar',
    content: 'Demo',
    finetune: 'Finetune',
    thumbnail:   'https://files.heygen.ai/avatar/v3/10063c743f114722ab6538b35905c51c_3013/preview_target_medium.webp',   videoUrl: 'https://files.heygen.ai/avatar/v3/2072d60780d042b0908b09ea4fc1c6b7_3011/preview_video_target.mp4',
    videoUrl:"https://files.heygen.ai/avatar/v3/5c304ab1e7534e2c887e2f795fbe6568_1354/preview_video_talk_1.mp4",
    creator: 'Matthew',
  },

  // Add more video objects as needed
];

const VideoCard = () => {
  const [isPlaying, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      const method = isPlaying ? 'pause' : 'play';
      videoRef.current[method]();
      setPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <div >
  <div className="square-box">
    <div className="background"></div>
    <div className="center-content">
      <button className="btn-purple">Free Instant Avatar</button>
    </div>
  </div>
  </div>
      {videoData.map(video => (
        <div key={video.id} className="video-container" >
          <video controls className="css-b1m6tv" ref={videoRef} src={video.videoUrl}></video>

      

          <div className="play-pause-buttons">
            <button className="play-button" onClick={togglePlayPause}>
              {isPlaying ? 'Demo' : 'Demo'}
            </button>
            {/* New finetune button */}
            <button className="finetune-button">
              {video.finetune}
            </button>
          </div><span>{video.creator}</span>
      
        {/* Additional content goes here */}
        <p></p>
      </div>
        
        
      ))}
    
    </div>
  );
};

export default VideoCard;
