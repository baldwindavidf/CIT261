<?php
// Array with names
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";

$stuff = $_REQUEST["stuff"];

// get the q parameter from URL
$q = $_REQUEST["q"];
$string = preg_replace('/\s+/', '', $stuff);
$myArray = explode(',', strtolower($stuff));

    
$hint = "";

// lookup all hints from array if $q is different from "" 
if ($q !== "") {
    $q = strtolower($q);
    $len=strlen(utf8_decode($q));
    echo $len;
    foreach($myArray as $name) {
        echo $name;
        $sleg = strlen($name);
        echo $sleg;
        echo $len;
        if (stristr($q, substr($name, 0 , 1))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= "<br/> $name";
            }
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values 
echo $hint === "" ? "no match" : $hint;

?>