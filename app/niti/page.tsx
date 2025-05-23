// // "use client";

// // import { useState, useEffect } from "react";
// // import { Terminal,  Workflow,  RefreshCw, Check,  Download, Info, Code, Cpu, Shield, Zap, X, Wrench, Folder, Package, FileArchive } from "lucide-react";

// // export default function NitiLandingPage() {
// //   const [, setSelectedDevice] = useState("niti-core");
// //   const [showToast, setShowToast] = useState(false);
// //   const [activating, setActivating] = useState(false);
// //   const [toastMessage, setToastMessage] = useState("");
// //   // const [showDeviceSelector, setShowDeviceSelector] = useState(false);
// //   const [sessionId, setSessionId] = useState("");
// //   const [showActivationModal, setShowActivationModal] = useState(false);
// //   const [activationStep, setActivationStep] = useState(1);
// //   const [isAgreed, setIsAgreed] = useState(false);
  
// //   // Form state
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [licenseKey, setLicenseKey] = useState("");
// //   const [formError, setFormError] = useState("");
// //   // const [uniqueCode, setUniqueCode] = useState("");
  
// //   useEffect(() => {
// //     // Generate a random session ID when the page loads
// //     const newSessionId = Math.random().toString(36).substring(2, 10).toUpperCase();
// //     setSessionId(newSessionId);
// //   }, []);
  
// //   const devices = {
// //     "niti-core": {
// //       name: "Niti Core",
// //       description: "Standard development board for professional applications",
// //       specs: [
// //         "32-bit ARM Cortex-M4 processor",
// //         "512KB Flash, 128KB RAM",
// //         "24 GPIO pins",
// //         "USB-C connector",
// //         "JTAG debugging interface"
// //       ],
// //       image: "/niti-core.png"
// //     },
// //     "niti-v1": {
// //       name: "Niti V1",
// //       description: "Compact form factor for embedded projects",
// //       specs: [
// //         "32-bit ARM Cortex-M0+ processor",
// //         "256KB Flash, 64KB RAM",
// //         "18 GPIO pins",
// //         "USB-C connector",
// //         "Low power consumption"
// //       ],
// //       image: "/niti-micro.png"
// //     },
// //     "niti-pro": {
// //       name: "Niti Pro",
// //       description: "High-performance for demanding applications",
// //       specs: [
// //         "32-bit ARM Cortex-M7 processor",
// //         "2MB Flash, 512KB RAM",
// //         "48 GPIO pins",
// //         "USB-C connector",
// //         "Hardware acceleration for ML"
// //       ],
// //       image: "/niti-pro.png"
// //     }
// //   };

// //   const activateDevice = () => {
// //     setShowActivationModal(true);
// //   };

// //   const handleActivationSubmit = async () => {
// //     if (!name || !email || !licenseKey) {
// //       setFormError("All fields are required");
// //       return;
// //     }
  
// //     if (!email.includes("@") || !email.includes(".")) {
// //       setFormError("Please enter a valid email address");
// //       return;
// //     }
  
// //     setFormError("");
// //     setActivating(true);
// //     setToastMessage("Verifying Account information...");
// //     setShowToast(true);
  
// //     try {
// //       const response = await fetch("/api/verify-license", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ fullName: name, email, licenseKey }), // ✅ Include `fullName`
// //       });
  
// //       if (!response.ok) {
// //         const data = await response.json().catch(() => ({ message: "Unknown error occurred" }));
// //         throw new Error(data.message || "Verification failed.");
// //       }
  
// //       setToastMessage("License verified successfully! 🎉");
  
// //       setTimeout(() => {
// //         setShowToast(false);
// //         setActivationStep(2);
// //       }, 2000);
// //     } catch (error) {
// //       setFormError((error as Error).message || "Error verifying account.");
// //     } finally {
// //       setActivating(false);
// //     }
// //   };
  
  
  

// //   const handleDownloadCode = async () => {
// //     if (!isAgreed) {
// //       alert("You must agree to the terms before downloading.");
// //       return;
// //     }
  
// //     try {
// //       const response = await fetch("/api/downloader");
// //       if (!response.ok) throw new Error("Failed to get download link");
  
// //       const data = await response.json();
// //       const fileUrl = data.fileUrl;
  
// //       // ✅ Create and trigger download
// //       const link = document.createElement("a");
// //       link.href = fileUrl;
// //       link.target = "_blank";
// //       document.body.appendChild(link);
// //       link.click();
// //       document.body.removeChild(link);
  
// //       // ✅ Move to the next step after download
// //       setTimeout(() => {
// //         setActivationStep(3);
// //       }, 2000); // Wait 2 seconds before moving to the next step
// //     } catch (error) {
// //       console.error("Download error:", error);
// //       alert("Error downloading file. Please try again.");
// //     }
// //   };
  
  
  

// //   const handleFinishActivation = () => {
// //     setShowActivationModal(false);
// //     setActivationStep(1);
// //     setName("");
// //     setEmail("");
// //     setLicenseKey("");
// //     setToastMessage("niti HDK installer downloaded successfully!");
// //     setShowToast(true);
    
// //     // Auto-hide toast after 3 seconds
// //     setTimeout(() => {
// //       setShowToast(false);
// //     }, 3000);
// //   };

// //   // const currentDevice = devices[selectedDevice as keyof typeof devices];

// //   return (
// //     <div className="min-h-screen bg-gray-50 font-sans">
// //       {/* Toast Notification */}
// //       {showToast && (
// //         <div className="fixed top-4 right-4 bg-white shadow-lg rounded-md px-4 py-3 flex items-center z-50 max-w-md transition-all duration-300 ease-in-out">
// //           {activating ? (
// //             <RefreshCw className="w-5 h-5 text-orange-500 mr-3 animate-spin" />
// //           ) : (
// //             <Check className="w-5 h-5 text-green-500 mr-3" />
// //           )}
// //           <p className="text-gray-800">{toastMessage}</p>
// //         </div>
// //       )}

// //       {/* Activation Modal */}
// //       {showActivationModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
// //             <div className="p-6">
// //               <div className="flex justify-between items-center mb-4">
// //                 <h2 className="text-xl font-medium text-gray-900">Download niti HDK</h2>
// //                 <button 
// //                   onClick={() => setShowActivationModal(false)} 
// //                   className="text-gray-400 hover:text-gray-500"
// //                 >
// //                   <X className="w-5 h-5" />
// //                 </button>
// //               </div>
              
// //               {activationStep === 1 && (
// //                 <>
// //                   <p className="text-sm text-gray-500 mb-6">
// //                     Please enter your information  to download niti HDK for your device.
// //                   </p>
                  
// //                   <div className="space-y-4">
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-1">
// //                         Full Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={name}
// //                         onChange={(e) => setName(e.target.value)}
// //                         className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
// //                         placeholder="Enter your full name"
// //                       />
// //                     </div>
                    
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-1">
// //                         Email Address
// //                       </label>
// //                       <input
// //                         type="email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
// //                         placeholder="Enter your email address"
// //                       />
// //                     </div>
                    
                   
// //                     {/* License Key */}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">
// //                   License Key
// //                 </label>
// //                 <input
// //                   type="text"
// //                   value={licenseKey}
// //                   onChange={(e) => setLicenseKey(e.target.value)}
// //                   className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
// //                   placeholder="Enter your license key"
// //                 />
// //               </div>

// //                     {formError && (
// //                       <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-3 text-sm">
// //                         {formError}
// //                       </div>
// //                     )}
                    
// //                     <button
// //                       onClick={handleActivationSubmit}
// //                       disabled={activating}
// //                       className={`w-full bg-orange-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition ${
// //                         activating ? 'opacity-80 cursor-not-allowed' : 'hover:bg-orange-700'
// //                       }`}
// //                     >
// //                       {activating ? (
// //                         <>
// //                           <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
// //                           Verifying...
// //                         </>
// //                       ) : (
// //                         <>
// //                           <Workflow className="w-5 h-5 mr-2" />
// //                           Verify Account
// //                         </>
// //                       )}
// //                     </button>
// //                   </div>
// //                 </>
// //               )}
              
// //               {activationStep === 2 && (
// //   <>
// //     <div className="mb-6">
// //       <div className="flex items-center justify-center mb-4">
// //         <Check className="w-12 h-12 text-green-500 p-2 bg-green-100 rounded-full" />
// //       </div>
// //       <p className="text-center text-gray-800 mb-2">
// //         Account verified successfully!
// //       </p>

// //       {/* Legal Agreement */}
// // <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 mb-4 max-h-60 overflow-y-auto">
// //   <h3 className="text-md font-bold mb-2">Software License Agreement</h3>
// //   <p>
// //     This software, <strong>HDK-V1</strong>, is proprietary and closed-source, 
// //     developed and owned by <strong>Ecocee</strong>. By downloading and using this software, 
// //     you agree to the following terms:
// //   </p>
// //   <ul className="list-disc pl-5 mt-2">
// //     <li>
// //       This software is licensed for use solely for <strong>embedded system development</strong>.
// //     </li>
// //     <li>
// //       Redistribution, modification, or reverse engineering of this software is strictly prohibited.
// //     </li>
// //     <li>
// //       <strong>No Warranty:</strong> This software is provided &quot;as is&quot; without warranties of any kind, 
// //       either express or implied, including but not limited to fitness for a particular purpose.
// //     </li>
// //     <li>
// //       Ecocee shall not be liable for any damages arising from the use of this software.
// //     </li>
// //     <li>
// //       The license is valid only for the registered user and may not be transferred.
// //     </li>
// //   </ul>
// //   <p className="mt-2">
// //     By checking the box below, you confirm your agreement to these terms.
// //   </p>
// // </div>

// //       {/* Agreement Checkbox */}
// //       <div className="flex items-center mb-4">
// //         <input
// //           type="checkbox"
// //           id="agreeCheckbox"
// //           checked={isAgreed}
// //           onChange={(e) => setIsAgreed(e.target.checked)}
// //           className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
// //         />
// //         <label htmlFor="agreeCheckbox" className="ml-2 text-sm text-gray-700">
// //           I have read and agree to the terms and conditions.
// //         </label>
// //       </div>

