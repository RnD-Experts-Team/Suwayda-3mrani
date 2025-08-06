// Common helper
export interface LangText {
  en: string;
  ar: string;
}

/* ───────────────────────── Sections ───────────────────────── */

export interface SimpleSection {
  title: LangText;
  description: LangText;
}

/* Archive-purpose list item */
export interface PurposeItem {
  number: string;          // “1”, “2”, …
  title: LangText;         // “Documentation”, “Education”, …
  description: LangText;
}

export interface ArchivePurposeSection extends SimpleSection {
  items: PurposeItem[];
}

/* Key-facts card */
export interface Fact {
  label: LangText;
  value: LangText;
  secondLabel: LangText;   // may be empty
  secondValue: LangText;   // may be empty
}

export interface KeyFactsSection {
  title: LangText;
  facts: Fact[];
}

/* Entire API payload */
export interface CrisesArchiveData {
  aboutSection: SimpleSection;
  historicalContext: SimpleSection;
  affectedCommunity: SimpleSection;
  archivePurpose: ArchivePurposeSection;
  keyFacts: KeyFactsSection;
  missionStatement: SimpleSection;
}
