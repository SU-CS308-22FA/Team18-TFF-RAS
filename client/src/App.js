import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute, Referees } from "./pages";
import {
  Home,
  Matches,
  Profile,
  SharedLayout,
  Objection,
  Match,
  RefereeAssignment
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="matches" element={<Matches />} />
          <Route path="matches/:id" element={<Match />} />
          <Route path="referees" element={<Referees />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/objection" element={<Objection />} />
          <Route path="/referee-assignment" element={<RefereeAssignment />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/referee-page" element={<Referees />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
