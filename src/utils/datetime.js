import moment from "moment";

export function timestampToMMDDYYYY(timestamp) {
  const date = new Date(timestamp);
  return moment(date).fromNow();
}
