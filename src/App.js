import Profil from './profil/Profil';
import './App.css';
import img from './photo chz.jpg';

function App() {
  const profile={fullName:"Chaima Zitouni",
                bio:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                profession:"ingeieure",
                pic:"img",

};
const handleName = (fullName) => alert(`fullname: ${fullName}`);


  return (
    <div className="App">
    <Profil
      fullName={profile.fullName}
      bio={profile.bio}
      profession={profile.profession}
      handleName={handleName}
    >
    <img src={img} className="card-img-top" alt='profilPhoto'/>
    </Profil>
  </div>

);
}

export default App;