// //       {/* Download Button */}
// //       <button
// //         onClick={handleDownloadCode}
// //         disabled={!isAgreed} // Prevent download if not agreed
// //         className={`w-full py-2 px-4 rounded-md flex items-center justify-center transition ${
// //           isAgreed
// //             ? "bg-blue-600 text-white hover:bg-blue-700"
// //             : "bg-gray-400 text-gray-700 cursor-not-allowed"
// //         }`}
// //       >
// //         <Download className="w-5 h-5 mr-2" />
// //         Download Activation Code
// //       </button>
// //     </div>
// //   </>
// // )}

// // {activationStep === 3 && (
// //   <>
// //     <div className="mb-6">
// //       <div className="flex items-center justify-center mb-4">
// //         <Info className="w-12 h-12 text-blue-500 p-2 bg-blue-100 rounded-full" />
// //       </div>
// //       <h2 className="text-center text-xl font-semibold text-gray-900">
// //         Final Setup Instructions
// //       </h2>

// //       {/* Instruction Steps */}
// //       <ol className="list-decimal list-inside space-y-4 text-sm text-gray-700 mt-4 p-4 bg-gray-50 rounded-md shadow">
// //         <li className="flex items-center space-x-2">
// //           <FileArchive className="w-5 h-5 text-orange-500" />
// //           <span>Locate the downloaded file <strong className="font-mono text-orange-600">hdk-v1.zip</strong>.</span>
// //         </li>
// //         <li className="flex items-center space-x-2">
// //           <Package className="w-5 h-5 text-purple-500" />
// //           <span>Extract the file using your preferred archive manager.</span>
// //         </li>
// //         <li className="flex items-start space-x-2">
// //           <Folder className="w-5 h-5 text-blue-500" />
// //           <span>
// //             <strong>Move the extracted folder to:</strong>  
// //             <ul className="ml-6 list-disc">
// //               <li><span className="font-mono text-blue-600">C:\niti\hdk</span> (Windows)</li>
// //               <li><span className="font-mono text-blue-600">/niti/hdk</span> (Linux/Mac)</li>
// //             </ul>
// //           </span>
// //         </li>
// //         <li className="flex items-center space-x-2">
// //           <Terminal className="w-5 h-5 text-green-500" />
// //           <span>Open a terminal and navigate to the <strong>hdk</strong> folder:</span>
// //         </li>
// //         <pre className="bg-gray-100 p-2 rounded-md text-sm font-mono mt-2">
// //           <code>
// //             cd /niti/hdk  (Linux/Mac){"\n"}
// //             cd C:\niti\hdk  (Windows)
// //           </code>
// //         </pre>

// //         <li className="flex items-center space-x-2">
// //           <Wrench className="w-5 h-5 text-yellow-500" />
// //           <span>Run the following command to generate your project template:</span>
// //         </li>
// //         <pre className="bg-gray-100 p-2 rounded-md text-sm font-mono mt-2">
// //           <code>
// //             cargo generate --git https://github.com/cyberkutti-iedc/niti-hal-template.git
// //           </code>
// //         </pre>
// //       </ol>

// //       {/* Happy Hacking Message */}
// //       <div className="mt-6 text-center">
// //         <p className="text-lg font-semibold text-gray-800">🚀 Enjoy & Happy Hacking with Niti HDK! 🎉</p>
// //         <p className="text-sm text-gray-600">If you need help, check our documentation or community forums.</p>
// //       </div>

// //       {/* Completion Button */}
// //       <button
// //         onClick={handleFinishActivation}
// //         className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition hover:bg-green-700"
// //       >
// //         <Check className="w-5 h-5 mr-2" />
// //         Installation Completed
// //       </button>
// //     </div>
// //   </>
// // )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Header */}
// //       <header className="bg-white shadow-sm sticky top-0 z-10">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
// //           <div className="flex items-center space-x-2">
// //             <Terminal className="w-6 h-6 text-orange-600" />
// //             <span className="font-medium text-xl text-gray-800">
// //               <span className="text-orange-600">niti</span>HDK
// //             </span>
// //           </div>
// //           <nav className="hidden md:flex space-x-8">
// //             <a href="#about" className="text-gray-600 hover:text-orange-600 text-sm font-medium">About</a>
// //             <a href="#features" className="text-gray-600 hover:text-orange-600 text-sm font-medium">Features</a>
// //             <a href="#devices" className="text-gray-600 hover:text-orange-600 text-sm font-medium">Devices</a>
// //             <a href="#get-started" className="text-gray-600 hover:text-orange-600 text-sm font-medium">Get Started</a>
// //           </nav>
// //           <div className="flex items-center space-x-4">
// //             <div className="text-xs text-gray-500 hidden md:block">
// //               Session: <span className="font-mono text-orange-600">{sessionId}</span>
// //             </div>
// //             <button
// //               onClick={activateDevice}
// //               className="bg-orange-600 text-white py-2 px-4 rounded-md text-sm hover:bg-orange-700 transition"
// //             >
// //               Activate HDK
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-b from-orange-50 to-white py-16">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center">
// //             <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
// //               Powerful <span className="text-orange-600">Embedded Systems</span> Framework
// //             </h1>
// //             <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
// //               niti HDK is a Rust-based framework designed for creating reliable, secure, and efficient embedded systems.
// //             </p>
// //             <div className="flex flex-col md:flex-row justify-center gap-4">
// //               <button
// //                 onClick={activateDevice}
// //                 className="bg-orange-600 text-white py-3 px-6 rounded-md text-lg hover:bg-orange-700 transition"
// //               >
// //                 Activate Your HDK
// //               </button>
// //               <a
// //                 href="/docs/niti_hal/index.html"
// //                 className="bg-white text-orange-600 py-3 px-6 rounded-md text-lg border border-orange-200 hover:bg-orange-50 transition"
// //               >
// //                 Learn More
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section id="about" className="py-16 bg-white">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-light text-gray-900 mb-4">What is niti HDK?</h2>
// //             <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
// //           </div>
          
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <h3 className="text-2xl font-medium text-gray-900 mb-4">
// //                 A Modern Embedded Systems Framework
// //               </h3>
// //               <p className="text-gray-600 mb-6">
// //                 niti HDKis a cutting-edge embedded systems framework built with Rust, 
// //                 designed to provide developers with a reliable, secure, and efficient 
// //                 platform for creating next-generation embedded applications.
// //               </p>
// //               <p className="text-gray-600 mb-6">
// //                 Developed by Ecocee, niti HDKleverages the power of Rust's memory safety 
// //                 and concurrency features to create a framework that is both powerful and 
// //                 easy to use for embedded development.
// //               </p>
// //               <p className="text-gray-600">
// //                 Whether you're building IoT devices, industrial control systems, or 
// //                 consumer electronics, niti HDKprovides the tools and libraries you need 
// //                 to bring your ideas to life.
// //               </p>
// //             </div>
// //             <div className="bg-orange-50 p-8 rounded-lg">
// //               <h3 className="text-xl font-medium text-gray-900 mb-4">
// //                 Why Rust for Embedded Systems?
// //               </h3>
// //               <ul className="space-y-4">
// //                 <li className="flex items-start">
// //                   <Shield className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-medium text-gray-800">Memory Safety Without Garbage Collection</p>
// //                     <p className="text-sm text-gray-600">Rust's ownership model ensures memory safety without the overhead of garbage collection, perfect for resource-constrained devices.</p>
// //                   </div>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <Zap className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-medium text-gray-800">Zero-Cost Abstractions</p>
// //                     <p className="text-sm text-gray-600">Rust provides high-level abstractions without runtime overhead, allowing for efficient and readable code.</p>
// //                   </div>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <Cpu className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-medium text-gray-800">Bare-Metal Support</p>
// //                     <p className="text-sm text-gray-600">Rust's "no_std" environment allows for direct hardware interaction, making it ideal for embedded systems.</p>
// //                   </div>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <Code className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-medium text-gray-800">Rich Type System</p>
// //                     <p className="text-sm text-gray-600">Rust's powerful type system helps catch errors at compile time, reducing debugging time and improving reliability.</p>
// //                   </div>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section id="features" className="py-16 bg-gray-50">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-light text-gray-900 mb-4">Key Features</h2>
// //             <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
// //           </div>
          
