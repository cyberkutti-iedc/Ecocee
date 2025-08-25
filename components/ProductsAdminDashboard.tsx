import { useState, useEffect, useCallback, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import { Plus, Loader2, Search, Filter, Trash2, Star, Edit, Upload, X } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  header_image: string;
  images: string[];
  video?: string;
  tech_stack: string[];
  category: "embedded" | "ai" | "prototype";
  featured: boolean;
  created_at: string;
}


interface ProductFormData {
  title: string;
  description: string;
  headerImage: string;
  images: string[];
  video: string;
  techStack: string[];
  category: "embedded" | "ai" | "prototype";
  featured: boolean;
}

interface FileItem {
  name: string;
  url: string;
  type: 'image' | 'video' | 'folder';
}

export default function ProductsAdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFileManager, setShowFileManager] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<ProductFormData>({
    title: "",
    description: "",
    headerImage: "",
    images: [],
    video: "",
    techStack: [],
    category: "embedded",
    featured: false
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [featuredFilter, setFeaturedFilter] = useState("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [currentPath, setCurrentPath] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchFiles();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(Array.isArray(data) ? data : []);
      setError("");
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchFiles = async (path = "") => {
    try {
      const response = await fetch(`/api/storage?path=${path}`);
      if (!response.ok) throw new Error("Failed to fetch files");
      const data = await response.json();
      setFiles(data);
      setCurrentPath(path);
      setError("");
    } catch (error) {
      console.error("Error fetching files:", error);
      setError("Failed to load files. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setError("");
    
    try {
      const url = editingProduct ? `/api/products?id=${editingProduct.id}` : "/api/products";
      const method = editingProduct ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error("Failed to save product");
      
      setShowModal(false);
      setFormData({
        title: "",
        description: "",
        headerImage: "",
        images: [],
        video: "",
        techStack: [],
        category: "embedded",
        featured: false
      });
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      setError("Failed to save product. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    
    try {
      const response = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete product");
      fetchProducts();
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
      setError("");
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Failed to delete product. Please try again.");
    }
  };

  const bulkDelete = async () => {
    if (!confirm(`Are you sure you want to delete ${selectedIds.length} products?`)) return;
    
    try {
      const response = await fetch("/api/products/bulk", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedIds }),
      });
      
      if (!response.ok) throw new Error("Failed to delete products");
      fetchProducts();
      setSelectedIds([]);
      setError("");
    } catch (error) {
      console.error("Error deleting products:", error);
      setError("Failed to delete products. Please try again.");
    }
  };

  const toggleFeatured = async (id: string, currentFeatured: boolean) => {
    try {
      const response = await fetch(`/api/products/${id}/featured`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !currentFeatured }),
      });
      
      if (!response.ok) throw new Error("Failed to update featured status");
      fetchProducts();
      setError("");
    } catch (error) {
      console.error("Error toggling featured status:", error);
      setError("Failed to update featured status. Please try again.");
    }
  };

  const uploadFile = async (file: File, path: string = "") => {
    const formData = new FormData();
    formData.append("file", file);
    if (path) formData.append("path", path);
    
    try {
      const response = await fetch("/api/storage", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) throw new Error("Failed to upload file");
      fetchFiles(currentPath);
      setError("");
      return await response.json();
    } catch (error) {
      console.error("Upload failed:", error);
      setError("Failed to upload file. Please try again.");
      throw error;
    }
  };

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(file => 
      file.type.startsWith('image/') || file.type.startsWith('video/')
    );
    
    if (validFiles.length === 0) {
      setError("Please upload only image or video files.");
      return;
    }
    
    try {
      for (const file of validFiles) {
        await uploadFile(file, currentPath);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  }, [currentPath]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      headerImage: product.header_image,
      images: product.images,
      video: product.video || "",
      techStack: product.tech_stack,
      category: product.category,
      featured: product.featured
    });
    setShowModal(true);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    
    const matchesFeatured = featuredFilter === "all" || 
                           (featuredFilter === "featured" && product.featured) ||
                           (featuredFilter === "not-featured" && !product.featured);
    
    return matchesSearch && matchesCategory && matchesFeatured;
  });

  if (loading) return (
    <div className="p-6 flex justify-center items-center h-64">
      <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
    </div>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products Dashboard</h1>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowFileManager(true)}
            className="bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Upload size={16} /> Media Library
          </button>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Plus size={16} /> Add Product
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Categories</option>
            <option value="embedded">Embedded</option>
            <option value="ai">AI</option>
            <option value="prototype">Prototype</option>
          </select>
          
          <select
            value={featuredFilter}
            onChange={(e) => setFeaturedFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Products</option>
            <option value="featured">Featured Only</option>
            <option value="not-featured">Not Featured</option>
          </select>
        </div>
      </div>

      {selectedIds.length > 0 && (
        <div className="bg-blue-50 p-3 rounded-lg mb-4 flex justify-between items-center">
          <span>{selectedIds.length} product(s) selected</span>
          <button 
            onClick={bulkDelete}
            className="bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1"
          >
            <Trash2 size={16} /> Delete Selected
          </button>
        </div>
      )}

      <div className="grid gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-shrink-0">
              <input
                type="checkbox"
                checked={selectedIds.includes(product.id)}
                onChange={() => setSelectedIds(prev => 
                  prev.includes(product.id) 
                    ? prev.filter(id => id !== product.id)
                    : [...prev, product.id]
                )}
                className="mr-2"
              />
              <img 
                src={product.header_image} 
                alt={product.title}
                className="w-24 h-24 object-cover rounded"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                    {product.featured && (
                      <span className="text-xs bg-yellow-100 px-2 py-1 rounded flex items-center gap-1">
                        <Star size={12} fill="currentColor" /> Featured
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => toggleFeatured(product.id, product.featured)}
                    className={`p-1 rounded ${product.featured ? 'text-yellow-500' : 'text-gray-400'}`}
                    title={product.featured ? "Unfeature" : "Feature"}
                  >
                    <Star size={16} fill={product.featured ? "currentColor" : "none"} />
                  </button>
                  <button 
                    onClick={() => openEditModal(product)}
                    className="text-blue-600 hover:text-blue-800 p-1"
                    title="Edit"
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    onClick={() => deleteProduct(product.id)}
                    className="text-red-600 hover:text-red-800 p-1"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No products found. {searchTerm || categoryFilter !== "all" || featuredFilter !== "all" ? "Try changing your filters." : "Create your first product!"}
          </div>
        )}
      </div>

      {showModal && (
        <ProductModal
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          onClose={() => {
            setShowModal(false);
            setEditingProduct(null);
            setFormData({
              title: "",
              description: "",
              headerImage: "",
              images: [],
              video: "",
              techStack: [],
              category: "embedded",
              featured: false
            });
          }}
          loading={uploading}
          isEditing={!!editingProduct}
          onOpenFileManager={() => setShowFileManager(true)}
        />
      )}

      {showFileManager && (
        <FileManagerModal
          files={files}
          currentPath={currentPath}
          onNavigate={fetchFiles}
          onUpload={uploadFile}
          onSelect={(url: any) => {
            setFormData(prev => ({...prev, headerImage: url}));
            setShowFileManager(false);
          }}
          onClose={() => setShowFileManager(false)}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          dragOver={dragOver}
        />
      )}
    </div>
  );
}

