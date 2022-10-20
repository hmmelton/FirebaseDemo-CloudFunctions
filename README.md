# FirebaseDemo Cloud Functions

## Purpose
Any functions in this repository are used by the [FirebaseDemo](https://github.com/hmmelton/FirebaseDemo) project

## Current Functions
The only Firebase Cloud Function currently in this repository is the [beforecreated](https://github.com/hmmelton/FirebaseDemo-CloudFunctions/blob/main/functions/index.js#L10) function, which uses Firebase's V2 Cloud Function `beforeUserCreated`, which is an [Authentication blocking function](https://firebase.google.com/docs/functions/beta/auth-blocking-events). This function creates a user information object and writes it to Realtime Database before completing new user creation.