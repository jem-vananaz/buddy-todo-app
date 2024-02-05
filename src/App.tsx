import './App.css';
import { BrowserRouter as Router, Routes as ReactRoutes, Route } from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <Router>
      <ReactRoutes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </ReactRoutes>
    </Router>
  );
};

export default App;
