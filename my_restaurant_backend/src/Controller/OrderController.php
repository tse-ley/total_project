<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class OrderController extends AbstractController
{
    #[Route('/api/orders', name: 'api_orders', methods: ['GET'])]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to the order controller!',
            'status' => 'success'
        ]);
    }

    #[Route('/api/orders', name: 'api_orders_create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        return $this->json([
            'message' => 'Order created successfully',
            'status' => 'success'
        ]);
    }

    #[Route('/api/orders/{id}', name: 'api_orders_update', methods: ['PUT'])]
    public function update(Request $request, int $id): JsonResponse
    {
        return $this->json([
            'message' => 'Order updated successfully',
            'status' => 'success'
        ]);
    }

    #[Route('/api/orders/{id}', name: 'api_orders_delete', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        return $this->json([
            'message' => 'Order deleted successfully',
            'status' => 'success'
        ]);
    }
}