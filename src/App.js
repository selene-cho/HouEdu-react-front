import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
   return (
      <>
         <Navbar />
         <Outlet />
      </>
   );
}

export default App;
