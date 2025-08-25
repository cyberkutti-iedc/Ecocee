import React from "react";
import { Briefcase, TrendingUp, Users, Settings } from "lucide-react";

export type CategoryKey = 'all' | 'business' | 'marketing' | 'operations';

interface CategoryFilterProps {
  selectedCategory: CategoryKey;
  onChange: (category: CategoryKey) => void;
  forwardRef?: React.Ref<HTMLDivElement>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onChange, forwardRef }) => {
  const categories = [
    { key: 'all' as const, label: 'All Positions', icon: <Briefcase className="w-4 h-4" /> },
    { key: 'business' as const, label: 'Business Lead', icon: <TrendingUp className="w-4 h-4" /> },
    { key: 'marketing' as const, label: 'Marketing Lead', icon: <Users className="w-4 h-4" /> },
    { key: 'operations' as const, label: 'Operations Lead', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <section className="py-4 px-4 sm:py-8 sm:px-6" ref={forwardRef}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-start sm:justify-center mb-6 sm:mb-8">
          <div className="bg-gray-800/80 backdrop-blur-sm border border-green-600/30 rounded-2xl p-2 flex gap-2 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => onChange(category.key)}
                className={`flex items-center whitespace-nowrap flex-shrink-0 snap-start px-4 py-2 md:px-6 md:py-3 rounded-xl transition-all text-sm md:text-base ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category.icon}
                <span className="ml-2 font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter; 