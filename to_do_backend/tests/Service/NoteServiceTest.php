<?php

namespace App\Tests\Service;

use App\Entity\Note;
use App\Model\NoteListItem;
use App\Model\NoteResponse;
use App\Repository\NoteRepository;
use App\Service\NoteService;
use Doctrine\Common\Collections\Criteria;
use PHPUnit\Framework\TestCase;

class NoteServiceTest extends TestCase
{
    public function testGetNotes()
    {
        $repository = $this->createMock(NoteRepository::class);

        $repository->expects($this->once())
            ->method('findBy')
            ->with([], ['title' => Criteria::ASC])
            ->willReturn([(new Note())->setId(1)->setTitle('Test')->setCreatedAt(new \DateTimeImmutable('01:02:23'))]);

        $service = new NoteService($repository);

        $expected = new NoteResponse([new NoteListItem(
            1,
            'Test',
            new \DateTimeImmutable('01:02:23')
        )]);

        $this->assertEquals($expected, $service->getNotes());
    }
}
