<?php
if (!mysqli_connect(localhost, root, root))
{
    exit;
}
mysqli_select_db("test");
$q = mysqli_query("SELECT")