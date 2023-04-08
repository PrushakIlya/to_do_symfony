<?php

namespace App\Model;

use DateTimeImmutable;

class NoteListItem {
    private int $id;
    private string $title;
    private DateTimeImmutable $createdAt;
    private ?DateTimeImmutable $updatedAt = null;
    private ?DateTimeImmutable $deletedAt = null;

    public function __construct(
        int $id,
        string $title,
        DateTimeImmutable $createdAt,
        ?DateTimeImmutable $updatedAt,
        ?DateTimeImmutable $deletedAt)
    {
        $this->id = $id;
        $this->title = $title;
        $this->createdAt = $createdAt;
        $this->updatedAt = $updatedAt;
        $this->deletedAt = $deletedAt;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getCreatedAt(): DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): ?DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function getDeletedAt(): ?DateTimeImmutable
    {
        return $this->deletedAt;
    }

}