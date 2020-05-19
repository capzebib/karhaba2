import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then(res => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then(res => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then(res => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then(res => res.data)
      .catch(errorHandler);
  },

  getItems() {
    return service
      .get("/api/items")
      .then(res => res.data)
      .catch(errorHandler);
  },

  postCourse(course) {
    console.log(course);
    return service
      .post("/api/courses", course)
      .then(res => res.data)
      .catch(errorHandler);
  },
  // Creer la fonction qui va post sur /api/courses
  // elle recoit une course en parametre

  updateUser(userInfo) {
    return service
      .patch("/api/users", userInfo)
      .then(res => res.data)
      .catch(errorHandler);
  },
  getUsers() {
    return service
      .get("/api/users")
      .then(res => res.data)
      .catch(errorHandler);
  },

  postUsers() {
    return service
      .get("/api/users")
      .then(res => res.data)
      .catch(errorHandler);
  },

  postContactUs(data) {
    return service
      .post("/api/contactUs", data)
      .then(res => res.data)
      .catch(errorHandler);
  },

  // creer la fonction qui va get toutes les courses d'un user
  // l route qu'on veut cibler c'est /api/users/me/courses
  getAllCourses() {
    return service
      .get("/api/users/me/courses")
      .then(res => res.data)
      .catch(errorHandler);
  },

  getDrivers() {
    return service
      .get("/api/drivers")
      .then(res => res.data)
      .catch(errorHandler);
  }
};
