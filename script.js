function get_timestamp() {
  const t = new Date();
  const date = ("0" + t.getDate()).slice(-2);
  const month = ("0" + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();
  const hours = ("0" + t.getHours()).slice(-2);
  const minutes = ("0" + t.getMinutes()).slice(-2);
  const seconds = ("0" + t.getSeconds()).slice(-2);
  const timestamp = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  return timestamp;
}

function new_date(dt) {
  const t = new Date(dt);
  const date = ("0" + t.getDate()).slice(-2);
  const month = ("0" + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();
  const newdate = `${date}/${month}/${year}`;

  return newdate;
}
