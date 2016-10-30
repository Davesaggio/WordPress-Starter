<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package wp_base
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php 
/*
	if ( is_page_template('page-diventa-cliente.php') ) {

			if ( function_exists( 'wpcf7_enqueue_scripts' ) ) { wpcf7_enqueue_scripts(); }

			if ( function_exists( 'wpcf7_enqueue_styles' ) ) { wpcf7_enqueue_styles(); }

} 
*/
?>
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">

	<header id="masthead" class="site-header" role="banner">
		<nav id="main_nav">
			<div class="content">
				<div class="site-branding" itemscope itemtype="http://schema.org/Organization">
				
		 			<?php if ( is_front_page()) { ?><h1 class="ip-logo"><?php } ?>

					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="" rel="home">

						<?php get_template_part( 'img/svg/inline', 'logo.svg' ); ?>

					</a>

					<?php if ( is_front_page()) { ?></h1><?php } ?>

				</div><!-- .site-branding -->
				<?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'menu_id' => 'main-menu' ) ); ?>
			</div>
		</nav>
		
	</header>
	<div id="content" class="site-content">
