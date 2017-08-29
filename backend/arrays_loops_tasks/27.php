<?php
$rows = rand(2,7);
$cols = rand(2,7);
$colors = ['red','yellow','blue','gray','maroon','brown','green'];

echo '<table border = "Tests_for_calculator">';
for($tr = 1; $tr <= $rows ;$tr++){
    echo '<tr>';
    for($td = 1; $td <= $cols; $td++){
        $number = rand(1, 1000);
        $i = $colors[rand(0,count($colors)-1)];
        echo "<td style='background-color:{$i}'>".$number.'</td>';
    }
    echo '</tr>';
}
echo '</table>';