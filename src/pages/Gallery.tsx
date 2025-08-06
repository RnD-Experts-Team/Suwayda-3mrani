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

/* ────────── FALLBACK DATA (complete fallback object) ────────── */
const fallbackMediaData: MediaPageData = {
  pageTitle: {
    en: "Media",
    ar: "الإعلام",
  },
  loadingMessages: {
    loadingGallery: { en: "Loading gallery...", ar: "جاري تحميل المعرض..." },
    loadingMore: { en: "Loading more...", ar: "جاري تحميل المزيد..." },
    scrollForMore: { en: "Scroll for more", ar: "مرر لرؤية المزيد" },
    noMoreItems: { en: "No more items to load", ar: "لا توجد عناصر أخرى للتحميل" },
    videoNotSupported: { en: "Your browser does not support the video tag.", ar: "متصفحك لا يدعم عنصر الفيديو." },
    closeModal: { en: "Close", ar: "إغلاق" },
  },
  mediaItems: [
    { id: 1, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop", alt: "Portrait photo 1", type: "image" },
    { id: 2, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop", alt: "Portrait photo 2", type: "image" },
    { id: 3, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop", alt: "Portrait photo 3", type: "image" },
    { id: 4, src: "https://www.w3schools.com/html/mov_bbb.mp4", alt: "Sample video 4", type: "video" },
    { id: 5, src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop", alt: "Portrait photo 5", type: "image" },
    { id: 6, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop", alt: "Portrait photo 6", type: "image" },
    { id: 7, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop", alt: "Portrait photo 7", type: "image" },
    { id: 8, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop", alt: "Portrait photo 8", type: "image" },
    { id: 9, src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop", alt: "Portrait photo 9", type: "image" },
    { id: 10, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop", alt: "Portrait photo 10", type: "image" },
    { id: 11, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop", alt: "Portrait photo 11", type: "image" },
    { id: 12, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop", alt: "Portrait photo 12", type: "image" },
    { id: 13, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop", alt: "Portrait photo 13", type: "image" },
    { id: 14, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop", alt: "Portrait photo 14", type: "image" },
    { id: 15, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop", alt: "Portrait photo 15", type: "image" },
    { id: 16, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop", alt: "Portrait photo 16", type: "image" },
    { id: 17, src: "https://www.w3schools.com/html/mov_bbb.mp4", alt: "Sample video 17", type: "video" },
    { id: 18, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop", alt: "Portrait photo 18", type: "image" },
    { id: 19, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop", alt: "Portrait photo 19", type: "image" },
    { id: 20, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop", alt: "Portrait photo 20", type: "image" },
  ],
};

/* Helper – infer type if not pre-tagged */
const getMediaType = (src: string): "image" | "video" => {
  const videoExt = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
  return videoExt.some((ext) => src.toLowerCase().includes(ext)) ? "video" : "image";
};

export default function Media(): React.ReactElement {
  const { currentLanguage } = useLanguage();

  /* ─── Data-level state ─── */
  const [mediaData, setMediaData] = useState<MediaPageData>(fallbackMediaData);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  /* ─── UI/scroll state ─── */
  const [items, setItems] = useState<MediaItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);

  /* ─── Modal state ─── */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const [error, setError] = useState<string | null>(null);

  /* ─────────────────────────────────────────
     FETCH WHOLE MEDIA PAGE DATA FROM API
  ───────────────────────────────────────── */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const apiPayload = await mediaApi.getMediaData();
        setMediaData(apiPayload);
      } catch {
        setError("Failed to load media. Showing fallback content.");
        setMediaData(fallbackMediaData);
      } finally {
        setDataLoaded(true);
      }
    };
    fetchData();
  }, []);

  /* ─────────────────────────────────────────
     PAGINATION / INFINITE-SCROLL SLICE
  ───────────────────────────────────────── */
  const sliceItems = useCallback(
    async (pageNum = 1) => {
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
    if (dataLoaded) {
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
  if (!dataLoaded || initialLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-foreground">
  {dataLoaded
    ? (mediaData.loadingMessages?.loadingGallery ??
       fallbackMediaData.loadingMessages.loadingGallery)[currentLanguage]
    : "Loading…"}
</p>

      </div>
    );
  }

  return (
    <div className="flex flex-col items-start bg-background">
      {/* error banner */}
      {error && (
        <div className="w-full px-4 py-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="flex flex-col min-h-[800px] items-start w-full bg-background">
        <main className="flex w-full justify-center px-4 sm:px-8 md:px-16 lg:px-40 py-5 flex-1">
          <div className="flex flex-col max-w-[960px] w-full">
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
