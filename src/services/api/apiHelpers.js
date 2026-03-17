// src/services/api/apiHelpers.js
export const getTagTypes = () => [
  // Auth & Users
  'User', 'Admin', 'Supervisor', 'Student',
  
  // Hostels & Locations
  'Hostel', 'Location',
  
  // Rooms & Beds
  'Room', 'Bed',
  
  // Bookings
  'Booking', 'Waitlist',
  
  // Complaints
  'Complaint', 'Override',
  
  // Maintenance
  'MaintenanceRequest', 'MaintenanceTask', 'PreventiveMaintenance',
  
  // Payments
  'Payment', 'Invoice', 'Transaction', 'Receipt', 'Refund',
  
  // Subscriptions
  'SubscriptionPlan', 'Subscription', 'OrganizationPayment',
  
  // Attendance
  'Attendance',
  
  // Announcements
  'Announcement',
  
  // Mess
  'MessMenu', 'MealPreference', 'MenuFeedback',
  
  // Notifications
  'Notification', 'RoutingRule', 'Template', 'DeviceToken', 'Email', 'SMS',
  
  // Audit
  'AuditLog',
  
  // Dashboard
  'Dashboard',
  
  // Reviews
  'Review',
  
  // Leave
  'Leave',
];

export const providesList = (result, tagType) =>
  result
    ? [
        ...result.map(({ id }) => ({ type: tagType, id })),
        { type: tagType, id: 'LIST' },
      ]
    : [{ type: tagType, id: 'LIST' }];

export const providesItem = (id, tagType) => [
  { type: tagType, id },
  { type: tagType, id: 'LIST' },
];

export const invalidatesList = (tagType) => [{ type: tagType, id: 'LIST' }];

export const invalidatesItem = (id, tagType) => [
  { type: tagType, id },
  { type: tagType, id: 'LIST' },
];

export const buildQueryParams = (params) => {
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== undefined && value !== null && value !== ''
    )
  );
  return cleanParams;
};