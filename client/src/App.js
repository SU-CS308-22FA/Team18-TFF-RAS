import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Register,
  Landing,
  Error,
  ProtectedRoute,
  ForgotPassword,
  ChangePassword,
} from "./pages";
import {
  Home,
  Matches,
  Profile,
  SharedLayout,
  Objection,
  Match,
  RefereeAssignment,
  Referee,
  Referees,
  DueReports,
  EditReport,
} from "./pages/dashboard";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: red[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
            <Route path="referees" element={<Referees />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/objection" element={<Objection />} />
            <Route path="/referee-assignment" element={<RefereeAssignment />} />

            <Route path="reports" element={<DueReports />} />
            <Route path="/edit-report" element={<EditReport />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:emailToken"
            element={<ChangePassword />}
          />
          <Route path="/referee-page" element={<Referees />} />
          <Route path="/matches/:id" element={<Match />} />
          <Route path="/referees/:id" element={<Referee />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
