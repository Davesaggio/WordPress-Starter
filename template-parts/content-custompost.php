<section class="contents">
	<?php // ULTIMI 5 POST DI custom post type
      $events = array(
         'posts_per_page' => 5,
         'post_type' => 'prodotto',
        'order' => 'ASC'

      );
      $the_query = new WP_Query( $events ); 
      if( $the_query -> have_posts() ) :
   ?>
   <ul id="post_list">
      <?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>
            <li>
               <a href="<?php the_permalink(); ?>">
                     <?php if ( '' != get_the_post_thumbnail() ) { the_post_thumbnail('large'); }
                     else {?>
                     <img src="<?php echo get_stylesheet_directory_uri() ?>/img/no-news.jpg" />
                     <?php } ?>
                  <div class="post_content">
                     <h3><?php the_title(); ?></h3>
                     <?php //the_excerpt(); ?>
                  </div>
               </a>
            </li>
      <?php endwhile; ?>

   </ul>
   
   <?php endif; wp_reset_query(); ?>
</section>	