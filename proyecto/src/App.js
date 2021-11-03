import { Auth0Provider} from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <Auth0Provider
    domain="proyectomisiontic.us.auth0.com"
    clientId="iQdLDwNyfWsfZtrRrBqs6uFZ1AFVy5da"
    redirectUri={window.location.origin}
  >
    <Routes />
  </Auth0Provider>
  );
}

export default App;
