<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Customerinfo;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Daznrev',
            'email' => 'danzrev@gmail.com',
            'password' => bcrypt('6id9q6@Sdn2k23'),
            'email_verified_at' => time(),
        ]);

        Customerinfo::factory()->count(5)->create();
    }
}
