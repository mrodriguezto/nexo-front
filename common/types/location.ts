export type PlaceType = {
  description: string;
  structured_formatting: StructuredFormatting;
};

export type StructuredFormatting = {
  main_text: string;
  secondary_text: string;
  main_text_matched_substrings: readonly MainTextMatchedSubstrings[];
};
export type MainTextMatchedSubstrings = {
  offset: number;
  length: number;
};
