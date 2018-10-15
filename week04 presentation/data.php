<?php
// Array with names
$a[] = "Anna";
$a[] = "Florence";
$a[] = "Grant";
$a[] = "Jimmy";
$a[] = "Kurt";
$a[] = "Lance";
$a[] = "Mary";
$a[] = "Nate";
$a[] = "Paul";
$a[] = "Robbie";
$a[] = "Stewart";
$a[] = "Tara";
$a[] = "Wiley";
$a[] = "Shelby";
$a[] = "Audery";
$a[] = "Janeen";
$a[] = "Richard";
$a[] = "Laura";
$a[] = "Priscilla";
$a[] = "Sam";
$a[] = "Peggy";
$a[] = "Mike";
$a[] = "George";
$a[] = "Hank";
$a[] = "Jack";
$a[] = "Randy";
$a[] = "Alan";
$a[] = "Bobby";
$a[] = "Brad";
$a[] = "Clyde";
$a[] = "David";
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

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from "" 
if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values 
echo $hint === "" ? "no suggestion" : $hint;
?>