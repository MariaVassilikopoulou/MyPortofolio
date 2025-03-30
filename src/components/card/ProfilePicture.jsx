import { useState } from "react";
import "./ProfilePicture.css";
import imageUrl from "/public/image_.jpg";
function ProfilePicture() {
  //const imageUrl= './src/assets/image_.jpg'

  const [showMessage, setShowMessage] = useState(true);
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowMessage(false);
    setShowImage(true);
  };
  const handleDoubleClick = () => {
    setShowMessage(true);
    setShowImage(false);
  };
console.log(showImage);
  return (
    <div className="profile-picture-container">
      {showMessage ? (
        <p className="message" onClick={handleClick}>
          Hi there, my name is &#8595;
        </p>
      ) : (
        <img
          className="card-image"
          onDoubleClick={handleDoubleClick}
          src={imageUrl}
          alt="Profile-image"
        />
      )}
    </div>
  );
}

export default ProfilePicture;
