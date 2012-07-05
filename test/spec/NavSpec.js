describe( "Nav", function() {
  
  describe( "submenus", function() {
    var $subMenu;
    var $menuLink;

    loadFixtures( "fixtures/nav.html" );

    APP = window.APP || {};
    APP.getState = function() { return "small"; };
    NAV.init();

    $subMenu = $( ".subMenu:first" );
    $menuLink = $subMenu.siblings( "a" );

    it( "should slide the sub navs open on a mouseover when in the small context", function() {
      console.log( "Running test" );
      $menuLink.trigger( "mouseover" );
      expect( $subMenu.hasClass( "open" ) ).toBe( true );
    });

    // it( "should slide sub navs closed on a mouseout when in the small context", function() {
    //   // $menuLink.trigger( "mouseout" );
    //   expect( $subMenu.hasClass( "open" ) ).toBe( false );
    // });
  });
});