<?php
$WorkerName=$_REQUEST['Worker Name'];
$FatherName=$_REQUEST['Father Name'];
$MotherName=$_REQUEST['Mother Name'];
$Job=$_REQUEST['Jop'];
$PassportNumber=$_REQUEST['PassportNumber'];
$PassportExpireDate=$_REQUEST['Passport Expire Date'];
$PassportReleaseDate=$_REQUEST['Passport Release Date'];



if(isset($_post['btnphp']))    //بحط isset عشان اتاكد المتغير ده موجود ولا لا


{

    $host="localhost";
    $user="root";
    $password="";
    $db="lamis";




    $conn = mysqli_connect($host,$user,$passwoard,$db);

    $insert= "insert into lamiss values('$WorkerName','$FatherName','$MotherName','$Job','$PassportNumber','$PassportExpireDate','$PassportReleaseDate')"; //calling insert to take values from user 
     //without value word you can't take info......!!!!!!!!
    mysqli_query($conn,$insert); //search to insert data

    if($conn){              

        
        echo("<h1 style='color:green;'> sucessful </h1>");
    }
    else{

        echo("<h1 style='color:red;'>There is something Wrong!</h1>");

    }





}




?>