<?php

declare(strict_types=1);

use OCP\Util;

Util::addScript(OCA\SimpleDashboard\AppInfo\Application::APP_ID, OCA\SimpleDashboard\AppInfo\Application::APP_ID . '-main');
Util::addStyle(OCA\SimpleDashboard\AppInfo\Application::APP_ID, OCA\SimpleDashboard\AppInfo\Application::APP_ID . '-main');

?>

<div id="simpledashboard"></div>
