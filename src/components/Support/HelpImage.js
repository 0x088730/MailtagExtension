import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const HelpImage = ({ text, image, video }) => {
  const [open, setOpen] = useState();
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={open}
        videoId={video}
        onClose={() => setOpen(false)}
      />
      <div className="row text-center video-title">{text}</div>
      <a href="#!" onClick={() => setOpen(true)}>
        <img className="video-size" src={image} alt={text} />
      </a>
    </>
  );
};
export default HelpImage;
