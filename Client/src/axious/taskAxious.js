import axios from "axios";

const API_URL = import.meta.env.PROD
  ? "https://ntdl-full-stack-c88d.onrender.com/api/tasks"
  : "http://localhost:8000/api/tasks";
console.log(API_URL);

// get a task |GET |READ
export const getTasks = () => {
  const response = axios
    .get(API_URL)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};
// create a task |POST|CREATE
export const createTask = (taskObject) => {
  // send  post request to api
  const response = axios
    .post(API_URL, taskObject)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

//update a task | PATCH |Update seding in query params()
export const updateTask = (id, updatedField) => {
  const response = axios
    .patch(`${API_URL}/${id}`, updatedField)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

// delete a task | DELETE | deleting task in query params()
export const deleteTask = (id) => {
  const response = axios
    .delete(`${API_URL}/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};
