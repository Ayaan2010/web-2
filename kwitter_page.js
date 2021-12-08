const firebaseConfig = {
      apiKey: "AIzaSyAyGDnLCu8UsBSDxlJ61x1kRzqjoe7LYbo",
      authDomain: "kuitter-a196f.firebaseapp.com",
      databaseURL: "https://kuitter-a196f-default-rtdb.firebaseio.com",
      projectId: "kuitter-a196f",
      storageBucket: "kuitter-a196f.appspot.com",
      messagingSenderId: "10086553050",
      appId: "1:10086553050:web:a799f434b24f8540485ce3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value;
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
