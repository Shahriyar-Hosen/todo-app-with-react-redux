import { COLORCHANGED, STATUSCHANGED } from "./actionType";

const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

const colorChanged = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
