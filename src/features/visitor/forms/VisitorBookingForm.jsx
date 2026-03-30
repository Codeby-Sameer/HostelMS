// src/features/visitor/forms/VisitorBookingForm.jsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useCreateBookingMutation } from '../api/visitorBookingApi';
import { useAuth } from '@/hooks/useAuth';

const VisitorBookingForm = ({ editingItem, onClose }) => {
  const { user } = useAuth();
  const [createBooking, { isLoading }] = useCreateBookingMutation();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const hostel = editingItem?.hostel;

  const [formData, setFormData] = useState({
    hostel_id: hostel?.id || '',
    room_id: '1',
    room_type: 'single',
    full_name: user?.full_name || user?.name || '',
    email: user?.email || '',
    phone_number: user?.phone || user?.mobile || '',
    id_type: 'passport',
    id_number: '',
    check_in: '',
    check_out: '',
    number_of_guests: '1',
    emergency_contact_name: '',
    emergency_contact_number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateAmount = () => {
    if (formData.check_in && formData.check_out && hostel?.price_range_min) {
      const checkIn = new Date(formData.check_in);
      const checkOut = new Date(formData.check_out);
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights * hostel.price_range_min : 0;
    }
    return 0;
  };

  const amount = calculateAmount();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.check_in || !formData.check_out) {
      setError('Please select check-in and check-out dates');
      return;
    }

    if (new Date(formData.check_out) <= new Date(formData.check_in)) {
      setError('Check-out date must be after check-in date');
      return;
    }

    if (!formData.full_name.trim()) {
      setError('Please enter your full name');
      return;
    }

    if (!formData.email.trim()) {
      setError('Please enter your email');
      return;
    }

    if (!formData.phone_number.trim()) {
      setError('Please enter your phone number');
      return;
    }

    if (!formData.id_number.trim()) {
      setError('Please enter your ID number');
      return;
    }

    if (!formData.emergency_contact_name.trim()) {
      setError('Please enter emergency contact name');
      return;
    }

    if (!formData.emergency_contact_number.trim()) {
      setError('Please enter emergency contact number');
      return;
    }

    if (!formData.hostel_id) {
      setError('Hostel information is missing');
      return;
    }

    if (!formData.room_type) {
      setError('Please select a room type');
      return;
    }

    try {
      const amount = calculateAmount();
      
      // Build payload with EXACT backend field names
      const bookingPayload = {
        user_id: user?.id || parseInt(user?.user_id) || 1,
        hostel_id: parseInt(formData.hostel_id),
        room_id: parseInt(formData.room_id),
        room_type: formData.room_type,
        full_name: formData.full_name.trim(),
        email: formData.email.trim(),
        phone_number: formData.phone_number.trim(),
        id_type: formData.id_type,
        id_number: formData.id_number.trim(),
        check_in: new Date(formData.check_in).toISOString(),
        check_out: new Date(formData.check_out).toISOString(),
        number_of_guests: parseInt(formData.number_of_guests),
        emergency_contact_name: formData.emergency_contact_name.trim(),
        emergency_contact_number: formData.emergency_contact_number.trim(),
        amount: amount,
      };

      console.log('👤 User ID:', user?.id);
      console.log('📤 Submitting booking:', JSON.stringify(bookingPayload, null, 2));
      
      const result = await createBooking(bookingPayload).unwrap();
      console.log('✅ Booking created:', result);
      
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      console.error('❌ Booking error:', err);
      console.error('Error data:', JSON.stringify(err?.data, null, 2));
      console.error('Error status:', err?.status);
      
      let errorMessage = 'Failed to create booking. Please try again.';
      
      if (err?.data?.detail) {
        console.log('Detail found:', err.data.detail);
        if (Array.isArray(err.data.detail)) {
          errorMessage = err.data.detail.map(d => {
            if (typeof d === 'object') {
              return `${d.loc?.join('.')} - ${d.msg}`;
            }
            return d;
          }).join('\n');
        } else {
          errorMessage = err.data.detail;
        }
      } else if (err?.data?.message) {
        errorMessage = err.data.message;
      }
      
      console.log('Final error message:', errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className="space-y-4">
      {/* Hostel Info */}
      {hostel && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-bold text-lg">{hostel.name}</h3>
          <p className="text-sm text-gray-600">{hostel.address || hostel.location}</p>
          <p className="text-green-600 font-bold mt-2">₹{hostel.price_range_min}/night</p>
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive">
          <AlertDescription className="whitespace-pre-wrap text-sm">{error}</AlertDescription>
        </Alert>
      )}

      {/* Success Toast */}
      {success && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 z-50">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold">Room booked successfully! 🎉</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Guest Information */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Guest Information</h4>
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="text"
              name="full_name"
              placeholder="Full Name *"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone_number"
              placeholder="Phone Number *"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
            <Input
              type="number"
              name="number_of_guests"
              placeholder="Number of Guests *"
              value={formData.number_of_guests}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
        </div>

        {/* Room Type */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Room Type *</h4>
          <select
            name="room_type"
            value={formData.room_type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="triple">Triple Room</option>
            <option value="suite">Suite</option>
            <option value="dorm">Dormitory</option>
          </select>
        </div>

        {/* ID Information */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Identification *</h4>
          <div className="grid grid-cols-2 gap-3">
            <select
              name="id_type"
              value={formData.id_type}
              onChange={handleChange}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="passport">Passport</option>
              <option value="aadhar">Aadhar</option>
              <option value="driving_license">Driving License</option>
              <option value="pan">PAN Card</option>
              <option value="voter_id">Voter ID</option>
            </select>
            <Input
              type="text"
              name="id_number"
              placeholder="ID Number *"
              value={formData.id_number}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Dates */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Stay Details</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date *</label>
              <Input
                type="date"
                name="check_in"
                value={formData.check_in}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date *</label>
              <Input
                type="date"
                name="check_out"
                value={formData.check_out}
                onChange={handleChange}
                min={formData.check_in || new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Emergency Contact *</h4>
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="text"
              name="emergency_contact_name"
              placeholder="Contact Name *"
              value={formData.emergency_contact_name}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="emergency_contact_number"
              placeholder="Contact Phone *"
              value={formData.emergency_contact_number}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Payment Summary</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Nightly Rate:</span>
              <span className="font-semibold">₹{hostel?.price_range_min || 0}/night</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Number of Nights:</span>
              <span className="font-semibold">
                {formData.check_in && formData.check_out 
                  ? Math.ceil((new Date(formData.check_out) - new Date(formData.check_in)) / (1000 * 60 * 60 * 24))
                  : 0}
              </span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="font-semibold text-gray-900">Total Amount:</span>
              <span className="font-bold text-lg text-green-600">₹{calculateAmount()}</span>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-3 justify-end pt-4 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Booking...' : 'Confirm Booking'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VisitorBookingForm;
