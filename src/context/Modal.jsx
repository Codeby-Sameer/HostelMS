// src/components/modals/Modal.jsx
import React from 'react';
import { useModal } from '../../context/ModalContext';
import HostelForm from '../forms/HostelForm';
import RoomForm from '../forms/RoomForm';
import BedForm from '../forms/BedForm';
import BookingForm from '../forms/BookingForm';
import StudentForm from '../forms/StudentForm';
import PaymentForm from '../forms/PaymentForm';
import ComplaintForm from '../forms/ComplaintForm';
import MenuForm from '../forms/MenuForm';
import AnnouncementForm from '../forms/AnnouncementForm';
import AttendanceForm from '../forms/AttendanceForm';
import MaintenanceForm from '../forms/MaintenanceForm';
import SupervisorForm from '../forms/SupervisorForm';

const Modal = () => {
  const { modalOpen, modalType, editingItem, closeModal } = useModal();

  if (!modalOpen) return null;

  const titles = {
    hostel: editingItem ? 'Edit Hostel' : 'Add New Hostel',
    room: editingItem ? 'Edit Room Type' : 'Add Room Type',
    bed: editingItem ? 'Edit Bed' : 'Add Individual Bed',
    booking: editingItem ? 'Edit Booking' : 'Create Manual Booking',
    student: editingItem ? 'Edit Student' : 'Add New Student',
    payment: editingItem ? 'Edit Payment' : 'Record Payment',
    complaint: editingItem ? 'Edit Complaint' : 'Log New Complaint',
    menu: editingItem ? 'Edit Menu Item' : 'Add Menu Item',
    announcement: editingItem ? 'Edit Announcement' : 'Create Announcement',
    attendance: editingItem ? 'Edit Attendance' : 'Record Attendance',
    maintenance: editingItem ? 'Edit Maintenance Request' : 'Log Maintenance Request',
    supervisor: editingItem ? 'Edit Supervisor' : 'Add Supervisor'
  };

  const renderForm = () => {
    const props = { editingItem, onClose: closeModal };
    
    switch (modalType) {
      case 'hostel': return <HostelForm {...props} />;
      case 'room': return <RoomForm {...props} />;
      case 'bed': return <BedForm {...props} />;
      case 'booking': return <BookingForm {...props} />;
      case 'student': return <StudentForm {...props} />;
      case 'payment': return <PaymentForm {...props} />;
      case 'complaint': return <ComplaintForm {...props} />;
      case 'menu': return <MenuForm {...props} />;
      case 'announcement': return <AnnouncementForm {...props} />;
      case 'attendance': return <AttendanceForm {...props} />;
      case 'maintenance': return <MaintenanceForm {...props} />;
      case 'supervisor': return <SupervisorForm {...props} />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-auto max-h-[90vh] overflow-y-auto">
        <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center bg-blue-500 sticky top-0">
          <h3 className="text-xl md:text-2xl font-bold text-white">{titles[modalType]}</h3>
          <button 
            onClick={closeModal}
            className="text-white hover:opacity-80 text-2xl md:text-3xl"
          >
            ×
          </button>
        </div>
        <div className="p-4 md:p-6">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Modal;