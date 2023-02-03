<!DOCTYPE html>
<html lang="pt-br"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


<body>
  
<?php

$url = "http://localhost:3000/produtos";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);

$produtos = json_decode(curl_exec($ch));


foreach ($produtos as $produtoss) {
    echo "nome do item: " . $produtoss->nome;
}


var_dump($produtos);

?>

</body>

</html>