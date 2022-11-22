const getEventTimeString = (e) => {
  let result = e.time.elapsed;
  if (e.time.extra != 0 && e.time.extra != null) {
    result = result + " + " + e.time.extra;
  }

  return result;
};

export { getEventTimeString };
