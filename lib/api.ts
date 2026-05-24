import { PredictionResult } from "@/types";

export async function scanSQLi(text: string): Promise<PredictionResult> {
  const response = await fetch("/api/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze payload");
  }

  return response.json();
}
