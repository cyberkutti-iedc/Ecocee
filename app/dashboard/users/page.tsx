'use client';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { AlertTriangleIcon } from 'lucide-react';




export default function UsersPage() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Users Management</h1>
            
            <Alert variant="default" className="mb-6 bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500 dark:from-amber-900/20 dark:to-amber-800/20">
                <div className="flex items-center gap-3">
                    <AlertTriangleIcon className="h-5 w-5 text-amber-500 animate-pulse" />
                    <AlertTitle className="text-lg font-semibold text-amber-700 dark:text-amber-400">
                        Under Development
                    </AlertTitle>
                </div>
                <p className="mt-2 ml-8 text-amber-600 dark:text-amber-300">
    This feature is currently in development. We&rsquo;re working hard to bring you an amazing user management experience soon!
</p>

            </Alert>

            <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600">
                    The users management section will be available soon.
                </p>
            </div>
        </div>
    );
}