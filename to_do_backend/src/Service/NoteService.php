<?php

namespace App\Service;

use App\Entity\Note;
use App\Model\NoteListItem;
use App\Model\NoteResponse;
use App\Repository\NoteRepository;
use Doctrine\Common\Collections\Criteria;

class NoteService {
    public function __construct(private NoteRepository $noteRepository)
    {
    }

    public function getNotes(): NoteResponse
    {
        $notes = $this->noteRepository->findBy([], ['title' => Criteria::ASC]);
        $data = array_map(
            fn(Note $note) => new NoteListItem(
                $note->getId(), $note->getTitle(), $note->getCreatedAt(), $note->getUpdatedAt(), $note->getDeletedAt()
            ), $notes
        );

        var_dump('$notes', $notes);
        var_dump('$tt', $data);

        return new NoteResponse($data);
    }
}