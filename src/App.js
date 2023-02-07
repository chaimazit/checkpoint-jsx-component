import Profil from './profil/Profil';
import './App.css';
import img from './photo chz.jpg';


function App() {
  const profile={fullName:'Chaima Zitouni',
                  bio:``,
                profession:'ingeieure',
                pic:img,
}
const showName = fullName => alert(`fullName: ${fullName}`);

  return (
<>


  <div className="profilList">
    <Profil  profil={profile} handleName={showName}
    >
    <img src={img} className="card-img-top" alt='profilPhoto'/>
    </Profil>
  </div>
</>
);
}

export default App;