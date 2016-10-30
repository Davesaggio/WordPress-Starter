<?php

/**

 * Amazzone functions and definitions.

 *

 * @link https://developer.wordpress.org/themes/basics/theme-functions/

 *

 * @package Amazzone

 */



if ( ! function_exists( 'wp_base_setup' ) ) :

/**

 * Sets up theme defaults and registers support for various WordPress features.

 *

 * Note that this function is hooked into the after_setup_theme hook, which

 * runs before the init hook. The init hook is too late for some features, such

 * as indicating support for post thumbnails.

 */

function wp_base_setup() {

	/*

	 * Make theme available for translation.

	 * Translations can be filed in the /languages/ directory.

	 * If you're building a theme based on amazzone, use a find and replace

	 * to change 'amazzone' to the name of your theme in all the template files.

	 */

	load_theme_textdomain( 'amazzone', get_template_directory() . '/languages' );



	// Add default posts and comments RSS feed links to head.

	add_theme_support( 'automatic-feed-links' );



	/*

	 * Let WordPress manage the document title.

	 * By adding theme support, we declare that this theme does not use a

	 * hard-coded <title> tag in the document head, and expect WordPress to

	 * provide it for us.

	 */

	add_theme_support( 'title-tag' );



	/*

	 * Switch default core markup for search form, comment form, and comments

	 * to output valid HTML5.

	 */

	add_theme_support( 'html5', array(

		'search-form',

		'comment-form',

		'comment-list',

		'gallery',

		'caption',

	) );



	/*

	 * Enable support for Post Formats.

	 * See https://developer.wordpress.org/themes/functionality/post-formats/

	 */

	add_theme_support( 'post-formats', array(

		'aside',

		'image',

		'video',

		'quote',

		'link',

	) );

 }

 endif;

 add_action( 'after_setup_theme', 'wp_base_setup' );



 /**** thumbnails ***/ 

 // add custom size image

 if ( function_exists( 'add_theme_support' ) ) {

    add_theme_support( 'post-thumbnails' );
 
    add_image_size( 'image-big', 1920, 1080, true ); /* elemento  big */

    add_image_size( 'image-news', 250, 250, true ); /* miniatura Prodotto */

    add_image_size( 'image-news-big', 660, 660, true ); /* miniatura news grande */
    add_image_size( 'image-chisiamo', 110, 110, true ); /* miniatura news grande */







 }





/** Richiama CSS e javascript */

function jquery_css_scripts() {

	$jquery_script_url = get_template_directory_uri();

	wp_enqueue_style( 'elvia-style', get_stylesheet_uri() );

	

	wp_deregister_script( 'jquery' );

	wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . "://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js", true, '2.1.1',true);

	wp_enqueue_script('jquery');

	//wp_enqueue_script( 'modenizr', $jquery_script_url. '/js/modernizr-custom.js', array('jquery'), '1.0.0', false);

   	wp_enqueue_script( 'slick-slider', '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js', array('jquery'), '1.0.0', true);  

   	//wp_enqueue_script( 'lightbox', $jquery_script_url. '/js/slick-lightbox.js', array('jquery'), '1.0.0', true);*/

   //	wp_enqueue_script( 'vendor', $jquery_script_url. '/js/vendor.min.js', array('jquery'), '1.0.0', true);


	wp_enqueue_script( 'application', $jquery_script_url. '/js/application.min.js', array('jquery'), '1.0.0', true);

} 







add_action( 'wp_enqueue_scripts', 'jquery_css_scripts' );



/**

 * Custom template tags for this theme.

 */

require get_template_directory() . '/inc/template-tags.php';



/**

 * Custom functions that act independently of the theme templates.

 */

require get_template_directory() . '/inc/extras.php';






add_action( 'widgets_init', 'my_register_sidebars' );
function my_register_sidebars() {

/* Register dynamic sidebar 'share social' */

     register_sidebar(

        array(

        'id' => 'mailup',

        'name' => __( 'Mailup' ),

        'description' => __( 'sidebar per mailup' ),

        'before_widget' => '<div id="%1$s" class="widget %2$s">',

        'after_widget' => '</div>',

        'before_title' => '<h3 class="widget-title">',

        'after_title' => '</h3>'

    )

    );

  }


  // aumento file upload
  @ini_set( 'upload_max_size' , '64M' );
  @ini_set( 'post_max_size', '64M');
  @ini_set( 'max_execution_time', '300' );