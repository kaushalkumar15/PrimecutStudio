// src/components/ui/card.js
import React from 'react';

export function Card({ children }) {
    return (
        <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
            {children}
        </div>
    );
}

export function CardContent({ children }) {
    return <div>{children}</div>;
}
