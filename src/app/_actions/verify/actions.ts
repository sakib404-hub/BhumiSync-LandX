"use server";

export interface CadastralSearchParams {
  district: string;
  upazila: string;
  mouza: string;
  daag: string;
  surveyType?: "BS" | "RS" | "CS";
  khatian?: string;
}

export interface CadastralSearchResult {
  success: boolean;
  parcelId?: string;
  mouza?: string;
  daag?: string;
  khatian?: string;
  seller?: string;
  share?: string;
  status?: "VERIFIED" | "ENCUMBERED" | "DISPUTED";
  error?: string;
}

/**
 * Prototype Server Action: Query Cadastral Ledger Node
 * (Prototype phase stub - live resolution currently mock-simulated on client)
 */
export const searchCadastralParcel = async (
  _params: CadastralSearchParams
): Promise<CadastralSearchResult> => {
  // Prototype stub declaration only
  return {
    success: true,
    parcelId: "SYN-D-0001",
    mouza: "SYN-Savar",
    daag: "452/1",
    khatian: "1187 (BS)",
    seller: "SYN Rahim Uddin",
    share: "0.2500",
    status: "VERIFIED",
  };
};

/**
 * Prototype Server Action: Verify Deed QR Payload
 * (Prototype phase stub - live resolution currently mock-simulated on client)
 */
export const verifyDeedQrPayload = async (
  _qrPayload: string
): Promise<{ success: boolean; deedId?: string; hash?: string; valid?: boolean }> => {
  // Prototype stub declaration only
  return {
    success: true,
    deedId: "SYN-D-0001",
    hash: "0x8f2c0de91ae32b84e45c77cd100021b4a7090885e3b128509cfa3610928db018",
    valid: true,
  };
};
