import { db } from './firebase';
// User API
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');


// Posts API

export const createPost = (id, title, body, location, price, time) =>
  db.ref(`posts/${id}`).set({
    id,
    title,
    body,
    location,
    price,
    time,
  });

export const editPost = (id, title, body, location, price, time) =>
  db.ref(`posts/${id}`).update({
    id,
    title,
    body,
    location,
    price,
    time,
  });

export const deletePost = (id) =>
  db.ref(`posts/${id}`).remove();
