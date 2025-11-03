// components/Modal.js
import React, { useState, useEffect } from 'react';

const Modal = ({ type, editingItem, onClose, onSave, selectedHostel }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    } else {
      // Initialize empty form based on type
      setFormData({
        type: type,
        status: 'active'
      });
    }
  }, [type, editingItem]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const getModalTitle = () => {
    const action = editingItem ? 'Edit' : 'Add New';
    switch(type) {
      case 'hostel': return `${action} Hostel`;
      case 'room': return `${action} Room Type`;
      case 'booking': return `${action} Booking`;
      case 'student': return `${action} Student`;
      default: return `${action} Item`;
    }
  };

  const renderHostelForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hostel Name</label>
          <input
            type="text"
            value={formData.hostelName || ''}
            onChange={(e) => handleInputChange('hostelName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hostel Type</label>
          <select
            value={formData.hostelType || ''}
            onChange={(e) => handleInputChange('hostelType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Type</option>
            <option value="Boys Only">Boys Only</option>
            <option value="Girls Only">Girls Only</option>
            <option value="Co-Educational">Co-Educational</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows="3"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
        <textarea
          value={formData.address || ''}
          onChange={(e) => handleInputChange('address', e.target.value)}
          rows="2"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
    </div>
  );

  const renderRoomForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
          <input
            type="text"
            value={formData.roomType || ''}
            onChange={(e) => handleInputChange('roomType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
          <input
            type="number"
            value={formData.roomCapacity || ''}
            onChange={(e) => handleInputChange('roomCapacity', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Price ($)</label>
          <input
            type="number"
            value={formData.monthlyPrice || ''}
            onChange={(e) => handleInputChange('monthlyPrice', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quarterly Price ($)</label>
          <input
            type="number"
            value={formData.quarterlyPrice || ''}
            onChange={(e) => handleInputChange('quarterlyPrice', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Annual Price ($)</label>
          <input
            type="number"
            value={formData.annualPrice || ''}
            onChange={(e) => handleInputChange('annualPrice', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderBookingForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Visitor Name</label>
          <input
            type="text"
            value={formData.visitorName || ''}
            onChange={(e) => handleInputChange('visitorName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={formData.visitorEmail || ''}
            onChange={(e) => handleInputChange('visitorEmail', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            value={formData.visitorPhone || ''}
            onChange={(e) => handleInputChange('visitorPhone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
          <select
            value={formData.roomType || ''}
            onChange={(e) => handleInputChange('roomType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Room Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Shared">Shared</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
          <input
            type="date"
            value={formData.checkInDate || ''}
            onChange={(e) => handleInputChange('checkInDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Duration (months)</label>
          <input
            type="number"
            value={formData.duration || ''}
            onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderFormContent = () => {
    switch(type) {
      case 'hostel': return renderHostelForm();
      case 'room': return renderRoomForm();
      case 'booking': return renderBookingForm();
      default: return <div>Form for {type} not implemented</div>;
    }
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-content bg-white rounded-xl w-full max-w-2xl mx-4">
        <div className="modal-header flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-blue-900">{getModalTitle()}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="modal-body p-6">
            {renderFormContent()}
          </div>
          
          <div className="modal-footer flex justify-end gap-3 p-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {editingItem ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;