import axios from "axios";

async function sendLoginDetails(username, password) {
  const res = await axios({
    url: "/auth/signin",
    method: "POST",
    data: { email: username, password: password },
  });

  localStorage.setItem("token", res.data["data"]["token"]);
}

async function sendRegisterDetails(username, password, name) {
  const res = await axios({
    url: "/auth/signup",
    method: "POST",
    data: { email: username, password: password, name: name },
  });

  localStorage.setItem("token", res.data["data"]["token"]);
}

async function getMatch(date = new Date()) {
  const res = await axios({
    url: "/api/match/matchByDate",
    method: "POST",
    data: { date: date },
  });

  return res;
}

export { sendLoginDetails, sendRegisterDetails, getMatch };
