// src/features/tenant/index.js

// APIs
export { studentComplaintsApi, useGetStudentComplaintsQuery, useGetComplaintDetailsQuery, useCreateComplaintMutation, useUploadComplaintAttachmentMutation, useSubmitComplaintFeedbackMutation, useReopenComplaintMutation, useAddComplaintNoteMutation } from './api/studentComplaintsApi';

// Hooks
export { useStudentComplaintOperations } from './hooks/useStudentComplaintOperations';

// Components
export { default as ComplaintDetailsModal } from './components/ComplaintDetailsModal';
