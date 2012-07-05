var APP = {
  getState: function() {
    return window.getComputedStyle( document.getElementById( "sizeTest" ), ":after" ).getPropertyValue( "content" ) || "small";
  }
};

var NAV = {
  
  clear: function() {
    NAV.$mainMenu.add( NAV.$mainMenu.find( "ul" ) ).removeAttr( "style" );
  },

  slideSubNav: function( e ) {
    e.preventDefault();

    console.dir($(this).data('events'));

    if ( APP.getState() === "small" ) {
      console.log( "slideSubNav" );
      $( this ).siblings( "ul" ).stop().slideToggle().toggleClass( "open" );
    }
  },

  toggleNav: function() {
    NAV.$mainMenu.toggle();
  },
    
  init: function() {
    // cache this for later use
    NAV.$mainMenu = $( "#mainMenu" );

    // Show/Hide the main menu for smaller screens
    $( "#showNav" ).on( "click", NAV.toggleNav );
    
    // Hover handler for first level nav
    NAV.$mainMenu.find( ".subMenu" ).siblings( "a" ).on( "mouseover mouseout", NAV.slideSubNav );

    mediaCheck({
      media: '(min-width: 500px)',
      entry: NAV.clear
    });
  }
};

$(function() {
  NAV.init();
});