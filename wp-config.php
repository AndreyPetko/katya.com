<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'kaley');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '1234');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'J|*qmAV@QUdNal-?>W!JcVGSh(N89=:p+c yBT){_)4Q|Z}~g@s7pI9p=[muL;lI');
define('SECURE_AUTH_KEY',  'r(FK4^4MV0-1x27e}5; ^-pbmSg>Xo;bqjr~vU1e|UnSAi%v&A+G>7_!a?gUbo<o');
define('LOGGED_IN_KEY',    'l_SgWy33:4Ab)uN`SM}~0Ig2K[[GEA&b:W~$o<%dIi./>p):vFO)7Z M7s>ep&[W');
define('NONCE_KEY',        'm90g:DZ>}D!z|9SO<9~DtG{%!G~O:C*rb[mbs>ggU#{!#[Di@V<Ji+:p,V5Su#J)');
define('AUTH_SALT',        'x {3ELk%WJ5u45G%c;aIO?H$lOU<|y`O%Y[Ytfign[TZc&An<TdbH9TmapJ|M/LW');
define('SECURE_AUTH_SALT', '+$(WyQh[{9d@_C_9d4&NOsvLps@B/*r={o%t:C5FOF`&p_j*_f#D}`Yt-r1u0$~r');
define('LOGGED_IN_SALT',   'ZLS_>E)^]tPKKDqd/kMaplcjy#J<#z!=}i^LR N4Uz41 e+M2ZBU*20B+8C^dSb-');
define('NONCE_SALT',       ':4yO;_cNi:Ttq HyzFMc[}B/N-r+FACxxb<=I afMfl^!^z 0F6#z>{dD!U#$N]|');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
