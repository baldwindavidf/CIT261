<?php

$stuff = $_REQUEST["stuff"];

$myArray = explode(',', $stuff);
  
echo "<select>";

foreach ($myArray as $name) {
echo "<option>".$name."</option>";
}

echo "</select>";

?>