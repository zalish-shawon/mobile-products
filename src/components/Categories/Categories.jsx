/* eslint-disable react/prop-types */

import { NavLink, useNavigate } from "react-router-dom";


const Categories = ({ product }) => {
    const {id, title, description, thumbnail} = product

    const navigate = useNavigate()

    const handleDetails = () => {
        navigate(`/category/${id}`)
    }
    return (
        <div>
            <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
                <figure><img src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <NavLink to={`/category/${id}`}>
                    <div className="card-actions justify-end">
                        <button onClick={handleDetails} className="btn btn-primary">Details</button>
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Categories;