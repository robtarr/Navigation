/**
 The APP object houses methods that are common to the entire application
*/
var APP = {

  /**
   ## getState
   Determine the current context, based on mediaqueries,
   that the application is currently running in

   @return string
  */
  getState: function() {
    if (window.getComputedStyle){
      return window.getComputedStyle( document.getElementById( "sizeTest" ), ":after" ).getPropertyValue( "content" );
    }
    else{
      return "small";
    }
  }
};
