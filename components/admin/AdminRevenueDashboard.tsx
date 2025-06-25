// import React, { useState, useEffect } from 'react';
// import { Plus, Edit2, Trash2, Download, Filter, Search, TrendingUp, TrendingDown, DollarSign, AlertTriangle } from 'lucide-react';

// interface DebtRecord {
//   id: string;
//   slNo: number;
//   debt: number;
//   reason: string;
//   purpose: string;
//   credit: number;
//   moneySource: string;
//   paymentMethod: string;
//   date: string;
//   status: 'pending' | 'paid' | 'overdue';
//   dueDate: string;
//   notes?: string;
// }

// const AdminRevenueDashboard = () => {
//   const [records, setRecords] = useState<DebtRecord[]>([
//     {
//       id: '1',
//       slNo: 1,
//       debt: 50000,
//       reason: 'Equipment Purchase',
//       purpose: 'New server infrastructure for scaling operations',
//       credit: 0,
//       moneySource: 'Bank Loan - State Bank',
//       paymentMethod: 'Bank Transfer',
//       date: '2024-01-15',
//       status: 'pending',
//       dueDate: '2024-07-15',
//       notes: 'Monthly installments of $5,000'
//     },
//     {
//       id: '2',
//       slNo: 2,
//       debt: 0,
//       reason: 'Client Payment',
//       purpose: 'Q4 project deliverables payment',
//       credit: 75000,
//       moneySource: 'Client - TechCorp Ltd',
//       paymentMethod: 'Wire Transfer',
//       date: '2024-02-01',
//       status: 'paid',
//       dueDate: '2024-02-01',
//       notes: 'Advance payment received'
//     },
//     {
//       id: '3',
//       slNo: 3,
//       debt: 25000,
//       reason: 'Office Renovation',
//       purpose: 'Workspace modernization and expansion',
//       credit: 0,
//       moneySource: 'Business Credit Line',
//       paymentMethod: 'Credit Card',
//       date: '2024-02-10',
//       status: 'overdue',
//       dueDate: '2024-06-10',
//       notes: 'Payment overdue by 15 days'
//     }
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [editingRecord, setEditingRecord] = useState<DebtRecord | null>(null);
//   const [formData, setFormData] = useState<Partial<DebtRecord>>({});

//   const filteredRecords = records.filter(record => {
//     const matchesSearch = Object.values(record).some(value => 
//       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     const matchesStatus = statusFilter === 'all' || record.status === statusFilter;
//     return matchesSearch && matchesStatus;
//   });

//   const totalDebt = records.reduce((sum, record) => sum + record.debt, 0);
//   const totalCredit = records.reduce((sum, record) => sum + record.credit, 0);
//   const netBalance = totalCredit - totalDebt;
//   const pendingPayments = records.filter(r => r.status === 'pending').length;
//   const overduePayments = records.filter(r => r.status === 'overdue').length;

//   const handleAddRecord = () => {
//     const newRecord: DebtRecord = {
//       id: Date.now().toString(),
//       slNo: records.length + 1,
//       debt: Number(formData.debt) || 0,
//       reason: formData.reason || '',
//       purpose: formData.purpose || '',
//       credit: Number(formData.credit) || 0,
//       moneySource: formData.moneySource || '',
//       paymentMethod: formData.paymentMethod || '',
//       date: formData.date || new Date().toISOString().split('T')[0],
//       status: formData.status || 'pending',
//       dueDate: formData.dueDate || '',
//       notes: formData.notes || ''
//     };
//     setRecords([...records, newRecord]);
//     setFormData({});
//     setShowAddForm(false);
//   };

//   const handleEditRecord = (record: DebtRecord) => {
//     setEditingRecord(record);
//     setFormData(record);
//     setShowAddForm(true);
//   };

//   const handleUpdateRecord = () => {
//     if (editingRecord) {
//       setRecords(records.map(record => 
//         record.id === editingRecord.id 
//           ? { ...record, ...formData }
//           : record
//       ));
//       setEditingRecord(null);
//       setFormData({});
//       setShowAddForm(false);
//     }
//   };

