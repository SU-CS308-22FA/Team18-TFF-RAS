import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  CLEAR_VALUES,
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
  DELETE_OBJECTION_SUCCESS,
  DELETE_OBJECTION_ERROR,
  GET_OBJECTIONS_BEGIN,
  GET_OBJECTIONS_SUCCESS,
  GET_OBJECTIONS_ERROR,
  UPDATE_OBJECTION_BEGIN,
  UPDATE_OBJECTION_SUCCESS,
  UPDATE_OBJECTION_ERROR,
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
  CLEAR_MODAL,
  HANDLE_CHANGE,
  GET_REFEREE_RATINGS_BEGIN,
  GET_REFEREE_RATINGS_SUCCESS,
  GET_REFEREE_RATINGS_ERROR,
  GET_ALLRATING_BEGIN,
  GET_ALLRATING_SUCCESS,
  GET_ALLRATING_ERROR,
  GET_DUE_REPORTS_BEGIN,
  GET_DUE_REPORTS_SUCCESS,
  GET_REFEREES_RATINGS_BEGIN,
  GET_REFEREES_RATINGS_SUCCESS,
  GET_REFEREES_RATINGS_ERROR,
  SET_EDIT_REPORT,
  EDIT_REPORT_BEGIN,
  EDIT_REPORT_SUCCESS,
  EDIT_REPORT_ERROR,
  SEND_VERIFY_EMAIL_BEGIN,
  SEND_VERIFY_EMAIL_SUCCESS,
  SEND_VERIFY_EMAIL_ERROR,
  VERIFY_USER_BEGIN,
  VERIFY_USER_ERROR,
  VERIFY_USER_SUCCESS,
  SEND_RESET_PASSWORD_EMAIL_BEGIN,
  SEND_RESET_PASSWORD_EMAIL_SUCCESS,
  SEND_RESET_PASSWORD_EMAIL_ERROR,
  RESET_PASSWORD_BEGIN,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  DIFFERENT_PASSWORD_ALERT,
  CLEAR_EMAIL_SENT,
  CLEAR_PASSWORD_CHANGED,
  CLEAR_VERIFIED,
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
  if (action.type === DIFFERENT_PASSWORD_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Passwords do not match",
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
  if (action.type === CLEAR_MODAL) {
    return {
      ...state,
      showModal: false,
      modalType: "",
      modalText: "",
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
  if (action.type === UPDATE_OBJECTION_BEGIN) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === UPDATE_OBJECTION_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === UPDATE_OBJECTION_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      alertText: "Updated",
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
  if (action.type === DELETE_OBJECTION_SUCCESS) {
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
      modalText: "Rating added successfully.",
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
  if (action.type === GET_REFEREE_RATINGS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_ALLRATING_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_REFEREE_RATINGS_SUCCESS) {
    const {
      overallRating,
      fanRating,
      expertRating,
      overallSentiment,
      fanSentiment,
      expertSentiment,
    } = action.payload;

    return {
      ...state,
      isLoading: false,
      overallRating,
      fanRating,
      expertRating,
      overallSentiment,
      fanSentiment,
      expertSentiment,
    };
  }
  if (action.type === GET_ALLRATING_SUCCESS) {
    const ratings = action.payload;

    console.log(JSON.stringify(action.payload));

    return {
      ...state,
      isLoading: false,
      ratings,
    };
  }
  if (action.type === GET_REFEREE_RATINGS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showModal: true,
      modalType: "danger",
      modalText: action.payload.msg,
    };
  }
  if (action.type === GET_REFEREES_RATINGS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_REFEREES_RATINGS_SUCCESS) {
    const { referees } = action.payload;

    return {
      ...state,
      isLoading: false,
      refereesRatings: referees.referees,
    };
  }
  if (action.type === GET_REFEREES_RATINGS_ERROR) {
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
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === GET_DUE_REPORTS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === GET_DUE_REPORTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      dueReports: action.payload.dueReports,
      numDueReports: action.payload.numDueReports,
      numofDueReportPages: action.payload.numofDueReportPages,
    };
  }
  if (action.type === SET_EDIT_REPORT) {
    const report = state.dueReports.find(
      (report) => report._id === action.payload.id
    );
    const { _id, final_grade, strictness, accuracy, fairness, comment } =
      report;
    return {
      ...state,
      isEditingReport: true,
      editReportId: _id,
      final_grade,
      strictness,
      accuracy,
      fairness,
      comment,
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditingReport: false,
      editReportId: "",
      final_grade: 0,
      strictness: 0,
      accuracy: 0,
      fairness: 0,
      comment: "",
    };

    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === EDIT_REPORT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_REPORT_SUCCESS) {
    return {
      ...state,
      isEditingReport: false,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Report Submitted!",
    };
  }
  if (action.type === EDIT_REPORT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === SEND_VERIFY_EMAIL_BEGIN) {
    return { ...state, verificationEmailSending: true };
  }
  if (action.type === SEND_VERIFY_EMAIL_SUCCESS) {
    return {
      ...state,
      verificationEmailSending: false,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.message,
    };
  }
  if (action.type === SEND_VERIFY_EMAIL_ERROR) {
    return {
      ...state,
      verificationEmailSending: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === VERIFY_USER_BEGIN) {
    return { ...state, isVerifying: true };
  }
  if (action.type === VERIFY_USER_SUCCESS) {
    return {
      ...state,
      isVerifying: false,
      user: action.payload.user,
      verified: true,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.message,
    };
  }
  if (action.type === VERIFY_USER_ERROR) {
    return {
      ...state,
      isVerifying: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === SEND_RESET_PASSWORD_EMAIL_BEGIN) {
    return { ...state, resetPasswordEmailSending: true };
  }
  if (action.type === SEND_RESET_PASSWORD_EMAIL_SUCCESS) {
    return {
      ...state,
      ResetPasswordEmailSending: false,
      resetPasswordEmailSent: true,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.message,
    };
  }
  if (action.type === SEND_RESET_PASSWORD_EMAIL_ERROR) {
    return {
      ...state,
      resetPasswordEmailSending: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === RESET_PASSWORD_BEGIN) {
    return { ...state, isResetting: true };
  }
  if (action.type === RESET_PASSWORD_SUCCESS) {
    return {
      ...state,
      isResetting: false,
      passwordChanged: true,
      showAlert: true,
      alertType: "success",
      alertText: "Password Successfully Changed!...",
    };
  }
  if (action.type === RESET_PASSWORD_ERROR) {
    return {
      ...state,
      isResetting: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === CLEAR_PASSWORD_CHANGED) {
    return {
      ...state,
      passwordChanged: false,
    };
  }
  if (action.type === CLEAR_VERIFIED) {
    return {
      ...state,
      verified: false,
    };
  }
  if (action.type === CLEAR_EMAIL_SENT) {
    return {
      ...state,
      resetPasswordEmailSent: false,
    };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
