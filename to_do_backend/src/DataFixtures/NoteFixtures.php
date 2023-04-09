<?php

namespace App\DataFixtures;

use App\Entity\Note;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class NoteFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $manager->persist((new Note())->setTitle('test')->setCreatedAt(new \DateTimeImmutable()));
        $manager->persist((new Note())->setTitle('dfdfdf')->setCreatedAt(new \DateTimeImmutable()));
        $manager->flush();
    }
}
