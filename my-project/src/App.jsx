import React, { useState } from "react";

function App() {
    const [donation, setDonation] = useState("");

    const handleDonate = () => {
        if (donation) {
            alert(`Thank you for donating ₹${donation}!`);
            setDonation(""); // Clear the input field after donation
        } else {
            alert("Please enter a valid donation amount.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6">
                    DONATE FOR A GOOD CAUSE
                </h1>
                <div className="mb-4">
                    <label
                        htmlFor="donation"
                        className="block text-sm sm:text-base lg:text-lg text-gray-700 font-medium mb-2"
                    >
                        Enter Donation Amount (₹)
                    </label>
                    <input
                        type="number"
                        id="donation"
                        value={donation}
                        onChange={(e) => setDonation(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <button
                    onClick={handleDonate}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 rounded-lg transition duration-300 text-sm sm:text-base lg:text-lg"
                >
                    Donate
                </button>
            </div>
        </div>
    );
}

export default App;
