import { useLoaderData } from "react-router-dom";

const Details = () => {

    const details = useLoaderData()
    console.log(details);
    const { description, thumbnail, title, brand, rating, stock } = details

    return (
        <div className="p-9">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={thumbnail} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>Brand: {brand}</p>
                    <p>Ratings: {rating}</p>
                    <p>Stock: {stock}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                        <button className="btn btn-primary">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;