// //           <div className="grid md:grid-cols-3 gap-8">
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <Shield className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">Security-First Design</h3>
// //               <p className="text-gray-600">
// //                 Built with security in mind, niti HDKprovides a robust foundation for creating 
// //                 secure embedded applications, with features like secure boot and encrypted storage.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <Zap className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">Real-Time Performance</h3>
// //               <p className="text-gray-600">
// //                 niti HDKdelivers predictable, low-latency performance for time-critical applications,
// //                 with efficient resource management and minimal overhead.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <Cpu className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">Hardware Abstraction</h3>
// //               <p className="text-gray-600">
// //                 Our comprehensive hardware abstraction layer allows developers to write 
// //                 portable code that works across multiple hardware platforms.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <Code className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">Modern Development Tools</h3>
// //               <p className="text-gray-600">
// //                 niti HDKcomes with a suite of development tools including a simulator, 
// //                 debugger, and profiler to streamline the development process.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <RefreshCw className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">OTA Updates</h3>
// //               <p className="text-gray-600">
// //                 Deploy updates to your devices securely and reliably with our 
// //                 over-the-air update system, including rollback protection.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <Terminal className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">Comprehensive Libraries</h3>
// //               <p className="text-gray-600">
// //                 Access a rich ecosystem of libraries for connectivity, sensor integration, 
// //                 data processing, and more, all optimized for embedded systems.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Devices Section */}
// //       <section id="devices" className="py-16 bg-white">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-light text-gray-900 mb-4">Supported Devices</h2>
// //             <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
// //           </div>
          
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {Object.entries(devices).map(([id, device]) => (
// //               <div key={id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
// //                 <div className="h-48 bg-white flex items-center justify-center">
// //                   <div className="w-32 h-32 bg-orange-50 rounded-md flex items-center justify-center">
// //                     <span className="text-orange-300 font-medium">{device.name}</span>
// //                   </div>
// //                 </div>
// //                 <div className="p-6">
// //                   <h3 className="text-xl font-medium text-gray-900 mb-2">{device.name}</h3>
// //                   <p className="text-gray-600 mb-4">{device.description}</p>
// //                   <h4 className="text-sm font-medium text-gray-900 mb-2">Specifications:</h4>
// //                   <ul className="space-y-1 mb-4">
// //                     {device.specs.map((spec, index) => (
// //                       <li key={index} className="flex items-start text-gray-600 text-sm">
// //                         <div className="flex-shrink-0 w-4 h-4 mt-1">
// //                           <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
// //                         </div>
// //                         {spec}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                   <button 
// //                     onClick={() => {
// //                       setSelectedDevice(id);
// //                       activateDevice();
// //                     }}
// //                     className="w-full bg-orange-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition hover:bg-orange-700"
// //                   >
// //                     <Workflow className="w-5 h-5 mr-2" />
// //                     Activate Device
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Get Started Section */}
// //       <section id="get-started" className="py-16 bg-orange-50">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-light text-gray-900 mb-4">How to Get Started</h2>
// //             <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
// //           </div>
          
// //           <div className="grid md:grid-cols-4 gap-4">
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
// //                 <span className="text-xl font-bold text-orange-500">1</span>
// //               </div>
// //               <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Purchase a Device</h3>
// //               <p className="text-gray-600 text-sm text-center">
// //                 Choose from our range of development boards that best suits your project needs.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
// //                 <span className="text-xl font-bold text-orange-500">2</span>
// //               </div>
// //               <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Register for License</h3>
// //               <p className="text-gray-600 text-sm text-center">
// //                 Create an account and register your device to receive your license key.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
// //                 <span className="text-xl font-bold text-orange-500">3</span>
// //               </div>
// //               <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Activate Framework</h3>
// //               <p className="text-gray-600 text-sm text-center">
// //                 Use our activation portal to activate niti HDKon your device.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
// //                 <span className="text-xl font-bold text-orange-500">4</span>
// //               </div>
// //               <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Start Developing</h3>
// //               <p className="text-gray-600 text-sm text-center">
// //                 Access our documentation and examples to start building your application.
// //               </p>
// //             </div>
// //           </div>
          
// //           <div className="mt-12 text-center">
// //             <button
// //               onClick={activateDevice}
// //               className="bg-orange-600 text-white py-3 px-6 rounded-md text-lg hover:bg-orange-700 transition"
// //             >
// //               Download The HDK Now
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-gray-800 text-white">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //           <div className="grid md:grid-cols-4 gap-8">
// //             <div>
// //               <div className="flex items-center space-x-2 mb-4">
// //                 <Terminal className="w-6 h-6 text-orange-400" />
// //                 <span className="font-medium text-xl text-white">
// //                   <span className="text-orange-400">niti</span>HDK
// //                 </span>
// //               </div>
// //               <p className="text-gray-400 text-sm">
// //                 A modern embedded systems framework built with Rust, designed for reliability, 
// //                 security, and performance.
// //               </p>
// //             </div>
            
// //             <div>
// //               <h3 className="text-lg font-medium mb-4">Resources</h3>
// //               <ul className="space-y-2">
// //                 <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Documentation</a></li>
                

// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Documentation</a></li>
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">API Reference</a></li>
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Tutorials</a></li>
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Examples</a></li>
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">GitHub Repository</a></li>
// // </ul>
// // </div>

// // <div>
// // <h3 className="text-lg font-medium mb-4">Company</h3>
// // <ul className="space-y-2">
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">About Ecocee</a></li>
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Blog</a></li>
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Careers</a></li>
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Press</a></li>
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Contact Us</a></li>
// // </ul>
// // </div>

// // <div>
// // <h3 className="text-lg font-medium mb-4">Legal</h3>
// // <ul className="space-y-2">
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Terms of Service</a></li>
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Privacy Policy</a></li>
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">License Agreement</a></li>
// // <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Cookie Policy</a></li>
// // </ul>
// // </div>
// // </div>

// // <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
// // <p className="text-sm text-gray-400 mb-4 md:mb-0">
// // © 2025 Ecocee. All rights reserved. niti HDK is a closed-source proprietary system.
// // </p>
// // <div className="flex space-x-4">
// // <a href="#" className="text-gray-400 hover:text-orange-400">
// // <span className="sr-only">Twitter</span>
// // <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
// //   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
// // </svg>
// // </a>
// // <a href="#" className="text-gray-400 hover:text-orange-400">
// // <span className="sr-only">GitHub</span>
// // <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
// //   <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
// // </svg>
// // </a>
// // <a href="#" className="text-gray-400 hover:text-orange-400">
// // <span className="sr-only">LinkedIn</span>
// // <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
// //   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
// // </svg>
// // </a>
// // </div>
// // </div>
// // </div>
// // </footer>
// // </div>
// // );
// // }



// // 


// "use client";

// import { useState, useEffect } from "react";
// import { Terminal, Workflow, RefreshCw, Check, Download, Info, Code, Cpu, Shield, Zap, X, Wrench, Folder, Package, FileArchive, Moon, Sun, ChevronDown } from "lucide-react";

// export default function NitiLandingPage() {
//   // THEME SELECTION - Uncomment only ONE of the following themes
//   // ==========================================================
  
//   // const THEME = "indigo"; // Default theme - Blue/Indigo Professional
//   const THEME = "orange"; // Orange/Amber Energetic Theme
//   // const THEME = "emerald"; // Premium Emerald/Teal Luxury Theme
//   // const THEME = "purple"; // Royal Purple Elegant Theme
  
//   // Theme configuration object
//   const themeConfig = {
//     indigo: {
//       primary: "indigo",
//       secondary: "blue",
//       accent: "violet",
//       gradient: "from-indigo-50 to-white",
//       lightBg: "bg-indigo-50",
//       darkBg: "bg-gray-900",
//       primaryButton: "bg-indigo-600 hover:bg-indigo-700",
//       secondaryButton: "bg-white text-indigo-600 border-indigo-200 hover:bg-indigo-50",
//       accentLight: "bg-indigo-100",
//       textAccent: "text-indigo-600",
//       borderAccent: "border-indigo-300",
//       iconAccent: "text-indigo-500",
//       iconLight: "text-indigo-400",
//       dot: "bg-indigo-400",
//     },
//     orange: {
//       primary: "orange",
//       secondary: "amber",
//       accent: "amber",
//       gradient: "from-orange-50 to-white",
//       lightBg: "bg-orange-50",
//       darkBg: "bg-gray-900",
//       primaryButton: "bg-orange-600 hover:bg-orange-700",
//       secondaryButton: "bg-white text-orange-600 border-orange-200 hover:bg-orange-50",
//       accentLight: "bg-orange-100",
//       textAccent: "text-orange-600",
//       borderAccent: "border-orange-300",
//       iconAccent: "text-orange-500",
//       iconLight: "text-orange-400",
//       dot: "bg-orange-400",
//     },
//     emerald: {
//       primary: "emerald",
//       secondary: "teal",
//       accent: "teal",
//       gradient: "from-emerald-50 to-white",
//       lightBg: "bg-emerald-50",
//       darkBg: "bg-gray-800",
//       primaryButton: "bg-emerald-600 hover:bg-emerald-700",
//       secondaryButton: "bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50",
//       accentLight: "bg-emerald-100",
//       textAccent: "text-emerald-600",
//       borderAccent: "border-emerald-300",
//       iconAccent: "text-emerald-500",
//       iconLight: "text-emerald-400",
//       dot: "bg-emerald-400",
//     },
//     purple: {
//       primary: "purple",
//       secondary: "violet",
//       accent: "indigo",
//       gradient: "from-purple-50 to-white",
//       lightBg: "bg-purple-50",
//       darkBg: "bg-gray-900",
//       primaryButton: "bg-purple-600 hover:bg-purple-700",
//       secondaryButton: "bg-white text-purple-600 border-purple-200 hover:bg-purple-50",
//       accentLight: "bg-purple-100",
//       textAccent: "text-purple-600",
//       borderAccent: "border-purple-300",
//       iconAccent: "text-purple-500",
//       iconLight: "text-purple-400",
//       dot: "bg-purple-400",
//     }
//   };
  
//   // Get active theme
//   const theme = themeConfig[THEME];

//   const [, setSelectedDevice] = useState("niti-core");
//   const [showToast, setShowToast] = useState(false);
//   const [activating, setActivating] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [sessionId, setSessionId] = useState("");
//   const [showActivationModal, setShowActivationModal] = useState(false);
//   const [activationStep, setActivationStep] = useState(1);
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
  
//   // Form state
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [licenseKey, setLicenseKey] = useState("");
//   const [formError, setFormError] = useState("");
  
//   useEffect(() => {
//     // Generate a random session ID when the page loads
//     const newSessionId = Math.random().toString(36).substring(2, 10).toUpperCase();
//     setSessionId(newSessionId);
    
//     // Check system preference for dark mode
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setDarkMode(true);
//     }
//   }, []);
  
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };
  
//   const devices = {
//     "niti-core": {
//       name: "Niti Core",
//       description: "Standard development board for professional applications",
//       specs: [
//         "32-bit ARM Cortex-M4 processor",
//         "512KB Flash, 128KB RAM",
//         "24 GPIO pins",
//         "USB-C connector",
//         "JTAG debugging interface"
//       ],
//       image: "/niti-core.png"
//     },
//     "niti-v1": {
//       name: "Niti V1",
//       description: "Compact form factor for embedded projects",
//       specs: [
//         "32-bit ARM Cortex-M0+ processor",
//         "256KB Flash, 64KB RAM",
//         "18 GPIO pins",
//         "USB-C connector",
//         "Low power consumption"
//       ],
//       image: "/niti-micro.png"
//     },
//     "niti-pro": {
//       name: "Niti Pro",
//       description: "High-performance for demanding applications",
//       specs: [
//         "32-bit ARM Cortex-M7 processor",
//         "2MB Flash, 512KB RAM",
//         "48 GPIO pins",
//         "USB-C connector",
//         "Hardware acceleration for ML"
//       ],
//       image: "/niti-pro.png"
//     }
//   };

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "IoT Developer",
//       company: "SmartTech Solutions",
//       text: "The niti HDK has completely transformed how we build embedded systems. The Rust-based approach gives us confidence in our code's safety and performance.",
//       avatar: "/api/placeholder/40/40",
//     },
//     {
//       name: "Michael Chen",
//       role: "Lead Engineer",
//       company: "Connected Systems Inc.",
//       text: "After trying multiple embedded frameworks, niti HDK stands out with its excellent documentation, powerful tooling, and comprehensive libraries.",
//       avatar: "/api/placeholder/40/40",
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "CTO",
//       company: "EcoSmart Devices",
//       text: "The security-first approach of niti HDK has been essential for our IoT products. We sleep better knowing our devices are built on such a solid foundation.",
//       avatar: "/api/placeholder/40/40",
//     },
//   ];

//   const activateDevice = () => {
//     setShowActivationModal(true);
//   };

//   const handleActivationSubmit = async () => {
//     if (!name || !email || !licenseKey) {
//       setFormError("All fields are required");
//       return;
//     }
  
//     if (!email.includes("@") || !email.includes(".")) {
//       setFormError("Please enter a valid email address");
//       return;
//     }
  
//     setFormError("");
//     setActivating(true);
//     setToastMessage("Verifying Account information...");
//     setShowToast(true);
  
//     try {
//       const response = await fetch("/api/verify-license", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ fullName: name, email, licenseKey }),
//       });
  
//       if (!response.ok) {
//         const data = await response.json().catch(() => ({ message: "Unknown error occurred" }));
//         throw new Error(data.message || "Verification failed.");
//       }
  
//       setToastMessage("License verified successfully! 🎉");
  
//       setTimeout(() => {
//         setShowToast(false);
//         setActivationStep(2);
//       }, 2000);
//     } catch (error) {
//       setFormError((error as Error).message || "Error verifying account.");
//     } finally {
//       setActivating(false);
//     }
//   };
  
//   const handleDownloadCode = async () => {
//     if (!isAgreed) {
//       alert("You must agree to the terms before downloading.");
//       return;
//     }
  
//     try {
//       const response = await fetch("/api/downloader");
//       if (!response.ok) throw new Error("Failed to get download link");
  
//       const data = await response.json();
//       const fileUrl = data.fileUrl;
  
//       // Create and trigger download
//       const link = document.createElement("a");
//       link.href = fileUrl;
//       link.target = "_blank";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
  
//       // Move to the next step after download
//       setTimeout(() => {
//         setActivationStep(3);
//       }, 2000); // Wait 2 seconds before moving to the next step
//     } catch (error) {
//       console.error("Download error:", error);
//       alert("Error downloading file. Please try again.");
//     }
//   };
  
//   const handleFinishActivation = () => {
//     setShowActivationModal(false);
//     setActivationStep(1);
//     setName("");
//     setEmail("");
//     setLicenseKey("");
//     setToastMessage("niti HDK installer downloaded successfully!");
//     setShowToast(true);
    
//     // Auto-hide toast after 3 seconds
//     setTimeout(() => {
//       setShowToast(false);
//     }, 3000);
//   };

//   return (
//     <div className={`min-h-screen font-sans ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
//       {/* Toast Notification */}
//       {showToast && (
//         <div className={`fixed top-4 right-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-md px-4 py-3 flex items-center z-50 max-w-md transition-all duration-300 ease-in-out`}>
//           {activating ? (
//             <RefreshCw className={`w-5 h-5 ${theme.iconAccent} mr-3 animate-spin`} />
//           ) : (
//             <Check className="w-5 h-5 text-emerald-500 mr-3" />
//           )}
//           <p className={darkMode ? 'text-gray-200' : 'text-gray-800'}>{toastMessage}</p>
//         </div>
//       )}

//       {/* Activation Modal */}
//       {showActivationModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto`}>
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-medium">Download niti HDK</h2>
//                 <button 
//                   onClick={() => setShowActivationModal(false)} 
//                   className="text-gray-400 hover:text-gray-500"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>
              
//               {activationStep === 1 && (
//                 <>
//                   <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-6`}>
//                     Please enter your information to download niti HDK for your device.
//                   </p>
                  
//                   <div className="space-y-4">
//                     <div>
//                       <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className={`w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-${theme.primary}-500 focus:border-${theme.primary}-500`}
//                         placeholder="Enter your full name"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className={`w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-${theme.primary}-500 focus:border-${theme.primary}-500`}
//                         placeholder="Enter your email address"
//                       />
//                     </div>
                    
//                     {/* License Key */}
//                     <div>
//                       <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
//                         License Key
//                       </label>
//                       <input
//                         type="text"
//                         value={licenseKey}
//                         onChange={(e) => setLicenseKey(e.target.value)}
//                         className={`w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-${theme.primary}-500 focus:border-${theme.primary}-500`}
//                         placeholder="Enter your license key"
//                       />
//                     </div>

//                     {formError && (
//                       <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-3 text-sm">
//                         {formError}
//                       </div>
//                     )}
                    
//                     <button
//                       onClick={handleActivationSubmit}
//                       disabled={activating}
//                       className={`w-full ${theme.primaryButton} text-white py-2 px-4 rounded-md flex items-center justify-center transition ${
//                         activating ? 'opacity-80 cursor-not-allowed' : ''
//                       }`}
//                     >
//                       {activating ? (
//                         <>
//                           <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
//                           Verifying...
//                         </>
//                       ) : (
//                         <>
//                           <Workflow className="w-5 h-5 mr-2" />
//                           Verify Account
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </>
//               )}
              
//               {activationStep === 2 && (
//                 <>
//                   <div className="mb-6">
//                     <div className="flex items-center justify-center mb-4">
//                       <Check className="w-12 h-12 text-emerald-500 p-2 bg-emerald-100 rounded-full" />
//                     </div>
//                     <p className={`text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-2`}>
//                       Account verified successfully!
//                     </p>

//                     {/* Legal Agreement */}
//                     <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-md text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 max-h-60 overflow-y-auto`}>
//                       <h3 className="text-md font-bold mb-2">Software License Agreement</h3>
//                       <p>
//                         This software, <strong>HDK-V1</strong>, is proprietary and closed-source, 
//                         developed and owned by <strong>Ecocee</strong>. By downloading and using this software, 
//                         you agree to the following terms:
//                       </p>
//                       <ul className="list-disc pl-5 mt-2">
//                         <li>
//                           This software is licensed for use solely for <strong>embedded system development</strong>.
//                         </li>
//                         <li>
//                           Redistribution, modification, or reverse engineering of this software is strictly prohibited.
//                         </li>
//                         <li>
//                           <strong>No Warranty:</strong> This software is provided &ldquo;as is&rdquo; without warranties of any kind, 
//                           either express or implied, including but not limited to fitness for a particular purpose.
//                         </li>
//                         <li>
//                           Ecocee shall not be liable for any damages arising from the use of this software.
//                         </li>
//                         <li>
//                           The license is valid only for the registered user and may not be transferred.
//                         </li>
//                       </ul>
//                       <p className="mt-2">
//                         By checking the box below, you confirm your agreement to these terms.
//                       </p>
//                     </div>

//                     {/* Agreement Checkbox */}
//                     <div className="flex items-center mb-4">
//                       <input
//                         type="checkbox"
//                         id="agreeCheckbox"
//                         checked={isAgreed}
//                         onChange={(e) => setIsAgreed(e.target.checked)}
//                         className={`w-5 h-5 text-${theme.primary}-600 border-gray-300 rounded focus:ring-${theme.primary}-500`}
//                       />
//                       <label htmlFor="agreeCheckbox" className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                         I have read and agree to the terms and conditions.
//                       </label>
//                     </div>

//                     {/* Download Button */}
//                     <button
//                       onClick={handleDownloadCode}
//                       disabled={!isAgreed} // Prevent download if not agreed
//                       className={`w-full py-2 px-4 rounded-md flex items-center justify-center transition ${
//                         isAgreed
//                           ? `${theme.primaryButton} text-white`
//                           : "bg-gray-400 text-gray-700 cursor-not-allowed"
//                       }`}
//                     >
//                       <Download className="w-5 h-5 mr-2" />
//                       Download Activation Code
//                     </button>
//                   </div>
//                 </>
//               )}

//               {activationStep === 3 && (
//                 <>
//                   <div className="mb-6">
//                     <div className="flex items-center justify-center mb-4">
//                       <Info className={`w-12 h-12 ${theme.iconAccent} p-2 ${theme.accentLight} rounded-full`} />
//                     </div>
//                     <h2 className={`text-center text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
//                       Final Setup Instructions
//                     </h2>

//                     {/* Instruction Steps */}
//                     <ol className={`list-decimal list-inside space-y-4 text-sm ${darkMode ? 'text-gray-300 bg-gray-700' : 'text-gray-700 bg-gray-50'} mt-4 p-4 rounded-md shadow`}>
//                       <li className="flex items-center space-x-2">
//                         <FileArchive className={`w-5 h-5 ${theme.iconAccent}`} />
//                         <span>Locate the downloaded file <strong className={`font-mono ${theme.textAccent}`}>hdk-v1.zip</strong>.</span>
//                       </li>
//                       <li className="flex items-center space-x-2">
//                         <Package className="w-5 h-5 text-purple-500" />
//                         <span>Extract the file using your preferred archive manager.</span>
//                       </li>
//                       <li className="flex items-start space-x-2">
//                         <Folder className={`w-5 h-5 ${theme.iconAccent}`} />
//                         <span>
//                           <strong>Move the extracted folder to:</strong>  
//                           <ul className="ml-6 list-disc">
//                             <li><span className={`font-mono ${theme.textAccent}`}>C:\niti\hdk</span> (Windows)</li>
//                             <li><span className={`font-mono ${theme.textAccent}`}>/niti/hdk</span> (Linux/Mac)</li>
//                           </ul>
//                         </span>
//                       </li>
//                       <li className="flex items-center space-x-2">
//                         <Terminal className="w-5 h-5 text-emerald-500" />
//                         <span>Open a terminal and navigate to the <strong>hdk</strong> folder:</span>
//                       </li>
//                       <pre className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2 rounded-md text-sm font-mono mt-2`}>
//                         <code>
//                           cd /niti/hdk  (Linux/Mac){"\n"}
//                           cd C:\niti\hdk  (Windows)
//                         </code>
//                       </pre>

//                       <li className="flex items-center space-x-2">
//                         <Wrench className="w-5 h-5 text-amber-500" />
//                         <span>Run the following command to generate your project template:</span>
//                       </li>
//                       <pre className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2 rounded-md text-sm font-mono mt-2`}>
//                         <code>
//                           cargo generate --git https://github.com/cyberkutti-iedc/niti-hal-template.git
//                         </code>
//                       </pre>
//                     </ol>

//                     {/* Happy Hacking Message */}
//                     <div className="mt-6 text-center">
//                       <p className={`text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>🚀 Enjoy & Happy Hacking with Niti HDK! 🎉</p>
//                       <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>If you need help, check our documentation or community forums.</p>
//                     </div>

//                     {/* Completion Button */}
//                     <button
//                       onClick={handleFinishActivation}
//                       className="mt-4 w-full bg-emerald-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition hover:bg-emerald-700"
//                     >
//                       <Check className="w-5 h-5 mr-2" />
//                       Installation Completed
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Header */}
//       <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sticky top-0 z-10`}>
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <Terminal className={`w-6 h-6 ${theme.textAccent}`} />
//             <span className={`font-medium text-xl ${darkMode ? 'text-white' : 'text-gray-800'}`}>
//               <span className={theme.textAccent}>niti</span>HDK
//             </span>
//           </div>
//           <nav className="hidden md:flex space-x-8">
//             <a href="#about" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:${theme.textAccent} text-sm font-medium`}>About</a>
//             <a href="#features" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:${theme.textAccent} text-sm font-medium`}>Features</a>
//             <a href="#devices" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:${theme.textAccent} text-sm font-medium`}>Devices</a>
//             <a href="#testimonials" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:${theme.textAccent} text-sm font-medium`}>Testimonials</a>
//             <a href="#get-started" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:${theme.textAccent} text-sm font-medium`}>Get Started</a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//               {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             </button>
//             <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} hidden md:block`}>
//               Session: <span className={`font-mono ${theme.textAccent}`}>{sessionId}</span>
//             </div>
//             <button
//               onClick={activateDevice}
//               className={`${theme.primaryButton} text-white py-2 px-4 rounded-md text-sm transition`}
//             >
//               Activate HDK
//             </button>
//           </div>
//         </div>
        
