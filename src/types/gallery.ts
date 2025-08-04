// Helper for bilingual strings
export interface LangText {
  en: string;
  ar: string;
}

/* ───────────── Loading-messages block ───────────── */
export interface LoadingMessages {
  loadingGallery: LangText;
  loadingMore: LangText;
  scrollForMore: LangText;
  noMoreItems: LangText;
  videoNotSupported: LangText;
  closeModal: LangText;
}

/* ───────────── Single media item ───────────── */
export interface MediaItem {
  id: number | string;
  src: string;
  alt: string;
  type: "image" | "video";          // pre-tagged or inferred on the client
}

/* ───────────── Entire API payload ───────────── */
export interface MediaPageData {
  pageTitle: LangText;
  loadingMessages: LoadingMessages;
  mediaItems: MediaItem[];
}
