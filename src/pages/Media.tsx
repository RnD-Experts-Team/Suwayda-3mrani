import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React, { useState, useEffect, useCallback } from 'react';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import road from '@/assets/road.png';
import { useLanguage } from '@/LanguageContext';
import { X } from 'lucide-react';

const mediaData = {
  pageTitle: {
    en: "Media",
    ar: "الإعلام"
  },
  loadingMessages: {
    loadingGallery: {
      en: "Loading gallery...",
      ar: "جاري تحميل المعرض..."
    },
    loadingMore: {
      en: "Loading more...",
      ar: "جاري تحميل المزيد..."
    },
    scrollForMore: {
      en: "Scroll for more",
      ar: "مرر لرؤية المزيد"
    },
    noMoreItems: {
      en: "No more items to load",
      ar: "لا توجد عناصر أخرى للتحميل"
    },
    videoNotSupported: {
      en: "Your browser does not support the video tag.",
      ar: "متصفحك لا يدعم عنصر الفيديو."
    },
    closeModal: {
      en: "Close",
      ar: "إغلاق"
    }
  },
  mediaItems: [
    { id: 1, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop", alt: "Portrait photo 1", type: "image" },
    { id: 2, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop", alt: "Portrait photo 2", type: "image" },
    { id: 3, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop", alt: "Portrait photo 3", type: "image" },
    { id: 4, src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", alt: "Sample video 4", type: "video" },
    { id: 5, src: road, alt: "Portrait photo 5", type: "image" },
    { id: 6, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop", alt: "Portrait photo 6", type: "image" },
    { id: 7, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop", alt: "Portrait photo 7", type: "image" },
    { id: 8, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop", alt: "Portrait photo 8", type: "image" },
    { id: 9, src: road, alt: "Portrait photo 9", type: "image" },
    { id: 10, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop", alt: "Portrait photo 10", type: "image" },
    // Add more items for demonstration
    { id: 11, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop", alt: "Portrait photo 11", type: "image" },
    { id: 12, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop", alt: "Portrait photo 12", type: "image" },
    { id: 13, src: road, alt: "Portrait photo 13", type: "image" },
    { id: 14, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop", alt: "Portrait photo 14", type: "image" },
    { id: 15, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop", alt: "Portrait photo 15", type: "image" },
    { id: 16, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop", alt: "Portrait photo 16", type: "image" },
    { id: 17, src: "https://www.w3schools.com/html/mov_bbb.mp4", alt: "Sample video 17", type: "video" },
    { id: 18, src: road, alt: "Portrait photo 18", type: "image" },
    { id: 19, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop", alt: "Portrait photo 19", type: "image" },
    { id: 20, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop", alt: "Portrait photo 20", type: "image" },
  ]
};

const ITEMS_PER_PAGE = 6;

// Helper function to determine media type from URL
const getMediaType = (src: string): 'image' | 'video' => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
  const lowerSrc = src.toLowerCase();
  return videoExtensions.some(ext => lowerSrc.includes(ext)) ? 'video' : 'image';
};

export default function Media(): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const [items, setItems] = useState<typeof mediaData.mediaItems>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const fetchGalleryItems = useCallback(async (pageNum = 1) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const startIndex = (pageNum - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const pageItems = mediaData.mediaItems.slice(startIndex, endIndex);
      
      if (pageNum === 1) {
        setItems(pageItems);
        setInitialLoading(false);
      } else {
        setItems(prev => [...prev, ...pageItems]);
      }
      
      setHasMore(endIndex < mediaData.mediaItems.length);
      setPage(pageNum + 1);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    }
  }, []);

  const loadMore = useCallback(() => {
    return fetchGalleryItems(page);
  }, [fetchGalleryItems, page]);

  const { loadMoreRef, loading } = useInfiniteScroll(loadMore, hasMore);

  const openModal = (index: number) => {
    setSelectedMediaIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isModalOpen]);

  useEffect(() => {
    fetchGalleryItems(1);
  }, [fetchGalleryItems]);

  if (initialLoading) {
    return (
      <div className="flex flex-col items-start relative bg-background">
        <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-background">
          <main className="flex items-start justify-center px-4 sm:px-8 md:px-16 lg:px-40 py-5 flex-1 w-full">
            <div className="flex flex-col max-w-[960px] h-[695px] items-center justify-center flex-1">
              <div className="text-foreground text-xl">{mediaData.loadingMessages.loadingGallery[currentLanguage]}</div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-background">
        <main className="flex items-start justify-center px-4 sm:px-8 md:px-16 lg:px-40 py-5 flex-1 w-full">
          <div className="flex flex-col max-w-[960px] items-start flex-1">
            <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 w-full">
              <div className="flex flex-col w-full sm:w-72 items-start">
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] text-center w-full font-bold text-foreground text-2xl sm:text-[32px] leading-8 sm:leading-10">
                  {mediaData.pageTitle[currentLanguage]}
                </h2>
              </div>
            </div>

            <div className="gallery-container w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {items.map((item, index) => {
                  const mediaType = item.type || getMediaType(item.src);
                  
                  return (
                    <Card
                      key={item.id}
                      className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      onClick={() => openModal(index)}
                    >
                      <CardContent className="p-0">
                        {mediaType === 'video' ? (
                          <div className="relative aspect-video bg-black">
                            <video
                              src={item.src}
                              className="w-full h-full object-cover rounded-md"
                              preload="metadata"
                              muted
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-md">
                              <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[8px] border-l-black border-y-[6px] border-y-transparent ml-1"></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="aspect-video">
                            <img
                              src={item.src}
                              alt={item.alt}
                              className="w-full h-full rounded-md object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              {hasMore && (
                <div ref={loadMoreRef} className="load-more-trigger mt-8 text-center">
                  {loading ? (
                    <div className="text-foreground text-lg">{mediaData.loadingMessages.loadingMore[currentLanguage]}</div>
                  ) : (
                    <div className="text-muted-foreground text-lg">{mediaData.loadingMessages.scrollForMore[currentLanguage]}</div>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-80" 
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-4xl mx-4">
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-20 bg-card hover:bg-white/10"
              onClick={closeModal}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">{mediaData.loadingMessages.closeModal[currentLanguage]}</span>
            </Button>

            {/* Carousel */}
            <Carousel 
              className="w-full"
              opts={{
                startIndex: selectedMediaIndex,
                loop: true
              }}
            >
              <CarouselContent>
                {items.map((item, index) => {
                  const mediaType = item.type || getMediaType(item.src);
                  
                  return (
                    <CarouselItem key={item.id}>
                      <div className="flex items-center justify-center p-4">
                        {mediaType === 'video' ? (
                          <video
                            src={item.src}
                            className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg"
                            controls
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
                            src={item.src}
                            alt={item.alt}
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
