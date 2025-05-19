<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ReservationController extends AbstractController
{
    #[Route('/api/reservations', name: 'api_reservations', methods: ['GET'])]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to the reservation controller!',
            'status' => 'success'
        ]);
    }

    #[Route('/api/reservations', name: 'api_reservations_create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        return $this->json([
            'message' => 'Reservation created successfully',
            'status' => 'success'
        ]);
    }

    #[Route('/api/reservations/{id}', name: 'api_reservations_update', methods: ['PUT'])]
    public function update(Request $request, int $id): JsonResponse
    {
        return $this->json([
            'message' => 'Reservation updated successfully',
            'status' => 'success'
        ]);
    }

    #[Route('/api/reservations/{id}', name: 'api_reservations_delete', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        return $this->json([
            'message' => 'Reservation deleted successfully',
            'status' => 'success'
        ]);
    }
}