export interface PredictionResult {
  input: string;
  cleaned_input: string;
  is_sqli: boolean;
}
