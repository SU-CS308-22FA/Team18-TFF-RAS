import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  DELETE_USER_BEGIN,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  CREATE_OBJECTION_BEGIN,
  CREATE_OBJECTION_SUCCES,
  CREATE_OBJECTION_ERROR,
  DELETE_OBJECTION_BEGIN,
  DELETE_OBJECTION_SUCCES,
  DELETE_OBJECTION_ERROR,
  GET_OBJECTIONS_BEGIN,
  GET_OBJECTIONS_SUCCESS,
  GET_OBJECTIONS_ERROR,
  HANDLE_CHANGE,
  CREATE_RATING_BEGIN,
  CREATE_RATING_SUCCESS,
  CREATE_RATING_ERROR,
  GET_RATING_BEGIN,
  GET_RATING_SUCCESS,
  GET_RATING_ERROR,
  GET_REFEREES_BEGIN,
  GET_REFEREES_SUCCESS,
  GET_REFEREE_BEGIN,
  GET_REFEREE_SUCCESS,
  GET_REFEREE_ERROR,
  GET_DUE_REPORTS_BEGIN,
  GET_DUE_REPORTS_SUCCESS,
  CLEAR_MODAL,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const objections = localStorage.getItem("objections");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  isDeleting: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  objections: objections ? JSON.parse(objections) : null,
  token: token,
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
  showSidebar: false,
  ratingGiven: false,
  showModal: false,
  modalType: "",
  modalText: "",
  rating: "",
  review: "",
  eventReviews: [],
  referees: [],
  referee: null,
  dueReports: [],
  numDueReports: 0,
  DueReportPage: 1,
  numofDueReportPages: 1,
  final_grade: "",
  editReportId: "",
  strictness: "",
  accuracy: "",
  fairness: "",
  comments: "",
};

const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // axios.defaults.headers["Authorization"] = `Bearer ${state.token}`;

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const clearModal = () => {
    dispatch({ type: CLEAR_MODAL });
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const addObjectionToLocalStroge = ({ newObjection }) => {
    localStorage.setItem(
      "objections",
      JSON.stringify([...objections, newObjection])
    );
  };

  const removeObjectionFromLocalStorage = () => {
    localStorage.removeItem("objections");
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("location");
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  {
    /* CHECK */
  }
  {
    /* CHECK */
  }
  {
    /* CHECK */
  }
  const getObjections = async (currentObjection) => {
    dispatch({ type: GET_OBJECTIONS_BEGIN });
    try {
      const response = await authFetch.post("/objections/", currentObjection);
      const { objections } = response.data;
      dispatch({
        type: GET_OBJECTIONS_SUCCESS,
        payload: { objections },
      });
    } catch (err) {
      dispatch({
        type: GET_OBJECTIONS_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
  };

  const createObjection = async (currentObjection) => {
    dispatch({ type: CREATE_OBJECTION_BEGIN });
    try {
      const response = await authFetch.post("/objections/", currentObjection);
      const { objection } = response.data;
      dispatch({
        type: CREATE_OBJECTION_SUCCES,
        payload: { objection },
      });
      addObjectionToLocalStroge({ objection });
    } catch (err) {
      dispatch({
        type: CREATE_OBJECTION_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
  };

  const deleteObjection = async (currentObjection) => {
    dispatch({ type: DELETE_OBJECTION_BEGIN });
    try {
      await authFetch.delete("/objections/", currentObjection);
      dispatch({
        type: DELETE_OBJECTION_SUCCES,
      });
      setTimeout(logoutUser, 3000);
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: DELETE_OBJECTION_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };
  const getDueReports = async () => {
    dispatch({ type: GET_DUE_REPORTS_BEGIN });
    try {
      const { data } = await authFetch("/reports");
      const { dueReports, numDueReports, numofDueReportPages } = data;
      dispatch({
        type: GET_DUE_REPORTS_SUCCESS,
        payload: { dueReports, numDueReports, numofDueReportPages },
      });
    } catch (error) {
      console.log(error.response);
    }
    clearAlert();
  };

  {
    /* CHECK */
  }
  {
    /* CHECK */
  }
  {
    /* CHECK */
  }
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      // console.log(response);
      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      // console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token, location } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const authFetch = axios.create({
    baseURL: "/api/v1",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  // request interceptor
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  // ratings
  const createRating = async (ratingDetails) => {
    dispatch({ type: CREATE_RATING_BEGIN });
    try {
      const { data } = await authFetch.post("/ratings", ratingDetails);
      const { rating } = data;
      dispatch({ type: CREATE_RATING_SUCCESS, payload: { rating } });
      // dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_RATING_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getRating = async (matchId) => {
    dispatch({ type: GET_RATING_BEGIN });
    try {
      const { data } = await authFetch.get("/ratings/" + matchId);
      const { rating } = data;
      dispatch({ type: GET_RATING_SUCCESS, payload: { rating } });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: GET_RATING_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  // referees
  const getReferees = async () => {
    dispatch({ type: GET_REFEREES_BEGIN });
    try {
      const { data } = await authFetch("/referees");
      const { referees } = data;
      dispatch({
        type: GET_REFEREES_SUCCESS,
        payload: {
          referees,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  const getReferee = async (refID) => {
    dispatch({ type: GET_REFEREE_BEGIN });
    try {
      const { data } = await authFetch.get("/referees/" + refID);
      const { referee } = data;
      dispatch({ type: GET_REFEREE_SUCCESS, payload: { referee } });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: GET_REFEREE_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);

      // no token
      const { user, location } = data;
      console.log(token);

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });

      addUserToLocalStorage({ user, location, token: initialState.token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const deleteUser = async (currentUser) => {
    dispatch({ type: DELETE_USER_BEGIN });
    try {
      await authFetch.delete("/auth/deleteUser", currentUser);
      // logoutUser();
      dispatch({
        type: DELETE_USER_SUCCESS,
      });
      setTimeout(logoutUser, 3000);
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: DELETE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const setEditReport = (id) => {
    dispatch({ type: SET_EDIT_JOB, payload: { id } });
  };

  const editJob = async () => {
    dispatch({ type: EDIT_REPORT_BEGIN });
    try {
      const {} = state;

      await authFetch.patch(`/reports/edit-report/${state.editReportId}`, {
        final_grade,
        strictness,
        accuracy,
        fairness,
        comments,
      });
      dispatch({
        type: EDIT_REPORT_SUCCESS,
      });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_REPORT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        deleteUser,
        createObjection,
        deleteObjection,
        getObjections,
        createRating,
        getRating,
        getReferees,
        getReferee,
        getDueReports,
        clearModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