//         {/* Mobile Menu - Only visible on small screens */}
//         <div className="md:hidden relative">
//           <button 
//             onClick={() => setShowDropdown(!showDropdown)} 
//             className={`w-full flex items-center justify-between px-4 py-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//             <span>Menu</span>
//             <ChevronDown className="w-4 h-4" />
//           </button>
          
//           {showDropdown && (
//             <div className={`absolute w-full z-20 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
//               <a href="#about" className={`block py-2 px-4 hover:${theme.lightBg}`}>About</a>
//               <a href="#features" className={`block py-2 px-4 hover:${theme.lightBg}`}>Features</a>
//               <a href="#devices" className={`block py-2 px-4 hover:${theme.lightBg}`}>Devices</a>
//               <a href="#testimonials" className={`block py-2 px-4 hover:${theme.lightBg}`}>Testimonials</a>
//               <a href="#get-started" className={`block py-2 px-4 hover:${theme.lightBg}`}>Get Started</a>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className={`bg-gradient-to-b ${theme.gradient} py-16`}>
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className={`text-4xl md:text-5xl font-light ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
//               Powerful <span className={theme.textAccent}>Embedded Systems</span> Framework
//             </h1>
//             <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-8`}>
//               niti HDK is a Rust-based framework designed for creating reliable, secure, and efficient embedded systems.
//             </p>
//             <div className="flex flex-col md:flex-row justify-center gap-4">
//               <button
//                 onClick={activateDevice}
//                 className={`${theme.primaryButton} text-white py-3 px-6 rounded-md text-lg transition`}
//               >
//                 Activate Your HDK
//               </button>
//               <a
//                 href="/docs/niti_hal/index.html"
//                 className={`${theme.secondaryButton} py-3 px-6 rounded-md text-lg border transition`}
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>
//           </div>
          
