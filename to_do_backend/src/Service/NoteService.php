<?php

namespace App\Service;

use App\Repository\NoteRepository;

class NoteService {
    public function __construct(private NoteRepository $noteRepository)
    {
    }

    public function getNotes() {

    }
}