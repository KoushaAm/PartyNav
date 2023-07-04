import React from 'react';

function Header() {
    return (
        <header className="bg-rose-500 text-white px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
                <h1 className="text-4xl uppercase">Find a Party!</h1>
            </div>
            <div className="flex items-center mt-3 md:mt-0">
                <button className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-semibold py-2 px-4 border border-white rounded">
                    Sign In
                </button>
                <button className="bg-white text-gray-900 font-semibold py-2 px-4 ml-4 rounded">
                    Register
                </button>
            </div>
        </header>
    );
}

export default Header;
