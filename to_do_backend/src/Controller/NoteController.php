<?php

namespace App\Controller;

use App\Entity\Note;
use App\Repository\NoteRepository;
use App\Service\NoteService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class NoteController extends AbstractController
{
    public function __construct(
        private NoteService $noteService
    ) {
    }

    public function read(): JsonResponse
    {
        return $this->json($this->noteService->getNotes());
    }

//    public function create(): JsonResponse
//    {
//        $note = new Note();
//
//        $note->setTitle('Create button');
//        $note->setCreatedAt(new \DateTimeImmutable());
//
//        $this->noteRepository->save($note, true);
//
//        return $this->json('success');
//    }

//    public function delete(): JsonResponse
//    {
//
//    }
//
//    public function read(): JsonResponse
//    {
//
//    }
}
