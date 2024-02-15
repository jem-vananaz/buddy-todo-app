import './App.css';
import React from 'react';
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
        <ReactRoutes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.path === '/register'
                  ? route.element
                  : React.createElement(ProtectedRoutes, null, route.element)
              }
            />
          ))}
        </ReactRoutes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
