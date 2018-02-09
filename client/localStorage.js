export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
      console.log("!serializedState");
    }
    return JSON.parse(serializedState);
    console.log("serializedState", + serializedState);
  } catch (err) {
      return undefined;
      console.log("!serializedStat2e");
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    console.log("serializedStateS", serializedState);
    console.log("saveState", state);
  } catch (err) {
    console.log(err);
  }
}
