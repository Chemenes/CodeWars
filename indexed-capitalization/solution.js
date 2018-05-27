function capitalize(s, arr) {

  let cap = s.split("");

  for (var i = 0; i < arr.length; i++) {
    if (cap[arr[i]]) {
      cap[arr[i]] = cap[arr[i]].toUpperCase();
    }
  }

  cap = cap.join("");
  return cap
};