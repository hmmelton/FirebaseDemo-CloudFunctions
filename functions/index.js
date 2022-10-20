"use strict";

const identity = require("firebase-functions/v2/identity");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

// Function to create user data object before completing registration
exports.beforecreated = identity.beforeUserCreated((event) => {
  const user = event.data;
  const newUser = {email: user.email, username: null};

  return admin.database().ref(`/users/${user.uid}`).set(newUser)
      .then(() => {
        console.log("New user write succeeded!");
      });
});
