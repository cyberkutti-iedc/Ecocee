'use client';

import React, { useState } from 'react';
import { Bell, Moon, Sun, Globe, Lock, Shield } from 'lucide-react';

export default function SettingsPage() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const settingsItems = [
        {
            title: 'Notifications',
            description: 'Receive notifications about updates and activities',
            icon: <Bell className="w-6 h-6 text-gray-500" />,
            enabled: notifications,
            setEnabled: setNotifications,
        },
        {
            title: 'Dark Mode',
            description: 'Toggle between light and dark theme',
            icon: darkMode ? <Moon className="w-6 h-6 text-gray-500" /> : <Sun className="w-6 h-6 text-gray-500" />,
            enabled: darkMode,
            setEnabled: setDarkMode,
        },
    ];

    const Switch = ({ checked, onChange }: { checked: boolean; onChange: (value: boolean) => void }) => {
        return (
            <button
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={() => onChange(!checked)}
                className={`${
                    checked ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
                <span
                    className={`${
                        checked ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300`}
                />
            </button>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
                
                {/* Main Settings Section */}
                <div className="bg-white rounded-lg shadow">
                    {settingsItems.map((item, index) => (
                        <div
                            key={item.title}
                            className={`p-6 ${index !== settingsItems.length - 1 ? 'border-b border-gray-200' : ''}`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    {item.icon}
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                                <Switch checked={item.enabled} onChange={item.setEnabled} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Settings Section */}
                <div className="mt-8 bg-white rounded-lg shadow">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Settings</h2>
                        <div className="space-y-4">
                            <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50">
                                <div className="flex items-center space-x-3">
                                    <Globe className="w-5 h-5 text-gray-500" />
                                    <span className="text-gray-700">Language & Region</span>
                                </div>
                            </button>
                            <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50">
                                <div className="flex items-center space-x-3">
                                    <Lock className="w-5 h-5 text-gray-500" />
                                    <span className="text-gray-700">Privacy</span>
                                </div>
                            </button>
                            <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50">
                                <div className="flex items-center space-x-3">
                                    <Shield className="w-5 h-5 text-gray-500" />
                                    <span className="text-gray-700">Security</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
