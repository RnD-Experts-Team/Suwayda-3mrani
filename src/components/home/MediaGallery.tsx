import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/LanguageContext';
import { ArrowRight, X, ExternalLink, Play, ArrowLeft } from 'lucide-react';


interface MediaItem {
  url: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  sourceUrl: string | null;
  type: 'image' | 'video';
}


interface MediaGalleryData {
  title: {
    en: string;
    ar: string;
  };
  mediaItems: MediaItem[];
}


interface MediaGalleryProps {
  data: MediaGalleryData;
}


export default function MediaGallery({ data }: MediaGalleryProps): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedMedia) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      
      // Cleanup function to restore original overflow
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedMedia]);
  
  // Limit media items to maximum 7
  const limitedMediaItems = data.mediaItems.slice(0, 7);
  
  const openDialog = (mediaItem: MediaItem) => {
    setSelectedMedia(mediaItem);
  };
  
  const closeDialog = () => {
    setSelectedMedia(null);
  };
  
  return (
    <>
      <div className="flex flex-col items-start p-4 w-full">
        {/* Title and View All Link */}
        <div className="flex items-center justify-between w-full mb-6">
          <h2 className="text-foreground font-bold text-2xl leading-8 [font-family:'Newsreader-Bold',Helvetica]">
            {data.title[currentLanguage]}
          </h2>
          
          <Link to="/gallery">
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground transition-colors p-0 h-auto"
            >
              <span className="[font-family:'Newsreader-Medium',Helvetica] font-medium text-sm mr-2">
                {currentLanguage === 'en' ? 'View Media' : 'عرض الوسائط'}
              </span>
              {currentLanguage === 'en' ? (
                <ArrowRight className="h-4 w-4" />
              ) : (
                <ArrowLeft className="h-4 w-4" />
              )}
            </Button>
          </Link>
        </div>
        
        {/* Horizontal Scrolling Gallery */}
        {limitedMediaItems.length > 0 ? (
          <div className="w-full pb-4">
            <ScrollArea dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="w-full whitespace-nowrap">
              <div className={`flex w-max p-1 pb-3 ${
                currentLanguage === 'ar' 
                  ? 'space-x-4' 
                  : 'space-x-4'
              }`}>
                {limitedMediaItems.map((mediaItem, index) => (
                  <Card 
                    key={index} 
                    className="!m-2 bg-card border-border rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 flex-shrink-0 shadow-sm cursor-pointer"
                  >
                    <CardContent className="p-0" onClick={() => openDialog(mediaItem)}>
                      <div className="w-[350px] h-[350px] relative">
                        {mediaItem.type === 'image' ? (
                          <img
                            src={mediaItem.url}
                            alt={mediaItem.title[currentLanguage]}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/placeholder-image.jpg';
                            }}
                          />
                        ) : (
                          <div className="relative w-full h-full">
                            <iframe
                              src={mediaItem.url}
                              className="w-full h-full object-cover border-none pointer-events-none"
                              loading="lazy"
                              title={mediaItem.title[currentLanguage]}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                              <Play className="h-12 w-12 text-white" />
                            </div>
                            <div 
                              className="absolute inset-0 cursor-pointer"
                              onClick={() => openDialog(mediaItem)}
                            />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="mt-2" />
            </ScrollArea>
          </div>
        ) : (
          <div className="w-full text-center py-8">
            <p className="text-muted-foreground font-normal text-base [font-family:'Newsreader-Regular',Helvetica]">
              {currentLanguage === 'en' ? 'No media to display' : 'لا توجد وسائط للعرض'}
            </p>
          </div>
        )}
      </div>
      
      {/* Dialog Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeDialog}>
          <div 
            className="bg-card border-border rounded-xl max-w-6xl max-h-[95vh] w-full h-full mx-4 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dialog Header */}
            <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
              <h3 className="text-foreground font-bold text-xl [font-family:'Newsreader-Bold',Helvetica]">
                {selectedMedia.title[currentLanguage]}
              </h3>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={closeDialog}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Dialog Content */}
            <div className="p-4 overflow-y-auto flex-1 flex flex-col">
              {/* Media Display */}
              <div className="mb-4 flex-1 flex items-center justify-center">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title[currentLanguage]}
                    className="w-full h-full object-contain rounded-lg max-h-[60vh]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder-image.jpg';
                    }}
                  />
                ) : (
                  <div className="w-full h-full max-h-[60vh] min-h-[400px]">
                    <iframe
                      src={selectedMedia.url}
                      className="w-full h-full rounded-lg border-none"
                      title={selectedMedia.title[currentLanguage]}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{
                        aspectRatio: '16/9'
                      }}
                    />
                  </div>
                )}
              </div>
              
              {/* Description */}
              <div className="mb-4 flex-shrink-0">
                <h4 className="text-foreground font-semibold text-lg mb-2 [font-family:'Newsreader-Bold',Helvetica]">
                  {currentLanguage === 'en' ? 'Description' : 'الوصف'}
                </h4>
                <p className="text-muted-foreground [font-family:'Newsreader-Regular',Helvetica] leading-relaxed">
                  {selectedMedia.description[currentLanguage]}
                </p>
              </div>
              
              {/* Source Link */}
              {selectedMedia.sourceUrl && (
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-muted-foreground [font-family:'Newsreader-Medium',Helvetica] font-medium">
                    {currentLanguage === 'en' ? 'Source:' : 'المصدر:'}
                  </span>
                  <a 
                    href={selectedMedia.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 [font-family:'Newsreader-Medium',Helvetica]"
                  >
                    {currentLanguage === 'en' ? 'View Original' : 'عرض المصدر'}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
