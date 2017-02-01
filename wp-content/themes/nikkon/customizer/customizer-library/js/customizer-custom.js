/**
 * Customizer Custom Functionality
 *
 */
( function( $ ) {
    
    $( window ).load( function() {
        
        //Show / Hide Color selector for slider setting
        var the_slider_select_value = $( '#customize-control-nikkon-slider-type select' ).val();
        nikkon_customizer_slider_check( the_slider_select_value );
        
        $( '#customize-control-nikkon-slider-type select' ).on( 'change', function() {
            var slider_select_value = $( this ).val();
            nikkon_customizer_slider_check( slider_select_value );
        } );
        
        //Show / Hide Color selector for Site Boxed layout
        var nikkon_site_layout_value = $( '#customize-control-nikkon-site-layout select' ).val();
        nikkon_site_layout_type_check( nikkon_site_layout_value );
        
        $( '#customize-control-nikkon-site-layout select' ).on( 'change', function() {
            var nikkon_site_select_value = $( this ).val();
            nikkon_site_layout_type_check( nikkon_site_select_value );
        });
        
        //Show / Hide blog blocks options
        var nikkon_blocks_layout_value = $( '#customize-control-nikkon-blog-blocks-style select' ).val();
        nikkon_blocks_layout_type_check( nikkon_blocks_layout_value );
        
        $( '#customize-control-nikkon-blog-blocks-style select' ).on( 'change', function() {
            var nikkon_blocks_select_value = $( this ).val();
            nikkon_blocks_layout_type_check( nikkon_blocks_select_value );
        });
        
        
        //Show / Hide Color selector for slider setting
        var nikkon_blog_layout_value = $( '#customize-control-nikkon-blog-layout select' ).val();
        nikkon_blog_layout_check( nikkon_blog_layout_value );
        
        $( '#customize-control-nikkon-blog-layout select' ).on( 'change', function() {
            var nikkon_blog_select_value = $( this ).val();
            nikkon_blog_layout_check( nikkon_blog_select_value );
        });
        
        
        nikkon_blocks_options_turn_on_off();
        
        $( '#customize-control-nikkon-pages-blocks-layout input[type=checkbox]' ).on( 'change', function() {
            nikkon_blocks_options_turn_on_off();
        });
        
        $( '#customize-control-nikkon-blog-layout select' ).on( 'change', function() {
            nikkon_blocks_options_turn_on_off();
        });
        
    } );

    function nikkon_customizer_slider_check( slider_select_value ) {
        if ( slider_select_value == 'nikkon-slider-default' ) {
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-meta-slider-shortcode' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-cats' ).show();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-size' ).show();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-full-width' ).show();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-linkto-post' ).show();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-remove-title' ).show();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-auto-scroll' ).show();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-remove-pagination' ).show();
        } else if ( slider_select_value == 'nikkon-meta-slider' ) {
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-cats' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-size' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-full-width' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-linkto-post' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-remove-title' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-auto-scroll' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-remove-pagination' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-meta-slider-shortcode' ).show();
        } else {
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-cats' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-size' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-full-width' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-linkto-post' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-remove-title' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-auto-scroll' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-slider-remove-pagination' ).hide();
            $( '#accordion-section-nikkon-slider-section #customize-control-nikkon-meta-slider-shortcode' ).hide();
        }
    }
    
    function nikkon_site_layout_type_check( nikkon_site_select_value ) {
        if ( nikkon_site_select_value == 'nikkon-site-boxed' ) {
            $( '#accordion-section-colors #customize-control-nikkon-boxed-bg-color' ).show();
        } else {
            $( '#accordion-section-colors #customize-control-nikkon-boxed-bg-color' ).hide();
        }
    }
    
    function nikkon_blocks_layout_type_check( nikkon_blocks_select_value ) {
        if ( nikkon_blocks_select_value == 'blog-style-postblock' ) {
            $( '#accordion-section-nikkon-blocks-layout-section #customize-control-nikkon-blog-blocks-remove-content' ).show();
            $( '#accordion-section-nikkon-blocks-layout-section #customize-control-nikkon-blog-blocks-remove-tagcats' ).show();
        } else {
            $( '#accordion-section-nikkon-blocks-layout-section #customize-control-nikkon-blog-blocks-remove-content' ).hide();
            $( '#accordion-section-nikkon-blocks-layout-section #customize-control-nikkon-blog-blocks-remove-tagcats' ).hide();
        }
    }
    
    function nikkon_blog_layout_check( nikkon_blog_select_value ) {
        if ( nikkon_blog_select_value == 'blog-blocks-layout' ) {
            $( '#accordion-section-nikkon-blocks-layout-section' ).removeClass( 'nikkon-remove-section' );
            $( '#accordion-section-nikkon-blog-section #customize-control-nikkon-blog-cats-blocks' ).show();
            $( '#accordion-section-nikkon-blog-section #customize-control-nikkon-blog-search-blocks' ).show();
        } else {
            if ( $( '#customize-control-nikkon-blog-cats-blocks input[type=checkbox]' ).is( ':checked' ) ) {
                alert( 'please uncheck "Enable blocks on Archive pages"' );
                return;
            } else {
                $( '#accordion-section-nikkon-blocks-layout-section' ).addClass( 'nikkon-remove-section' );
                $( '#accordion-section-nikkon-blog-section #customize-control-nikkon-blog-cats-blocks' ).hide();
                $( '#accordion-section-nikkon-blog-section #customize-control-nikkon-blog-search-blocks' ).hide();
            }
        }
    }
    
    function nikkon_blocks_options_turn_on_off() {
        var nikkon_blocks_all = $( '#customize-control-nikkon-pages-blocks-layout input[type=checkbox]' ).val();
        var nikkon_blocks_blog = $( '#customize-control-nikkon-blog-layout select' ).val();
        
        if ( $( '#customize-control-nikkon-pages-blocks-layout input[type=checkbox]' ).is( ':checked' ) ) {
            nikkon_blocks_all = 1;
        }
        
        if ( nikkon_blocks_all == 1 || nikkon_blocks_blog == 'blog-blocks-layout' ) {
            $( '#accordion-section-nikkon-blocks-layout-section' ).removeClass( 'nikkon-remove-section' );
        } else {
            $( '#accordion-section-nikkon-blocks-layout-section' ).addClass( 'nikkon-remove-section' );
        }
        
    }
    
} )( jQuery );