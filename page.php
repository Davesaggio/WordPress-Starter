<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package wp_base
 */

get_header(); ?>

<?php
if ( have_posts() ) :?>
<?php while ( have_posts() ) : the_post();?>

<div class="content">
	<div id="primary" class="content-area duecolonne">
		<main id="main" class="site-main" role="main">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<header class="entry-header">
					<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
				</header>
				<div class="entry-content">
				<?php
					the_content();

					wp_link_pages( array(
						'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cha' ),
						'after'  => '</div>',
					) );
				?>
				</div>
			</article><!-- #post-## -->
		</main><!-- #main -->
	</div><!-- #primary -->
	<?php get_sidebar(); ?>
</div>

<?php endwhile; ?>
<?php endif; ?>
<?php
get_sidebar();
get_footer();