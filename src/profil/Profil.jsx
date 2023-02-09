import React from "react"
import PropTypes from "prop-types"
const Profile = (props) => {
  const { fullName, bio, profession, children, handleName } = props;
  const handleClick = (e) => handleName(fullName);
    
  return (

<div
      
    >
      <h2>Name</h2>
      <h4>{fullName}</h4>
      <h2> Profession </h2>
      <h4> {profession} </h4>
      <h2 > Biography </h2>
      <p> {bio}</p>
      <div>
        {children}{" "}
      </div>
      <br />
      <button>
        <a href="#!" onClick={handleClick} style={{ color: "black" }}>
          fullName
        </a>
      </button>
    </div>
  );
};



Profile.defaultProps = {
  fullName: "default fullName",
  profession: "default profession",
  bio: " default bio",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,

};

export default Profile
