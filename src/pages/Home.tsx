import { Card, CardContent } from "@/components/ui/card";
import React from "react";

import AidAndResponseSection from "../components/home/AidAndResponseSection";
import ComponentNodeSection from "../components/home/ComponentNodeSection";
// Import all sections
import KeyEventsSection from "../components/home/KeyEventsSection";
import MainContentSection from "../components/home/MainContentSection";
import MediaGallerySection from "../components/home/MediaGallerySection";
import NewsSection from "../components/home/NewsSection";
import SurvivorTestimonialsSection from "../components/home/SurvivorTestimonialsSection";
import TestimonialSection from "../components/home/TestimonialSection";
import TestimonialWrapperSection from "../components/home/TestimonialWrapperSection";
import Suggestion from "../components/home/Suggestion";

const Home = (): React.ReactElement => {
  // Section headings data
  const sectionHeadings = [
    { id: "key-events", title: "Key Events" },
    { id: "media-gallery", title: "Media Gallery" },
    { id: "survivor-testimonials", title: "Survivor Testimonials" },
    { id: "news", title: "News" },
    { id: "aid-response", title: "Aid and Response" },
  ];

  return (
    <div className="flex flex-col w-full bg-background">
      <div className="flex flex-col w-full bg-card">
        <div className="flex justify-center px-4 md:px-10 lg:px-40 py-5 w-full">
          <div className="flex flex-col max-w-[960px] w-full">
            {/* Hero Section */}
            <Card className="border-0 mb-6">
              <CardContent className="p-0">
                <div className="relative w-full h-80 rounded-xl overflow-hidden bg-gradient-to-t from-black/40 to-transparent">
                  <div className="absolute bottom-4 left-4">
                    <h1 className="font-bold text-primary-foreground text-[28px] leading-[35px] [font-family:'Newsreader-Bold',Helvetica]">
                      Silenced Voices of Suwayda
                    </h1>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Events Heading */}
            <div className="py-3 px-4">
              <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-[22px] leading-7">
                {sectionHeadings[0].title}
              </h2>
            </div>

            {/* Main Content Section */}
            <MainContentSection />

            {/* Media Gallery Heading */}
            <div className="pt-5 pb-3 px-4">
              <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-[22px] leading-7">
                {sectionHeadings[1].title}
              </h2>
            </div>

            {/* Media Gallery Placeholder */}
            <div className="w-full mb-5">
              <img className="w-full" alt="Media gallery" src="" />
            </div>

            {/* Survivor Testimonials Heading */}
            <div className="pt-5 pb-3 px-4">
              <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-[22px] leading-7">
                {sectionHeadings[2].title}
              </h2>
            </div>

            {/* Testimonial Sections */}
            <TestimonialWrapperSection />
            <TestimonialSection />

            {/* News Heading */}
            <div className="pt-5 pb-3 px-4">
              <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-[22px] leading-7">
                {sectionHeadings[3].title}
              </h2>
            </div>

            {/* Component Node Section */}
            <ComponentNodeSection />

            {/* Key Events Section */}
            <KeyEventsSection />

            {/* Aid and Response Heading */}
            <div className="pt-5 pb-3 px-4">
              <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-[22px] leading-7">
                {sectionHeadings[4].title}
              </h2>
            </div>

            {/* Remaining Sections */}
            <AidAndResponseSection />
            <Suggestion 
              title="Take Action"
              description="Support the victims of the Suwayda crisis and help bring an end to the atrocities."
              buttonText="Donate"
              buttonVariant="outline"
            />
            <Suggestion 
              title="Share Testimony"
              description="If you have witnessed or experienced the events in Suwayda, share your story to help raise awareness."
              buttonText="Share Testimony"
              buttonVariant="outline"
            />
            <Suggestion 
              title="Volunteer"
              description="Join our team of volunteers to support our efforts in providing aid and raising awareness."
              buttonText="Volunteer"
              buttonVariant="outline"
            />
            <Suggestion 
              title="Alert Media"
              description="Help us amplify the voices of the victims by alerting media outlets to the ongoing Crisis."
              buttonText="Alert Media"
              buttonVariant="outline"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
