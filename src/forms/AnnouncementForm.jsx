// src/components/forms/AnnouncementForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { formTemplates, validationSchemas } from '../utils/FormTempletes';

const AnnouncementForm = ({ editingItem, onClose }) => {
  const initialValues = editingItem || {
    announcementTitle: '',
    announcementContent: '',
    announcementCategory: '',
    targetAudience: '',
    scheduledDate: '',
    isEmergency: false
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Announcement form submitted:', values);
    setTimeout(() => {
      setSubmitting(false);
      onClose();
    }, 1000);
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
    } else if (field.type === 'checkbox') {
      return (
        <Field name={field.name}>
          {({ field }) => (
            <input
              type="checkbox"
              {...field}
              checked={field.value}
              className="mr-3 w-4 h-4 md:w-5 md:h-5"
            />
          )}
        </Field>
      );
    } else {
      return <Field type={field.type} {...commonProps} />;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas.announcement}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {formTemplates.announcement.map(field => (
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
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 disabled:opacity-50 flex items-center justify-center text-sm md:text-base"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span>{editingItem ? 'Update Announcement' : 'Create Announcement'}</span>
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

export default AnnouncementForm;