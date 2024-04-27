<?php
require_once __DIR__ . '/rest/services/UserService.class.php';

$payload = $_REQUEST;

if($payload['first_name'] == NULL || $payload['first_name'] == '') {
    header('HTTP/1.1 500 Bad Request');
    die(json_encode(['error' => "First name field is missing"]));
}

$user_service = new UserService();

if($payload['id'] != NULL && $payload['id'] != ''){
    $user = $user_service->edit_user($payload);
} else {
    unset($payload['id']);
    $user = $usert_service->add_user($payload);
}

echo json_encode(['message' => "You have successfully added user", 'data' => $user]);