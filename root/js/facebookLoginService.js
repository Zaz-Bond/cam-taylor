angular.module("camTaylorWeddingApp")
.service("facebookLoginService", function(){
    var ref = new Firebase("https://cam-taylor.firebaseio.com");
    this.loginWithFacebook = function(){
        ref.authWithOAuthRedirect("facebook", function(error) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
            // We'll never get here, as the page will redirect on success.
            }
        })
    };
});