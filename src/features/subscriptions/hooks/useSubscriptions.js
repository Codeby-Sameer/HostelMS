// src/features/subscriptions/hooks/useSubscriptions.js
import { useCallback } from 'react';
import {
  useGetPlansQuery,
  useCreatePlanMutation,
  useGetSubscriptionsQuery,
  useCreateSubscriptionMutation,
  useCreatePaymentMutation,
  useGetPaymentsQuery,
  useCreateChangeMutation,
  useGetChangesQuery,
} from '../api/subscriptionsApi';

// Plans
export const usePlans = (params = {}) => {
  const { data: plansData, isLoading, error, refetch } = useGetPlansQuery(params);
  const [createPlan] = useCreatePlanMutation();

  const handleCreatePlan = useCallback(async (planData) => {
    try {
      const result = await createPlan(planData).unwrap();
      return { success: true, data: result };
    } catch (err) {
      console.error('Error creating plan:', err);
      throw err;
    }
  }, [createPlan]);

  return {
    plans: plansData?.data || plansData || [],
    isLoading,
    error,
    refetch,
    createPlan: handleCreatePlan,
  };
};

// Subscriptions
export const useSubscriptions = (params = {}) => {
  const { data: subscriptionsData, isLoading, error, refetch } = useGetSubscriptionsQuery(params);
  const [createSubscription] = useCreateSubscriptionMutation();

  const handleCreateSubscription = useCallback(async (subscriptionData) => {
    try {
      const result = await createSubscription(subscriptionData).unwrap();
      return { success: true, data: result };
    } catch (err) {
      console.error('Error creating subscription:', err);
      throw err;
    }
  }, [createSubscription]);

  return {
    subscriptions: subscriptionsData?.data || subscriptionsData || [],
    isLoading,
    error,
    refetch,
    createSubscription: handleCreateSubscription,
  };
};

// Payments
export const usePayments = (params = {}) => {
  const { data: paymentsData, isLoading, error, refetch } = useGetPaymentsQuery(params);
  const [createPayment] = useCreatePaymentMutation();

  const handleCreatePayment = useCallback(async (paymentData) => {
    try {
      const result = await createPayment(paymentData).unwrap();
      return { success: true, data: result };
    } catch (err) {
      console.error('Error creating payment:', err);
      throw err;
    }
  }, [createPayment]);

  return {
    payments: paymentsData?.data || paymentsData || [],
    isLoading,
    error,
    refetch,
    createPayment: handleCreatePayment,
  };
};

// Changes
export const useChanges = (subscriptionId, params = {}) => {
  const { data: changesData, isLoading, error, refetch } = useGetChangesQuery(subscriptionId, params);
  const [createChange] = useCreateChangeMutation();

  const handleCreateChange = useCallback(async (changeData) => {
    try {
      const result = await createChange(changeData).unwrap();
      return { success: true, data: result };
    } catch (err) {
      console.error('Error creating change:', err);
      throw err;
    }
  }, [createChange]);

  return {
    changes: changesData?.data || changesData || [],
    isLoading,
    error,
    refetch,
    createChange: handleCreateChange,
  };
};

// Combined hook for full subscription management
export const useSubscriptionManagement = (params = {}) => {
  const plans = usePlans(params);
  const subscriptions = useSubscriptions(params);
  const payments = usePayments(params);

  return {
    plans,
    subscriptions,
    payments,
  };
};
