import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './actionRedux';
import { actions } from "react-redux-form";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
  tasks: [],

};

export const Reducer = (state = initialState, action) => {
  return state;
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, 
              text: action.payload.updatedTask,
              mail: action.payload.updatedMail //-------------
            
            }
            : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
