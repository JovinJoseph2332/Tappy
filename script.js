// Firebase CDN version – No imports, all browser-ready

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj4tT_0BXiOdLyAXR_S8yLR3v84yLSrdc",
  authDomain: "tappy-89fb6.firebaseapp.com",
  projectId: "tappy-89fb6",
  storageBucket: "tappy-89fb6.appspot.com",
  messagingSenderId: "488450992493",
  appId: "1:488450992493:web:af8b5b9d09f9d5a26d5264",
  measurementId: "G-4WQRFEWDLT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Auth
const auth = firebase.auth();

// Handle Google Sign-In button click
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
        .then((result) => {
          alert(`Logged in as ${result.user.displayName}`);
        })
        .catch((error) => {
          alert("Login failed: " + error.message);
        });
    });
  }
});
