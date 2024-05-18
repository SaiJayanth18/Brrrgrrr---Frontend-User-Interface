import React from 'react';
import videoBg from "./goodburger.mp4";
function BackgroundVideo() {
  return (
    <div className="background-video">
    <div className='overlay'></div>
      <video autoPlay muted loop>
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Ingredients available(Multiple layers of similiar accepted)</h1>
    </div>
  );
}

export default BackgroundVideo;
