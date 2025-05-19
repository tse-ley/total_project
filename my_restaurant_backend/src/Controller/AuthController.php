<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AuthController extends AbstractController
{
    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function login(AuthenticationUtils $authenticationUtils): JsonResponse
    {
        // If there's an authentication error, return it
        $error = $authenticationUtils->getLastAuthenticationError();
        if ($error) {
            return $this->json([
                'message' => $error->getMessageKey(),
                'status' => 'error'
            ], 401);
        }

        // If authentication is successful, the JWT token will be returned by the JWT listener
        return $this->json([
            'message' => 'Authentication successful',
            'status' => 'success'
        ]);
    }
}