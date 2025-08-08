import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, {
  useState,
  useEffect,
  useCallback,
} from "react";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useLanguage } from "@/LanguageContext";
import { X } from "lucide-react";
import { mediaApi } from "@/services/galleryApi";
import type { MediaPageData, MediaItem } from "@/types/gallery";

/* ────────── CONSTANTS ────────── */
const ITEMS_PER_PAGE = 6;

// Error component for when API fails
const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-background px-4">
    <div className="text-center max-w-md">
      <div className="mb-6">
        <svg 
          className="mx-auto h-16 w-16 text-muted-foreground" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1} 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Unable to Load Media Gallery
      </h2>
      <p className="text-muted-foreground mb-8">
        We're having trouble connecting to our servers. Please check your internet connection and try again.
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring transition-colors"
      >
        <svg 
          className="mr-2 h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
          />
        </svg>
        Refresh Page
      </button>
    </div>
  </div>
);

// Loading component
const LoadingState = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
    <p className="text-foreground">Loading media gallery...</p>
  </div>
);

/* Helper – infer type if not pre-tagged */
const getMediaType = (src: string): "image" | "video" => {
  const videoExt = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
  return videoExt.some((ext) => src.toLowerCase().includes(ext)) ? "video" : "image";
};

export default function Media(): React.ReactElement {
  const { currentLanguage } = useLanguage();

  /* ─── Data-level state ─── */
  const [mediaData, setMediaData] = useState<MediaPageData | null>(null);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  /* ─── UI/scroll state ─── */
  const [items, setItems] = useState<MediaItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);

  /* ─── Modal state ─── */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  /* ─────────────────────────────────────────
     FETCH WHOLE MEDIA PAGE DATA FROM API
  ───────────────────────────────────────── */
  const fetchData = async () => {
    try {
      setError(false);
      const apiPayload = await mediaApi.getMediaData();
      setMediaData(apiPayload);
    } catch (err) {
      console.error("Failed to fetch media data:", err);
      setError(true);
      setMediaData(null);
    } finally {
      setDataLoaded(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle retry
  const handleRetry = () => {
    setDataLoaded(false);
    setInitialLoading(true);
    setItems([]);
    setPage(1);
    setHasMore(true);
    fetchData();
  };

  /* ─────────────────────────────────────────
     PAGINATION / INFINITE-SCROLL SLICE
  ───────────────────────────────────────── */
  const sliceItems = useCallback(
    async (pageNum = 1) => {
      if (!mediaData) return;

      /* simulate latency for UX parity */
      await new Promise((r) => setTimeout(r, 400));

      const srcArr = mediaData.mediaItems;
      const start = (pageNum - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const pageSlice = srcArr.slice(start, end);

      if (pageNum === 1) {
        setItems(pageSlice);
      } else {
        setItems((prev) => [...prev, ...pageSlice]);
      }

      setHasMore(end < srcArr.length);
      setPage(pageNum + 1);
      setInitialLoading(false);
    },
    [mediaData],
  );

  /* load first page whenever mediaData changes AND data is loaded */
  useEffect(() => {
    if (dataLoaded && mediaData) {
      setInitialLoading(true);
      setItems([]);
      setPage(1);
      setHasMore(true);
      sliceItems(1);
    }
  }, [mediaData, dataLoaded, sliceItems]);

  const loadMore = useCallback(
    () => sliceItems(page),
    [page, sliceItems],
  );

  const { loadMoreRef, loading } = useInfiniteScroll(loadMore, hasMore);

  /* ────────── Modal helpers ────────── */
  const openModal = (idx: number) => {
    setSelectedMediaIndex(idx);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  /* Close modal on ESC */
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    if (isModalOpen) {
      document.addEventListener("keydown", onEsc);
      return () => document.removeEventListener("keydown", onEsc);
    }
  }, [isModalOpen]);

  /* ────────── RENDER ────────── */
  // Show loading state
  if (!dataLoaded || initialLoading) {
    return <LoadingState />;
  }

  // Show error state
  if (error || !mediaData) {
    return <ErrorState onRetry={handleRetry} />;
  }

  return (
    <div className="flex flex-col items-start bg-background">
      <div className="flex flex-col min-h-[800px] items-start w-full bg-background">
        <main className="flex w-full justify-center px-2 md:px-4 lg:px-8 py-5 flex-1">
          <div className="flex flex-col w-full max-w-7xl">
            {/* page title */}
            <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 w-full">
              <div className="flex flex-col w-full sm:w-72 items-start">
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] text-center w-full font-bold text-foreground text-2xl sm:text-[32px] leading-8 sm:leading-10">
                  {mediaData.pageTitle[currentLanguage]}
                </h2>
              </div>
            </div>

            {/* gallery grid */}
            <div className="gallery-container w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {items.map((itm, idx) => {
                  const type = itm.type || getMediaType(itm.src);
                  return (
                    <Card
                      key={itm.id}
                      onClick={() => openModal(idx)}
                      className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    >
                      <CardContent className="p-0">
                        {type === "video" ? (
                          <div className="relative aspect-video bg-black">
                            <video
                              src={itm.src}
                              preload="metadata"
                              muted
                              className="w-full h-full object-cover rounded-md"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-md">
                              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[8px] border-y-[6px] border-y-transparent border-l-black ml-1" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="aspect-video">
                            <img
                              src={itm.src}
                              alt={itm.alt}
                              className="w-full h-full rounded-md object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* infinite-scroll sentinel / messages */}
              {hasMore && (
                <div ref={loadMoreRef} className="load-more-trigger mt-8 text-center">
                  {loading ? (
                    <div className="text-foreground text-lg">
                      {mediaData.loadingMessages.loadingMore[currentLanguage]}
                    </div>
                  ) : (
                    <div className="text-muted-foreground text-lg">
                      {mediaData.loadingMessages.scrollForMore[currentLanguage]}
                    </div>
                  )}
                </div>
              )}

              {!hasMore && (
                <div className="text-muted-foreground text-center mt-8">
                  {mediaData.loadingMessages.noMoreItems[currentLanguage]}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* ───────────── MODAL / CAROUSEL ───────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={closeModal}
          />
          <div className="relative z-10 w-full max-w-4xl mx-4">
            {/* close btn */}
            <Button
              variant="outline"
              size="icon"
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-card hover:bg-white/10"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">
                {mediaData.loadingMessages.closeModal[currentLanguage]}
              </span>
            </Button>

            {/* carousel */}
            <Carousel
              className="w-full"
              opts={{ startIndex: selectedMediaIndex, loop: true }}
            >
              <CarouselContent>
                {items.map((itm) => {
                  const type = itm.type || getMediaType(itm.src);
                  return (
                    <CarouselItem key={itm.id}>
                      <div className="flex items-center justify-center p-4">
                        {type === "video" ? (
                          <video
                            src={itm.src}
                            controls
                            className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg"
                            style={{
                              aspectRatio: 'auto',
                              maxWidth: '100%',
                              maxHeight: '80vh'
                            }}
                          >
                            {mediaData.loadingMessages.videoNotSupported[currentLanguage]}
                          </video>
                        ) : (
                          <img
                            src={itm.src}
                            alt={itm.alt}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg"
                          />
                        )}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}
