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

        // T-shirt / streetwear images
        $tshirtImages = [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1520975958225-8f4c0b6a8c3d?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1520975682031-a5a1f5f6d7c2?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583743814966-8936f37f5a0a?auto=format&fit=crop&w=500&q=80',
        ];

        $products = [];

        for ($i = 0; $i < 70; $i++) {

            $category = $faker->randomElement($categories);

            $products[] = [
                'categories' => $category,
                'name' => ucfirst($faker->words(3, true)),

                // 👕 image always t-shirt style (clean e-commerce look)
                'image' => $faker->randomElement($tshirtImages),

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