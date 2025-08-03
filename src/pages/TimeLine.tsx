import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";
import { useLanguage } from "@/LanguageContext";

const TimeLine = (): React.ReactElement => {
  const { currentLanguage } = useLanguage();
  
  const timelineData = {
    en: {
      title: "Timeline of the Crisis",
      items: [
        {
          title: "Early Tensions",
          period: "1980s - 1990",
          description: "The initial phase of the crisis began with growing tensions between different groups. Political disagreements and social unrest started to emerge, setting the stage for future conflicts. This period was characterized by increasing polarization and the breakdown of dialogue between opposing factions.",
          isHighlighted: false,
          mediaType: "image",
          mediaUrl: "https://images.unsplash.com/photo-1586829135343-132950070391?w=500&h=300&fit=crop"
        },
        {
          title: "Escalation of Violence",
          period: "1991 - 1993",
          description: "Violence began to escalate significantly during this period. What started as political tensions transformed into armed conflicts. Multiple incidents of violence occurred, leading to casualties and displacement of civilians. The situation became increasingly unstable as various factions took up arms.",
          isHighlighted: false,
          mediaType: "image",
          mediaUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&h=300&fit=crop"
        },
        {
          title: "Peak of Atrocities",
          period: "1994",
          description: "In 1994, the Crisis reached its zenith with widespread violence and systematic atrocities. This period marked the most intense phase of the conflict, resulting in significant loss of life and long-term consequences for the affected communities.",
          isHighlighted: false,
          mediaType: "video",
          mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
          title: "International Response",
          period: "1995 - 2000",
          description: "The international community began to respond to the crisis with various interventions. Humanitarian aid was provided, peacekeeping forces were deployed, and diplomatic efforts were intensified. This period saw the establishment of international tribunals and the beginning of accountability processes.",
          isHighlighted: false,
          mediaType: "image",
          mediaUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop"
        },
        {
          title: "Post-Crisis Developments",
          period: "2001 - 2010",
          description: "The post-crisis period focused on reconstruction and reconciliation efforts. Infrastructure was rebuilt, institutions were reformed, and programs for social healing were implemented. This decade was crucial for establishing the foundations for long-term peace and stability.",
          isHighlighted: false,
          mediaType: "image",
          mediaUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop"
        },
        {
          title: "Ongoing Challenges",
          period: "2011 - Present",
          description: "Despite significant progress, challenges remain in the present day. Issues such as ongoing tensions, economic difficulties, and the need for continued reconciliation efforts persist. The international community continues to monitor the situation and provide support where needed.",
          isHighlighted: false,
          mediaType: "image",
          mediaUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop"
        },
      ]
    },
    ar: {
      title: "الجدول الزمني للأزمة",
      items: [
        {
          title: "التوترات المبكرة",
          period: "الثمانينيات - 1990",
          description: "بدأت المرحلة الأولى من الأزمة بتنامي التوترات بين مختلف الجماعات. بدأت الخلافات السياسية والاضطرابات الاجتماعية في الظهور، مما مهد الطريق للصراعات المستقبلية. تميزت هذه الفترة بتزايد الاستقطاب وانهيار الحوار بين الفصائل المتعارضة.",
          isHighlighted: false,
          mediaType: "image",
          mediaUrl: "https://images.unsplash.com/photo-1586829135343-132950070391?w=500&h=300&fit=crop"
        },
        {
          title: "تصعيد العنف",
          period: "1991 - 1993",
          description: "بدأ العنف في التصعيد بشكل كبير خلال هذه الفترة. ما بدأ كتوترات سياسية تحول إلى صراعات مسلحة. وقعت حوادث عنف متعددة، مما أدى إلى وقوع ضحايا ونزوح المدنيين. أصبح الوضع غير مستقر بشكل متزايد حيث حملت فصائل مختلفة السلاح.",
          isHighlighted: false,
          mediaType: "image",
          mediaUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&h=300&fit=crop"
        },
        {
          title: "ذروة الفظائع",
          period: "1994",
          description: "في عام 1994، وصلت الأزمة إلى ذروتها مع انتشار العنف والفظائع المنهجية. شكلت هذه الفترة أكثر مراحل الصراع كثافة، مما أدى إلى خسائر كبيرة في الأرواح وعواقب طويلة المدى على المجتمعات المتضررة.",
          isHighlighted: false,
          mediaType: "video",
          mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
          title: "الاستجابة الدولية",
          period: "1995 - 2000",
          description: "بدأ المجتمع الدولي في الاستجابة للأزمة من خلال تدخلات مختلفة. تم تقديم المساعدات الإنسانية، ونشر قوات حفظ السلام، وتكثيف الجهود الدبلوماسية. شهدت هذه الفترة إنشاء محاكم دولية وبداية عمليات المساءلة.",
          isHighlighted: false,
          mediaType: "image",
          mediaUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop"
        },
        {
          title: "التطورات ما بعد الأزمة",
          period: "2001 - 2010",
          description: "ركزت فترة ما بعد الأزمة على جهود إعادة الإعمار والمصالحة. تم إعادة بناء البنية التحتية، وإصلاح المؤسسات، وتنفيذ برامج للشفاء الاجتماعي. كان هذا العقد حاسماً لإرساء أسس السلام والاستقرار طويل المدى.",
          isHighlighted: false,
          mediaType: "image",
          mediaUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop"
        },
        {
          title: "التحديات المستمرة",
          period: "2011 - الحاضر",
          description: "رغم التقدم الكبير، لا تزال التحديات قائمة في الوقت الحاضر. تستمر قضايا مثل التوترات المستمرة والصعوبات الاقتصادية والحاجة إلى جهود مصالحة مستمرة. يواصل المجتمع الدولي مراقبة الوضع وتقديم الدعم حيثما دعت الحاجة.",
          isHighlighted: false,
          mediaType: "image",
          mediaUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop"
        },
      ]
    }
  };

  const currentData = timelineData[currentLanguage];
  const timelineItems = currentData.items;

  // State to track the selected timeline item
  const [selectedItem, setSelectedItem] = useState(0); // Default to "Peak of Atrocities" (index 2)

  // Handler for timeline dot clicks
  const handleTimelineClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-auto items-start relative w-full flex-[0_0_auto] bg-background">
        <div className="flex flex-col items-start relative w-full flex-[0_0_auto]">
          {/* Main Content */}
          <main className="items-start justify-center px-40 py-5 flex-1 grow flex relative self-stretch w-full">
            <div className="flex flex-col max-w-8xl items-start relative flex-1 grow">
              {/* Timeline Header */}
              <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-col min-w-72 items-start relative flex-[0_0_auto]">
                  <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-[32px] tracking-[0] leading-10 whitespace-nowrap">
                    {currentData.title}
                  </h2>
                </div>
              </div>

              {/* Responsive Layout Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* MUI Timeline - Left side on md/lg, top on small */}
                <div  className="flex-1 md:flex-[0_0_60%]">
                  <Box  sx={{ width: "100%", padding: "16px" }}>
                    <Timeline position={currentLanguage === 'ar' ? "left" : "right"}>
                      {timelineItems.map((item, index) => (
                        <TimelineItem key={index}>
                          <TimelineOppositeContent
                            sx={{
                              m: "auto 0",
                              color: selectedItem === index ? "#ffffff" : "#adadad",
                              fontFamily: "Newsreader-Regular, Helvetica",
                              fontSize: "16px",
                              fontWeight: selectedItem === index ? "bold" : "normal",
                              transition: "all 0.3s ease",
                              textAlign: currentLanguage === 'ar' ? 'left' : 'right',
                              direction: currentLanguage === 'ar' ? 'rtl' : 'ltr',
                              minWidth: currentLanguage === 'ar' ? '120px' : 'auto',
                            }}
                            align={currentLanguage === 'ar' ? "left" : "right"}
                            variant="body2"
                          >
                            {item.period}
                          </TimelineOppositeContent>
                          <TimelineSeparator>
                            <TimelineDot
                              onClick={() => handleTimelineClick(index)}
                              sx={{
                                backgroundColor: selectedItem === index
                                  ? "#ffffff"
                                  : item.isHighlighted
                                  ? "#ffffff"
                                  : "#4c4c4c",
                                border: selectedItem === index
                                  ? "3px solid #ffffff"
                                  : item.isHighlighted
                                  ? "2px solid #ffffff"
                                  : "2px solid #4c4c4c",
                                width: selectedItem === index ? "20px" : "16px",
                                height: selectedItem === index ? "20px" : "16px",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                boxShadow: selectedItem === index ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none",
                                '&:hover': {
                                  backgroundColor: "#ffffff",
                                  transform: "scale(1.2)",
                                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
                                },
                              }}
                            />
                            {index < timelineItems.length - 1 && (
                              <TimelineConnector
                                sx={{ 
                                  backgroundColor: selectedItem === index || selectedItem === index + 1 ? "#ffffff" : "#4c4c4c",
                                  transition: "background-color 0.3s ease"
                                }}
                              />
                            )}
                          </TimelineSeparator>
                          <TimelineContent sx={{ py: "12px", px: 2 }}>
                            <Typography
                              variant="h6"
                              component="span"
                              sx={{
                                color: selectedItem === index ? "#ffffff" : "#adadad",
                                fontFamily: "Newsreader-Medium, Helvetica",
                                fontSize: "16px",
                                fontWeight: selectedItem === index ? "bold" : "medium",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                textShadow: selectedItem === index ? "0 0 5px rgba(255, 255, 255, 0.3)" : "none",
                                direction: currentLanguage === 'ar' ? 'rtl' : 'ltr',
                                textAlign: currentLanguage === 'ar' ? 'right' : 'left',
                                '&:hover': {
                                  color: "#ffffff",
                                  textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                                },
                              }}
                              onClick={() => handleTimelineClick(index)}
                            >
                              {item.title}
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                      ))}
                    </Timeline>
                  </Box>
                </div>

                {/* Dynamic Event Card - Right side on md/lg, bottom on small */}
                <div className="flex-1 md:flex-[0_0_40%] flex items-start">
                  <div className="flex flex-col items-start p-4 relative self-stretch w-full flex-[0_0_auto]">
                    <Card className="flex items-start relative self-stretch w-full flex-[0_0_auto] rounded-xl bg-card border border-border">
                      <CardContent className="flex flex-col p-0">
                        {/* Dynamic Image/Video - now first */}
                        <div className="relative w-full h-64 rounded-xl mb-4 overflow-hidden bg-muted">
                          {timelineItems[selectedItem].mediaType === "video" ? (
                            <video 
                              className="w-full h-full object-cover rounded-xl"
                              controls
                              src={timelineItems[selectedItem].mediaUrl}
                            >
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img 
                              className="w-full h-full object-cover rounded-xl"
                              src={timelineItems[selectedItem].mediaUrl}
                              alt={timelineItems[selectedItem].title}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-muted text-muted-foreground rounded-xl">Image not available</div>';
                              }}
                            />
                          )}
                        </div>
                        
                        {/* Dynamic Title - now second */}
                        <div className="flex flex-col items-start px-4 relative self-stretch w-full flex-[0_0_auto]">
                          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg tracking-[0] leading-[23px]">
                            {timelineItems[selectedItem].title}
                          </h3>
                          <p className="relative self-stretch mt-2 [font-family:'Newsreader-Regular',Helvetica] font-normal text-muted-foreground text-sm tracking-[0] leading-5">
                            {timelineItems[selectedItem].period}
                          </p>
                        </div>
                        
                        {/* Dynamic Description - now third */}
                        <div className="flex items-end justify-around gap-3 px-4 pb-4 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex flex-col items-start relative flex-1 grow">
                            <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-muted-foreground text-base tracking-[0] leading-6">
                              {timelineItems[selectedItem].description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
