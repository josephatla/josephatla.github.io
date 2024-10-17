import logo from "../assets/logoToyoda.webp";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen((prev) => !prev);
    };

    const handleOptionClick = () => {
        setMobileDrawerOpen(false); 
    };

    return (
        <nav className="sticky top-0 z-50 py-3 bg-white border-b border-gray-300 backdrop-blur-lg">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <a href="#">
                            <img className="h-10 w-30 mr-2" src={logo} alt="logo" />
                        </a>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12 mr-10">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <button className="hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] rounded-md font-light transition duration-200 ease-linear">
                                    <a className="font-bold" href={item.href}>{item.label}</a>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="lg:hidden flex justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                <div
                    className={`fixed right-0 z-20 bg-white w-full flex flex-col mt-3 items-center lg:hidden border-y border-gray-300 transition-all duration-500 ease-in-out ${
                        mobileDrawerOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                    style={{
                        overflow: "hidden",
                    }}
                >
                    <ul className="w-full">
                        {navItems.map((item, index) => (
                            <li key={index} className="w-full text-center">
                                <a className="block py-4 w-full font-bold" href={item.href} onClick={handleOptionClick}>{item.label}</a> {/* Close the menu on click */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
