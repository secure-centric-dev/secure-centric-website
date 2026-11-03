<?php
/**
 * Secure-Centric Theme Functions & Block Registrations
 *
 * @package SecureCentric
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Setup Theme Supports
 */
function secure_centric_setup() {
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'editor-styles' );
    add_editor_style( 'style.css' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'responsive-embeds' );
}
add_action( 'after_setup_theme', 'secure_centric_setup' );

/**
 * Register Custom Block Pattern Categories
 */
function secure_centric_register_pattern_categories() {
    register_block_pattern_category(
        'secure-centric-heroes',
        array( 'label' => __( 'Secure-Centric: Heroes', 'secure-centric' ) )
    );
    register_block_pattern_category(
        'secure-centric-process',
        array( 'label' => __( 'Secure-Centric: Process & Roadmaps', 'secure-centric' ) )
    );
    register_block_pattern_category(
        'secure-centric-proof',
        array( 'label' => __( 'Secure-Centric: Proof & Testimonials', 'secure-centric' ) )
    );
    register_block_pattern_category(
        'secure-centric-cta',
        array( 'label' => __( 'Secure-Centric: Calls to Action', 'secure-centric' ) )
    );
}
add_action( 'init', 'secure_centric_register_pattern_categories' );

/**
 * Enqueue Google Fonts (Plus Jakarta Sans & JetBrains Mono)
 */
function secure_centric_enqueue_fonts() {
    wp_enqueue_style(
        'secure-centric-fonts',
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );
}
add_action( 'wp_enqueue_scripts', 'secure_centric_enqueue_fonts' );
add_action( 'enqueue_block_editor_assets', 'secure_centric_enqueue_fonts' );
