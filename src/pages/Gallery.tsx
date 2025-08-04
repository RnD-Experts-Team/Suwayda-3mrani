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
import React from "react";
import { useLanguage } from "@/LanguageContext";

export default function Gallery(): React.ReactElement {
  const { currentLanguage } = useLanguage();
  
  const galleryData = {
  en: {
    title: "The Unseen Scars: A Survivor's Account",
    content: "My name is Anya Petrova, and I am a survivor of the atrocities that occurred in the region. I was just a young girl when the violence erupted, and my life was forever changed. I witnessed unspeakable acts of cruelty and lost many loved ones. The memories haunt me to this day, but I am sharing my story in the hope that it will help others understand the human cost of such conflicts and prevent similar tragedies from happening again. I remember the fear, the chaos, and the desperate struggle for survival. It was a time of immense suffering, but also of resilience and solidarity among those who endured together. We supported each other, shared what little we had, and held onto hope even in the darkest moments. This is my story, a testament to the strength of the human spirit in the face of adversity.",
    images: [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", // Video URL
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
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", // Video URL
      "https://images.unsplash.com/photo-1494790108755-2616c9c0b8d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop",
    ]
  }
};

// Helper function to detect if URL is a video
const isVideoUrl = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv', '.mkv'];
  return videoExtensions.some(ext => url.toLowerCase().includes(ext));
};

const currentData = galleryData[currentLanguage];

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-[600px] md:min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-card">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start justify-center px-4 sm:px-8 md:px-16 lg:px-40 py-5 relative flex-1 self-stretch w-full grow">
            <div className="flex flex-col max-w-[960px] w-full items-start px-0 py-5 relative">
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
                            <AspectRatio ratio={16 / 9}>
                              {isVideoUrl(media) ? (
                                <video
                                  className="w-full h-full object-cover rounded-lg"
                                  controls
                                  preload="metadata"
                                >
                                  <source src={media} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              ) : (
                                <>
                                  <img
                                    className="w-full h-full object-cover rounded-lg"
                                    alt={`Gallery media ${index + 1}`}
                                    src={media}
                                  />
                                  
                                </>
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
              
              {/* Content heading */}
              <div className="flex flex-col items-start pt-5 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] font-bold text-foreground text-lg sm:text-xl md:text-[22px] tracking-[0] leading-6 sm:leading-7 font-['Newsreader-Bold',Helvetica]">
                  {currentData.title}
                </h2>
              </div>
              {/* Content description */}
              <div className="flex flex-col items-start pt-1 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 font-['Newsreader-Regular',Helvetica]"
                dangerouslySetInnerHTML={{ __html: currentData.content }}
                >                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
