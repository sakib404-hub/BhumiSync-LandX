"use server";

/**
 * Prototype Server Actions: Citizen Registration
 * Per Rule 2: Prototype phase stubs only, no implementation code yet.
 */

export const registerCitizen = async (_formData: {
  fullName: string;
  phone: string;
  nid: string;
  email: string;
}) => {
  return { success: true };
};
