// src/redux/reducers/dataReducer.js

import { FETCH_ADMIN_DATA, FETCH_STUDENT_DATA, FETCH_ACTIONS_DATA } from "../actions/DataActions";

const initialState = {
  studentData: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMIN_DATA:
      return {
        ...state,
        adminData: action.payload,
      };
    case FETCH_STUDENT_DATA:
      return {
        ...state,
        studentData: action.payload,
      };
    case FETCH_ACTIONS_DATA:
      return {
        ...state,
        actionsData: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
