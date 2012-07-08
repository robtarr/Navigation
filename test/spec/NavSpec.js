describe( "Nav", function() {
  
  describe( "Mobile context", function() {
    /**
      Fake the response from APP.getState() to return small so that we can test
      the functionality for small sizes, independent of the current size of the
      browser.
    */
    APP = window.APP || {};
    APP.getState = function() { return "small"; };

      var $showNav, $mainMenu;

    beforeEach( function() {
      /**
        Load in the some HTML to simulate the navigation markup
      */
      loadFixtures( "fixtures/nav.html" );
      NAV.init();

      /**
        Cache some selectors that will be reused.
      */
      $showNav = $( "#showNav" );
      $mainMenu = $( "#mainMenu" );
    });


    it( "should toggle the nav when clicking on the show nav icon", function() {
      $showNav.trigger( "click" );
      expect( $mainMenu.is( ":visible" ) ).toBe( true );

      $showNav.trigger( "click" );      
      expect( $mainMenu.is( ":hidden" ) ).toBe( true );
    });

    it( "should slide the sub navs open on the first click ", function() {
      /**
        Get a hook to the nav item that the test will "click" on.
      */  
      $subMenu = $( ".subMenu:first" );

      /**
        Get a hook to the subNav that the test will b elooking for.
      */
      $menuLink = $subMenu.siblings( "a" );

      /**
        Open up the main nav
      */
      $showNav.trigger( "click" );

      $menuLink.trigger( "click" );
      expect( $subMenu.hasClass( "open" ) ).toBe( true );

      $menuLink.trigger( "click" );
      expect( $subMenu.hasClass( "open" ) ).toBe( false );
    });

    it( "should be able to clear all JS applied styles", function() {
      $showNav.trigger( "click" );

      NAV.clear();

      expect( $mainMenu.attr( "style" ) ).toBe( undefined );
    });

  });

});