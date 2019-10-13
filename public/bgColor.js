 var colors = {
     "82" : "red",
     "66" : "blue",
     "71" : "green",
    }

function setBg( c ) {
    document.bgColor = c;
 }

 function keyHandler( e ) {
     setBg( colors[e.keyCode] );
 }
 
 //function keyHandlerOld( e ) {
  //   switch ( e.keyCode ) {
  //       case 82: setBg('red'); break;
  ////       case 66: setBg('blue'); break;
    ////     case 71: setBg('green'); break;
   //  }
// }