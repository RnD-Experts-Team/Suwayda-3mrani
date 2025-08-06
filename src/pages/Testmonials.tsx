import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/LanguageContext";
import { useParams } from "react-router-dom"; // Add this import
import { testimonialsApi } from "@/services/testmonialsApi";
import type { TestimonialData } from "@/types/testmonials";

// Fallback testimonial data
const fallbackTestimonialData: TestimonialData = {
  en: {
    title: "The Unseen Scars: A Survivor's Account",
    buttonText: "copy link",
    content: "My name is Anya Petrova, and I am a survivor of the atrocities that occurred in the region. I was just a young girl when the violence erupted, and my life was forever changed. I witnessed unspeakable acts of cruelty and lost many loved ones. The memories haunt me to this day, but I am sharing my story in the hope that it will help others understand the human cost of such conflicts and prevent similar tragedies from happening again. I remember the fear, the chaos, and the desperate struggle for survival. It was a time of immense suffering, but also of resilience and solidarity among those who endured together. We supported each other, shared what little we had, and held onto hope even in the darkest moments. This is my story, a testament to the strength of the human spirit in the face of adversity.",
    images: [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://images.unsplash.com/photo-1494790108755-2616c9c0b8d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop",
    ],
    survivorName: "Anya Petrova",
    survivorAge: 28,
    survivorLocation: "Village Al-Kafr",
    dateOfIncident: "2014-08-15",
    testimonyId: "testimony-fallback-001"
  },
  ar: {
    title: "الندوب الخفية: شهادة ناجية",
    buttonText: "نسخ الرابط",
    content: "اسمي أنيا بيتروفا، وأنا ناجية من الفظائع التي حدثت في المنطقة. كنت مجرد فتاة صغيرة عندما اندلع العنف، وتغيرت حياتي إلى الأبد. شهدت أعمال قسوة لا توصف وفقدت العديد من الأحباء. الذكريات تطاردني حتى اليوم، لكنني أشارك قصتي على أمل أن تساعد الآخرين على فهم التكلفة البشرية لمثل هذه الصراعات ومنع حدوث مآسي مماثلة مرة أخرى. أتذكر الخوف والفوضى والكفاح اليائس من أجل البقاء. كان وقتاً من المعاناة الشديدة، ولكن أيضاً من المرونة والتضامن بين أولئك الذين تحملوا معاً. دعمنا بعضنا البعض، وتقاسمنا القليل الذي كان لدينا، وتمسكنا بالأمل حتى في أحلك اللحظات. هذه قصتي، شهادة على قوة الروح البشرية في مواجهة الشدائد.",
    images: [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://images.unsplash.com/photo-1494790108755-2616c9c0b8d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop",
    ],
    survivorName: "Anya Petrova",
    survivorAge: 28,
    survivorLocation: "Village Al-Kafr",
    dateOfIncident: "2014-08-15",
    testimonyId: "testimony-fallback-001"
  }
};



