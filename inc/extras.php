<?php
    show_admin_bar( false );
    // remove unnecessary items wordpress
    remove_action( 'wp_head', 'wp_generator');
    remove_action( 'wp_head', 'feed_links_extra', 3 ); // Display the links to the extra feeds such as category feeds
    remove_action( 'wp_head', 'feed_links', 2 ); // Display the links to the general feeds: Post and Comment Feed
    remove_action( 'wp_head', 'rsd_link' ); // Display the link to the Really Simple Discovery service endpoint, EditURI link
    remove_action( 'wp_head', 'wlwmanifest_link' ); // Display the link to the Windows Live Writer manifest file.
    remove_action( 'wp_head', 'index_rel_link' ); // index link
    remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 ); // prev link
    remove_action( 'wp_head', 'start_post_rel_link', 10, 0 ); // start link
    remove_action( 'wp_head', 'adjacent_posts_rel_link', 10, 0 ); // Display relational links for the posts adjacent to the current post.
    remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0);

    add_filter('the_generator', '__return_false'); //Remove the WordPress version from RSS feeds
    add_theme_support( 'automatic-feed-links' );

    // Disable support for emoji
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 ); 
    remove_action( 'wp_print_styles', 'print_emoji_styles' );


	
    /* Rimuove la versione dai file CSS e JS */
    function remove_cssjs_ver( $src ) {
        if( strpos( $src, '?ver=' ) )
            $src = remove_query_arg( 'ver', $src );
        return $src;
    }
    add_filter( 'style_loader_src', 'remove_cssjs_ver', 1000 );
    add_filter( 'script_loader_src', 'remove_cssjs_ver', 1000 );


	// remove cf7 dove non serve
    add_filter( 'wpcf7_load_js', '__return_false' );
    add_filter( 'wpcf7_load_css', '__return_false' );



/* Hide yoast seo version */	
// Remove All Yoast HTML Comments
// https://gist.github.com/paulcollett/4c81c4f6eb85334ba076

if (defined('WPSEO_VERSION')){
  add_action('get_header',function (){ 
	ob_start(function ($o){
		return preg_replace('/\n?<.*?Yoast.*?>/mi','',$o);
		});
	});
  add_action('wp_head',function (){ ob_end_flush(); }, 999);
}



/* compressione immagini */
add_filter( 'jpeg_quality', create_function( '', 'return 80;' ) );



/** Modifica body_class() */
	function roots_body_class($classes) {
    	// Add post/page slug
    	if (is_single() || is_page() && !is_front_page()) {
    		$classes[] = basename(get_permalink());
    	}

    	// Remove unnecessary classes
    	$home_id_class = 'page-id-' . get_option('page_on_front');
    	$remove_classes = array(
    		'page-template-default',
    		$home_id_class
    	);
    	$classes = array_diff($classes, $remove_classes);
    	return $classes;
    }

    add_filter('body_class', 'roots_body_class');





/** Elimina inutili chiusure di tags */
    function roots_remove_self_closing_tags($input) {
    	return str_replace(' />', '>', $input);
    }
	

    add_filter('get_avatar',          'roots_remove_self_closing_tags'); // <img />
    add_filter('comment_id_fields',   'roots_remove_self_closing_tags'); // <input />
    add_filter('post_thumbnail_html', 'roots_remove_self_closing_tags'); // <img />

    remove_filter('the_excerpt', 'wpautop');



    /** Fix for empty search queries redirecting to home page - da ROOTS 
     * @link http://wordpress.org/support/topic/blank-search-sends-you-to-the-homepage#post-1772565
     * @link http://core.trac.wordpress.org/ticket/11330
     */

    function roots_request_filter($query_vars) {
      if (isset($_GET['s']) && empty($_GET['s'])) {
        $query_vars['s'] = ' ';
      }
      return $query_vars;
    }

    add_filter('request', 'roots_request_filter');

	

	

