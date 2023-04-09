<?php

namespace App\Model;

class NoteResponse
{
    /**
     * @var NoteListItem[]
     */
    private array $items;

    /**
     * @param NoteListItem[] $items
     */
    public function __construct(array $items)
    {
        $this->items = $items;
    }

    /**
     * @return NoteListItem[]
     */
    public function getItems(): array
    {
        return $this->items;
    }
}