const Testimonials = (): React.ReactElement => {
  const { currentLanguage } = useLanguage();
  const { storyId } = useParams<{ storyId?: string }>(); // Get story ID from URL
  const [testimonialData, setTestimonialData] = useState<TestimonialData>(fallbackTestimonialData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Fetch testimony data from API
  useEffect(() => {
    const fetchTestimonyData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await testimonialsApi.getTestimonyData(storyId);// Pass storyId to API
        setTestimonialData(data);
      } catch (err) {
        console.error('Failed to fetch testimony data:', err);
        setError('Failed to load testimony data. Using fallback content.');
        // Keep using fallback data on error
        setTestimonialData(fallbackTestimonialData);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonyData();
  }, [storyId]);

  // Get current language data
  const currentData = testimonialData[currentLanguage as keyof typeof testimonialData] || testimonialData.en;

  // Function to check if URL is a video
  const isVideoUrl = (url: string) => {
    return (
      url.includes(".mp4") || url.includes(".webm") || url.includes(".ogg")
    );
  };

  // Function to copy current page URL to clipboard
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      // Reset the success state after 2 seconds
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy link: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-foreground">Loading testimony...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start relative bg-background">
      {/* Error message */}
      {error && (
        <div className="w-full px-4 py-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-card">
        <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          {/* Main Content */}
          <main className="items-start justify-center px-2 md:px-4 lg:px-8 py-5 flex-1 grow flex relative self-stretch w-full">
            <div className="flex flex-col w-full max-w-7xl items-start relative flex-1 grow">
              {/* Article Title */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-start pt-5 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-xl sm:text-2xl md:text-[28px] tracking-[0] leading-tight md:leading-[35px] flex-1">
                  {currentData.title}
                </h2>
                <Button
                  variant="outline"
                  className="h-8 px-4 py-0 bg-primary text-primary-foreground rounded-2xl border-none min-w-[84px] max-w-[480px] mt-2 sm:mt-0 sm:ml-4"
                  onClick={handleCopyLink}
                >
                  <span className="text-sm text-center leading-[21px] [font-family:'Newsreader-Medium',Helvetica] font-medium truncate">
                    {copySuccess ? (currentLanguage === 'ar' ? 'تم النسخ!' : 'Copied!') : currentData.buttonText}
                  </span>
                </Button>
              </div>

              {/* Survivor Information Card */}
              <div className="flex flex-col items-start pt-1 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <Card className="w-full bg-muted/50 border border-border">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="font-semibold text-foreground">
                          {currentLanguage === 'ar' ? 'الناجي:' : 'Survivor:'} 
                        </span>
                        <span className="ml-2 text-muted-foreground">{currentData.survivorName}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">
                          {currentLanguage === 'ar' ? 'العمر وقت الحادث:' : 'Age at incident:'} 
                        </span>
                        <span className="ml-2 text-muted-foreground">{currentData.survivorAge}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">
                          {currentLanguage === 'ar' ? 'الموقع:' : 'Location:'} 
                        </span>
                        <span className="ml-2 text-muted-foreground">{currentData.survivorLocation}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">
                          {currentLanguage === 'ar' ? 'تاريخ الحادث:' : 'Date of incident:'} 
                        </span>
                        <span className="ml-2 text-muted-foreground">
                          {new Date(currentData.dateOfIncident).toLocaleDateString(
                            currentLanguage === 'ar' ? 'ar-SA' : 'en-US',
                            { year: 'numeric', month: 'long', day: 'numeric' }
                          )}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Image/Video Carousel */}
              <div className="relative self-stretch w-full flex-[0_0_auto] mb-4">
                <Carousel
                  className="w-full"
                  opts={{
                    direction: currentLanguage === "ar" ? "rtl" : "ltr",
                  }}
                >
                  <CarouselContent>
                    {currentData.images.map((media, index) => (
                      <CarouselItem key={index}>
                        <Card className="relative self-stretch w-full flex-[0_0_auto] bg-transparent border-0">
                          <CardContent className="p-0">
                            {isVideoUrl(media) ? (
                              <video
                                className="w-full h-auto object-cover rounded-lg"
                                controls
                                preload="metadata"
                              >
                                <source src={media} type="video/mp4" />
                                {currentLanguage === 'ar' 
                                  ? 'متصفحك لا يدعم عنصر الفيديو.' 
                                  : 'Your browser does not support the video tag.'
                                }
                              </video>
                            ) : (
                              <img
                                className="w-full h-auto object-cover rounded-lg"
                                alt={`Testimonial media ${index + 1}`}
                                src={media}
                              />
                            )}
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* Hide carousel buttons on small screens (sm and below) */}
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel>
              </div>

              {/* Article Content */}
              <div className="flex flex-col items-start pt-1 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <div 
                  className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 whitespace-pre-line"
                >
                  {currentData.content}
                </div>
              </div>
            </div>
          </main>
        </header>
      </div>
    </div>
  );
};

export default Testimonials;
