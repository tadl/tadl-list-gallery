<?php
/* 
    Plugin Name: TADL List Gallery
    Plugin URI: http://tech.tadl.org/tadl-list-gallery
    Version: v0.10
    Author: <a href="http://tech.tadl.org/">TADL Technology Team</a>
    Description: A plugin for displaying item lists on our website using a shortcode.
 */

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

if (!class_exists("TADLListGallery")) {
    class TADLListGallery {
        function TADLListGallery() { //constructor
        }
    }
} //End Class TADLListGallery


if (class_exists("TADLListGallery")) {
    $tadl_listgallery = new TADLListGallery();
}


?>
