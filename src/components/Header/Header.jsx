import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className='mr-5 font-semibold text-xl' to ={`/`}>Home</NavLink>
                        <NavLink className='mr-5 font-semibold text-xl' to ={`/category`}>Category</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;