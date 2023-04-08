<?php

namespace  App\Model;

class NoteModel {
    private array $items;

    public function __construct(array $items)
    {
        $this->items = $items;
    }

    public function getItems() {
        return $this->items;
    }
}