function ProductModal({ formData, setFormData, onSubmit, onClose, loading, isEditing, onOpenFileManager } : any) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Product" : "Add Product"}
        </h2>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description *</label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full border rounded px-3 py-2"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Header Image URL *</label>
            <div className="flex gap-2">
              <input
                type="url"
                required
                value={formData.headerImage}
                onChange={(e) => setFormData({...formData, headerImage: e.target.value})}
                className="flex-1 border rounded px-3 py-2"
                placeholder="https://example.com/image.jpg"
              />
              <button 
                type="button"
                onClick={onOpenFileManager}
                className="bg-gray-600 text-white px-3 rounded"
              >
                <Upload size={16} />
              </button>
            </div>
            {formData.headerImage && (
              <img 
                src={formData.headerImage} 
                alt="Header preview" 
                className="mt-2 h-20 object-cover rounded border"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full border rounded px-3 py-2"
            >
              <option value="embedded">Embedded</option>
              <option value="ai">AI</option>
              <option value="prototype">Prototype</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({...formData, featured: e.target.checked})}
              className="rounded"
            />
            <label htmlFor="featured" className="text-sm font-medium">Featured Product</label>
          </div>

          <div className="flex gap-2 justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 flex items-center gap-2"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              {isEditing ? "Update" : "Create"} Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FileManagerModal({ files, currentPath, onNavigate, onUpload, onSelect, onClose, onDrop, onDragOver, onDragLeave, dragOver }: any) {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      await onUpload(file, currentPath);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Media Library</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="mb-4">
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center ${dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
          >
            <Upload size={32} className="mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">Drag and drop files here, or click to select</p>
            <input 
              type="file" 
              className="hidden" 
              id="file-upload" 
              onChange={handleFileUpload}
              accept="image/*,video/*" 
            />
            <label htmlFor="file-upload" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
              {uploading ? <Loader2 size={16} className="animate-spin mx-auto" /> : 'Select Files'}
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentPath && (
            <div 
              className="border rounded-lg p-4 cursor-pointer text-center hover:bg-gray-50"
              onClick={() => onNavigate(currentPath.split('/').slice(0, -1).join('/'))}
            >
              <div className="text-2xl mb-2">📁</div>
              <p className="text-sm truncate">..</p>
            </div>
          )}
          
          {files.map((file: { type: string; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; url: string | undefined; }, index: Key | null | undefined) => (
            <div 
              key={index} 
              className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md"
              onClick={() => file.type === 'folder' 
                ? onNavigate(`${currentPath}/${file.name}`) 
                : onSelect(file.url)
              }
            >
              {file.type === 'image' ? (
               <img
  src={file.url}
  alt={String(file.name)}
  className="w-full h-32 object-cover"
/>


              ) : file.type === 'video' ? (
                <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                  <div className="text-2xl">🎬</div>
                </div>
              ) : (
                <div className="w-full h-32 bg-gray-100 flex items-center justify-center">
                  <div className="text-2xl">📁</div>
                </div>
              )}
              <div className="p-2">
                <p className="text-xs truncate">{file.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}