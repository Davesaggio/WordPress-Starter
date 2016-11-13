<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package wp_base
 */

get_header(); ?>
	<?php get_template_part( 'template-parts/content', 'slider' ); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main content" role="main">

		<?php
		if ( have_posts() ) :?>
		<?php

			/* Start the Loop */
			while ( have_posts() ) : the_post();
		?>
		<h2><?php the_title(); ?></h2>
		<?php get_template_part( 'template-parts/content', 'text' ); ?>
		<?php
	
			endwhile;

			the_posts_navigation();

		else :


		endif; ?>
		<h2>Custom post</h2>
		<?php get_template_part( 'template-parts/content', 'custompost' ); ?>

		</main>
	</div>
<?php
get_sidebar();
get_footer();
