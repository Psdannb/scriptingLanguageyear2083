<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bcawordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'i[Tj=d;s^}KKOo7Ph?rSExM&|M$=y#;>McBm-ssuQN%Dd=`ynwa&Nb;08kkwe}=x' );
define( 'SECURE_AUTH_KEY',  '|?8%2cL&If=ow?w@(8qMl_ac]%1m?Ne-X-Po{Mhe{?6Bov-3(ypcmwA{WZ}E,v4H' );
define( 'LOGGED_IN_KEY',    '~:nSWIWS8b7HjL(IEp?wb/W5Wm/V-_r!BA-y3=Kg|{oNYXio87k?)%!ID7+!J:[x' );
define( 'NONCE_KEY',        '9#gCNR({+}N2Di!|=a:(O?k aG&4x#]oWwzP{z)HWhv~%p|AT|WFkpG+Mbq/mVfJ' );
define( 'AUTH_SALT',        '&NlZj.cSB/i^brP>1T#iPe/Y|[D$lO`LQ,<2zyx,N-!3PWnjbFF&5JL!u(mQ;/w4' );
define( 'SECURE_AUTH_SALT', 'Y|(-07A.f-qC|O!fVuFA^E@5#1K=]CS6=!o=2b?4vts|}pms-RMgSO[Y!v5yw4_/' );
define( 'LOGGED_IN_SALT',   'Z-%toTP{.=FO{Xqn/P|6+9@oxBD^;XQ--ILo&`)?N<~N8Ga^KfDOf.]T.i}2x9zd' );
define( 'NONCE_SALT',       '(a#N%[Oy=j,4cJYb![[kE,!dWPMdMC<K]J1>l.fjQ2jrZ<u)`2;hL>+p^&QZDt(t' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