//           {/* Hero Badge */}
//           <div className="mt-16 text-center">
//             <div className={`inline-block ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg px-6 py-4 mx-auto`}>
//               <div className="flex items-center gap-3">
//                 <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme.accentLight}`}>
//                   <Shield className={`w-6 h-6 ${theme.iconAccent}`} />
//                 </div>
//                 <div className="text-left">
//                   <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Trusted by Industry Leaders</p>
//                   <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Used in 1000+ embedded projects</p>
//                 </div>
//                 </div>
//                 </div>
//                 </div>

//                 </section>

//       {/* About Section */}
// //       <section id="about" className="py-16 bg-white">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-light text-gray-900 mb-4">What is niti HDK?</h2>
// //             <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
// //           </div>
          
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <h3 className="text-2xl font-medium text-gray-900 mb-4">
// //                 A Modern Embedded Systems Framework
// //               </h3>
// //               <p className="text-gray-600 mb-6">
// //                 niti HDKis a cutting-edge embedded systems framework built with Rust, 
// //                 designed to provide developers with a reliable, secure, and efficient 
// //                 platform for creating next-generation embedded applications.
// //               </p>
// //               <p className="text-gray-600 mb-6">
// //                 Developed by Ecocee, niti HDKleverages the power of Rust's memory safety 
// //                 and concurrency features to create a framework that is both powerful and 
// //                 easy to use for embedded development.
// //               </p>
// //               <p className="text-gray-600">
// //                 Whether you're building IoT devices, industrial control systems, or 
// //                 consumer electronics, niti HDKprovides the tools and libraries you need 
// //                 to bring your ideas to life.
// //               </p>
// //             </div>
// //             <div className="bg-orange-50 p-8 rounded-lg">
// //               <h3 className="text-xl font-medium text-gray-900 mb-4">
// //                 Why Rust for Embedded Systems?
// //               </h3>
// //               <ul className="space-y-4">
// //                 <li className="flex items-start">
// //                   <Shield className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-medium text-gray-800">Memory Safety Without Garbage Collection</p>
// //                     <p className="text-sm text-gray-600">Rust's ownership model ensures memory safety without the overhead of garbage collection, perfect for resource-constrained devices.</p>
// //                   </div>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <Zap className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-medium text-gray-800">Zero-Cost Abstractions</p>
// //                     <p className="text-sm text-gray-600">Rust provides high-level abstractions without runtime overhead, allowing for efficient and readable code.</p>
// //                   </div>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <Cpu className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-medium text-gray-800">Bare-Metal Support</p>
// //                     <p className="text-sm text-gray-600">Rust's "no_std" environment allows for direct hardware interaction, making it ideal for embedded systems.</p>
// //                   </div>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <Code className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-medium text-gray-800">Rich Type System</p>
// //                     <p className="text-sm text-gray-600">Rust's powerful type system helps catch errors at compile time, reducing debugging time and improving reliability.</p>
// //                   </div>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section id="features" className="py-16 bg-gray-50">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-light text-gray-900 mb-4">Key Features</h2>
// //             <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
// //           </div>
          
