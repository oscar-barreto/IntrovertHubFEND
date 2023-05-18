import { Route, Routes } from "react-router-dom";
import { AuthRouteProtector } from "./components/AuthRouteProtector";
import { AuthContextComponent } from "./contexts/authContext";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home/Home";
import {Login} from "./pages/Login/Login.jsx";
import {Profile} from "./pages/Profile/Profile.jsx";
import {Signup} from "./pages/Signup/Signup.jsx"
import { Posts } from "./pages/Posts/Posts";


function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element = {<Login/>}/>
          <Route path='/posts' element = {<Posts/>}/>
          <Route
            path="/profile"
            element={<AuthRouteProtector component={Profile} />}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
