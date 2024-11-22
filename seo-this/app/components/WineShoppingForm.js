import React from 'react';

export default function WineShoppingForm() {
    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Wine Shopping Cart</h1>
            <h3>DUMMY WINE STORE</h3>
            <form>
                {/* Wine Type Dropdown */}
                <div className="mb-4">
                    <label htmlFor="wineType" className="block text-sm font-medium text-gray-700">
                        Select Your Wine Type
                    </label>
                    <select
                        id="wineType"
                        name="wineType"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">-- Select a Wine Type --</option>
                        <option value="red">Red Wine</option>
                        <option value="white">White Wine</option>
                        <option value="rosé">Rosé</option>
                        <option value="sparkling">Sparkling Wine</option>
                        <option value="dessert">Dessert Wine</option>
                    </select>
                </div>

                {/* Quantity Input */}
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                        Quantity
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="99"
                        placeholder="Enter quantity (e.g., 3)"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Special Instructions */}
                <div className="mb-4">
                    <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
                        Special Instructions
                    </label>
                    <textarea
                        id="instructions"
                        name="instructions"
                        rows="3"
                        placeholder="Any special requests?"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="button"
                        className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add to Cart
                    </button>
                </div>
            </form>
        </div>
    );
}
