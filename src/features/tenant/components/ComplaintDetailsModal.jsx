import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useGetComplaintDetailsQuery } from '../api/studentComplaintsApi';
import { useStudentComplaintOperations } from '../hooks/useStudentComplaintOperations';
import { FaDownload, FaReply, FaXmark, FaFileAlt, FaStar } from 'react-icons/fa';
import FullScreenLoader from '@/loader/FullScreenLoader';

const ComplaintDetailsModal = ({ complaintId, isOpen, onClose }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(5);

  const { data: complaint, isLoading } = useGetComplaintDetailsQuery(complaintId, {
    skip: !isOpen,
  });

  const { handleSubmitFeedback, handleReopenComplaint } = useStudentComplaintOperations();

  const handleSubmitFeedbackClick = async () => {
    if (feedbackText.trim()) {
      await handleSubmitFeedback(complaintId, feedbackText, rating);
      setFeedbackText('');
      setShowFeedbackForm(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'open':
        return '🔴';
      case 'in progress':
        return '🟡';
      case 'resolved':
        return '🟢';
      case 'closed':
        return '⚪';
      default:
        return '🔵';
    }
  };

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (!complaint) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <span>{getStatusIcon(complaint.status)}</span>
            {complaint.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status and Priority */}
          <div className="flex flex-wrap gap-3">
            <Badge>{complaint.status}</Badge>
            {complaint.priority && (
              <Badge variant="outline">{complaint.priority} Priority</Badge>
            )}
            <Badge variant="secondary">{complaint.category}</Badge>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Submitted</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {complaint.date_created}
              </p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Last Updated</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {complaint.date_updated}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Description
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {complaint.description}
            </p>
          </div>

          {/* Attachments */}
          {complaint.attachments && complaint.attachments.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Attachments ({complaint.attachments.length})
              </h4>
              <div className="space-y-2">
                {complaint.attachments.map((attachment, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    <div className="flex items-center gap-3">
                      <FaFileAlt className="text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">
                          {attachment.filename}
                        </p>
                        <p className="text-xs text-gray-500">
                          {attachment.size}
                        </p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="gap-2"
                      asChild
                    >
                      <a href={attachment.url} download>
                        <FaDownload size={14} />
                        Download
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          {complaint.notes && complaint.notes.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Notes ({complaint.notes.length})
              </h4>
              <div className="space-y-3">
                {complaint.notes.map((note, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
                  >
                    <div className="flex items-start justify-between">
                      <p className="text-gray-900 dark:text-white text-sm">
                        {note.content}
                      </p>
                      <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                        {note.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Feedback Section */}
          {complaint.feedback ? (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Your Feedback
              </h4>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={14}
                    className={`${
                      i < complaint.feedback.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {complaint.feedback.feedback}
              </p>
            </div>
          ) : complaint.status?.toLowerCase() === 'resolved' ? (
            <div>
              <Button
                onClick={() => setShowFeedbackForm(!showFeedbackForm)}
                className="w-full gap-2"
              >
                <FaReply size={14} />
                Submit Feedback
              </Button>

              {showFeedbackForm && (
                <div className="mt-4 space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white">
                      Rate your satisfaction
                    </label>
                    <div className="flex gap-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className="text-2xl transition hover:scale-110"
                        >
                          <FaStar
                            className={`${
                              star <= rating
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white">
                      Your feedback
                    </label>
                    <Textarea
                      placeholder="Share your feedback about how this issue was resolved..."
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      rows={3}
                      className="mt-2"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={handleSubmitFeedbackClick}
                      className="flex-1"
                    >
                      Submit Feedback
                    </Button>
                    <Button
                      onClick={() => setShowFeedbackForm(false)}
                      variant="outline"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : null}

          {/* Reopen Button */}
          {complaint.status?.toLowerCase() === 'closed' && (
            <Button
              onClick={() => handleReopenComplaint(complaintId, 'Issue not fully resolved')}
              variant="outline"
              className="w-full"
            >
              Reopen Complaint
            </Button>
          )}

          {/* Close Button */}
          <Button onClick={onClose} variant="outline" className="w-full">
            <FaXmark className="mr-2" />
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComplaintDetailsModal;
