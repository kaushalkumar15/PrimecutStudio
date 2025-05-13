// src/components/ui/button.js
import React from 'react';

export function Button({ children, className, ...props }) {
    return (
        <button
            className={`px-6 py-3 bg-red-500 hover:bg-red-600 rounded-2xl text-white font-semibold transition duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
