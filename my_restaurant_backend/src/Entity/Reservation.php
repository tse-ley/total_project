<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post()
    ],
    security: "is_granted('ROLE_ADMIN')"
)]
class Reservation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private ?string $customerName = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\Email]
    private ?string $customerEmail = null;

    #[ORM\Column]
    #[Assert\NotBlank]
    private ?int $partySize = null;

    #[ORM\Column(type: 'datetime')]
    #[Assert\NotBlank]
    private ?\DateTimeInterface $reservationTime = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $specialRequests = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCustomerName(): ?string
    {
        return $this->customerName;
    }

    public function setCustomerName(string $customerName): self
    {
        $this->customerName = $customerName;
        return $this;
    }

    public function getCustomerEmail(): ?string
    {
        return $this->customerEmail;
    }

    public function setCustomerEmail(string $customerEmail): self
    {
        $this->customerEmail = $customerEmail;
        return $this;
    }

    public function getPartySize(): ?int
    {
        return $this->partySize;
    }

    public function setPartySize(int $partySize): self
    {
        $this->partySize = $partySize;
        return $this;
    }

    public function getReservationTime(): ?\DateTimeInterface
    {
        return $this->reservationTime;
    }

    public function setReservationTime(\DateTimeInterface $reservationTime): self
    {
        $this->reservationTime = $reservationTime;
        return $this;
    }

    public function getSpecialRequests(): ?string
    {
        return $this->specialRequests;
    }

    public function setSpecialRequests(?string $specialRequests): self
    {
        $this->specialRequests = $specialRequests;
        return $this;
    }
}