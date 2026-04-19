<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Seed the products table with fake data.
     */
    public function run(): void
    {
        $faker = fake();

        $categories = ['Blanks', 'Bottoms', 'Outerwear', 'Essentials'];
        $sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

        $blankImages = [
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=500&q=80',
        ];

        $products = [];

        for ($i = 0; $i < 70; $i++) {
            $category = $faker->randomElement($categories);
            $products[] = [
                'categories' => $category,
                'name' => ucfirst($faker->words(3, true)),
                'image' => $category === 'Blanks'
                    ? $faker->randomElement($blankImages)
                    : 'https://via.placeholder.com/500x500.png?text=' . urlencode($category),
                'size' => $faker->randomElement($sizes),
                'stock' => $faker->numberBetween(0, 100),
                'price' => $faker->randomFloat(2, 9, 299),
                'description' => $faker->sentence($faker->numberBetween(8, 16)),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('products')->insert($products);
    }
}
