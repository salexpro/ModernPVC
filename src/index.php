<?php
defined('_JEXEC') or die;
$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$menu = $app->getMenu();
$lang = JFactory::getLanguage();

$template_url = $this->baseurl . '/templates/' . $this->template;
// $doc->addStyleSheet($template_url . '/css/app.css');
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
    '/media/system/js/caption.js',
);

foreach ($doc->_scripts as $key => $script) {
    if (in_array($key, $dontInclude)) {
        unset($doc->_scripts[$key]);
    }
}
if (isset($_GET['chronoform']) == 'callsect' and $_GET['event'] == 'submit' and !empty($_POST['phone'])) {
    file_get_contents('http://okna-hit.ru/roistatproxy.php?qtype=form&name=' . $_POST['name'] . '&phone=' . $_POST['phone'] . '&visit=' . $_COOKIE['roistat_visit'] . '&fields[site]=' . 'http://' . $_SERVER['HTTP_HOST']);
//echo 'http://okna-hit.ru/roistatproxy.php?qtype=form&name='.$_POST['name'].'&phone='.$_POST['phone'].'&visit='.$_COOKIE['roistat_visit'].'&fields[site]='.'http://'.$_SERVER['HTTP_HOST'];
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#f2f2f2"/>
        <style><?include 'css/inline.css'?></style>
        <?php echo '<script>var yaParams = {ip_adress: "' . $_SERVER['REMOTE_ADDR'] . '" };</script>'; ?>
    </head>
    <body>
        <main class="wrap">
            <jdoc:include type="modules" name="header" />
            <nav class="nav" data-closable>
                <div class="row align-middle align-justify">
                    <jdoc:include type="modules" name="menu" />
                    <jdoc:include type="modules" name="share" />
                </div>
                <button class="show-for-small-only close-button" aria-label="Закрыть окно" type="button" data-close><span aria-hidden="true">&times;</span></button>
            </nav>
            <?if ($is_homepage) {?>
                <jdoc:include type="modules" name="slider" />
                <jdoc:include type="modules" name="actions" />
                <jdoc:include type="modules" name="services" />
                <jdoc:include type="modules" name="products" />
                <jdoc:include type="modules" name="callsect" />
                <jdoc:include type="modules" name="why" />
                <jdoc:include type="modules" name="about" />
                <jdoc:include type="modules" name="how" />
                <jdoc:include type="modules" name="portfolio" />
                <jdoc:include type="modules" name="reviews" />
            <?} else {?>
                <section class="row page">
                    <aside class="small-12 medium-4 large-3 column leftmenu">
                        <div class="leftmenu_inner">
                            <jdoc:include type="modules" name="sidebar" style="sidebar" />
                        </div>
                    </aside>
                    <article class="columns">
                        <?if ($page_id == 359) {?><script src="<?echo $template_url ?>/node_modules/jquery/dist/jquery.min.js"></script><?}?>
                        <jdoc:include type="message"/>
                        <jdoc:include type="component"/>
                    </article>
                </section>
            <?}?>
            <jdoc:include type="modules" name="footer" />
        </main>
        <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
        <script src="<?echo $template_url ?>/js/share.min.js"></script>
        <script src="<?echo $template_url ?>/js/app.min.js"></script>
        <!--rs-->
        <script>
            (function(w, d, s, h, id) {
            w.roistatProjectId = id; w.roistatHost = h;
            var p = d.location.protocol == "https:" ? "https://" : "http://";
            var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init";
            var js = d.createElement(s); js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
            })(window, document, 'script', 'cloud.roistat.com', '9fc30ce84d23bc1d30573a90056106d7');
            $(document).ready(function(){
            console.log('start');
            $('.chronoform').submit(function(){
            var name = $('[name="name"]').val();
            var phone = $('[name="phone"]').val();
            roistatGoal.reach({name: name, phone: phone, fields: {}});});});
        </script>
        <!--rs-->
        <jdoc:include type="head" />
        <link rel="stylesheet" href="<?echo $template_url?>/css/app.css">
    </body>
</html>