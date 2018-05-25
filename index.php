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
        <style>
        .bx-wrapper{position:relative;margin:0 auto 60px;padding:0;*zoom:1;-ms-touch-action:pan-y;touch-action:pan-y}.bx-wrapper img{max-width:100%;display:block}.bxslider{margin:0;padding:0}ul.bxslider{list-style:none}.bx-viewport{-webkit-transform:translatez(0)}.bx-wrapper{-webkit-box-shadow:0 0 5px #ccc;box-shadow:0 0 5px #ccc;border:5px solid #fff;background:#fff}.bx-wrapper .bx-controls-auto,.bx-wrapper .bx-pager{position:absolute;bottom:-30px;width:100%}.bx-wrapper .bx-loading{min-height:50px;background:url(images/bx_loader.gif) center center no-repeat #fff;height:100%;width:100%;position:absolute;top:0;left:0;z-index:2000}.bx-wrapper .bx-pager{text-align:center;font-size:.85em;font-family:Arial;font-weight:700;color:#666;padding-top:20px}.bx-wrapper .bx-pager.bx-default-pager a{background:#666;text-indent:-9999px;display:block;width:10px;height:10px;margin:0 5px;outline:0;border-radius:5px}.bx-wrapper .bx-pager.bx-default-pager a.active,.bx-wrapper .bx-pager.bx-default-pager a:focus,.bx-wrapper .bx-pager.bx-default-pager a:hover{background:#000}.bx-wrapper .bx-controls-auto .bx-controls-auto-item,.bx-wrapper .bx-pager-item{display:inline-block;*zoom:1;*display:inline}.bx-wrapper .bx-pager-item{font-size:0;line-height:0}.bx-wrapper .bx-prev{left:10px;background:url(images/controls.png) no-repeat 0 -32px}.bx-wrapper .bx-prev:focus,.bx-wrapper .bx-prev:hover{background-position:0 0}.bx-wrapper .bx-next{right:10px;background:url(images/controls.png) no-repeat -43px -32px}.bx-wrapper .bx-next:focus,.bx-wrapper .bx-next:hover{background-position:-43px 0}.bx-wrapper .bx-controls-direction a{position:absolute;top:50%;margin-top:-16px;outline:0;width:32px;height:32px;text-indent:-9999px;z-index:9999}.bx-wrapper .bx-controls-direction a.disabled{display:none}.bx-wrapper .bx-controls-auto{text-align:center}.bx-wrapper .bx-controls-auto .bx-start{display:block;text-indent:-9999px;width:10px;height:11px;outline:0;background:url(images/controls.png) -86px -11px no-repeat;margin:0 3px}.bx-wrapper .bx-controls-auto .bx-start.active,.bx-wrapper .bx-controls-auto .bx-start:focus,.bx-wrapper .bx-controls-auto .bx-start:hover{background-position:-86px 0}.bx-wrapper .bx-controls-auto .bx-stop{display:block;text-indent:-9999px;width:9px;height:11px;outline:0;background:url(/images/controls.png) -86px -44px no-repeat;margin:0 3px}.bx-wrapper .bx-controls-auto .bx-stop.active,.bx-wrapper .bx-controls-auto .bx-stop:focus,.bx-wrapper .bx-controls-auto .bx-stop:hover{background-position:-86px -33px}.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-pager{text-align:left;width:80%}.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-controls-auto{right:0;width:35px}.bx-wrapper .bx-caption{position:absolute;bottom:0;left:0;background:#666;background:rgba(80,80,80,0.75);width:100%}.bx-wrapper .bx-caption span{color:#fff;font-family:Arial;display:block;font-size:.85em;padding:10px}
        <?include 'css/inline.css'?>
        </style>
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
                        <jdoc:include type="message"/>
                        <jdoc:include type="component"/>
                    </article>
                </section>
            <?}?>
            <jdoc:include type="modules" name="footer" />
        </main>
        <?if ($page_id != 359) {?>
            <script src="<?echo $template_url ?>/node_modules/jquery/dist/jquery.min.js"></script>
            <script src="<?echo $template_url ?>/node_modules/foundation-sites/dist/js/foundation.min.js"></script>
            <script>$(document).foundation()</script>
        <?}?>
        <?if ($is_homepage) {?>
            <script src="<?echo $template_url ?>/node_modules/bxslider/dist/jquery.bxslider.min.js"></script>
            <script>var ismain = true</script>
        <?} else {?>
            <script>var ismain = false</script>
        <?}?>
        <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
        <script src="<?echo $template_url ?>/js/share.js"></script>
        <script src="<?echo $template_url ?>/js/app.js"></script>

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
    </body>
</html>
<jdoc:include type="head" />
<link rel="stylesheet" href="<?echo $template_url?>/css/app.css">