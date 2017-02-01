<footer id="colophon" class="site-footer site-footer-none">
	
	<?php if ( get_theme_mod( 'nikkon-footer-bottombar', false ) == 0 ) : ?>
	
	<div class="site-footer-bottom-bar">
	
		<div class="site-container"><div class="site-footer-bottom-bar-left"><a href="https://kairaweb.com/" target="_blank">Kaira</a> - <a href="http://vkusnodoma.net/" title="Рецепты с фото" target="_blank">кулинарные рецепты</a>
                
		</div><div class="site-footer-bottom-bar-right">
                
	            <?php wp_nav_menu( array( 'theme_location' => 'footer-bar','container' => false, 'fallback_cb' => false, 'depth'  => 1 ) ); ?>
                
                <?php get_template_part( '/templates/social-links' ); ?>
                
	        </div>
	        
	    </div>
		
        <div class="clearboth"></div>
	</div>
	
	<?php endif; ?>
	
</footer>