import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './redux/Hooks';
import { setLoading, setUser } from './redux/Features/user/userSlice';
import { useEffect } from 'react';

const auth = getAuth();
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;