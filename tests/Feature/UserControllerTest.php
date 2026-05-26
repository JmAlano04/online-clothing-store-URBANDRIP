<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_creating_a_user_flashes_a_success_message(): void
    {
        $admin = User::factory()->create([
            'role' => 'admin',
        ]);

        $response = $this->actingAs($admin)->post('/users', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'password' => 'password123',
            'role' => 'user',
        ]);

        $response->assertRedirect();

        $response = $this->followRedirects($response);

        $response->assertStatus(200)
            ->assertJsonPath('flash.success', 'User created successfully.');
    }
}
