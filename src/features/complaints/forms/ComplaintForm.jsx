// src/components/forms/ComplaintForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { formTemplates, validationSchemas } from '@/utils/FormTempletes';
import { useCreateComplaintMutation } from '@/features/tenant/api/studentComplaintsApi';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

// Simple JWT decoder
const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
};

const ComplaintForm = ({ editingItem, onClose }) => {
  const [createComplaint, { isLoading }] = useCreateComplaintMutation();
  const { user } = useAuth();
  const token = useSelector(state => state.auth?.token);

  const initialValues = editingItem || {
    complainantName: '',
    complainantContact: '',
    category: '',
    priority: '',
    description: '',
    roomNumber: '',
    assignedStaff: ''
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Decode token to get hostel_id
      const decodedToken = token ? decodeToken(token) : null;
      const hostelIdFromToken = decodedToken?.hostel_id;
      
      // Map category values from form labels to API enum
      const categoryMap = {
        'Room Maintenance': 'room_maintenance',
        'Mess Quality': 'mess_quality',
        'Cleanliness': 'cleanliness',
        'Security': 'security',
        'WiFi': 'wifi',
        'Other': 'other'
      };

      // Map priority values from form labels to API enum
      const priorityMap = {
        'Low': 'low',
        'Medium': 'medium',
        'High': 'high',
        'Urgent': 'urgent'
      };

      // Get student name from logged-in user (use actual user data, not form)
      const studentName = user?.full_name || user?.username || 'Unknown Student';
      const studentEmail = user?.email || '';

      // Transform form data to API format
      const complaintData = {
        title: values.description ? values.description.substring(0, 255) : 'Complaint',
        description: values.description || 'No description provided',
        category: categoryMap[values.category] || values.category.toLowerCase(),
        priority: priorityMap[values.priority] || (values.priority?.toLowerCase() || 'medium'),
        student_name: studentName,
        student_email: studentEmail,
        hostel_id: hostelIdFromToken || user?.hostel_id || null,
        room_number: values.roomNumber && values.roomNumber.trim() ? values.roomNumber : null,
      };

      // Validate required fields
      if (!complaintData.student_email) {
        toast.error('User email not found. Please log in again.');
        setSubmitting(false);
        return;
      }

      if (!complaintData.hostel_id) {
        toast.error('Hostel information not available. Please contact admin.');
        setSubmitting(false);
        return;
      }

      if (!complaintData.title || complaintData.title.trim().length === 0) {
        toast.error('Complaint description cannot be empty.');
        setSubmitting(false);
        return;
      }

      if (!complaintData.category) {
        toast.error('Please select a complaint category.');
        setSubmitting(false);
        return;
      }

      console.log('Submitting complaint with data:', {
        ...complaintData,
        hostel_id: complaintData.hostel_id,
        student_name: complaintData.student_name,
        student_email: complaintData.student_email
      });

      // Call the API
      await createComplaint(complaintData).unwrap();
      
      toast.success('Complaint submitted successfully!');
      setSubmitting(false);
      onClose();
    } catch (error) {
      console.error('Complaint submission error:', error);
      toast.error(error?.data?.detail || 'Failed to submit complaint');
      setSubmitting(false);
    }
  };

  const renderField = (field) => {
    const commonProps = {
      name: field.name,
      className: "w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
    };

    if (field.type === 'select') {
      return (
        <Field as="select" {...commonProps}>
          <option value="">Select {field.label}</option>
          {field.options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </Field>
      );
    } else if (field.type === 'textarea') {
      return <Field as="textarea" rows="3" {...commonProps} />;
    } else {
      return <Field type={field.type} {...commonProps} />;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas.complaint}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {formTemplates.complaint.map(field => (
              <div 
                key={field.name} 
                className={field.type === 'textarea' ? 'md:col-span-2' : ''}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}{field.required ? ' *' : ''}
                </label>
                {renderField(field)}
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-6">
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="flex-1 px-4 py-3 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 disabled:opacity-50 flex items-center justify-center text-sm md:text-base"
            >
              {isSubmitting || isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span>{editingItem ? 'Update Complaint' : 'Log Complaint'}</span>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 md:px-6 md:py-3 bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-400 transition text-sm md:text-base"
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ComplaintForm;