// Disabilita EMBEDS 
function disable_embeds_init() {
    // Remove the REST API endpoint.
    remove_action('rest_api_init', 'wp_oembed_register_route');
    // Turn off oEmbed auto discovery.
    // Don't filter oEmbed results.
    remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);
    // Remove oEmbed discovery links.
    remove_action('wp_head', 'wp_oembed_add_discovery_links');
	remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
    // Remove oEmbed-specific JavaScript from the front-end and back-end.
    remove_action('wp_head', 'wp_oembed_add_host_js');
}

add_action('init', 'disable_embeds_init', 9999);







/** RIMOZIONE CLASSI MENU */

    function custom_wp_nav_menu($var) { return is_array($var) ? array_intersect($var, array( 
		// List of useful classes to keep 
  	 'separatore','current_page_item', 'current_page_parent', 'current_page_ancestor', 'current-menu-item', 'menu-item' ) ) : '';} 
	 add_filter('nav_menu_css_class', 'custom_wp_nav_menu');
	 add_filter('nav_menu_item_id', 'custom_wp_nav_menu'); 
	 add_filter('page_css_class', 'custom_wp_nav_menu'); 







//remove class from the_post_thumbnail

function the_post_thumbnail_remove_class($output) {

        $output = preg_replace('/class=".*?"/', '', $output);

        return $output;

}

add_filter('post_thumbnail_html', 'the_post_thumbnail_remove_class');





/***** PAGINA di LOGIN *****/

    function custom_login() { 

    	echo '<link rel=\'stylesheet\' id=\'newlogin\' href=\''.get_template_directory_uri().'/css-login/csslogin.css\' type=\'text/css\' media=\'all\' /> '; 

    }

    add_action('login_head', 'custom_login');   



/***** RIMUOVERE PARTI DEL MENU per gli utenti NON admin *****/

function remove_menus()

{

    global $menu;

    global $current_user;

    wp_get_current_user();



    if($current_user->user_level < 10)

    {

        $restricted = array(__('Links'),

                            __('Tools'),

        );

        end ($menu);

        while (prev($menu)){

            $value = explode(' ',$menu[key($menu)][0]);

            if(in_array($value[0] != NULL?$value[0]:"" , $restricted)){unset($menu[key($menu)]);}

        }// end while



    }// end if

}

add_action('admin_menu', 'remove_menus');



/***** lunghezza RIASSUNTO (excerpt) *****/

function modifica_riassunto(){ return 80; }

add_filter('excerpt_length','modifica_riassunto');



/***** aggiungi RIASSUNTO a pagine *****/

function riassunto_pagine() { add_post_type_support( 'page', 'excerpt' ); }

add_action( 'init', 'riassunto_pagine' );



// Menu



    /**** custoom menu ***/ 

    if ( function_exists( 'register_nav_menus' ) ) {

    	register_nav_menus(

    		array(

    		'main-menu' => __('Menu primario', ''),  

    		'secondary-menu' => __('Menu secondario', ''),   

    		'footer-menu' => __( 'Footer Menu' ),

            'footer-menu2' => __( 'Footer Menu 2' ),



            'mobile-menu' => __( 'Mobile Menu' )



    		)

    	);

    }



    // Modifico le parole inserendo quante parole voglio es. (10) parole

    function excerpt($limit) {

    	$excerpt = explode(' ', get_the_excerpt(), $limit);

    	if (count($excerpt)>=$limit) {

    		array_pop($excerpt);

    		$excerpt = implode(" ",$excerpt).'...';

    	} else {

    		$excerpt = implode(" ",$excerpt);

    	} 

    	$excerpt = preg_replace('`\[[^\]]*\]`','',$excerpt);

    	return $excerpt;

    }



    function content($limit) {

    	$content = explode(' ', get_the_content(), $limit);

    	if (count($content)>=$limit) {

    	array_pop($content);

    		$content = implode(" ",$content).'...';

    	} else {

    		$content = implode(" ",$content);

    	} 

    	$content = preg_replace('/\[.+\]/','', $content);

    	$content = apply_filters('the_content', $content); 

    	$content = str_replace(']]>', ']]&gt;', $content);

    	return $content;

    }



  function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
  }
  add_filter('upload_mimes', 'cc_mime_types');