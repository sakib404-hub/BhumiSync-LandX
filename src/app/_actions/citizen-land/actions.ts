"use server";

export interface CitizenHolding {
  holdingId: string;
  khatianNo: string;
  surveyType: "BS" | "RS" | "CS";
  daagNo: string;
  mouza: string;
  upazila: string;
  district: string;
  landClass: string;
  totalShare: number; // e.g. 0.5000 (8 anna)
  retainedShare: number; // e.g. 0.2500
  escrowedShare: number; // e.g. 0.2500
  escrowDeedNo: string;
  escrowBuyerNid: string;
  escrowBuyerName: string;
  mutationCaseNo: string;
  jurisdictionOffice: string;
  genesisSealHash: string;
  status: "LOCKED_ESCROW" | "CLEAR" | "DISPUTED";
}

export interface MutationMilestone {
  step: number;
  titleKey: string;
  descKey: string;
  status: "COMPLETED" | "IN_PROGRESS" | "PENDING";
  timestamp?: string;
}

export interface CitizenLandData {
  citizenNid: string;
  citizenName: string;
  totalHoldingsCount: number;
  totalEscrowedShare: number;
  pendingMutationCasesCount: number;
  activeEncumbranceCount: number;
  holdings: CitizenHolding[];
  milestones: MutationMilestone[];
}

/**
 * Prototype Server Action: Fetch Citizen Land Holdings
 * (Prototype phase stub - live resolution currently mock-simulated on client)
 */
export const getCitizenLandPortfolio = async (
  _citizenNid: string
): Promise<{ success: boolean; data?: CitizenLandData; error?: string }> => {
  // Prototype stub declaration only
  return {
    success: true,
    data: {
      citizenNid: "SYN-NID-A10021",
      citizenName: "SYN Rahim Uddin",
      totalHoldingsCount: 1,
      totalEscrowedShare: 0.25,
      pendingMutationCasesCount: 1,
      activeEncumbranceCount: 0,
      holdings: [
        {
          holdingId: "SYN-H-1187",
          khatianNo: "1187",
          surveyType: "BS",
          daagNo: "452/1",
          mouza: "SYN-Savar",
          upazila: "Savar",
          district: "Dhaka",
          landClass: "Freehold Agricultural / Homestead",
          totalShare: 0.5,
          retainedShare: 0.25,
          escrowedShare: 0.25,
          escrowDeedNo: "SYN-D-0001",
          escrowBuyerNid: "SYN-NID-B20045",
          escrowBuyerName: "SYN Karim Hossain",
          mutationCaseNo: "MUT-2026-000001",
          jurisdictionOffice: "Savar AC Land & Registry",
          genesisSealHash: "0x8f3b890a2c09e4a1",
          status: "LOCKED_ESCROW",
        },
      ],
      milestones: [
        {
          step: 1,
          titleKey: "citizenLand.step1Title",
          descKey: "citizenLand.step1Desc",
          status: "COMPLETED",
          timestamp: "2026-10-14 11:30 AM",
        },
        {
          step: 2,
          titleKey: "citizenLand.step2Title",
          descKey: "citizenLand.step2Desc",
          status: "COMPLETED",
          timestamp: "2026-10-15 02:15 PM",
        },
        {
          step: 3,
          titleKey: "citizenLand.step3Title",
          descKey: "citizenLand.step3Desc",
          status: "IN_PROGRESS",
          timestamp: "2026-10-17 09:45 AM",
        },
        {
          step: 4,
          titleKey: "citizenLand.step4Title",
          descKey: "citizenLand.step4Desc",
          status: "PENDING",
        },
      ],
    },
  };
};
