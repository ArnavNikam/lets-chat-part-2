
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBwG1zbsbpioIDCdfoCC7CdGxVn6t74eJw",
      authDomain: "project-95-49f51.firebaseapp.com",
      projectId: "project-95-49f51",
      storageBucket: "project-95-49f51.appspot.com",
      messagingSenderId: "719579792899",
      appId: "1:719579792899:web:1abfeef68d4ad99f6eb036"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("loginword");

/*function addUser() {

      firebase.database().ref("/").child(username).update({
            purpose : "adding user"
      });
}

console.log("username = "+username);*/

document.getElementById("welcome").innerHTML = "<h3>Welcome "+username+"!<h3>";

function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room_names are : "+Room_names);
      //End code
      });});}
getData();

function logout() {
      window.location = "index.html";
}

function addroom(){
      var output = document.getElementById("output").value;
      localStorage.setItem("output", output);

      firebase.database().ref("/").child(output).update(
        {
              purpose : "adding username"
        }
      );
}