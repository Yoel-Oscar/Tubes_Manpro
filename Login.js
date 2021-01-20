// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBKI9i84VgmjEc_CZIW3wx2VOs93cLU8J8",
    authDomain: "login-acb45.firebaseapp.com",
    projectId: "login-acb45",
    storageBucket: "login-acb45.appspot.com",
    messagingSenderId: "222202024807",
    appId: "1:222202024807:web:b36a7f03be063190ecd5c2"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

	const auth = firebase.auth();
	
	function SignUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	function SignIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed In !");
		if(document.getElementById('password').value != 'password'){
        alert('Correct Password!'); 
          location.href = "userpage.html";
         } else {
         alert('Correct Password!');
          location.href = "userpage.html";
        }
	}
