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
    var sizes = {
      "10px": "small",
      "20px": "medium",
      "30px": "large"
    };

    if (window.getComputedStyle) {
        return sizes[window.getComputedStyle( document.getElementById( "sizeTest" )).getPropertyValue( "font-size" )];
    } else {
      return sizes["30px"];
    }
  }
};
