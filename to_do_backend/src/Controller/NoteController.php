<?php

namespace App\Controller;

use App\Model\NoteResponse;
use App\Service\NoteService;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Annotations as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class NoteController extends AbstractController
{
    public function __construct(private readonly NoteService $noteService)
    {
    }

    public function read(): JsonResponse
    {
        return $this->json($this->noteService->getNotes());
    }
}
