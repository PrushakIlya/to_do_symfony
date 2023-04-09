<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class NoteControllerTest extends WebTestCase
{
    public function testRead(): void
    {
        $client = static::createClient();
        $client->request('GET', '/api/v1/read_note');
        $response = $client->getResponse()->getContent();

        $this->assertResponseIsSuccessful();
        $this->assertJsonStringEqualsJsonFile(__DIR__.'/response/NoteControllerTest_testRead.json', $response);
    }
}
