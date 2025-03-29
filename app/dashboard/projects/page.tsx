'use client';

import { useState} from 'react';
import { Search, Server, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectDetailsModal from '@/components/projectModal';

// Project Interface
interface Project {
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
}

// Log Interface
interface Log {
    timestamp: string;
    action: string;
    projectId: string;
}

// Mock Data
const mockProjects: Project[] = [
    {
        id: '1',
        name: 'NITI Project',
        description: 'Rust-based embedded board system',
        status: 'active',
        lastUpdated: '2024-01-20',
        details: {
            type: 'Embedded',
            features: ['Rust-based', 'IoT Compatible', 'Low Power Consumption'],
            isServerOn: false
        }
    },
    {
        id: '2',
        name: 'AI Vision System',
        description: 'Deep learning-powered image recognition',
        status: 'inactive',
        lastUpdated: '2024-02-15',
        details: {
            type: 'AI & ML',
            features: ['TensorFlow', 'Edge AI', 'High Accuracy'],
            isServerOn: true
        }
    },
];

// Project Card Component
const ProjectCard: React.FC<{
    project: Project;
    onToggleServer: (id: string) => void;
    onSelect: (project: Project) => void;
    activities: { [key: string]: number };
}> = ({ project, onToggleServer, onSelect, activities }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-4 hover:shadow-lg 
                   transition-all border border-white/20 cursor-pointer"
        onClick={() => onSelect(project)}
    >
        <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="text-sm text-gray-500">
                {project.details.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">
                        {feature}
                    </span>
                ))}
                {project.details.features.length > 2 && (
                    <span className="text-blue-500">+{project.details.features.length - 2} more</span>
                )}
            </div>

            {/* Server Control & Activity Counter */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleServer(project.id);
                    }}
                    className={`flex items-center px-3 py-1 rounded-md ${
                        project.details.isServerOn ? 'bg-green-500' : 'bg-gray-500'
                    } text-white`}
                >
                    <Server className="w-4 h-4 mr-2" />
                    {project.details.isServerOn ? 'Stop Server' : 'Start Server'}
                </button>
                <div className="flex items-center space-x-2 text-gray-500">
                    <Activity className="w-4 h-4" />
                    <span>{activities[project.id] || 0}</span>
                </div>
            </div>
        </div>
    </motion.div>
);

// Main Projects Page Component
export default function ProjectsPage() {
    const [viewMode] = useState<'grid' | 'list'>('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [projects, setProjects] = useState<Project[]>(mockProjects);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [, setLogs] = useState<Log[]>([]);
    const [activities, setActivities] = useState<{ [key: string]: number }>({});

    // Handle Server Toggle
    const handleToggleServer = (id: string) => {
        setProjects((prevProjects) =>
            prevProjects.map((project) =>
                project.id === id
                    ? {
                          ...project,
                          details: { ...project.details, isServerOn: !project.details.isServerOn },
                      }
                    : project
            )
        );

        const project = projects.find((p) => p.id === id);
        if (project) {
            const newStatus = !project.details.isServerOn;
            addLog(id, newStatus ? 'Server started' : 'Server stopped');
            updateActivity(id);
        }
    };

    // Add Log Entry
    const addLog = (projectId: string, action: string) => {
        const newLog = {
            timestamp: new Date().toISOString(),
            action,
            projectId,
        };
        setLogs((prev) => [...prev, newLog]);
    };

    // Update Activity Count
    const updateActivity = (projectId: string) => {
        setActivities((prev) => ({
            ...prev,
            [projectId]: (prev[projectId] || 0) + 1,
        }));
    };

    // Filter Projects Based on Search
    const filteredProjects = projects.filter(
        (project) =>
            project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Projects</h1>
                <div className="flex justify-between items-center">
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute right-3 top-3 text-gray-400" size={18} />
                    </div>
                </div>
            </div>

            {/* Project List */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onToggleServer={handleToggleServer}
                        onSelect={setSelectedProject}
                        activities={activities}
                    />
                ))}
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <ProjectDetailsModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    onToggleServer={handleToggleServer}
                />
            )}
        </div>
    );
}
