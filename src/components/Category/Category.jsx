import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";

const Category = () => {

    const data = useLoaderData()
    const products = data.products
    
    return (
        <div>
            <h1 className="text-center text-red-500 font-bold text-4xl mb-9">Here is total category {products.length}</h1>

            <div className="md:grid grid-cols-3 gap-12 w-[85%] mx-auto">
                {
                    products.map(product => <Categories key={product.id} product={product}></Categories>)
                }

                </div>            
        </div>
    );
};

export default Category;