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
  CREATE_RATING_BEGIN,
  CREATE_RATING_SUCCESS,
  CREATE_RATING_ERROR,
  GET_REFEREES_BEGIN,
  GET_REFEREES_SUCCESS,
  GET_REFEREE_BEGIN,
  GET_REFEREE_SUCCESS,
  GET_REFEREE_ERROR,
  GET_RATING_BEGIN,
  GET_RATING_SUCCESS,
  GET_RATING_ERROR,
} from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful! Redirecting...",
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: "",
      jobLocation: "",
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === DELETE_USER_BEGIN) {
    return { ...state, isDeleting: true };
  }
  if (action.type === DELETE_USER_SUCCESS) {
    return {
      ...state,
      isDeleting: false,
      showAlert: true,
      alertType: "success",
      alertText: "Account Deleted!",
    };
  }
  if (action.type === DELETE_USER_ERROR) {
    return {
      ...state,
      isDeleting: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === CREATE_OBJECTION_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === CREATE_OBJECTION_SUCCES) {
    return {
      ...state,
      isLoading: false,
      objections: action.payload.objections,
      showAlert: true,
      alertType: "success",
      alertText: "Objection created! Redirecting...",
    };
  }
  if (action.type === CREATE_OBJECTION_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === DELETE_OBJECTION_BEGIN) {
    return { ...state, isDeleting: true };
  }
  if (action.type === DELETE_OBJECTION_SUCCES) {
    return {
      ...state,
      isDeleting: false,
      showAlert: true,
      alertType: "success",
      alertText: "Objection Deleted!",
    };
  }
  if (action.type === DELETE_OBJECTION_ERROR) {
    return {
      ...state,
      isDeleting: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_OBJECTIONS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_OBJECTIONS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: "Objections are visible",
      alerttype: "success",
    };
  }
  if (action.type === GET_OBJECTIONS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Can't get Objections",
    };
  }
  if (action.type === CREATE_RATING_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === CREATE_RATING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showModal: true,
      modalType: "success",
      ratingGiven: true,
      rating: action.payload.rating.rating,
      review: action.payload.rating.review,
      eventReviews: action.payload.rating.eventReviews,
    };
  }
  if (action.type === CREATE_RATING_ERROR) {
    return {
      ...state,
      isLoading: false,
      showModal: true,
      modalType: "danger",
      modalText: action.payload.msg,
    };
  }
  if (action.type === GET_REFEREES_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_REFEREES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      referees: action.payload.referees,
    };
  }
  if (action.type === GET_REFEREE_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_REFEREE_SUCCESS) {
    const referees = [...state.referees];
    const refereeToAdd = action.payload.referee;

    const idx = referees.findIndex(
      (refereeObject) => refereeObject.refID === refereeToAdd.refID
    );

    if (idx != -1) {
      referees[idx] = refereeToAdd;
    } else {
      referees.push(refereeToAdd);
    }

    return {
      ...state,
      isLoading: false,
      referees,
      referee: refereeToAdd,
    };
  }
  if (action.type === GET_REFEREE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showModal: true,
      modalType: "danger",
      modalText: action.payload.msg,
    };
  }
  if (action.type === GET_RATING_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_RATING_SUCCESS) {
    const { rating } = action.payload;
    let result = {};
    if (rating === null) {
      result.ratingGiven = false;
      result.rating = "";
      result.review = "";
      result.eventReviews = {};
    } else {
      result = {
        ratingGiven: true,
        rating: rating.rating,
        review: rating.review,
        eventReviews: rating.eventReviews,
      };
    }
    return {
      ...state,
      isLoading: false,
      ...result,
    };
  }
  if (action.type === GET_RATING_ERROR) {
    return {
      ...state,
      isLoading: false,
      showModal: true,
      modalType: "danger",
      modalText: action.payload.msg,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
