import React from "react";
import Suggestion from "./Suggestion";

interface SuggestionData {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "default" | "outline";
  action_link?: string;

}

interface SuggestionItem {
  en: SuggestionData;
  ar: SuggestionData;
}

interface SuggestionListProps {
  suggestions: SuggestionItem[];
}

export default function SuggestionList({ suggestions }: SuggestionListProps): React.ReactElement {
  return (
    <>
      {suggestions.map((suggestion, index) => (
        <Suggestion key={index} {...suggestion} />
      ))}
    </>
  );
}