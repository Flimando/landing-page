<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validierung der Eingabedaten
    if (!empty($name) && !empty($email) && !empty($message)) {
        // E-Mail senden
        $to = "support@flimando.com";
        $subject = "Neue Kontaktanfrage von $name";
        $body = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.";
        } else {
            echo "Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.";
        }
    } else {
        echo "Bitte füllen Sie alle Felder aus.";
    }
} else {
    header("Location: kontakt.html");
    exit();
}
?>
