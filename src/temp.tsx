import { useRoutes } from 'react-router-dom';
import './app.css';
import routes from './routes';

function App() {
  const router = useRoutes(routes);
  return router;
}

export default App;
