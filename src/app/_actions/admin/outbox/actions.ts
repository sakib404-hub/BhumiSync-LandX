"use server";

/**
 * Prototype Server Actions for Inter-Agency Outbox (Part 23)
 * Stubs only for prototype phase.
 */

export const retryOutboxBatchAction = async (): Promise<{ success: boolean; dispatched: number }> => {
  return { success: true, dispatched: 3 };
};
