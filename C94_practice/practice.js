
const firebaseConfig = {
    apiKey: "AIzaSyDYJ60H224BbHFyNX7RyDrSjvh344A2OC4",
    authDomain: "practice-activity-ed097.firebaseapp.com",
    databaseURL: "https://practice-activity-ed097-default-rtdb.firebaseio.com",
    projectId: "practice-activity-ed097",
    storageBucket: "practice-activity-ed097.appspot.com",
    messagingSenderId: "283021075121",
    appId: "1:283021075121:web:73f71380252f875122b890"
  };
  firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
    function addUser() 
{
   user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"
   })
}
