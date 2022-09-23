<?php
    $email = ""; $name = ""; $subject = ""; $message = ""; $lang = "EN";
    if(isset($_POST['lang'])){$lang = $_POST['lang'];};
    if(isset($_POST['email'])){$email = $_POST['email'];};
    if(isset($_POST['name'])){$name = $_POST['name'];};
    if(isset($_POST['subject'])){$subject = $_POST['subject'];};
    if(isset($_POST['message'])){$message = $_POST['message'];};

    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://personal-i6nfgh8p.outsystemscloud.com/Septagonal_DB/rest/PortoFolio/PostEmail',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS =>'{
    "Email": "'.$email.'",
    "Name": "'.$name.'",
    "Subject": "'.$subject.'",
    "Message": "'.$message.'"
    }',
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
    ));

    $response = curl_exec($curl);
    $response = json_decode($response,true);

    curl_close($curl);
    $res_message = "";
    switch ($response['CodeMessage']) {
        case "0":
            if($lang == "ID"){$res_message = "Input tidak boleh kosong, periksa lagi pesan anda";}
            else{$res_message = "Input cannot be Empty";};
            break;
        case "1":
            if($lang == "ID"){$res_message = "Anda Sudah mengirim pesan, tunggu 2 jam sebelum mengirim kembali";}
            else{$res_message = $response['Message'];};
            break;
        case "9":
            if($lang == "ID"){$res_message = "Pesan Berhasil dikirim.";}
            else{$res_message = "Message Sent Successfully";};
            break;
        default :
            $res_message = $response['Message'];
    };

    echo '<script type ="text/JavaScript">';
    echo 'alert("'.$res_message.'"); window.location.href="index.html";'; 
    echo '</script>';
?>

