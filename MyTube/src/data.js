export const Api_key = "AIzaSyBtLvyF9Yko19Rw90RwR1_NA0hk-EH0t6o";
export const value_converter = (value) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(2)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(2)}K`;
  } else {
    return value;
  }
};
