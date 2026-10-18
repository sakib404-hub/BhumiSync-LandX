"use server";

/**
 * BhumiSync Server Action Prototype Stubs for Sub-Registrar Portal
 * Page: /sub-registrar
 * 
 * Rules: Stubs/empty declarations only during prototype phase.
 * Data and interactions handled on client/mock state.
 */

export interface SubRegistrarMetricOverview {
  deedsToday: number;
  activeLocks: number;
  awaitingMutation: number;
  blockedAttempts: number;
}

export interface SubRegistrarRecentDeed {
  id: string;
  deedNo: string;
  office: string;
  time: string;
  mouza: string;
  daag: string;
  khatian: string;
  transactedShare: string;
  shareSubtext: string;
  sellerName: string;
  sellerNid: string;
  buyerName: string;
  buyerNid: string;
  deedStatus: string;
  deedStatusType: "success" | "pending" | "error";
  mutationStatus: string;
  mutationStatusType: "success" | "progress" | "secondary" | "hold" | "frozen";
  isBlocked?: boolean;
}

export const fetchSubRegistrarOverview = async (): Promise<SubRegistrarMetricOverview> => {
  // Prototype stub declaration
  return {
    deedsToday: 14,
    activeLocks: 8,
    awaitingMutation: 6,
    blockedAttempts: 2,
  };
};

export const fetchRecentDeedsFeed = async (
  _filter: "all" | "escrow" | "settled" | "intercepted" = "all"
): Promise<SubRegistrarRecentDeed[]> => {
  // Prototype stub declaration
  return [];
};

export const triggerLiveLedgerSync = async (): Promise<{ success: boolean; syncedBlock: number }> => {
  // Prototype stub declaration
  return {
    success: true,
    syncedBlock: 884912,
  };
};

export const exportRegistrySheetCsv = async (): Promise<{ success: boolean; downloadUrl?: string }> => {
  // Prototype stub declaration
  return {
    success: true,
  };
};
