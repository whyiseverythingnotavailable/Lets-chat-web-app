var firebaseConfig = {
  apiKey: "AIzaSyDF39bg4i3eC-3I-RHMHzirhuoyel4GCoo",
  authDomain: "lets-chat-web-app-1fbbc.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-1fbbc-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-1fbbc",
  storageBucket: "lets-chat-web-app-1fbbc.appspot.com",
  messagingSenderId: "427343059112",
  appId: "1:427343059112:web:2222d928a802664d240a9d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addroom() {
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  console.log("room name - "+Room_names);
  row="<div class='room_name' id="+Room_names+"onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML=row;
  });});}
getData();
function logout() {
  window.location="index.html";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
}
function redirect_to_room_name(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
} 