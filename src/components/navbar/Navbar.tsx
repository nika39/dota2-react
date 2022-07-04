import DarkModeToggler from "./darkmode-toggler/DarkModeToggler";
import SearchFrom from "./search/SearchForm";

import logo from "../../assets/images/logo.png";

function Navbar() {
    return (
        <nav className="bg-slate-50 py-3 dark:bg-neutral-800">
            <div className="container mx-auto flex justify-between">
                <div className="flex items-center">
                    <img className="mr-2 w-5" src={logo} alt="logo" />
                    <span>Dota 2 - AI</span>
                </div>
                <SearchFrom />
                <div className="flex items-center space-x-5">
                    <DarkModeToggler />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
