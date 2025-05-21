<?php

namespace App\Controller;

use App\Entity\Reservation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_')]
class ReservationController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/reservation', name: 'reservation', methods: ['GET'])]
    public function index(): JsonResponse
    {
        try {
            $reservations = $this->entityManager
                ->getRepository(Reservation::class)
                ->findAll();

            $data = [];
            foreach ($reservations as $reservation) {
                $data[] = [
                    'id' => $reservation->getId(),
                    'name' => $reservation->getName(),
                    'email' => $reservation->getEmail(),
                    'phone' => $reservation->getPhone(),
                    'date' => $reservation->getDate()->format('Y-m-d'),
                    'time' => $reservation->getTime()->format('H:i'),
                    'guests' => $reservation->getGuests(),
                    'status' => $reservation->getStatus()
                ];
            }

            $response = $this->json([
                'status' => 'success',
                'data' => $data
            ]);
        } catch (\Exception $e) {
            $response = $this->json([
                'status' => 'error',
                'message' => 'Error fetching reservations: ' . $e->getMessage()
            ], 500);
        }
        
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'GET');
        
        return $response;
    }

    #[Route('/reservation', name: 'reservation_create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);
            
            if (!$data) {
                return $this->json([
                    'status' => 'error',
                    'message' => 'Invalid JSON data received'
                ], 400);
            }

            // Create new reservation
            $reservation = new Reservation();
            $reservation->setName($data['name']);
            $reservation->setEmail($data['email']);
            $reservation->setPhone($data['phone']);
            $reservation->setDate(new \DateTime($data['date']));
            $reservation->setTime(new \DateTime($data['time']));
            $reservation->setGuests($data['guests']);
            $reservation->setStatus('pending');

            // Persist to database
            $this->entityManager->persist($reservation);
            $this->entityManager->flush();

            $response = $this->json([
                'status' => 'success',
                'message' => 'Reservation created successfully',
                'data' => [
                    'id' => $reservation->getId(),
                    'name' => $reservation->getName(),
                    'email' => $reservation->getEmail(),
                    'date' => $reservation->getDate()->format('Y-m-d'),
                    'time' => $reservation->getTime()->format('H:i'),
                    'guests' => $reservation->getGuests(),
                    'status' => $reservation->getStatus()
                ]
            ]);
        } catch (\Exception $e) {
            $response = $this->json([
                'status' => 'error',
                'message' => 'Error creating reservation: ' . $e->getMessage()
            ], 500);
        }
        
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'POST');
        
        return $response;
    }

    #[Route('/reservation/{id}', name: 'reservation_update', methods: ['PUT'])]
    public function update(Request $request, int $id): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);
            
            if (!$data) {
                return $this->json([
                    'status' => 'error',
                    'message' => 'Invalid JSON data received'
                ], 400);
            }

            $reservation = $this->entityManager
                ->getRepository(Reservation::class)
                ->find($id);

            if (!$reservation) {
                return $this->json([
                    'status' => 'error',
                    'message' => 'Reservation not found'
                ], 404);
            }

            // Update reservation data
            if (isset($data['name'])) $reservation->setName($data['name']);
            if (isset($data['email'])) $reservation->setEmail($data['email']);
            if (isset($data['phone'])) $reservation->setPhone($data['phone']);
            if (isset($data['date'])) $reservation->setDate(new \DateTime($data['date']));
            if (isset($data['time'])) $reservation->setTime(new \DateTime($data['time']));
            if (isset($data['guests'])) $reservation->setGuests($data['guests']);
            if (isset($data['status'])) $reservation->setStatus($data['status']);

            $this->entityManager->flush();

            $response = $this->json([
                'status' => 'success',
                'message' => 'Reservation updated successfully',
                'data' => [
                    'id' => $reservation->getId(),
                    'name' => $reservation->getName(),
                    'email' => $reservation->getEmail(),
                    'date' => $reservation->getDate()->format('Y-m-d'),
                    'time' => $reservation->getTime()->format('H:i'),
                    'guests' => $reservation->getGuests(),
                    'status' => $reservation->getStatus()
                ]
            ]);
        } catch (\Exception $e) {
            $response = $this->json([
                'status' => 'error',
                'message' => 'Error updating reservation: ' . $e->getMessage()
            ], 500);
        }
        
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'PUT');
        
        return $response;
    }

    #[Route('/reservation/{id}', name: 'reservation_delete', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        try {
            $reservation = $this->entityManager
                ->getRepository(Reservation::class)
                ->find($id);

            if (!$reservation) {
                return $this->json([
                    'status' => 'error',
                    'message' => 'Reservation not found'
                ], 404);
            }

            $this->entityManager->remove($reservation);
            $this->entityManager->flush();

            $response = $this->json([
                'status' => 'success',
                'message' => 'Reservation deleted successfully',
                'id' => $id
            ]);
        } catch (\Exception $e) {
            $response = $this->json([
                'status' => 'error',
                'message' => 'Error deleting reservation: ' . $e->getMessage()
            ], 500);
        }
        
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'DELETE');
        
        return $response;
    }

    #[Route('/reservation', name: 'reservation_preflight', methods: ['OPTIONS'])]
    public function handlePreflightRequest(): JsonResponse
    {
        $response = new JsonResponse(null, 204);
        
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type');
        
        return $response;
    }
}