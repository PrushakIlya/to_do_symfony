<?php

namespace App\Service;

use App\Entity\Note;
use App\Model\NoteListItem;
use App\Model\NoteResponse;
use App\Repository\NoteRepository;
use Doctrine\Common\Collections\Criteria;
use Symfony\Component\HttpFoundation\Request;

class NoteService
{
    public function __construct(private NoteRepository $noteRepository)
    {
    }

    public function getNotes(): NoteResponse
    {
        $notes = $this->noteRepository->findBy(['deleted_at' => null], ['title' => Criteria::ASC]);

        $data = array_map(
            fn (Note $note) => new NoteListItem(
                $note->getId(), $note->getTitle(), $note->getCompleted(), $note->getCreatedAt(), $note->getUpdatedAt(), $note->getDeletedAt()
            ), $notes
        );

        return new NoteResponse($data);
    }

    public function createNote(Request $request): void
    {
        $data = $request->toArray()[0];

        $note = new Note();
        $note->setTitle($data['title']);
        $note->setCreatedAt(new \DateTimeImmutable());

        $this->noteRepository->save($note, true);
    }

    public function updateNote(Request $request): void
    {
        $data = $request->toArray()[0];
        $note = $this->noteRepository->find($data['id']);

        $data['title'] && $note->setTitle($data['title']);
        $data['isCompleted'] && $note->setCompleted($data['isCompleted']);

        $this->noteRepository->save($note, true);
    }
}
