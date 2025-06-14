// ✅ Replace this with your own Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 🔥 Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 👉 Sign in with Google
document.getElementById("loginBtn").onclick = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

// 👤 Handle User Login State
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("userInfo").style.display = "block";
    document.getElementById("userName").innerText = `Hello, ${user.displayName}`;
    document.getElementById("userPic").src = user.photoURL;
  }
});

// 🔓 Log Out
document.getElementById("logoutBtn").onclick = () => {
  auth.signOut();
};
