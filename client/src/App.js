import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import {
  Home,
  Matches,
  Profile,
  SharedLayout,
} from "./pages/dashboard";
import Referees from "./pages/dashboard/Referees"

function App() {
  return (
    <Referees/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <ProtectedRoute>
    //           <SharedLayout />
    //         </ProtectedRoute>
    //       }
    //     >
    //       <Route index element={<Home />} />
    //       <Route path="matches" element={<Matches />} />
    //       <Route path="referees" element={<Referees />} />
    //       <Route path="profile" element={<Profile />} />
    //     </Route>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/landing" element={<Landing />} />
    //     <Route path="*" element={<Error />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
