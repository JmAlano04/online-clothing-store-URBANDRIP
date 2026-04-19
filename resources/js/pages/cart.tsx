import HomeLayout from "@/layouts/homeLayout";
import { Head } from '@inertiajs/react';
function Cart() {
    return(
        <HomeLayout>
        {/* Cart */}
            <Head title="Cart" />
        <div className="mt-10 text-center">
            <h1>Cart</h1>
            <p>Here are the items in your cart!</p>
        </div>
        </HomeLayout>
    )
}

export default Cart;