import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useLanguage } from "@/LanguageContext";
import { useNavigate } from "react-router-dom";

interface TestimonialData {
  id: string;
  content: {
    en: {
      category: string;
      title: string;
      description: string;
      imageUrl: string;
    };
    ar: {
      category: string;
      title: string;
      description: string;
      imageUrl: string;
    };
  };
  url: string;
  survivor_name: string;
  survivor_age: number;
  survivor_location: string;
  date_of_incident: string;
}

interface TestimonialCardScrollProps {
  testimonialData: TestimonialData;
}

export default function TestimonialCardScroll({ testimonialData }: TestimonialCardScrollProps): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'ar' ? 'ar' : 'en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleCardClick = () => {
    navigate(testimonialData.url);
  };

  return (
    <Card 
      className="w-[300px] h-[470px] border border-border bg-transparent shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group flex flex-col"
      onClick={handleCardClick}
    >
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex flex-col items-center gap-4 h-full">
          <div
            className="w-full aspect-square rounded-xl bg-cover bg-center shrink-0 border border-border shadow-sm group-hover:shadow-md transition-shadow duration-300"
            style={{ 
              backgroundImage: testimonialData.content[currentLanguage].imageUrl ? `url(${testimonialData.content[currentLanguage].imageUrl})` : 'none',
              backgroundColor: testimonialData.content[currentLanguage].imageUrl ? 'transparent' : '#f0f0f0'
            }}
            aria-label="Testimonial image"
          />
          <div className="flex flex-col justify-start space-y-3 w-full flex-grow">
            <div className="flex flex-col gap-2">
              {/* <span className="text-primary text-xs font-medium uppercase tracking-wide">
                {testimonialData.content[currentLanguage].category}
              </span> */}
              <h3 className="font-semibold text-foreground text-base leading-6 group-hover:text-primary transition-colors duration-300 line-clamp-2 text-wrap">
                {testimonialData.content[currentLanguage].title}
              </h3>
            </div>
            <div className="space-y-2 overflow-y-auto flex-grow">
              {/* <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 text-wrap">
                {testimonialData.content[currentLanguage].description}
              </p> */}
              <div className="space-y-1 pt-2">
                <p className="text-foreground text-sm font-medium text-wrap truncate">
                  {testimonialData.survivor_name}, {testimonialData.survivor_age} {currentLanguage === 'ar' ? 'سنة' : 'years old'}
                </p>
                <p className="text-muted-foreground text-xs text-wrap truncate">
                  {testimonialData.survivor_location}
                </p>
                <p className="text-muted-foreground text-xs">
                  {formatDate(testimonialData.date_of_incident)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
