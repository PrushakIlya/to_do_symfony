<?php

namespace App\Controller;

use App\Service\NoteService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class NoteController extends AbstractController
{
    public function __construct(private readonly NoteService $noteService)
    {
    }

    public function read(): JsonResponse
    {
        return $this->json($this->noteService->getNotes());
    }

    public function create(Request $request): JsonResponse
    {
        $this->noteService->createNote($request);

        return $this->json('success');
    }

    public function update(Request $request): JsonResponse
    {
        $this->noteService->updateNote($request);

        return $this->json('success');
    }
}
