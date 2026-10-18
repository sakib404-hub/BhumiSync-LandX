"use server";

export interface PlotDossierQueryParams {
  plotId: string;
  mouza?: string;
  khatian?: string;
}

export interface PlotDossierResult {
  success: boolean;
  plotId: string;
  mouza: string;
  daag: string;
  khatian: string;
  district: string;
  upazila: string;
  totalHolding: number;
  lockedShare: number;
  availableShare: number;
  riskGrade: string;
  status: "LOCKED" | "CLEAR" | "DISPUTED";
}

/**
 * Prototype Server Action: Query Cadastral Plot Dossier by Plot ID
 * (Prototype phase stub - live resolution currently mock-simulated on client)
 */
export const getPlotDossier = async (
  _params: PlotDossierQueryParams
): Promise<PlotDossierResult> => {
  // Prototype stub declaration only
  return {
    success: true,
    plotId: _params.plotId || "452-1",
    mouza: "SYN-Savar",
    daag: "452/1",
    khatian: "1187 (BS)",
    district: "Dhaka",
    upazila: "Savar",
    totalHolding: 1.0,
    lockedShare: 0.25,
    availableShare: 0.75,
    riskGrade: "B+",
    status: "LOCKED",
  };
};

/**
 * Prototype Server Action: Generate & Sign Verification PDF Dossier
 * (Prototype phase stub - live resolution currently mock-simulated on client)
 */
export const generatePlotVerificationPdf = async (
  _plotId: string
): Promise<{ success: boolean; pdfUrl?: string; hash?: string }> => {
  // Prototype stub declaration only
  return {
    success: true,
    pdfUrl: `/dossiers/plot-${_plotId}.pdf`,
    hash: "0x91ae32b84e45c77cd100021b4a7090885e3b128509cfa3610928db018",
  };
};
