<?php

namespace App\Controller;

use App\Entity\Order;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_')]
class OrderController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/order', name: 'order', methods: ['GET'])]
    public function index(): JsonResponse
    {
        try {
            $orders = $this->entityManager
                ->getRepository(Order::class)
                ->findAll();

            $data = [];
            foreach ($orders as $order) {
                $data[] = [
                    'id' => $order->getId(),
                    'tableNumber' => $order->getTableNumber(),
                    'items' => $order->getItems(),
                    'totalAmount' => $order->getTotalAmount(),
                    'status' => $order->getStatus(),
                    'orderDate' => $order->getOrderDate()->format('Y-m-d H:i:s'),
                    'specialRequests' => $order->getSpecialRequests(),
                    'customerName' => $order->getCustomerName()
                ];
            }

            $response = $this->json([
                'status' => 'success',
                'data' => $data
            ]);
        } catch (\Exception $e) {
            $response = $this->json([
                'status' => 'error',
                'message' => 'Error fetching orders: ' . $e->getMessage()
            ], 500);
        }
        
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'GET');
        
        return $response;
    }

    #[Route('/order', name: 'order_create', methods: ['POST'])]
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

            // Create new order
            $order = new Order();
            $order->setTableNumber($data['tableNumber']);
            $order->setItems($data['items']);
            $order->setTotalAmount($data['totalAmount']);
            $order->setStatus('pending');
            $order->setOrderDate(new \DateTime());
            $order->setSpecialRequests($data['specialRequests'] ?? '');
            $order->setCustomerName($data['customerName']);

            // Persist to database
            $this->entityManager->persist($order);
            $this->entityManager->flush();

            $response = $this->json([
                'status' => 'success',
                'message' => 'Order created successfully',
                'data' => [
                    'id' => $order->getId(),
                    'tableNumber' => $order->getTableNumber(),
                    'items' => $order->getItems(),
                    'totalAmount' => $order->getTotalAmount(),
                    'status' => $order->getStatus(),
                    'orderDate' => $order->getOrderDate()->format('Y-m-d H:i:s'),
                    'specialRequests' => $order->getSpecialRequests(),
                    'customerName' => $order->getCustomerName()
                ]
            ]);
        } catch (\Exception $e) {
            $response = $this->json([
                'status' => 'error',
                'message' => 'Error creating order: ' . $e->getMessage()
            ], 500);
        }
        
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'POST');
        
        return $response;
    }

    #[Route('/order/{id}', name: 'order_update', methods: ['PUT'])]
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

            $order = $this->entityManager
                ->getRepository(Order::class)
                ->find($id);

            if (!$order) {
                return $this->json([
                    'status' => 'error',
                    'message' => 'Order not found'
                ], 404);
            }

            // Update order data
            if (isset($data['tableNumber'])) $order->setTableNumber($data['tableNumber']);
            if (isset($data['items'])) $order->setItems($data['items']);
            if (isset($data['totalAmount'])) $order->setTotalAmount($data['totalAmount']);
            if (isset($data['status'])) $order->setStatus($data['status']);
            if (isset($data['specialRequests'])) $order->setSpecialRequests($data['specialRequests']);
            if (isset($data['customerName'])) $order->setCustomerName($data['customerName']);

            $this->entityManager->flush();

            $response = $this->json([
                'status' => 'success',
                'message' => 'Order updated successfully',
                'data' => [
                    'id' => $order->getId(),
                    'tableNumber' => $order->getTableNumber(),
                    'items' => $order->getItems(),
                    'totalAmount' => $order->getTotalAmount(),
                    'status' => $order->getStatus(),
                    'orderDate' => $order->getOrderDate()->format('Y-m-d H:i:s'),
                    'specialRequests' => $order->getSpecialRequests(),
                    'customerName' => $order->getCustomerName()
                ]
            ]);
        } catch (\Exception $e) {
            $response = $this->json([
                'status' => 'error',
                'message' => 'Error updating order: ' . $e->getMessage()
            ], 500);
        }
        
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'PUT');
        
        return $response;
    }

    #[Route('/order/{id}', name: 'order_delete', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        try {
            $order = $this->entityManager
                ->getRepository(Order::class)
                ->find($id);

            if (!$order) {
                return $this->json([
                    'status' => 'error',
                    'message' => 'Order not found'
                ], 404);
            }

            $this->entityManager->remove($order);
            $this->entityManager->flush();

            $response = $this->json([
                'status' => 'success',
                'message' => 'Order deleted successfully',
                'id' => $id
            ]);
        } catch (\Exception $e) {
            $response = $this->json([
                'status' => 'error',
                'message' => 'Error deleting order: ' . $e->getMessage()
            ], 500);
        }
        
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'DELETE');
        
        return $response;
    }

    #[Route('/order', name: 'order_preflight', methods: ['OPTIONS'])]
    public function handlePreflightRequest(): JsonResponse
    {
        $response = new JsonResponse(null, 204);
        
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type');
        
        return $response;
    }

    #[Route('/', name: 'api_home')]
        public function home(): JsonResponse
        {
            $apiInfo = [
                'status' => 'success',
                'message' => 'Welcome to the Restaurant API',
                'available_endpoints' => [
                    'GET /api/order' => 'Get all orders',
                    'POST /api/order' => 'Create a new order',
                    'PUT /api/order/{id}' => 'Update an existing order',
                    'DELETE /api/order/{id}' => 'Delete an order'
                ]
            ];
            
            $response = $this->json($apiInfo);
            $response->headers->set('Access-Control-Allow-Origin', '*');
            
            return $response;
        }
}