// //           <div className="grid md:grid-cols-3 gap-8">
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <Shield className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">Security-First Design</h3>
// //               <p className="text-gray-600">
// //                 Built with security in mind, niti HDKprovides a robust foundation for creating 
// //                 secure embedded applications, with features like secure boot and encrypted storage.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <Zap className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">Real-Time Performance</h3>
// //               <p className="text-gray-600">
// //                 niti HDKdelivers predictable, low-latency performance for time-critical applications,
// //                 with efficient resource management and minimal overhead.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <Cpu className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">Hardware Abstraction</h3>
// //               <p className="text-gray-600">
// //                 Our comprehensive hardware abstraction layer allows developers to write 
// //                 portable code that works across multiple hardware platforms.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <Code className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">Modern Development Tools</h3>
// //               <p className="text-gray-600">
// //                 niti HDKcomes with a suite of development tools including a simulator, 
// //                 debugger, and profiler to streamline the development process.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <RefreshCw className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">OTA Updates</h3>
// //               <p className="text-gray-600">
// //                 Deploy updates to your devices securely and reliably with our 
// //                 over-the-air update system, including rollback protection.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-6 rounded-lg shadow-sm">
// //               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
// //                 <Terminal className="w-6 h-6 text-orange-500" />
// //               </div>
// //               <h3 className="text-xl font-medium text-gray-900 mb-2">Comprehensive Libraries</h3>
// //               <p className="text-gray-600">
// //                 Access a rich ecosystem of libraries for connectivity, sensor integration, 
// //                 data processing, and more, all optimized for embedded systems.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Devices Section */}
// //       <section id="devices" className="py-16 bg-white">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-light text-gray-900 mb-4">Supported Devices</h2>
// //             <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
// //           </div>
          
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {Object.entries(devices).map(([id, device]) => (
//               <div key={id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
//                 <div className="h-48 bg-white flex items-center justify-center">
//                   <div className="w-32 h-32 bg-orange-50 rounded-md flex items-center justify-center">
//                     <span className="text-orange-300 font-medium">{device.name}</span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-medium text-gray-900 mb-2">{device.name}</h3>
//                   <p className="text-gray-600 mb-4">{device.description}</p>
//                   <h4 className="text-sm font-medium text-gray-900 mb-2">Specifications:</h4>
//                   <ul className="space-y-1 mb-4">
//                     {device.specs.map((spec, index) => (
//                       <li key={index} className="flex items-start text-gray-600 text-sm">
//                         <div className="flex-shrink-0 w-4 h-4 mt-1">
//                           <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                         </div>
//                         {spec}
//                       </li>
//                     ))}
//                   </ul>
//                   <button 
//                     onClick={() => {
//                       setSelectedDevice(id);
//                       activateDevice();
//                     }}
//                     className="w-full bg-orange-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition hover:bg-orange-700"
//                   >
//                     <Workflow className="w-5 h-5 mr-2" />
//                     Activate Device
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Get Started Section */}
//       <section id="get-started" className="py-16 bg-orange-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-light text-gray-900 mb-4">How to Get Started</h2>
//             <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
//           </div>
          
//           <div className="grid md:grid-cols-4 gap-4">
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
//                 <span className="text-xl font-bold text-orange-500">1</span>
//               </div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Purchase a Device</h3>
//               <p className="text-gray-600 text-sm text-center">
//                 Choose from our range of development boards that best suits your project needs.
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
//                 <span className="text-xl font-bold text-orange-500">2</span>
//               </div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Register for License</h3>
//               <p className="text-gray-600 text-sm text-center">
//                 Create an account and register your device to receive your license key.
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
//                 <span className="text-xl font-bold text-orange-500">3</span>
//               </div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Activate Framework</h3>
//               <p className="text-gray-600 text-sm text-center">
//                 Use our activation portal to activate niti HDKon your device.
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
//                 <span className="text-xl font-bold text-orange-500">4</span>
//               </div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Start Developing</h3>
//               <p className="text-gray-600 text-sm text-center">
//                 Access our documentation and examples to start building your application.
//               </p>
//             </div>
//           </div>
          
//           <div className="mt-12 text-center">
//             <button
//               onClick={activateDevice}
//               className="bg-orange-600 text-white py-3 px-6 rounded-md text-lg hover:bg-orange-700 transition"
//             >
//               Download The HDK Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <Terminal className="w-6 h-6 text-orange-400" />
//                 <span className="font-medium text-xl text-white">
//                   <span className="text-orange-400">niti</span>HDK
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 A modern embedded systems framework built with Rust, designed for reliability, 
//                 security, and performance.
//               </p>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-medium mb-4">Resources</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Documentation</a></li>
                

// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Documentation</a></li>
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">API Reference</a></li>
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Tutorials</a></li>
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Examples</a></li>
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">GitHub Repository</a></li>
// </ul>
// </div>

// <div>
// <h3 className="text-lg font-medium mb-4">Company</h3>
// <ul className="space-y-2">
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">About Ecocee</a></li>
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Blog</a></li>
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Careers</a></li>
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Press</a></li>
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Contact Us</a></li>
// </ul>
// </div>

// <div>
// <h3 className="text-lg font-medium mb-4">Legal</h3>
// <ul className="space-y-2">
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Terms of Service</a></li>
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Privacy Policy</a></li>
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">License Agreement</a></li>
// <li><a href="#" className="text-gray-400 hover:text-orange-400 text-sm">Cookie Policy</a></li>
// </ul>
// </div>
// </div>

// <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
// <p className="text-sm text-gray-400 mb-4 md:mb-0">
// © 2025 Ecocee. All rights reserved. niti HDK is a closed-source proprietary system.
// </p>
// <div className="flex space-x-4">
// <a href="#" className="text-gray-400 hover:text-orange-400">
// <span className="sr-only">Twitter</span>
// <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
// </svg>
// </a>
// <a href="#" className="text-gray-400 hover:text-orange-400">
// <span className="sr-only">GitHub</span>
// <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//   <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
// </svg>
// </a>
// <a href="#" className="text-gray-400 hover:text-orange-400">
// <span className="sr-only">LinkedIn</span>
// <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
// </svg>
// </a>
// </div>
// </div>
// </div>
// </footer>
// </div>
// );
// }

"use client";

import { useState, useEffect } from "react";
import { 
  Terminal, Workflow, RefreshCw, Check, Download, Info, Code, 
  Cpu, Shield, Zap, X, Wrench, Folder, Package, FileArchive, 
  Moon, Sun, ChevronDown, 
  ArrowRight,
  AlertTriangle
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import SEO from '@/components/SEO';


export default function NitiLandingPage() {


  const tools = [
    {
      name: "Prwans Installer",
      description:
        "A one-click installer that sets up all essential tools like Git, VS Code, and dependencies required for Niti HDK development.",
      link: "https://github.com/cyberkutti-iedc/Prawns-Installer",
    },
    {
      name: "Waterman",
      description:
        "A Rust-based AVR microcontroller flasher, simplifying embedded programming and firmware deployment.",
      link: "https://crates.io/crates/waterman",
    },
    {
      name: "MemoryMap",
      description:
        "A Rust-based tool that provides detailed insights into a microcontroller's memory layout, including flash and RAM usage.",
      link: "https://github.com/cyberkutti-iedc/MemoryMap",
    },
    {
      name: "Rust",
      description:
        "The primary programming language for Niti HDK, ensuring safe, efficient, and concurrent embedded system development.",
      link: "https://www.rust-lang.org/",
    },
  ];
  

  // THEME SELECTION - Uncomment only ONE of the following themes
  // ==========================================================
  
  //const THEME = "indigo"; // Default theme - Blue/Indigo Professional
  //const THEME = "orange"; // Orange/Amber Energetic Theme
   const THEME = "emerald"; // Premium Emerald/Teal Luxury Theme
  // const THEME = "purple"; // Royal Purple Elegant Theme



  
  // Theme configuration object
  const themeConfig = {
    indigo: {
      primary: "indigo",
      secondary: "blue",
      accent: "violet",
      gradient: "from-indigo-50 to-white",
      lightBg: "bg-indigo-50",
      darkBg: "bg-gray-900",
      primaryButton: "bg-indigo-600 hover:bg-indigo-700",
      secondaryButton: "bg-white text-indigo-600 border-indigo-200 hover:bg-indigo-50",
      accentLight: "bg-indigo-100",
      textAccent: "text-indigo-600",
      borderAccent: "border-indigo-300",
      iconAccent: "text-indigo-500",
      iconLight: "text-indigo-400",
      dot: "bg-indigo-400",
    },
    orange: {
      primary: "orange",
      secondary: "amber",
      accent: "amber",
      gradient: "from-orange-50 to-white",
      lightBg: "bg-orange-50",
      darkBg: "bg-gray-900",
      primaryButton: "bg-orange-600 hover:bg-orange-700",
      secondaryButton: "bg-white text-orange-600 border-orange-200 hover:bg-orange-50",
      accentLight: "bg-orange-100",
      textAccent: "text-orange-600",
      borderAccent: "border-orange-300",
      iconAccent: "text-orange-500",
      iconLight: "text-orange-400",
      dot: "bg-orange-400",
    },
    emerald: {
      primary: "emerald",
      secondary: "teal",
      accent: "teal",
      gradient: "from-emerald-50 to-white",
      lightBg: "bg-emerald-50",
      darkBg: "bg-gray-800",
      primaryButton: "bg-emerald-600 hover:bg-emerald-700",
      secondaryButton: "bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50",
      accentLight: "bg-emerald-100",
      textAccent: "text-emerald-600",
      borderAccent: "border-emerald-300",
      iconAccent: "text-emerald-500",
      iconLight: "text-emerald-400",
      dot: "bg-emerald-400",
    },
    purple: {
      primary: "purple",
      secondary: "violet",
      accent: "indigo",
      gradient: "from-purple-50 to-white",
      lightBg: "bg-purple-50",
      darkBg: "bg-gray-900",
      primaryButton: "bg-purple-600 hover:bg-purple-700",
      secondaryButton: "bg-white text-purple-600 border-purple-200 hover:bg-purple-50",
      accentLight: "bg-purple-100",
      textAccent: "text-purple-600",
      borderAccent: "border-purple-300",
      iconAccent: "text-purple-500",
      iconLight: "text-purple-400",
      dot: "bg-purple-400",
    }
  };
  
  // Get active theme
  const theme = themeConfig[THEME];

  const [selectedDevice] = useState("niti-v1");
  const [showToast, setShowToast] = useState(false);
  const [activating, setActivating] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [showActivationModal, setShowActivationModal] = useState(false);
  const [activationStep, setActivationStep] = useState(1);
  const [isAgreed, setIsAgreed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
 

  
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [licenseKey, setLicenseKey] = useState("");
  const [formError, setFormError] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    // Generate a random session ID when the page loads
    const newSessionId = Math.random().toString(36).substring(2, 10).toUpperCase();
    setSessionId(newSessionId);
    
    // Check system preference for dark mode
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const devices = {
    "niti-mini": {
  "name": "Niti Mini",
  "description": "Ultra-compact board for simple embedded applications",
  "specs": [
    "8-bit AVR ATtiny85 processor",
    "8KB Flash, 512B SRAM, 512B EEPROM",
    "6 GPIO pins",
    "Micro USB connector",
    "Ultra-low power consumption"
  ],
  "image": "/niti/attiny85.jpg"
},
    "niti-v1": {
  "name": "Niti V1",
  "description": "Compact form factor for embedded projects",
  "specs": [
    "8-bit AVR ATmega2560 processor",
    "256KB Flash, 8KB SRAM, 4KB EEPROM",
    "54 GPIO pins (15 PWM, 16 Analog)",
    "USB Type-C connector",
    "Low power consumption"
  ],
  "image": "/niti/atmega2560.jpg"
}
,
 "niti-pro": {
  "name": "Niti Pro",
  "description": "Compact form factor for embedded projects",
  "specs": [
    "32-bit dual-core Xtensa LX6 processor",
    "4MB Flash, 520KB SRAM",
    "30 GPIO pins",
    "Wi-Fi & Bluetooth connectivity",
    "Low power consumption"
  ],
  "image": "/niti/esp.jpg"
}

  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IoT Developer",
      company: "SmartTech Solutions",
      text: "The niti HDK has completely transformed how we build embedded systems. The Rust-based approach gives us confidence in our code's safety and performance.",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Michael Chen",
      role: "Lead Engineer",
      company: "Connected Systems Inc.",
      text: "After trying multiple embedded frameworks, niti HDK stands out with its excellent documentation, powerful tooling, and comprehensive libraries.",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO",
      company: "EcoSmart Devices",
      text: "The security-first approach of niti HDK has been essential for our IoT products. We sleep better knowing our devices are built on such a solid foundation.",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const activateDevice = () => {
    setShowActivationModal(true);
  };

  const handleActivationSubmit = async () => {
    if (!name || !email || !licenseKey) {
      setFormError("All fields are required");
      return;
    }
  
    if (!email.includes("@") || !email.includes(".")) {
      setFormError("Please enter a valid email address");
      return;
    }
  
    setFormError("");
    setActivating(true);
    setToastMessage("Verifying Account information...");
    setShowToast(true);
  
    try {
      const response = await fetch("/api/verify-license", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName: name, email, licenseKey }),
      });
  
      if (!response.ok) {
        const data = await response.json().catch(() => ({ message: "Unknown error occurred" }));
        throw new Error(data.message || "Verification failed.");
      }
  
      setToastMessage("License verified successfully! 🎉");
  
      setTimeout(() => {
        setShowToast(false);
        setActivationStep(2);
      }, 2000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error verifying account.";
      setFormError(errorMessage);
    } finally {
      setActivating(false);
    }
  };


  
  const handleDownloadCode = async () => {
    if (!isAgreed) {
      alert("You must agree to the terms before downloading.");
      return;
    }
  
    try {
      const response = await fetch("/api/downloader");
      if (!response.ok) throw new Error("Failed to get download link");
  
      const data = await response.json();
      const fileUrl = data.fileUrl;
  
      // Create and trigger download
      const link = document.createElement("a");
      link.href = fileUrl;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      // Move to the next step after download
      setTimeout(() => {
        setActivationStep(3);
      }, 2000); // Wait 2 seconds before moving to the next step
    } catch (error) {
      console.error("Download error:", error);
      alert("Error downloading file. Please try again.");
    }
  };
  
  const handleFinishActivation = () => {
    setShowActivationModal(false);
    setActivationStep(1);
    setName("");
    setEmail("");
    setLicenseKey("");
    setToastMessage("niti HDK installer downloaded successfully!");
    setShowToast(true);
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleButtonClick = (id: string) => {
    if (id === "niti-mini") {
      setShowModal(true);
    } else {
      activateDevice();
    }
  };

  return (
    <>
      <SEO
        title="niti HDK - A Modern Embedded Systems Framework"
        description="niti HDK is a modern embedded systems framework built with Rust, designed for reliability, security, and performance."
        image="/niti/og-image.png"/>
       <div className={`min-h-screen font-sans ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-4 right-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-md px-4 py-3 flex items-center z-50 max-w-md transition-all duration-300 ease-in-out`}>
          {activating ? (
            <RefreshCw className={`w-5 h-5 ${theme.iconAccent} mr-3 animate-spin`} />
          ) : (
            <Check className="w-5 h-5 text-emerald-500 mr-3" />
          )}
          <p className={darkMode ? 'text-gray-200' : 'text-gray-800'}>{toastMessage}</p>
        </div>
      )}

      {/* Activation Modal */}
      {showActivationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto`}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Download niti HDK</h2>
                <button 
                  onClick={() => setShowActivationModal(false)} 
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {activationStep === 1 && (
                <>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-6`}>
                    Please enter your information to download niti HDK for your device.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-${theme.primary}-500 focus:border-${theme.primary}-500`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-${theme.primary}-500 focus:border-${theme.primary}-500`}
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    {/* License Key */}
                    <div>
                      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                        License Key
                      </label>
                      <input
                        type="text"
                        value={licenseKey}
                        onChange={(e) => setLicenseKey(e.target.value)}
                        className={`w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-${theme.primary}-500 focus:border-${theme.primary}-500`}
                        placeholder="Enter your license key"
                      />
                    </div>

                    {formError && (
                      <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-3 text-sm">
                        {formError}
                      </div>
                    )}
                    
                    <button
                      onClick={handleActivationSubmit}
                      disabled={activating}
                      className={`w-full ${theme.primaryButton} text-white py-2 px-4 rounded-md flex items-center justify-center transition ${
                        activating ? 'opacity-80 cursor-not-allowed' : ''
                      }`}
                    >
                      {activating ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          <Workflow className="w-5 h-5 mr-2" />
                          Verify Account
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
              
              {activationStep === 2 && (
                <>
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <Check className="w-12 h-12 text-emerald-500 p-2 bg-emerald-100 rounded-full" />
                    </div>
                    <p className={`text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-2`}>
                      Account verified successfully!
                    </p>

                    {/* Legal Agreement */}
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-md text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 max-h-60 overflow-y-auto`}>
                      <h3 className="text-md font-bold mb-2">Software License Agreement</h3>
                      <p>
                        This software, <strong>HDK-V1</strong>, is proprietary and closed-source, 
                        developed and owned by <strong>Ecocee</strong>. By downloading and using this software, 
                        you agree to the following terms:
                      </p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>
                          This software is licensed for use solely for <strong>embedded system development</strong>.
                        </li>
                        <li>
                          Redistribution, modification, or reverse engineering of this software is strictly prohibited.
                        </li>
                        <li>
                          <strong>No Warranty:</strong> This software is provided &ldquo;as is&rdquo; without warranties of any kind, 
                          either express or implied, including but not limited to fitness for a particular purpose.
                        </li>
                        <li>
                          Ecocee shall not be liable for any damages arising from the use of this software.
                        </li>
                        <li>
                          The license is valid only for the registered user and may not be transferred.
                        </li>
                      </ul>
                      <p className="mt-2">
                        By checking the box below, you confirm your agreement to these terms.
                      </p>
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        id="agreeCheckbox"
                        checked={isAgreed}
                        onChange={(e) => setIsAgreed(e.target.checked)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="agreeCheckbox" className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        I have read and agree to the terms and conditions.
                      </label>
                    </div>

                    {/* Download Button */}
                    <button
                      onClick={handleDownloadCode}
                      disabled={!isAgreed}
                      className={`w-full py-2 px-4 rounded-md flex items-center justify-center transition ${
                        isAgreed
                          ? `${theme.primaryButton} text-white`
                          : "bg-gray-400 text-gray-700 cursor-not-allowed"
                      }`}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Activation Code
                    </button>
                  </div>
                </>
              )}

              {activationStep === 3 && (
                <>
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <Info className={`w-12 h-12 ${theme.iconAccent} p-2 ${theme.accentLight} rounded-full`} />
                    </div>
                    <h2 className={`text-center text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      Final Setup Instructions
                    </h2>

                    {/* Instruction Steps */}
                    <ol className={`list-decimal list-inside space-y-4 text-sm ${darkMode ? 'text-gray-300 bg-gray-700' : 'text-gray-700 bg-gray-50'} mt-4 p-4 rounded-md shadow`}>
                      <li className="flex items-center space-x-2">
                        <FileArchive className={`w-5 h-5 ${theme.iconAccent}`} />
                        <span>Locate the downloaded file <strong className={`font-mono ${theme.textAccent}`}>hdk-v1.zip</strong>.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Package className="w-5 h-5 text-purple-500" />
                        <span>Extract the file using your preferred archive manager.</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Folder className={`w-5 h-5 ${theme.iconAccent}`} />
                        <span>
                          <strong>Move the extracted folder to:</strong>  
                          <ul className="ml-6 list-disc">
                            <li><span className={`font-mono ${theme.textAccent}`}>C:\niti\hdk</span> (Windows)</li>
                            <li><span className={`font-mono ${theme.textAccent}`}>/niti/hdk</span> (Linux/Mac)</li>
                          </ul>
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Terminal className="w-5 h-5 text-emerald-500" />
                        <span>Open a terminal and navigate to the <strong>hdk</strong> folder:</span>
                      </li>
                      <pre className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2 rounded-md text-sm font-mono mt-2`}>
                        <code>
                          cd /niti/hdk  (Linux/Mac){"\n"}
                          cd C:\niti\hdk  (Windows)
                        </code>
                      </pre>

                      <li className="flex items-center space-x-2">
                        <Wrench className="w-5 h-5 text-amber-500" />
                        <span>Run the following command to generate your project template:</span>
                      </li>
                      <pre className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2 rounded-md text-sm font-mono mt-2`}>
                        <code>
                          cargo generate --git https://github.com/cyberkutti-iedc/niti-hal-template.git
                        </code>
                      </pre>
                    </ol>

                    {/* Happy Hacking Message */}
                    <div className="mt-6 text-center">
                      <p className={`text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>🚀 Enjoy & Happy Hacking with Niti HDK! 🎉</p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>If you need help, check our documentation or community forums.</p>
                    </div>

                    {/* Completion Button */}
                    <button
                      onClick={handleFinishActivation}
                      className="mt-4 w-full bg-emerald-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition hover:bg-emerald-700"
                    >
                      <Check className="w-5 h-5 mr-2" />
                      Installation Completed
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sticky top-0 z-10`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className={`w-6 h-6 ${theme.textAccent}`} />
            <span className={`font-medium text-xl ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <span className={theme.textAccent}>niti</span>HDK
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:${theme.textAccent} text-sm font-medium`}>About</a>
            <a href="#features" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:${theme.textAccent} text-sm font-medium`}>Features</a>
            <a href="#devices" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:${theme.textAccent} text-sm font-medium`}>Devices</a>
            <a href="#testimonials" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:${theme.textAccent} text-sm font-medium`}>Testimonials</a>
            <a href="#get-started" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:${theme.textAccent} text-sm font-medium`}>Get Started</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} hidden md:block`}>
              Session: <span className={`font-mono ${theme.textAccent}`}>{sessionId}</span>
            </div>
            <button
  onClick={() => window.location.href = '/niti/purchase'} 
  className={`${theme.primaryButton} text-white py-2 px-4 rounded-md text-sm transition`}
>
  Purchase License Key
</button>

          </div>
        </div>
        
        {/* Mobile Menu - Only visible on small screens */}
        <div className="md:hidden relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)} 
            className={`w-full flex items-center justify-between px-4 py-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <span>Menu</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {showDropdown && (
            <div className={`absolute w-full z-20 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
              <a href="#about" className={`block py-2 px-4 hover:${theme.lightBg}`}>About</a>
              <a href="#features" className={`block py-2 px-4 hover:${theme.lightBg}`}>Features</a>
              <a href="#devices" className={`block py-2 px-4 hover:${theme.lightBg}`}>Devices</a>
              <a href="#testimonials" className={`block py-2 px-4 hover:${theme.lightBg}`}>Testimonials</a>
              <a href="#get-started" className={`block py-2 px-4 hover:${theme.lightBg}`}>Get Started</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-b ${theme.gradient} py-20`}>
        
  <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">

  <h1 className={`text-4xl md:text-5xl font-light ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Powerful <span className={theme.textAccent}>Embedded Systems</span> Framework
            </h1>

    {/* Subtitle */}
    <p className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto mb-10`}>
      niti HDK is a Rust-based framework designed for creating reliable, secure, and efficient embedded systems.
    </p>

    {/* Call to Actions */}
    <motion.div
      className="flex flex-col md:flex-row justify-center gap-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <button
        onClick={activateDevice}
        className={`px-6 py-3 text-lg font-medium rounded-lg shadow-md transition-transform transform hover:scale-105 ${
          theme.primaryButton
        } text-white`}
      >
        Activate Your HDK
      </button>
      <a
        href="https://cyberkutti-iedc.github.io/niti-wiki/niti_hal/"
        className={`px-6 py-3 text-lg font-medium rounded-lg border shadow-sm transition-transform transform hover:scale-105 ${
          theme.secondaryButton
        }`}
      >
        Learn More
      </a>
    </motion.div>
  </div>
  

  {/* Animated Badge Section */}
  <div className="mt-16 text-center">
    <motion.div
      className={`inline-block px-6 py-5 rounded-lg shadow-xl ${
        darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme.accentLight}`}>
          <Shield className={`w-6 h-6 ${theme.iconAccent}`} />
        </div>
        <div className="text-left">
          <p className={`font-medium text-lg ${darkMode ? "text-gray-200" : "text-gray-800"}`}>Security Verified</p>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            All packages are cryptographically signed.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-light ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>What is niti HDK?</h2>
            <div className={`w-16 h-1 ${theme.dot} mx-auto`}></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-2xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                A Modern Embedded Systems Framework
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                niti HDK is a cutting-edge embedded systems framework built with Rust, 
                designed to provide developers with a reliable, secure, and efficient 
                platform for creating next-generation embedded applications.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
  Developed by Ecocee, niti HDK leverages the power of Rust&#39;s memory safety 
  and concurrency features to create a framework that is both powerful and 
  easy to use for embedded development.
</p>

<p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
  Whether you&#39;re building IoT devices, industrial control systems, or 
  consumer electronics, niti HDK provides the tools and libraries you need 
  to bring your ideas to life.
</p>

            </div>
            <div className={`${darkMode ? 'bg-gray-700' : theme.lightBg} p-8 rounded-lg`}>
              <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Why Rust for Embedded Systems?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className={`w-5 h-5 ${theme.iconAccent} mr-3 mt-1 flex-shrink-0`} />
                  <div>
  <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
    Memory Safety Without Garbage Collection
  </p>
  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
    Rust&#39;s ownership model ensures memory safety without the overhead of garbage collection, 
    perfect for resource-constrained devices.
  </p>
</div>

                </li>
                <li className="flex items-start">
                  <Zap className={`w-5 h-5 ${theme.iconAccent} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Zero-Cost Abstractions</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rust provides high-level abstractions without runtime overhead, allowing for efficient and readable code.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Cpu className={`w-5 h-5 ${theme.iconAccent} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Bare-Metal Support</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
  Rust&#39;s &#34;no_std&#34; environment allows for direct hardware interaction, making it ideal for embedded systems.
</p>

                  </div>
                </li>
                <li className="flex items-start">
                  <Code className={`w-5 h-5 ${theme.iconAccent} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Rich Type System</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
  Rust&#39;s powerful type system helps catch errors at compile time, reducing debugging time and improving reliability.
</p>

                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*Tools */}

      <section className={`py-20 px-6 relative ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-500 opacity-10 blur-3xl"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Animated Title */}
        <motion.h2
          className={`text-5xl md:text-6xl font-extrabold tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Essential <span className="text-emerald-400">Tools & Resources</span>
        </motion.h2>

        {/* Subtitle */}
        <p className={`mt-4 text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Set up your environment with these key tools.
        </p>

        {/* Tool List */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className={`relative p-6 rounded-xl shadow-lg overflow-hidden ${
                darkMode ? "bg-gray-800/60 backdrop-blur-lg" : "bg-white/80 backdrop-blur-lg"
              } border border-gray-500/20 transition hover:shadow-xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-600 opacity-10 blur-2xl"></div>

              {/* Tool Name */}
              <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                {tool.name}
              </h3>

              {/* Description */}
              <p className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {tool.description}
              </p>

              {/* Learn More Link */}
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center text-emerald-500 hover:text-emerald-400 transition group"
              >
                Learn More{" "}
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Features Section */}
      <section id="features" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-light ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Key Features</h2>
            <div className={`w-16 h-1 ${theme.dot} mx-auto`}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4`}>
                <Shield className={`w-6 h-6 ${theme.iconAccent}`} />
              </div>
              <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Security-First Design</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Built with security in mind, niti HDK provides a robust foundation for creating 
                secure embedded applications, with features like secure boot and encrypted storage.
              </p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4`}>
                <Zap className={`w-6 h-6 ${theme.iconAccent}`} />
              </div>
              <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Real-Time Performance</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                niti HDK delivers predictable, low-latency performance for time-critical applications,
                with efficient resource management and minimal overhead.
              </p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4`}>
                <Cpu className={`w-6 h-6 ${theme.iconAccent}`} />
              </div>
              <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Hardware Abstraction</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Our comprehensive hardware abstraction layer allows developers to write 
                portable code that works across multiple hardware platforms.
              </p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4`}>
                <Code className={`w-6 h-6 ${theme.iconAccent}`} />
              </div>
              <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Modern Development Tools</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                niti HDK comes with a suite of development tools including a simulator, 
                debugger, and profiler to streamline the development process.
              </p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4`}>
                <RefreshCw className={`w-6 h-6 ${theme.iconAccent}`} />
              </div>
              <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>OTA Updates</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Deploy updates to your devices securely and reliably with our 
                over-the-air update system, including rollback protection.
              </p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4`}>
                <Terminal className={`w-6 h-6 ${theme.iconAccent}`} />
              </div>
              <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Comprehensive Libraries</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Access a rich ecosystem of libraries for connectivity, sensor integration, 
                data processing, and more, all optimized for embedded systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="devices" className={`py-16 ${darkMode ? theme.darkBg : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-light ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>
            Supported Devices
          </h2>
          <div className={`w-16 h-1 ${theme.dot} mx-auto`}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(devices).map(([id, device]) => {
            const isSelected = selectedDevice === id;

            return (
              <motion.div
                key={id}
                className={`relative rounded-lg overflow-hidden shadow-md transition ${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.4)",
                }}
              >
                {/* Border animation for selection */}
                {isSelected && (
                  <motion.div
                    className="absolute inset-0 rounded-lg border-4 border-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, borderColor: "rgba(34, 197, 94, 1)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                )}

                {/* Image Section */}
                <div className={`h-48 flex items-center justify-center ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                  <div className={`w-32 h-32 rounded-md flex items-center justify-center overflow-hidden`}>
                    <Image
                      src={device.image}
                      alt={device.name}
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Device Info */}
                <div className="p-6 relative z-10">
                  
                  <h3 className={`text-xl font-medium ${darkMode ? "text-white" : "text-gray-900"} mb-2`}>
                    {device.name}
                  </h3>
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>{device.description}</p>

                  <h4 className={`text-sm font-medium ${darkMode ? "text-gray-200" : "text-gray-900"} mb-2`}>
                    Specifications:
                  </h4>
                  <ul className="space-y-1 mb-4">
                    {device.specs.map((spec, index) => (
                      <li key={index} className={`flex items-start ${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}>
                        <div className="flex-shrink-0 w-4 h-4 mt-1">
                          <div className={`w-2 h-2 ${theme.dot} rounded-full`}></div>
                        </div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  

                  {/* Conditional Rendering */}
                  {id === "niti-pro" ? (
                    <a
                      href="https://github.com/cyberkutti-iedc/Prawns-Installer/releases/download/ESP/niti-esp-start.exe"
                      className={`w-full ${theme.primaryButton} text-white py-2 px-4 rounded-md flex items-center justify-center transition`}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download the Installer
                    </a>
                  ) : (
                    <button
                      onClick={() => handleButtonClick(id)}
                      className={`w-full ${theme.primaryButton} text-white py-2 px-4 rounded-md flex items-center justify-center transition`}
                    >
                      <Workflow className="w-5 h-5 mr-2" />
                      {id === "niti-mini" ? "Coming Soon" : "Activate Device"}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
    </section>

{/* Modal for Niti Mini */}
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm text-center relative">
      <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
      <h2 className="text-xl font-semibold dark:text-white">Coming Soon!</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        The Niti Mini board is coming soon. Stay tuned for updates.
      </p>
      <button
        onClick={() => setShowModal(false)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        OK
      </button>
    </div>
  </div>
)}

    


      {/* Testimonials Section */}
      <section id="testimonials" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-light ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>What Our Users Say</h2>
            <div className={`w-16 h-1 ${theme.dot} mx-auto`}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
  <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
    <div className="flex items-center mb-4">
      <Image
        src={testimonial.avatar}
        alt={`${testimonial.name} avatar`}
        width={40}  // Specify width
        height={40} // Specify height
        className="rounded-full mr-3"
      />
      <div>
        <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h3>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
  &#34;{testimonial.text}&#34;
</p>

  </div>
))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className={`py-16 ${darkMode ? 'bg-gray-800' : theme.lightBg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-light ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>How to Get Started</h2>
            <div className={`w-16 h-1 ${theme.dot} mx-auto`}></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <span className={`text-xl font-bold ${theme.textAccent}`}>1</span>
              </div>
              <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 text-center`}>Purchase a Device</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm text-center`}>
                Choose from our range of development boards that best suits your project needs.
              </p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <span className={`text-xl font-bold ${theme.textAccent}`}>2</span>
              </div>
              <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 text-center`}>Register for License</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm text-center`}>
                Create an account and register your device to receive your license key.
              </p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <span className={`text-xl font-bold ${theme.textAccent}`}>3</span>
              </div>
              <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 text-center`}>Activate Framework</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm text-center`}>
                Use our activation portal to activate niti HDK on your device.
              </p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <span className={`text-xl font-bold ${theme.textAccent}`}>4</span>
              </div>
              <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 text-center`}>Start Developing</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm text-center`}>
                Access our documentation and examples to start building your application.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button
              onClick={activateDevice}
              className={`${theme.primaryButton} text-white py-3 px-6 rounded-md text-lg transition`}
            >
              Download The HDK Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={darkMode ? 'bg-gray-900' : 'bg-gray-800'}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className={`w-6 h-6 ${theme.iconLight}`} />
                <span className="font-medium text-xl text-white">
                  <span className={theme.iconLight}>niti</span>HDK
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                A modern embedded systems framework built with Rust, designed for reliability, 
                security, and performance.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>Documentation</a></li>
                <li><a href="#" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>API Reference</a></li>
                <li><a href="#" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>Tutorials</a></li>
                <li><a href="#" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>Examples</a></li>
                <li><a href="#" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>GitHub Repository</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {/* <li><a href="/" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>About Ecocee</a></li>
                <li><a href="#" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>Blog</a></li>
                <li><a href="/careers" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>Careers</a></li>
                <li><a href="#" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>Press</a></li>
                <li><a href="#" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>Contact Us</a></li> */}



<li>
  <Link href="/" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>
    About Ecocee
  </Link>
</li>
<li>
  <a href="#" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>
    Blog
  </a>
</li>
<li>
  <Link href="/careers" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>
    Careers
  </Link>
</li>
<li>
  <a href="#" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>
    Press
  </a>
</li>
<li>
  <a href="#" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>
    Contact Us
  </a>
</li>

              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/niti/terms-of-service" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>Terms of Service</a></li>
                <li><a href="/niti/privacy-policy" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>Privacy Policy</a></li>
                <li><a href="/niti/license-agreement" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>License Agreement</a></li>
                <li><a href="/niti/cookie-policy" className={`text-gray-400 hover:${theme.iconLight} text-sm`}>Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Ecocee. All rights reserved. niti HDK is a closed-source proprietary system.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`text-gray-400 hover:${theme.iconLight}`}>
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className={`text-gray-400 hover:${theme.iconLight}`}>
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className={`text-gray-400 hover:${theme.iconLight}`}>
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
    </>
   
  );
}
