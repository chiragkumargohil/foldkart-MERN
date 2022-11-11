import { products } from './constants/products.js';
import Product from './model/productSchema.js';

async function DefaultData() {
    try {
        await Product.insertMany(products);
        console.log("Data imported successfully.");
    } catch (e) {
        console.log("ERR-DEFAULT_DATA:", e.message);
    }
}

export default DefaultData;