//   const handleDeleteRecord = (id: string) => {
//     setRecords(records.filter(record => record.id !== id));
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'paid': return 'bg-green-100 text-green-800';
//       case 'pending': return 'bg-yellow-100 text-yellow-800';
//       case 'overdue': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const formatCurrency = (amount: number) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(amount);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Revenue & Debt Management</h1>
//           <p className="text-gray-600">Comprehensive financial tracking and management dashboard</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Debt</p>
//                 <p className="text-2xl font-bold text-red-600">{formatCurrency(totalDebt)}</p>
//               </div>
//               <TrendingDown className="h-8 w-8 text-red-600" />
//             </div>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Credit</p>
//                 <p className="text-2xl font-bold text-green-600">{formatCurrency(totalCredit)}</p>
//               </div>
//               <TrendingUp className="h-8 w-8 text-green-600" />
//             </div>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Net Balance</p>
//                 <p className={`text-2xl font-bold ${netBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
//                   {formatCurrency(netBalance)}
//                 </p>
//               </div>
//               <DollarSign className="h-8 w-8 text-blue-600" />
//             </div>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Overdue</p>
//                 <p className="text-2xl font-bold text-orange-600">{overduePayments}</p>
//               </div>
//               <AlertTriangle className="h-8 w-8 text-orange-600" />
//             </div>
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
//           <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
//             <div className="flex flex-col md:flex-row gap-4 flex-1">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                 <input
//                   type="text"
//                   placeholder="Search records..."
//                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
              
