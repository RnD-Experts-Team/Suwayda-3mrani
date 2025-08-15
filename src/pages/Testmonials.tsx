import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ShareDialog from '@/components/ShareDialog';
import { useLanguage } from '@/LanguageContext';
import { useParams } from 'react-router-dom';
import { testimonialsApi } from '@/services/testmonialsApi';
import type { TestimonialData } from '@/types/testmonials';

/*──────────────────────────  Reusable UI states  ──────────────────────────*/
const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-background px-4">
    <div className="text-center max-w-md">
      <svg
        className="mx-auto h-16 w-16 text-muted-foreground mb-6"
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
      <h2 className="text-2xl font-bold text-foreground mb-4">Unable to Load Testimony</h2>
      <p className="text-muted-foreground mb-8">
        We're having trouble connecting to our servers. Please check your internet
        connection and try again.
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring transition-colors"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4" />
    <p className="text-foreground">Loading testimony...</p>
  </div>
);

/*───────────────────────────  Component  ───────────────────────────*/
type MediaItem = { url: string; type: 'image' | 'video' };

const Testimonials = (): React.ReactElement => {
  const { currentLanguage } = useLanguage();
  const { storyId } = useParams<{ storyId?: string }>();

  const [testimonialData, setTestimonialData] = useState<TestimonialData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /*──────────────  Data fetching  ─────────────*/
  const fetchTestimonyData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await testimonialsApi.getTestimonyData(storyId);
      setTestimonialData(data);
    } catch (err) {
      console.error('Failed to fetch testimony data:', err);
      setError(true);
      setTestimonialData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyId]);

  const handleRetry = () => fetchTestimonyData();

  /*──────────────  Helpers  ─────────────*/
  const extractIntroContent = (content: string) => content.split('\n')[0]?.trim() ?? '';

  /*──────────────  UI states  ─────────────*/
  if (loading) return <LoadingState />;
  if (error || !testimonialData) return <ErrorState onRetry={handleRetry} />;

  const currentData =
    testimonialData[currentLanguage as keyof TestimonialData] ?? testimonialData.en;

  /* Build unified media list preserving the order: images first, then videos */
  const mediaList: MediaItem[] = [
    ...currentData.images.map((url) => ({ url, type: 'image' as const })),
    ...currentData.videos.map((url) => ({ url, type: 'video' as const })),
  ];

  return (
    <div className="flex flex-col items-start bg-background">
      <div className="flex flex-col min-h-[800px] w-full bg-card">
        {/*────────────────────────  Header  ────────────────────────*/}
        <main className="flex flex-col w-full max-w-7xl mx-auto px-2 md:px-4 lg:px-8 py-5 flex-1">
          {/* Title & Share */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-xl sm:text-2xl md:text-[28px] leading-tight flex-1">
              {currentData.title}
            </h2>
            <ShareDialog buttonText={currentData.buttonText} title={currentData.title} />
          </div>

          {/*──────────  Carousel  ──────────*/}
          {mediaList.length > 0 && (
            <div className="mb-4">
              <Carousel
                className="w-full"
                opts={{ direction: currentLanguage === 'ar' ? 'rtl' : 'ltr' }}
              >
                <CarouselContent>
                  {mediaList.map(({ url, type }, idx) => (
                    <CarouselItem key={`${type}-${idx}`}>
                      <Card className="bg-transparent border-0">
                        <CardContent className="p-0">
                          {type === 'image' ? (
                            <img
                              src={url}
                              alt={`Testimonial media ${idx + 1}`}
                              className="w-full h-auto object-cover rounded-lg"
                            />
                          ) : (
                            <div className="aspect-video min-h-[400px] w-full">
                              <iframe
                                src={url}
                                title={`Testimonial video ${idx + 1}`}
                                className="w-full h-full rounded-lg border-none"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                loading="lazy"
                                style={{ aspectRatio: '16/9' }}
                              />
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Hide arrows on small screens */}
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          )}

          {/*──────────  Intro Paragraph  ──────────*/}
          <div className="px-1 sm:px-2">
            <p className="[font-family:'Newsreader-Regular',Helvetica] text-foreground text-sm sm:text-base leading-5 sm:leading-6 whitespace-pre-line">
              {extractIntroContent(currentData.content)}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Testimonials;
