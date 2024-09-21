import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";
import { supabase } from "./utils/supabase";
import { useDispatch } from "react-redux";
import { clearCurrentUser, setCurrentUser } from "./store/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        dispatch(setCurrentUser(session.user));
      } else {
        dispatch(clearCurrentUser());
      }
    });

    // Clean up the auth listener
    return () => {
      if (data) {
        data?.subscription?.unsubscribe();
      }
    };
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
