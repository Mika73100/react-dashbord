import {Route, Routes} from 'react-router-dom';
import Connexion from './Auth/connexion';
import Inscription from './Auth/inscription';



function App() {
  return (
    <>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </header>
    </>
  );
}

export default App;
