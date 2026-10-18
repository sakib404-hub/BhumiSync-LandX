"use server";

/**
 * BhumiSync — Sub-Registrar Parties Directory Server Actions Prototype
 * Follows Rule 2: Prototype Phase Rule (Stubs only)
 */

export const enrollPartyProfile = async (_partyData: {
  fullName: string;
  sovereignNid: string;
  phoneNumber: string;
  role: string;
  biometricTokenAcquired: boolean;
}) => {
  return {
    success: true,
    partyId: "SYN-PTY-00982",
    status: "ENROLLED_PENDING_NOTARIZATION",
  };
};

export const verifySovereignNid = async (_nid: string) => {
  return {
    success: true,
    exists: true,
    associatedDaag: "452/1",
    ownerName: "SYN Rahim Uddin",
    pendingDeedsCount: 1,
    ecDatabaseStatus: "VERIFIED",
  };
};

export const exportPartiesCsv = async () => {
  return {
    success: true,
    fileUrl: "/reports/parties-directory-savar-export.csv",
  };
};

export const exportPartiesAuditLog = async () => {
  return {
    success: true,
    fileUrl: "/reports/parties-audit-log-savar.pdf",
  };
};
