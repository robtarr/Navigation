describe( "Nav", function() {
  
  describe( "submenus when in the small context", function() {
    
    var $subMenu;
    var $menuLink;

    /**
      Load in the some HTML to simulate the navigation markup
    */
    loadFixtures( "fixtures/nav.html" );

    /**
      Fake the response from APP.getState() to return small so that we can test
      the functionality for small sizes, independent of the current size of the
      browser.
    */
    APP = window.APP || {};
    APP.getState = function() { return "small"; };

    /**
      Get a hook to the nav item that the test will "click" on.
    */
    $subMenu = $( ".subMenu:first" );

    /**
      Get a hook to the subNav that the test will b elooking for.
    */
    $menuLink = $subMenu.siblings( "a" );

    it( "should slide the sub navs open on the first click ", function() {
      $menuLink.trigger( "click" );
      expect( $subMenu.is( ":visible" ) ).toBe( true );
    });

    it( "should slide sub navs closed on the second click", function() {
      $menuLink.trigger( "click" );
      expect( $subMenu.is( ":visible" ) ).toBe( false );
    });
  });
});