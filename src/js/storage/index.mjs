export function save(key, value) {
  localStorage.setItem(key, value);
}

export function load(key) {
  var token = localStorage.getItem(key);
  return token;
}

export function remove(key) {
  localStorage.removeItem(key);
}
