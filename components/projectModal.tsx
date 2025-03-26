import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectDetailsModalProps {
    project: {
        id: string;
        name: string;
        description: string;
        status: 'active' | 'inactive';
        lastUpdated: string;
        details: {
            type: string;
            features: string[];
            isServerOn: boolean;
        };
    } | null;
    isOpen: boolean;
    onClose: () => void;
    onToggleServer: (id: string) => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, isOpen, onClose, onToggleServer }) => {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>

                {/* Modal Content */}
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{project.name}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                    <span className="font-semibold text-gray-700">Status:</span> 
                    <span className={`ml-2 px-3 py-1 rounded-full text-sm ${
                        project.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                        {project.status}
                    </span>
                </div>

                <div className="mb-4">
                    <span className="font-semibold text-gray-700">Features:</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {project.details.features.map((feature, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Toggle Server Button */}
                <button
                    onClick={() => onToggleServer(project.id)}
                    className={`w-full px-4 py-2 rounded-lg text-white font-medium ${
                        project.details.isServerOn ? 'bg-green-500' : 'bg-red-500'
                    } hover:opacity-90 transition-opacity`}
                >
                    Server {project.details.isServerOn ? 'ON' : 'OFF'}
                </button>
            </motion.div>
        </div>
    );
};

export default ProjectDetailsModal;
