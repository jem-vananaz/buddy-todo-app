import './App.css';
import {
  BrowserRouter as Router,
  Routes as ReactRoutes,
  Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import routes from './routes';
import ProtectedRoutes from './routes/ProtectedRoutes';

const queryClient: QueryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ProtectedRoutes>
          <ReactRoutes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </ReactRoutes>
        </ProtectedRoutes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
