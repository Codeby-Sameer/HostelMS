import { useCallback } from 'react';
import {
  useCreateComplaintMutation,
  useUploadComplaintAttachmentMutation,
  useSubmitComplaintFeedbackMutation,
  useReopenComplaintMutation,
  useAddComplaintNoteMutation,
} from '../api/studentComplaintsApi';
import toast from 'react-hot-toast';

export const useStudentComplaintOperations = () => {
  const [createComplaint] = useCreateComplaintMutation();
  const [uploadAttachment] = useUploadComplaintAttachmentMutation();
  const [submitFeedback] = useSubmitComplaintFeedbackMutation();
  const [reopenComplaint] = useReopenComplaintMutation();
  const [addNote] = useAddComplaintNoteMutation();

  const handleCreateComplaint = useCallback(
    async (complaintData) => {
      try {
        const result = await createComplaint(complaintData).unwrap();
        toast.success('Complaint submitted successfully');
        return result;
      } catch (error) {
        toast.error(error?.data?.detail || 'Failed to submit complaint');
        throw error;
      }
    },
    [createComplaint]
  );

  const handleUploadAttachment = useCallback(
    async (complaintId, file) => {
      try {
        const result = await uploadAttachment({ complaintId, file }).unwrap();
        toast.success('Attachment uploaded successfully');
        return result;
      } catch (error) {
        toast.error('Failed to upload attachment');
        throw error;
      }
    },
    [uploadAttachment]
  );

  const handleSubmitFeedback = useCallback(
    async (complaintId, feedback, rating) => {
      try {
        const result = await submitFeedback({
          complaintId,
          feedback,
          rating,
        }).unwrap();
        toast.success('Feedback submitted successfully');
        return result;
      } catch (error) {
        toast.error('Failed to submit feedback');
        throw error;
      }
    },
    [submitFeedback]
  );

  const handleReopenComplaint = useCallback(
    async (complaintId, reason) => {
      try {
        const result = await reopenComplaint({
          complaintId,
          reason,
        }).unwrap();
        toast.success('Complaint reopened successfully');
        return result;
      } catch (error) {
        toast.error('Failed to reopen complaint');
        throw error;
      }
    },
    [reopenComplaint]
  );

  const handleAddNote = useCallback(
    async (complaintId, note) => {
      try {
        const result = await addNote({
          complaintId,
          note,
        }).unwrap();
        toast.success('Note added successfully');
        return result;
      } catch (error) {
        toast.error('Failed to add note');
        throw error;
      }
    },
    [addNote]
  );

  return {
    handleCreateComplaint,
    handleUploadAttachment,
    handleSubmitFeedback,
    handleReopenComplaint,
    handleAddNote,
  };
};

export default useStudentComplaintOperations;
