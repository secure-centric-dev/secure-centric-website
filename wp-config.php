<?php
/**
 * Secure-Centric WordPress Configuration
 *
 * Environment-aware configuration designed for local development and CI/CD pipelines.
 * In production/staging, database credentials can be provided via environment variables
 * or an uncommitted wp-config-local.php / .env file.
 */

// 1. Load local configuration overrides if available (gitignored)
if ( file_exists( __DIR__ . '/wp-config-local.php' ) ) {
    include_once __DIR__ . '/wp-config-local.php';
}

// 2. Database Settings (fallback to env variables or local defaults)
defined( 'DB_NAME' )     or define( 'DB_NAME',     getenv( 'DB_NAME' )     ?: 'secure_centric_db' );
defined( 'DB_USER' )     or define( 'DB_USER',     getenv( 'DB_USER' )     ?: 'root' );
defined( 'DB_PASSWORD' ) or define( 'DB_PASSWORD', getenv( 'DB_PASSWORD' ) !== false ? getenv( 'DB_PASSWORD' ) : '' );
defined( 'DB_HOST' )     or define( 'DB_HOST',     getenv( 'DB_HOST' )     ?: 'localhost' );
defined( 'DB_CHARSET' )  or define( 'DB_CHARSET',  getenv( 'DB_CHARSET' )  ?: 'utf8mb4' );
defined( 'DB_COLLATE' )  or define( 'DB_COLLATE',  '' );

/**
 * Authentication Unique Keys and Salts.
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 */
defined( 'AUTH_KEY' )         or define( 'AUTH_KEY',         getenv( 'AUTH_KEY' )         ?: 'secure-centric-auth-key-random-placeholder-2026' );
defined( 'SECURE_AUTH_KEY' )  or define( 'SECURE_AUTH_KEY',  getenv( 'SECURE_AUTH_KEY' )  ?: 'secure-centric-sec-auth-key-random-placeholder-2026' );
defined( 'LOGGED_IN_KEY' )    or define( 'LOGGED_IN_KEY',    getenv( 'LOGGED_IN_KEY' )    ?: 'secure-centric-logged-in-key-random-placeholder-2026' );
defined( 'NONCE_KEY' )        or define( 'NONCE_KEY',        getenv( 'NONCE_KEY' )        ?: 'secure-centric-nonce-key-random-placeholder-2026' );
defined( 'AUTH_SALT' )        or define( 'AUTH_SALT',        getenv( 'AUTH_SALT' )        ?: 'secure-centric-auth-salt-random-placeholder-2026' );
defined( 'SECURE_AUTH_SALT' ) or define( 'SECURE_AUTH_SALT', getenv( 'SECURE_AUTH_SALT' ) ?: 'secure-centric-sec-auth-salt-random-placeholder-2026' );
defined( 'LOGGED_IN_SALT' )   or define( 'LOGGED_IN_SALT',   getenv( 'LOGGED_IN_SALT' )   ?: 'secure-centric-logged-in-salt-random-placeholder-2026' );
defined( 'NONCE_SALT' )       or define( 'NONCE_SALT',       getenv( 'NONCE_SALT' )       ?: 'secure-centric-nonce-salt-random-placeholder-2026' );

/**
 * WordPress Database Table prefix.
 */
$table_prefix = getenv( 'DB_PREFIX' ) ?: 'wp_';

/**
 * For developers: WordPress debugging mode.
 */
defined( 'WP_DEBUG' )         or define( 'WP_DEBUG',         getenv( 'WP_DEBUG' ) === 'true' );
defined( 'WP_DEBUG_LOG' )     or define( 'WP_DEBUG_LOG',     getenv( 'WP_DEBUG_LOG' ) === 'true' );
defined( 'WP_DEBUG_DISPLAY' ) or define( 'WP_DEBUG_DISPLAY', false );

/**
 * Disable automatic updates in CI/CD deployments to ensure Git remains source of truth
 */
defined( 'AUTOMATIC_UPDATER_DISABLED' ) or define( 'AUTOMATIC_UPDATER_DISABLED', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
