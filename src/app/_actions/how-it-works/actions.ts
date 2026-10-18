"use server";

// Prototype Server Action Stubs for /how-it-works
// In this prototype phase, no backend calls are executed here.
// Interactions and mock state are handled on the client.

export interface ProtocolSpecQuery {
  deedId?: string;
  blockNumber?: number;
}

export interface VerificationAuditResponse {
  verified: boolean;
  blockHash?: string;
  timestamp?: string;
}

export const fetchProtocolSpec = async (
  _query: ProtocolSpecQuery
): Promise<VerificationAuditResponse> => {
  // Prototype stub declaration only
  return {
    verified: true,
    blockHash: "0x91ae...77cd",
    timestamp: new Date().toISOString(),
  };
};
