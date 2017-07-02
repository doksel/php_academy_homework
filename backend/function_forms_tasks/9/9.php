<?php
function retext()
{
    return strrev($_POST['text']);
}
print retext();
echo '<br>';

function reverse()
{$x = $_POST['text'];
    for($i = strlen($x)-1; $i>=0; $i--){
            print ($x[$i]);
    }
}
reverse();