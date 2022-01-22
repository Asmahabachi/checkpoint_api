import './App.css';
import {Route, Routes} from 'react-router-dom';
import Users from './components/Users';
import Profile from './components/Profil/Profile';


function App() {
  return (
    <div className="App">
<Routes>
  <Route exact path="/" element={<Users />} />
  <Route path="/users/:userId" element={<Profile />} />
</Routes> 
    </div>
  );
}

export default App;
