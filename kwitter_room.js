
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyA6utsLIcWYGvql3kKeo_aAI8DY2pb6YFQ",
      authDomain: "kwitter-93-class-activity.firebaseapp.com",
      databaseURL: "https://kwitter-93-class-activity-default-rtdb.firebaseio.com",
      projectId: "kwitter-93-class-activity",
      storageBucket: "kwitter-93-class-activity.appspot.com",
      messagingSenderId: "495681005339",
      appId: "1:495681005339:web:dcbc495e1de5b640a355be",
      measurementId: "G-YS4CZ0X4DT"
    };
firebase.initializeApp(firebaseConfig);

function(addRoom)
{
room_name=document.getElementById("room_name").value;

firebase.database() .ref("/").child(room_name).update({
      purpose:"adding room name"
});

localStorage.setItem("room_name",room_name)

window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTMl += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location ="kwitter_page.html";
}
