import React from 'react'
import PropTypes from 'prop-types'



const Profile = ({profile,handleName,children}) => {
    const{fullName,bio,profession}=profile

    const handleClick = e => {
      e.preventDefault();
     
      handleName(fullName);}
    
  return (
<> 
  <div className="card" style={{width: '18rem'}}>
    {children}
    <div className="card-body">
      <h5 className="card-title">{fullName}</h5>
      <p className="card-text">{bio}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{profession}</li>
      </ul>
    <div className="card-body">
      <a href='' className="card-link" onClick={handleClick}>show Name</a>
        </div>
  </div>  
</>
)
}

Profile.defaultProps={
profile:{fullName:'Chaima Zitouni',bio:'',profession:'ingenieure'},
handleName:(x)=>console.log(`hello ${x}`)
}

Profile.propTypes={
  profile: PropTypes.object.isRequired,
  handleName:PropTypes.func.isRequired,

}

export default Profile
