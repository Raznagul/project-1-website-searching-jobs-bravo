import { auth } from "./firebase";

export const signup = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signin = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const signOut = () => auth.signOut();

export const passwordReset = email => auth.sendPasswordResetEmail(email);

export const updatePassword = password =>
  auth.currentUser.updatePassword(password);
