<?php

$smarty->assign('caption', t('Troubletickets'));
$content = '';
  
// Additional Admin-Stats
if ($auth['type'] >= \LS_AUTH_TYPE_ADMIN) {
    $row6 = $database->queryWithOnlyFirstRow("SELECT COUNT(*) AS n FROM %prefix%troubleticket WHERE target_userid = '0'");
    $row7 = $database->queryWithOnlyFirstRow("SELECT COUNT(*) AS n FROM %prefix%troubleticket");
    $content .= t('Troubletickets') .": ".$row6["n"]." / ".$row7["n"] . HTML_NEWLINE;
}
