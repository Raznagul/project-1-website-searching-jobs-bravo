import { db } from "./firebase";

// User API
export const createUser = (id, name, lastname, email) =>
  db.ref(`users/${id}`).set({
    name,
    lastname,
    email
  });

export const getUsers = () => db.ref("users").once("value");

export const getUser = (id) => db.ref(`users/${id}`).once("value");

export const updateSavedJobs = (userId, jobId) => db.ref(`users/${userId}`).child('jobs').push({jobId:jobId});
