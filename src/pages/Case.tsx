import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/LanguageContext";
import { useParams } from "react-router-dom";
import { caseApi } from "@/services/caseApi";
import type { CaseData } from "@/types/case";

// Fallback data
const fallbackCaseData: CaseData = {
  en: {
    title: "The Unseen Scars: A Survivor's Account",
    content: "My name is Anya Petrova, and I am a survivor of the atrocities that occurred in the region. I was just a young girl when the violence erupted, and my life was forever changed. I witnessed unspeakable acts of cruelty and lost many loved ones. The memories haunt me to this day, but I am sharing my story in the hope that it will help others understand the human cost of such conflicts and prevent similar tragedies from happening again. I remember the fear, the chaos, and the desperate struggle for survival. It was a time of immense suffering, but also of resilience and solidarity among those who endured together. We supported each other, shared what little we had, and held onto hope even in the darkest moments. This is my story, a testament to the strength of the human spirit in the face of adversity.",
    images: [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://images.unsplash.com/photo-1494790108755-2616c9c0b8d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop",
    ]
  },
  ar: {
    title: "الندوب الخفية: شهادة ناجية",
    content: "اسمي أنيا بيتروفا، وأنا ناجية من الفظائع التي حدثت في المنطقة. كنت مجرد فتاة صغيرة عندما اندلع العنف، وتغيرت حياتي إلى الأبد. شهدت أعمال قسوة لا توصف وفقدت العديد من الأحباء. الذكريات تطاردني حتى اليوم، لكنني أشارك قصتي على أمل أن تساعد الآخرين على فهم التكلفة البشرية لمثل هذه الصراعات ومنع حدوث مآسي مماثلة مرة أخرى. أتذكر الخوف والفوضى والكفاح اليائس من أجل البقاء. كان وقتاً من المعاناة الشديدة، ولكن أيضاً من المرونة والتضامن بين أولئك الذين تحملوا معاً. دعمنا بعضنا البعض، وتقاسمنا القليل الذي كان لدينا، وتمسكنا بالأمل حتى في أحلك اللحظات. هذه قصتي، شهادة على قوة الروح البشرية في مواجهة الشدائد.",
    images: [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://images.unsplash.com/photo-1494790108755-2616c9c0b8d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop",
    ]
  },
  metadata: {
    case_id: "case-fallback-001",
    type: "testimony",
    incident_date: "2014-01-01",
    location: "Unknown",
    url_slug: "fallback-case"
  }
};

export default function Case(): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const { caseId } = useParams<{ caseId?: string }>();
  
  const [caseData, setCaseData] = useState<CaseData>(fallbackCaseData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch case data from API
  useEffect(() => {
    const fetchCaseData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await caseApi.getCaseData(caseId);
        setCaseData(data);
      } catch (err) {
        console.error('Failed to fetch case data:', err);
        setError('Failed to load case data. Using fallback content.');
        setCaseData(fallbackCaseData);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseData();
  }, [caseId]);

  // Helper function to detect if URL is a video
  const isVideoUrl = (url: string): boolean => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().includes(ext));
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-foreground">Loading case...</p>
      </div>
    );
  }

  const currentData = caseData[currentLanguage];

  return (
    <div className="flex flex-col items-start relative bg-background">
      {/* Error message */}
      {error && (
        <div className="w-full px-4 py-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="flex flex-col min-h-[600px] md:min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-card">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start justify-center px-2 md:px-4 lg:px-8 py-5 relative flex-1 self-stretch w-full grow">
            <div className="flex flex-col max-w-7xl w-full items-start px-0 py-5 relative">
              {/* Image/Video Carousel */}
              {currentData.images && currentData.images.length > 0 && (
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
                              <AspectRatio ratio={16 / 9}>
                                {isVideoUrl(media) ? (
                                  <video
                                    className="w-full h-full object-cover rounded-lg"
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
                                    className="w-full h-full object-cover rounded-lg"
                                    alt={`Case media ${index + 1}`}
                                    src={media}
                                  />
                                )}
                              </AspectRatio>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {/* Hide carousel buttons on small screens */}
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </Carousel>
                </div>
              )}
              
              {/* Content heading */}
              <div className="flex flex-col items-start pt-5 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] font-bold text-foreground text-lg sm:text-xl md:text-[22px] tracking-[0] leading-6 sm:leading-7 font-['Newsreader-Bold',Helvetica]">
                  {currentData.title}
                </h2>
              </div>

              {/* Case metadata */}
              {caseData.metadata && (
                <div className="flex flex-col items-start pt-1 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                  <Card className="w-full bg-muted/50 border border-border">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="font-semibold text-foreground">
                            {currentLanguage === 'ar' ? 'نوع القضية:' : 'Case Type:'} 
                          </span>
                          <span className="ml-2 text-muted-foreground capitalize">{caseData.metadata.type}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">
                            {currentLanguage === 'ar' ? 'تاريخ الحادث:' : 'Incident Date:'} 
                          </span>
                          <span className="ml-2 text-muted-foreground">
                            {new Date(caseData.metadata.incident_date).toLocaleDateString(
                              currentLanguage === 'ar' ? 'ar-SA' : 'en-US',
                              { year: 'numeric', month: 'long', day: 'numeric' }
                            )}
                          </span>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="font-semibold text-foreground">
                            {currentLanguage === 'ar' ? 'الموقع:' : 'Location:'} 
                          </span>
                          <span className="ml-2 text-muted-foreground">{caseData.metadata.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Content description */}
              <div className="flex flex-col items-start pt-1 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <div 
                  className="relative self-stretch mt-[-1.00px] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 font-['Newsreader-Regular',Helvetica] whitespace-pre-line"
                >
                  {currentData.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
