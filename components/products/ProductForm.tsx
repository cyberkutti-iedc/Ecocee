// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { ProductFormData } from '@/data/products'
// import { Product } from '@/data/products'
// import { X, Plus, Trash2, Upload, AlertCircle } from 'lucide-react'

// interface ProductFormProps {
//   onClose: () => void
//   onProductAdded: () => void
// }

// export default function ProductForm({ onClose, onProductAdded }: ProductFormProps) {
//   const [formData, setFormData] = useState<ProductFormData>({
//     title: '',
//     description: '',
//     headerImage: '',
//     images: [],
//     video: '',
//     techStack: [],
//     category: 'embedded',
//     featured: false
//   })

//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const [newTech, setNewTech] = useState('')
//   const [newImage, setNewImage] = useState('')

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     if (!formData.title.trim() || !formData.description.trim() || !formData.headerImage.trim()) {
//       setError('Please fill in all required fields')
//       return
//     }

//     try {
//       setLoading(true)
//       setError(null)
      
//      // await createProduct(formData)
//       onProductAdded()
//     } catch (err) {
//       setError('Failed to create product. Please try again.')
//       console.error('Error creating product:', err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const addTech = () => {
//     if (newTech.trim() && !formData.techStack.includes(newTech.trim())) {
//       setFormData(prev => ({
//         ...prev,
//         techStack: [...prev.techStack, newTech.trim()]
//       }))
//       setNewTech('')
//     }
//   }

//   const removeTech = (tech: string) => {
//     setFormData(prev => ({
//       ...prev,
//       techStack: prev.techStack.filter(t => t !== tech)
//     }))
//   }

//   const addImage = () => {
//     if (newImage.trim() && !formData.images.includes(newImage.trim())) {
//       setFormData(prev => ({
//         ...prev,
//         images: [...prev.images, newImage.trim()]
//       }))
//       setNewImage('')
//     }
//   }

//   const removeImage = (image: string) => {
//     setFormData(prev => ({
//       ...prev,
//       images: prev.images.filter(img => img !== image)
//     }))
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="relative bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//       >
//         {/* Header */}
//         <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between z-10">
//           <h2 className="text-2xl font-bold text-white">Add New Product</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="p-6 space-y-6">
//           {/* Error message */}
//           {error && (
//             <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 flex items-center gap-3">
//               <AlertCircle className="w-5 h-5 text-red-400" />
//               <p className="text-red-200">{error}</p>
//             </div>
//           )}

//           {/* Title */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Product Title *
//             </label>
//             <input
//               type="text"
//               value={formData.title}
//               onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               placeholder="Enter product title"
//               required
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Category *
//             </label>
//             <select
//               value={formData.category}
//               onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               required
//             >
//               <option value="embedded">Embedded Systems</option>
//               <option value="ai">AI Solutions</option>
//               <option value="prototype">Prototypes</option>
//             </select>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Description *
//             </label>
//             <textarea
//               value={formData.description}
//               onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
//               rows={4}
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
//               placeholder="Describe your product or prototype"
//               required
//             />
//           </div>

//           {/* Header Image */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Header Image URL *
//             </label>
//             <input
//               type="url"
//               value={formData.headerImage}
//               onChange={(e) => setFormData(prev => ({ ...prev, headerImage: e.target.value }))}
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               placeholder="https://example.com/image.jpg"
//               required
//             />
//             {formData.headerImage && (
//               <div className="mt-3">
//                 <img
//                   src={formData.headerImage}
//                   alt="Header preview"
//                   className="w-full h-32 object-cover rounded-lg border border-gray-700"
//                   onError={(e) => {
//                     e.currentTarget.style.display = 'none'
//                   }}
//                   onLoad={(e) => {
//                     e.currentTarget.style.display = 'block'
//                   }}
//                 />
//               </div>
//             )}
//           </div>

//           {/* Additional Images */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Additional Images
//             </label>
//             <div className="flex gap-2">
//               <input
//                 type="url"
//                 value={newImage}
//                 onChange={(e) => setNewImage(e.target.value)}
//                 className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 placeholder="https://example.com/image.jpg"
//               />
//               <button
//                 type="button"
//                 onClick={addImage}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors"
//               >
//                 <Plus className="w-5 h-5" />
//               </button>
//             </div>
//             {formData.images.length > 0 && (
//               <div className="mt-3 space-y-2">
//                 {formData.images.map((image, index) => (
//                   <div key={index} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
//                     <img
//                       src={image}
//                       alt={`Additional ${index + 1}`}
//                       className="w-12 h-12 object-cover rounded"
//                       onError={(e) => {
//                         e.currentTarget.src = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=100&h=100&fit=crop&auto=format'
//                       }}
//                     />
//                     <span className="flex-1 text-sm text-gray-300 truncate">{image}</span>
//                     <button
//                       type="button"
//                       onClick={() => removeImage(image)}
//                       className="text-red-400 hover:text-red-300 p-1"
//                     >
//                       <Trash2 className="w-4 h-4" />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Video */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Demo Video URL (Optional)
//             </label>
//             <input
//               type="url"
//               value={formData.video}
//               onChange={(e) => setFormData(prev => ({ ...prev, video: e.target.value }))}
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               placeholder="https://youtube.com/watch?v=..."
//             />
//           </div>

//           {/* Tech Stack */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Technology Stack
//             </label>
//             <div className="flex gap-2 mb-3">
//               <input
//                 type="text"
//                 value={newTech}
//                 onChange={(e) => setNewTech(e.target.value)}
//                 className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 placeholder="e.g., React.js, Arduino, TensorFlow"
//                 onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
//               />
//               <button
//                 type="button"
//                 onClick={addTech}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors"
//               >
//                 <Plus className="w-5 h-5" />
//               </button>
//             </div>
//             {formData.techStack.length > 0 && (
//               <div className="flex flex-wrap gap-2">
//                 {formData.techStack.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="bg-gray-800 border border-gray-700 text-green-400 px-3 py-2 rounded-lg text-sm font-mono flex items-center gap-2"
//                   >
//                     {tech}
//                     <button
//                       type="button"
//                       onClick={() => removeTech(tech)}
//                       className="text-red-400 hover:text-red-300"
//                     >
//                       <X className="w-3 h-3" />
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Featured */}
//           <div>
//             <label className="flex items-center gap-3">
//               <input
//                 type="checkbox"
//                 checked={formData.featured}
//                 onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
//                 className="w-4 h-4 text-green-600 bg-gray-800 border-gray-700 rounded focus:ring-green-500"
//               />
//               <span className="text-sm font-medium text-gray-300">Mark as Featured</span>
//             </label>
//           </div>

//           {/* Actions */}
//           <div className="flex gap-4 pt-6 border-t border-gray-800">
//             <button
//               type="submit"
//               disabled={loading}
//               className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:cursor-not-allowed"
//             >
//               {loading ? 'Creating...' : 'Create Product'}
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   )
// }