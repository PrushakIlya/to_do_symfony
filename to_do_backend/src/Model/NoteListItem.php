<?php

namespace App\Model;

class NoteListItem
{
    private int $id;
    private string $title;
    private bool $is_completed = false;
    private \DateTimeImmutable $createdAt;
    private ?\DateTimeImmutable $updatedAt = null;
    private ?\DateTimeImmutable $deletedAt = null;

    public function __construct(
        int $id,
        string $title,
        bool $is_completed,
        \DateTimeImmutable $createdAt,
        ?\DateTimeImmutable $updatedAt = null,
        ?\DateTimeImmutable $deletedAt = null
    ) {
        $this->id = $id;
        $this->title = $title;
        $this->is_completed = $is_completed;
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

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function getDeletedAt(): ?\DateTimeImmutable
    {
        return $this->deletedAt;
    }

    public function getCompleted(): bool
    {
        return $this->is_completed;
    }
}
