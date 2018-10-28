<?php

$stuff = $_REQUEST["stuff"];

$myArray = explode(',', $stuff);

echo "<select id=\"sel1\">";

foreach ($myArray as $name) {
echo "<option>".$name."</option>";
}

echo "</select>";

?>