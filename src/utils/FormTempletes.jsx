// src/utils/formTemplates.js
import * as Yup from 'yup';

export const formTemplates = {
  hostel: [
    { name: 'hostel_name', label: 'Hostel Name', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'textarea', required: true },
    { name: 'address', label: 'Full Address', type: 'textarea', required: true },
    { name: 'location_id', label: 'Location (City)', type: 'select', options: [], required: true },
    { name: 'city', label: 'City', type: 'text', required: false },
    { name: 'state', label: 'State', type: 'text', required: false },
    { name: 'pincode', label: 'Pincode', type: 'text', required: false },
    { name: 'hostel_type', label: 'Hostel Type', type: 'select', options: ['Boys Only', 'Girls Only', 'Co-Educational'], required: true },
    { name: 'contact_email', label: 'Contact Email', type: 'email', required: true },
    { name: 'contact_phone', label: 'Contact Phone', type: 'tel', required: true },
    { name: 'amenities', label: 'Amenities (comma-separated)', type: 'textarea', required: true },
    { name: 'rules', label: 'Rules & Regulations', type: 'textarea', required: true },
    { name: 'check_in', label: 'Check-in Time', type: 'time', required: true },
    { name: 'check_out', label: 'Check-out Time', type: 'time', required: true },
    { name: 'total_rooms', label: 'Total Rooms', type: 'number', required: false },
    { name: 'total_beds', label: 'Total Beds', type: 'number', required: true },
    { name: 'available_rooms', label: 'Available Rooms', type: 'number', required: false },
    { name: 'current_occupancy', label: 'Current Occupancy', type: 'number', required: true },
    { name: 'price_per_month', label: 'Price Per Month', type: 'number', required: false },
    { name: 'monthly_revenue', label: 'Monthly Revenue', type: 'number', required: false },
    { name: 'total_revenue', label: 'Total Revenue', type: 'number', required: false },
    { name: 'rating', label: 'Hostel Rating', type: 'number', required: false },
    { name: 'total_reviews', label: 'Total Reviews', type: 'number', required: false },
    { name: 'assigned_admin', label: 'Assigned Admin', type: 'text', required: false }
  ],
  room: [
    { name: 'roomNumber', label: 'Room Number', type: 'text', required: true },
    { name: 'roomType', label: 'Room Type', type: 'select', options: ['Single', 'Double', 'Triple', 'Dormitory'], required: true },
    { name: 'roomCapacity', label: 'Room Capacity', type: 'number', required: true },
    { name: 'monthlyPrice', label: 'Monthly Price', type: 'number', required: true },
    { name: 'quarterlyPrice', label: 'Quarterly Price', type: 'number', required: true },
    { name: 'annualPrice', label: 'Annual Price', type: 'number', required: true },
    { name: 'availability', label: 'Available Beds', type: 'number', required: true },
    { name: 'amenities', label: 'Room Amenities', type: 'textarea', required: true },
    { name: 'maintenanceStatus', label: 'Maintenance Status', type: 'select', options: ['Good', 'Needs Attention', 'Under Maintenance', 'Out of Order'], required: true }
  ],
  bed: [
    { name: 'bedNumber', label: 'Bed Number', type: 'text', required: true },
    { name: 'roomNumber', label: 'Room Number', type: 'text', required: true },
    { name: 'bedStatus', label: 'Bed Status', type: 'select', options: ['Available', 'Occupied', 'Reserved', 'Maintenance'], required: true },
    { name: 'monthlyPrice', label: 'Monthly Price', type: 'number', required: true },
    { name: 'quarterlyPrice', label: 'Quarterly Price', type: 'number', required: true },
    { name: 'annualPrice', label: 'Annual Price', type: 'number', required: true }
  ],
  booking: [
    { name: 'visitorName', label: 'Visitor Name', type: 'text', required: true },
    { name: 'visitorEmail', label: 'Email Address', type: 'email', required: true },
    { name: 'visitorPhone', label: 'Phone Number', type: 'tel', required: true },
    { name: 'roomType', label: 'Requested Room Type', type: 'select', options: ['Single', 'Double', 'Triple', 'Dormitory'], required: true },
    { name: 'checkInDate', label: 'Check-in Date', type: 'date', required: true },
    { name: 'duration', label: 'Duration (months)', type: 'number', required: true },
    { name: 'specialRequirements', label: 'Special Requirements', type: 'textarea' },
    { name: 'advancePayment', label: 'Advance Payment', type: 'number' }
  ],
  student: [
    { name: 'studentName', label: 'Full Name', type: 'text', required: true },
    { name: 'studentEmail', label: 'Email Address', type: 'email', required: true },
    { name: 'studentPhone', label: 'Phone Number', type: 'tel', required: true },
    { name: 'studentId', label: 'Student ID', type: 'text', required: true },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
    { name: 'guardianName', label: 'Guardian Name', type: 'text', required: true },
    { name: 'guardianPhone', label: 'Guardian Phone', type: 'tel', required: true },
    { name: 'emergencyContact', label: 'Emergency Contact', type: 'tel', required: true },
    { name: 'checkInDate', label: 'Check-in Date', type: 'date', required: true },
    { name: 'roomAssignment', label: 'Room Assignment', type: 'text' },
    { name: 'bedAssignment', label: 'Bed Assignment', type: 'text' }
  ],
  payment: [
    { name: 'studentName', label: 'Student Name', type: 'text', required: true },
    { name: 'paymentType', label: 'Payment Type', type: 'select', options: ['Monthly Fee', 'Quarterly Fee', 'Annual Fee', 'Security Deposit', 'Mess Charges', 'Other'], required: true },
    { name: 'amount', label: 'Amount', type: 'number', required: true },
    { name: 'paymentMethod', label: 'Payment Method', type: 'select', options: ['Cash', 'Card', 'Bank Transfer', 'Online Payment', 'Cheque'], required: true },
    { name: 'paymentDate', label: 'Payment Date', type: 'date', required: true },
    { name: 'dueDate', label: 'Due Date', type: 'date', required: true },
    { name: 'transactionId', label: 'Transaction ID', type: 'text' },
    { name: 'notes', label: 'Notes', type: 'textarea' }
  ],
  complaint: [
    { name: 'complainantName', label: 'Complainant Name', type: 'text', required: true },
    { name: 'complainantContact', label: 'Contact Number', type: 'tel', required: true },
    { name: 'category', label: 'Complaint Category', type: 'select', options: ['Room Maintenance', 'Mess Quality', 'Cleanliness', 'Security', 'Other'], required: true },
    { name: 'priority', label: 'Priority Level', type: 'select', options: ['Low', 'Medium', 'High', 'Urgent'], required: true },
    { name: 'description', label: 'Complaint Description', type: 'textarea', required: true },
    { name: 'roomNumber', label: 'Room Number (if applicable)', type: 'text' },
    { name: 'assignedStaff', label: 'Assigned Staff Member', type: 'text' }
  ],
  menu: [
    { name: 'menuDate', label: 'Menu Date', type: 'date', required: true },
    { name: 'mealType', label: 'Meal Type', type: 'select', options: ['Breakfast', 'Lunch', 'Dinner', 'Snacks'], required: true },
    { name: 'menuItems', label: 'Menu Items (comma-separated)', type: 'textarea', required: true },
    { name: 'dietType', label: 'Diet Type', type: 'select', options: ['Regular', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'], required: true },
    { name: 'calories', label: 'Estimated Calories', type: 'number' },
    { name: 'price', label: 'Price per Meal', type: 'number' }
  ],
  announcement: [
    { name: 'announcementTitle', label: 'Announcement Title', type: 'text', required: true },
    { name: 'announcementContent', label: 'Content', type: 'textarea', required: true },
    { name: 'announcementCategory', label: 'Category', type: 'select', options: ['General', 'Urgent', 'Events', 'Rules', 'Emergency'], required: true },
    { name: 'targetAudience', label: 'Target Audience', type: 'select', options: ['All Hostels', 'Selected Hostels', 'Specific Rooms', 'Individual Students'], required: true },
    { name: 'scheduledDate', label: 'Scheduled Date & Time', type: 'datetime-local', required: true },
    { name: 'isEmergency', label: 'Emergency Alert', type: 'checkbox' }
  ],
  attendance: [
    { name: 'studentName', label: 'Student Name', type: 'text', required: true },
    { name: 'attendanceDate', label: 'Attendance Date', type: 'date', required: true },
    { name: 'attendanceMode', label: 'Recording Mode', type: 'select', options: ['Manual Entry', 'Biometric', 'QR Code', 'Mobile App'], required: true },
    { name: 'checkInTime', label: 'Check-in Time', type: 'time', required: true },
    { name: 'checkOutTime', label: 'Check-out Time', type: 'time' },
    { name: 'isLate', label: 'Late Arrival', type: 'checkbox' },
    { name: 'notes', label: 'Notes', type: 'textarea' }
  ],
  maintenance: [
    { name: 'description', label: 'Request Description', type: 'textarea', required: true },
    { name: 'maintenanceCategory', label: 'Category', type: 'select', options: ['Electrical', 'Plumbing', 'Carpentry', 'Cleaning', 'Appliances', 'Structural'], required: true },
    { name: 'priority', label: 'Priority Level', type: 'select', options: ['Low', 'Medium', 'High', 'Urgent'], required: true },
    { name: 'roomNumber', label: 'Room Number', type: 'text', required: true },
    { name: 'requestDate', label: 'Request Date', type: 'date', required: true },
    { name: 'estimatedCost', label: 'Estimated Cost', type: 'number' },
    { name: 'assignedStaff', label: 'Assigned Staff', type: 'text' },
    { name: 'vendorName', label: 'Vendor Name', type: 'text' }
  ],
  supervisor: [
    { name: 'supervisorName', label: 'Full Name', type: 'text', required: true },
    { name: 'supervisorEmail', label: 'Email Address', type: 'email', required: true },
    { name: 'supervisorPhone', label: 'Phone Number', type: 'tel', required: true },
    { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
    { name: 'role', label: 'Role', type: 'select', options: ['Warden', 'Manager', 'Accountant', 'Staff'], required: true },
    { name: 'department', label: 'Department', type: 'select', options: ['Administration', 'Maintenance', 'Accounts', 'Security', 'Housekeeping', 'Mess'], required: true },
    { name: 'accessLevel', label: 'Access Level', type: 'select', options: ['Full Access', 'Limited Access', 'Read Only'], required: true },
    { name: 'permissions', label: 'Specific Permissions', type: 'textarea' }
  ]
};

export const validationSchemas = {
  hostel: Yup.object({
    hostel_name: Yup.string().min(1, 'Hostel name is required').required('Hostel name is required'),
    description: Yup.string().required('Description is required'),
    address: Yup.string().min(1, 'Address is required').required('Address is required'),
    location_id: Yup.number().required('Location is required'),
    city: Yup.string(),
    state: Yup.string(),
    pincode: Yup.string(),
    hostel_type: Yup.string().required('Hostel type is required'),
    contact_email: Yup.string().email('Invalid email').required('Email is required'),
    contact_phone: Yup.string().required('Phone number is required'),
    total_rooms: Yup.number().min(0, 'Cannot be negative'),
    total_beds: Yup.number().required('Total beds is required').min(1, 'Must be at least 1'),
    available_rooms: Yup.number().min(0, 'Cannot be negative'),
    current_occupancy: Yup.number().required('Occupancy is required').min(0, 'Cannot be negative'),
    price_per_month: Yup.number().min(0, 'Cannot be negative'),
    monthly_revenue: Yup.number().min(0, 'Cannot be negative'),
    total_revenue: Yup.number().min(0, 'Cannot be negative'),
    rating: Yup.number().min(0, 'Cannot be negative').max(5, 'Max rating is 5'),
    total_reviews: Yup.number().min(0, 'Cannot be negative'),
    assigned_admin: Yup.string()
  }),
  room: Yup.object({
    roomNumber: Yup.string().required('Room number is required'),
    roomType: Yup.string().required('Room type is required'),
    roomCapacity: Yup.number().required('Room capacity is required').min(1, 'Must be at least 1'),
    monthlyPrice: Yup.number().required('Monthly price is required').min(0, 'Cannot be negative')
  }),
  bed: Yup.object({
    bedNumber: Yup.string().required('Bed number is required'),
    roomNumber: Yup.string().required('Room number is required'),
    bedStatus: Yup.string().required('Bed status is required'),
    monthlyPrice: Yup.number().required('Monthly price is required').min(0, 'Cannot be negative')
  }),
  booking: Yup.object({
    visitorName: Yup.string().required('Visitor name is required'),
    visitorEmail: Yup.string().email('Invalid email').required('Email is required'),
    visitorPhone: Yup.string().required('Phone number is required'),
    roomType: Yup.string().required('Room type is required'),
    checkInDate: Yup.date().required('Check-in date is required'),
    duration: Yup.number().required('Duration is required').min(1, 'Must be at least 1 month')
  }),
  student: Yup.object({
    studentName: Yup.string().required('Student name is required'),
    studentEmail: Yup.string().email('Invalid email').required('Email is required'),
    studentPhone: Yup.string().required('Phone number is required'),
    studentId: Yup.string().required('Student ID is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
    guardianName: Yup.string().required('Guardian name is required'),
    guardianPhone: Yup.string().required('Guardian phone is required'),
    emergencyContact: Yup.string().required('Emergency contact is required'),
    checkInDate: Yup.date().required('Check-in date is required')
  }),
  payment: Yup.object({
    studentName: Yup.string().required('Student name is required'),
    paymentType: Yup.string().required('Payment type is required'),
    amount: Yup.number().required('Amount is required').min(0, 'Cannot be negative'),
    paymentMethod: Yup.string().required('Payment method is required'),
    paymentDate: Yup.date().required('Payment date is required'),
    dueDate: Yup.date().required('Due date is required')
  }),
  complaint: Yup.object({
    complainantName: Yup.string().required('Complainant name is required'),
    complainantContact: Yup.string().required('Contact number is required'),
    category: Yup.string().required('Category is required'),
    priority: Yup.string().required('Priority is required'),
    description: Yup.string().required('Description is required')
  }),
  menu: Yup.object({
    menuDate: Yup.date().required('Menu date is required'),
    mealType: Yup.string().required('Meal type is required'),
    menuItems: Yup.string().required('Menu items are required')
  }),
  announcement: Yup.object({
    announcementTitle: Yup.string().required('Title is required'),
    announcementContent: Yup.string().required('Content is required'),
    announcementCategory: Yup.string().required('Category is required'),
    targetAudience: Yup.string().required('Target audience is required'),
    scheduledDate: Yup.date().required('Scheduled date is required')
  }),
  attendance: Yup.object({
    studentName: Yup.string().required('Student name is required'),
    attendanceDate: Yup.date().required('Attendance date is required'),
    attendanceMode: Yup.string().required('Recording mode is required'),
    checkInTime: Yup.string().required('Check-in time is required')
  }),
  maintenance: Yup.object({
    description: Yup.string().required('Description is required'),
    maintenanceCategory: Yup.string().required('Category is required'),
    priority: Yup.string().required('Priority is required'),
    roomNumber: Yup.string().required('Room number is required'),
    requestDate: Yup.date().required('Request date is required')
  }),
  supervisor: Yup.object({
    supervisorName: Yup.string().required('Name is required'),
    supervisorEmail: Yup.string().email('Invalid email').required('Email is required'),
    supervisorPhone: Yup.string().required('Phone number is required'),
    employeeId: Yup.string().required('Employee ID is required'),
    role: Yup.string().required('Role is required'),
    department: Yup.string().required('Department is required'),
    accessLevel: Yup.string().required('Access level is required')
  })
};