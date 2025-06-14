const firebaseConfig = {
  apiKey: "AIzaSyBj4tT_0BXiOdLyAXR_S8yLR3v84yLSrdc",
  authDomain: "tappy-89fb6.firebaseapp.com",
  projectId: "tappy-89fb6",
  storageBucket: "tappy-89fb6.firebasestorage.app",
  messagingSenderId: "488450992493",
  appId: "1:488450992493:web:af8b5b9d09f9d5a26d5264",
  measurementId: "G-4WQRFEWDLT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign in with Google
document.getElementById("loginBtn").onclick = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

// Handle login
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("userInfo").style.display = "block";
    document.getElementById("userName").innerText = `Hello, ${user.displayName}`;
    document.getElementById("userPic").src = user.photoURL;
  }
});

// Sign out
document.getElementById("logoutBtn").onclick = () => {
  auth.signOut();
};
