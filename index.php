<?php
defined('_JEXEC') or die;
$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$menu = $app->getMenu();
$lang = JFactory::getLanguage();

$template_url = $this->baseurl . '/templates/' . $this->template;
$doc->addStyleSheet($template_url . '/css/app.css');
$page_id = $menu->getActive()->id;
$is_homepage = $menu->getActive() == $menu->getDefault($lang->getTag());
$dontInclude = array(
'/media/jui/js/jquery.js',
'/media/jui/js/jquery.min.js',
'/media/jui/js/jquery-noconflict.js',
'/media/jui/js/jquery-migrate.js',
'/media/jui/js/jquery-migrate.min.js',
'/media/jui/js/bootstrap.js',
'/media/system/js/core-uncompressed.js',
'/media/system/js/tabs-state.js',
'/media/system/js/core.js',
'/media/system/js/mootools-core.js',
'/media/system/js/mootools-core-uncompressed.js',
'/media/system/js/caption.js'
);

foreach($doc->_scripts as $key => $script){
    if(in_array($key, $dontInclude)){
        unset($doc->_scripts[$key]);
    }
}
?>

<!doctype html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width">
    <meta name="theme-color" content="#fff"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;subset=cyrillic" rel="stylesheet">
    <jdoc:include type="head" />
    <?php echo '<script>var yaParams = {ip_adress: "'. $_SERVER['REMOTE_ADDR'] .'" };</script>'; ?>
</head>
<body>
    <main class="wrap">
        <jdoc:include type="modules" name="header" />
        <nav class="nav">
            <div class="row align-middle align-justify">
                <jdoc:include type="modules" name="menu" />
                <jdoc:include type="modules" name="share" />
            </div>
        </nav>
        <?if($is_homepage){?>
            <section class="slider">
                <jdoc:include type="modules" name="slider" />
                <jdoc:include type="modules" name="call" />
            </section>
            <jdoc:include type="modules" name="services" />
            <jdoc:include type="modules" name="products" />
            <jdoc:include type="modules" name="callsect" />
            <jdoc:include type="modules" name="why" />
            <jdoc:include type="modules" name="about" />
            <jdoc:include type="modules" name="how" />
            <jdoc:include type="modules" name="portfolio" />
            <jdoc:include type="modules" name="reviews" />
        <?}else{?>
            <section class="row page">
                <aside class="small-12 medium-5 large-3 columns leftmenu">
                    <div class="leftmenu_inner">
                        <jdoc:include type="modules" name="sidebar" style="sidebar" />
                    </div>
                </aside>
                <article class="columns">
                    <jdoc:include type="message"/>
                    <jdoc:include type="component"/>
                </article>         
            </section>
        <?}?>
        <jdoc:include type="modules" name="footer" />
    </main>
    <?if($page_id!=359){?>
    <script src="<?echo $template_url?>/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="<?echo $template_url?>/bower_components/foundation-sites/dist/foundation.min.js"></script>
    <script>$(document).foundation()</script>
    <?}?>
    <?if($is_homepage){?>
    <script src="<?echo $template_url?>/bower_components/bxslider-4/dist/jquery.bxslider.min.js"></script>
    <script src="<?echo $template_url?>/js/tooltip.js"></script>
    <script src="<?echo $template_url?>/js/popover.js"></script>
    <script src="<?echo $template_url?>/js/app.js"></script>
    <?}?>
</body>
</html>