import './App.css';
import Header from './components/header'
import {useState} from 'react'
import Sidebar from './components/sidebar';
import FilesView from './components/filesView/FilesView';
import SideIcons from './components/sideIcons'
import GDriveLogo from './media/google_drive_icon.png'
import {auth,provider} from './firebase';
function App() {
  const [user, setUser] = useState()
  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }
  return (
    

    <div className="App">
      {
        user?(
          <>
          <Header userPhoto={user.photoURL}/>
      <div className ="app__main">
        <Sidebar/>
        <FilesView/>
        <SideIcons/>
        
      </div>
      </>
        ):(
          <div className='app__login'>
            <img src={GDriveLogo} alt="Google Drive" />
            <button onClick={handleLogin}>Log in to Google Drive</button>
          </div>
        )
      }
      

      {/* auth=true  */}
      {/* no authentication: log in  */}
    </div>
  );
}

export default App;
