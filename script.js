function trace( msg, shouldReplace = false ) {
    var echo = window.document.getElementById( 'echo' );
    if( shouldReplace ) {
      echo.innerHTML = msg + "\n";
    } else {
      echo.innerHTML += msg + "\n";
    }
    console.log( msg );
  }
  
  trace( 'Hello, and welcome to your code puzzle.' );


console.log("testing code");


