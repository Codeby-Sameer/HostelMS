// src/features/auth/api/authApi.js
import { appApi } from '../../../services/api/appApi';
import { invalidatesList, providesItem } from '../../../services/api/apiHelpers';

export const authApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Registration
    register: builder.mutation({
      query: (userData) => ({
        url: '/api/v1/auth/register',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),

    // OTP Verification
    verifyOtp: builder.mutation({
      query: (otpData) => ({
        url: '/api/v1/auth/verify-otp',
        method: 'POST',
        body: otpData,
      }),
    }),

    resendOtp: builder.mutation({
      query: (otpData) => ({
        url: '/api/v1/auth/resend-otp',
        method: 'POST',
        body: otpData,
      }),
    }),

    // Login
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    // Logout
    logout: builder.mutation({
      query: () => ({
        url: '/api/v1/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),

    // Current User
    getCurrentUser: builder.query({
      query: () => '/api/v1/auth/me',
      providesTags: (result) => providesItem(result?.id, 'User'),
    }),

    // Role Management
    assignRole: builder.mutation({
      query: (roleData) => ({
        url: '/api/v1/auth/assign-role',
        method: 'POST',
        body: roleData,
      }),
      invalidatesTags: (result, error, { user_id }) => [
        { type: 'User', id: user_id },
      ],
    }),

    // Password Management
    forgotPassword: builder.mutation({
      query: ({ email_or_phone, debug }) => ({
        url: '/api/v1/auth/forgot-password',
        method: 'POST',
        params: { debug },
        body: { email_or_phone },
      }),
    }),

    verifyResetCode: builder.mutation({
      query: (resetData) => ({
        url: '/api/v1/auth/verify-reset-code',
        method: 'POST',
        body: resetData,
      }),
    }),

    resetPassword: builder.mutation({
      query: (resetData) => ({
        url: '/api/v1/auth/reset-password',
        method: 'POST',
        body: resetData,
      }),
    }),

    checkPasswordStrength: builder.query({
      query: (password) => ({
        url: '/api/v1/auth/password-strength',
        params: { password },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useAssignRoleMutation,
  useForgotPasswordMutation,
  useVerifyResetCodeMutation,
  useResetPasswordMutation,
  useCheckPasswordStrengthQuery,
  useLazyCheckPasswordStrengthQuery,
} = authApi;