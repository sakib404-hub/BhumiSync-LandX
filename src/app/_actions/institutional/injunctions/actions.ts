"use server";

export async function recordInjunctionAction(formData: FormData) {
  // Prototype stub - implementation handled on client during prototype phase
  return { success: true, timestamp: new Date().toISOString() };
}

export async function liftInjunctionAction(caseId: string) {
  // Prototype stub - implementation handled on client during prototype phase
  return { success: true, liftedId: caseId };
}
