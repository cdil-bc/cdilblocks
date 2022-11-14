<?php
/**
 * Theme admin functions.
 *
 * @package Cdilblocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'Direct script access denied.' );
}

/**
* Add admin menu
*
* @since 1.0.0
*/
function cdilblocks_theme_admin_menu() {
	add_theme_page(
		esc_html__( 'Cdilblocks Getting Started', 'cdilblocks' ),
		esc_html__( 'Cdilblocks Theme', 'cdilblocks' ),
		'manage_options',
		'cdilblocks-theme',
		'cdilblocks_admin_page_content',
		30
	);
}
add_action( 'admin_menu', 'cdilblocks_theme_admin_menu' );


/**
* Add admin page content
*
* @since 1.0.0
*/
function cdilblocks_admin_page_content() {
	$theme = wp_get_theme();
	$theme_name = 'cdilblocks';
	$active_theme_name = $theme->get('Name');

	?>
<div style="padding: 3rem;">
	This might be page for the CDILblocks theme. Stay tuned.
</div>
	<?php
}