//               <select
//                 className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//               >
//                 <option value="all">All Status</option>
//                 <option value="pending">Pending</option>
//                 <option value="paid">Paid</option>
//                 <option value="overdue">Overdue</option>
//               </select>
//             </div>
            
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setShowAddForm(true)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//               >
//                 <Plus className="h-4 w-4" />
//                 Add Record
//               </button>
//               <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
//                 <Download className="h-4 w-4" />
//                 Export
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Data Table */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SL/No</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Debt</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Money Source</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredRecords.map((record) => (
//                   <tr key={record.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                       {record.slNo}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       {new Date(record.date).toLocaleDateString()}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">
//                       {record.debt ? formatCurrency(record.debt) : '-'}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
//                       {record.credit ? formatCurrency(record.credit) : '-'}
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
//                       {record.reason}
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
//                       {record.purpose}
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
//                       {record.moneySource}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       {record.paymentMethod}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(record.status)}`}>
//                         {record.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       {new Date(record.dueDate).toLocaleDateString()}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => handleEditRecord(record)}
//                           className="text-blue-600 hover:text-blue-900"
//                         >
//                           <Edit2 className="h-4 w-4" />
//                         </button>
//                         <button
//                           onClick={() => handleDeleteRecord(record.id)}
//                           className="text-red-600 hover:text-red-900"
//                         >
//                           <Trash2 className="h-4 w-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Add/Edit Form Modal */}
//         {showAddForm && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                   {editingRecord ? 'Edit Record' : 'Add New Record'}
//                 </h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Debt Amount</label>
//                     <input
//                       type="number"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       value={formData.debt || ''}
//                       onChange={(e) => setFormData({...formData, debt: Number(e.target.value)})}
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Credit Amount</label>
//                     <input
//                       type="number"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       value={formData.credit || ''}
//                       onChange={(e) => setFormData({...formData, credit: Number(e.target.value)})}
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
//                     <input
//                       type="text"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       value={formData.reason || ''}
//                       onChange={(e) => setFormData({...formData, reason: e.target.value})}
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Money Source</label>
//                     <input
//                       type="text"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       value={formData.moneySource || ''}
//                       onChange={(e) => setFormData({...formData, moneySource: e.target.value})}
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
//                     <select
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       value={formData.paymentMethod || ''}
//                       onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
//                     >
//                       <option value="">Select method</option>
//                       <option value="Bank Transfer">Bank Transfer</option>
//                       <option value="Credit Card">Credit Card</option>
//                       <option value="Cash">Cash</option>
//                       <option value="Check">Check</option>
//                       <option value="Wire Transfer">Wire Transfer</option>
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
//                     <select
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       value={formData.status || 'pending'}
//                       onChange={(e) => setFormData({...formData, status: e.target.value as any})}
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="paid">Paid</option>
//                       <option value="overdue">Overdue</option>
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
//                     <input
//                       type="date"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       value={formData.date || ''}
//                       onChange={(e) => setFormData({...formData, date: e.target.value})}
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
//                     <input
//                       type="date"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       value={formData.dueDate || ''}
//                       onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
//                     />
//                   </div>
                  
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
//                     <textarea
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       rows={3}
//                       value={formData.purpose || ''}
//                       onChange={(e) => setFormData({...formData, purpose: e.target.value})}
//                     />
//                   </div>
                  
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
//                     <textarea
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       rows={2}
//                       value={formData.notes || ''}
//                       onChange={(e) => setFormData({...formData, notes: e.target.value})}
//                     />
//                   </div>
//                 </div>
                
//                 <div className="flex gap-4 justify-end mt-6">
//                   <button
//                     onClick={() => {
//                       setShowAddForm(false);
//                       setEditingRecord(null);
//                       setFormData({});
//                     }}
//                     className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={editingRecord ? handleUpdateRecord : handleAddRecord}
//                     className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                   >
//                     {editingRecord ? 'Update' : 'Add'} Record
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminRevenueDashboard;



import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Download, Filter, Search, Save, X, Copy, Pause } from 'lucide-react';

interface ExcelRecord {
  id: string;
  slNo: number;
  date: string;
  purpose: string;
  customerDetails: string;
  credit: number;
  debit: number;
  remarks: string;
}

const AdminRevenueDashboard = () => {
  const [records, setRecords] = useState<ExcelRecord[]>([
    {
      id: '1',
      slNo: 1,
      date: '12 Jun 25',
      purpose: 'Internship AI',
      customerDetails: 'N Amjith Kumar',
      credit: 1500,
      debit: 0,
      remarks: ''
    },
    {
      id: '2',
      slNo: 2,
      date: '12 Jun 25',
      purpose: 'Internship ES',
      customerDetails: 'Amrithraj',
      credit: 2000,
      debit: 0,
      remarks: ''
    },
    {
      id: '3',
      slNo: 3,
      date: '12 Jun 25',
      purpose: 'Internship ES',
      customerDetails: 'Jamis Aldrin',
      credit: 2000,
      debit: 0,
      remarks: ''
    },
    {
      id: '4',
      slNo: 4,
      date: '12 Jun 25',
      purpose: 'Expenses',
      customerDetails: 'Sreeraj V Rajesh',
      credit: 0,
      debit: 1000,
      remarks: ''
    },
    {
      id: '5',
      slNo: 5,
      date: '13 Jun 25',
      purpose: 'Internship ES',
      customerDetails: 'Shreyas K P',
      credit: 2000,
      debit: 0,
      remarks: ''
    },
    {
      id: '6',
      slNo: 6,
      date: '17 Jun 25',
      purpose: 'Internship AI',
      customerDetails: 'Sabarinath P S',
      credit: 1500,
      debit: 0,
      remarks: ''
    },
    {
      id: '7',
      slNo: 7,
      date: '18 Jun 25',
      purpose: 'Internship ES',
      customerDetails: 'Amal Krishnan O U',
      credit: 2000,
      debit: 0,
      remarks: ''
    }
  ]);

  const [editingCell, setEditingCell] = useState<{rowId: string, field: string} | null>(null);
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [showSummary, setShowSummary] = useState(true);

  // Add empty rows to make it look like Excel
  const emptyRowsCount = 50;
  const emptyRows = Array.from({ length: emptyRowsCount }, (_, index) => ({
    id: `empty-${index}`,
    slNo: records.length + index + 1,
    date: '',
    purpose: '',
    customerDetails: '',
    credit: 0,
    debit: 0,
    remarks: ''
  }));

  const allRows = [...records, ...emptyRows];

  const totalCredit = records.reduce((sum, record) => sum + (record.credit || 0), 0);
  const totalDebit = records.reduce((sum, record) => sum + (record.debit || 0), 0);
  const balance = totalCredit - totalDebit;

  const handleCellClick = (rowId: string, field: string) => {
    setEditingCell({ rowId, field });
  };

  const handleCellChange = (rowId: string, field: string, value: any) => {
    if (rowId.startsWith('empty-')) {
      // Convert empty row to actual record
      const newRecord: ExcelRecord = {
        id: Date.now().toString(),
        slNo: parseInt(rowId.split('-')[1]) + records.length + 1,
        date: field === 'date' ? value : '',
        purpose: field === 'purpose' ? value : '',
        customerDetails: field === 'customerDetails' ? value : '',
        credit: field === 'credit' ? Number(value) || 0 : 0,
        debit: field === 'debit' ? Number(value) || 0 : 0,
        remarks: field === 'remarks' ? value : ''
      };
      setRecords([...records, newRecord]);
    } else {
      setRecords(records.map(record => 
        record.id === rowId 
          ? { ...record, [field]: field === 'credit' || field === 'debit' ? Number(value) || 0 : value }
          : record
      ));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, rowId: string, field: string) => {
    if (e.key === 'Enter') {
      setEditingCell(null);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Move to next cell
      const fields = ['date', 'purpose', 'customerDetails', 'credit', 'debit', 'remarks'];
      const currentIndex = fields.indexOf(field);
      const nextField = fields[currentIndex + 1];
      if (nextField) {
        setEditingCell({ rowId, field: nextField });
      } else {
        // Move to next row, first field
        const currentRowIndex = allRows.findIndex(row => row.id === rowId);
        const nextRow = allRows[currentRowIndex + 1];
        if (nextRow) {
          setEditingCell({ rowId: nextRow.id, field: 'date' });
        }
      }
    }
  };

  const addNewRow = () => {
    const newRecord: ExcelRecord = {
      id: Date.now().toString(),
      slNo: records.length + 1,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' }),
      purpose: '',
      customerDetails: '',
      credit: 0,
      debit: 0,
      remarks: ''
    };
    setRecords([...records, newRecord]);
  };

  const deleteRow = (id: string) => {
    setRecords(records.filter(record => record.id !== id));
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Sl No', 'Date', 'Purpose', 'Customer Details', 'Credit', 'Debit', 'Remarks'],
      ...records.map(record => [
        record.slNo,
        record.date,
        record.purpose,
        record.customerDetails,
        record.credit || '',
        record.debit || '',
        record.remarks
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'financial_records.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const CellRenderer = ({ row, field }: { row: ExcelRecord, field: keyof ExcelRecord }) => {
    const isEditing = editingCell?.rowId === row.id && editingCell?.field === field;
    const value = row[field];
    const isEmpty = row.id.startsWith('empty-');

    if (isEditing) {
      return (
        <input
          type={field === 'credit' || field === 'debit' ? 'number' : 'text'}
          value={field === 'credit' || field === 'debit' ? (value || '') : value}
          onChange={(e) => handleCellChange(row.id, field, e.target.value)}
          onKeyDown={(e) => handleKeyPress(e, row.id, field)}
          onBlur={() => setEditingCell(null)}
          className="w-full h-full px-1 py-1 border-2 border-blue-500 outline-none bg-white"
          autoFocus
        />
      );
    }

    const displayValue = () => {
      if (field === 'credit' || field === 'debit') {
        return value && value !== 0 ? value.toLocaleString() : '';
      }
      return value || '';
    };

    return (
      <div
        className={`w-full h-full px-2 py-1 cursor-cell hover:bg-blue-50 ${
          isEmpty && !value ? 'text-gray-300' : ''
        } ${field === 'credit' ? 'text-green-600 font-medium' : ''} ${
          field === 'debit' ? 'text-red-600 font-medium' : ''
        }`}
        onClick={() => handleCellClick(row.id, field)}
      >
        {displayValue()}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Excel-like Toolbar */}
      <div className="bg-white border-b border-gray-300 p-2">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-semibold text-gray-800">Financial Records - Excel Interface</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSummary(!showSummary)}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              {showSummary ? 'Hide' : 'Show'} Summary
            </button>
            <button
              onClick={exportToCSV}
              className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 flex items-center gap-1"
            >
              <Download className="h-3 w-3" />
              Export
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={addNewRow}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 flex items-center gap-1"
          >
            <Plus className="h-3 w-3" />
            Add Row
          </button>
          
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-7 pr-3 py-1 border border-gray-300 rounded text-sm w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Summary Panel */}
      {showSummary && (
        <div className="bg-white border-b border-gray-300 p-4">
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-sm text-gray-600">Total Records</div>
              <div className="text-xl font-bold text-blue-600">{records.length}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Total Credit</div>
              <div className="text-xl font-bold text-green-600">₹{totalCredit.toLocaleString()}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Total Debit</div>
              <div className="text-xl font-bold text-red-600">₹{totalDebit.toLocaleString()}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Balance</div>
              <div className={`text-xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ₹{balance.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Excel-like Grid */}
      <div className="overflow-auto">
        <div className="min-w-full bg-white">
          {/* Header Row */}
          <div className="grid grid-cols-7 bg-gray-200 border-b border-gray-400 sticky top-0 z-10">
            <div className="px-2 py-2 font-semibold text-sm text-gray-700 border-r border-gray-400 text-center">
              Sl No
            </div>
            <div className="px-2 py-2 font-semibold text-sm text-gray-700 border-r border-gray-400 text-center">
              Date
            </div>
            <div className="px-2 py-2 font-semibold text-sm text-gray-700 border-r border-gray-400 text-center">
              Purpose
            </div>
            <div className="px-2 py-2 font-semibold text-sm text-gray-700 border-r border-gray-400 text-center">
              Customer Details
            </div>
            <div className="px-2 py-2 font-semibold text-sm text-gray-700 border-r border-gray-400 text-center">
              Credit
            </div>
            <div className="px-2 py-2 font-semibold text-sm text-gray-700 border-r border-gray-400 text-center">
              Debit
            </div>
            <div className="px-2 py-2 font-semibold text-sm text-gray-700 text-center">
              Remarks
            </div>
          </div>

          {/* Data Rows */}
          {allRows.map((row, index) => (
            <div
              key={row.id}
              className={`grid grid-cols-7 border-b border-gray-200 hover:bg-blue-50 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="border-r border-gray-200 text-center py-1 px-2 text-sm font-medium text-gray-600">
                {row.slNo}
              </div>
              <div className="border-r border-gray-200 min-h-[32px]">
                <CellRenderer row={row} field="date" />
              </div>
              <div className="border-r border-gray-200 min-h-[32px]">
                <CellRenderer row={row} field="purpose" />
              </div>
              <div className="border-r border-gray-200 min-h-[32px]">
                <CellRenderer row={row} field="customerDetails" />
              </div>
              <div className="border-r border-gray-200 min-h-[32px] text-right">
                <CellRenderer row={row} field="credit" />
              </div>
              <div className="border-r border-gray-200 min-h-[32px] text-right">
                <CellRenderer row={row} field="debit" />
              </div>
              <div className="min-h-[32px]">
                <CellRenderer row={row} field="remarks" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-200 border-t border-gray-300 px-4 py-2 text-xs text-gray-600 flex justify-between items-center">
        <div>Ready</div>
        <div className="flex gap-4">
          <span>Records: {records.length}</span>
          <span>Sum Credit: ₹{totalCredit.toLocaleString()}</span>
          <span>Sum Debit: ₹{totalDebit.toLocaleString()}</span>
          <span>Balance: ₹{balance.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminRevenueDashboard;