import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import road from "@/assets/road.png";
import React from "react";
import { useLanguage } from "@/LanguageContext";

// Internationalized data structure
const organizationsData = {
  en: {
    relatedOrganizations: [
      { name: "Global Relief Network", logoUrl: road },
      { name: "Aid for All", logoUrl: road },
      { name: "Hope Without Borders", logoUrl: road },
      { name: "United Assistance", logoUrl: road },
      { name: "Compassion in Action", logoUrl: road },
    ],
    currentOrganization: {
      name: "Humanity First",
      imageUrl: road,
      description:
        "Humanity First is a global humanitarian organization dedicated to providing aid and support to communities affected by genocide and mass atrocities. Our mission is to alleviate suffering, promote human dignity, and foster resilience in the face of crisis. We work tirelessly to deliver essential services, advocate for human rights, and empower individuals to rebuild their lives.",
    },
    actionButtons: [
      { text: "Contact", url: "mailto:contact@humanityfirst.org" },
      { text: "Visit Website", url: "https://www.humanityfirst.org" },
    ],
    pageTitle: "Organizations",
  },
  ar: {
    relatedOrganizations: [
      { name: "شبكة الإغاثة العالمية", logoUrl: road },
      { name: "المساعدة للجميع", logoUrl: road },
      { name: "الأمل بلا حدود", logoUrl: road },
      { name: "المساعدة المتحدة", logoUrl: road },
      { name: "الرحمة في العمل", logoUrl: road },
    ],
    currentOrganization: {
      name: "الإنسانية أولاً",
      imageUrl: road,
      description:
        "الإنسانية أولاً هي منظمة إنسانية عالمية مكرسة لتقديم المساعدة والدعم للمجتمعات المتضررة من الإبادة الجماعية والفظائع الجماعية. مهمتنا هي تخفيف المعاناة وتعزيز الكرامة الإنسانية وتعزيز المرونة في مواجهة الأزمات. نعمل بلا كلل لتقديم الخدمات الأساسية والدفاع عن حقوق الإنسان وتمكين الأفراد من إعادة بناء حياتهم.",
    },
    actionButtons: [
      { text: "اتصل بنا", url: "mailto:contact@humanityfirst.org" },
      { text: "زيارة الموقع", url: "https://www.humanityfirst.org" },
    ],
    pageTitle: "المنظمات",
  },
};

const Organizations = (): React.ReactElement => {
  const { currentLanguage } = useLanguage();

  // Get current language data
  const currentData = organizationsData[currentLanguage];
  const {
    relatedOrganizations,
    currentOrganization,
    actionButtons,
    pageTitle,
  } = currentData;

  const handleButtonClick = (url: string) => {
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-background">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          {/* Main Content */}
          <main className="items-start justify-center px-4 sm:px-8 md:px-16 lg:px-40 py-5 flex-1 grow flex relative self-stretch w-full">
            <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-1.00px]">
              {/* Organizations Title */}
              <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-full sm:w-72 items-start relative">
                  <h2 className=" text-center relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl sm:text-[32px] tracking-[0] leading-8 sm:leading-10">
                    {pageTitle}
                  </h2>
                </div>
              </div>

              {/* Organization Cards */}
              <div className="flex flex-col items-start gap-3 p-4 relative self-stretch w-full flex-[0_0_auto]">
                {relatedOrganizations.length === 0 ? (
                  // Empty state
                  <></>
                ) : (
                  // Responsive ScrollArea
                  <>
                    {/* Vertical ScrollArea for small screens */}
                    <ScrollArea dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="h-[300px] w-full rounded-md border p-4 block md:hidden">
                      <div className="flex flex-col gap-3 pr-4">
                        {relatedOrganizations.map((org, index) => (
                          <Card
                            key={index}
                            className="flex h-[94px] w-full items-center gap-3 p-4 relative bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
                          >
                            <CardContent className="flex items-center gap-3 p-0">
                              <div
                                className="relative w-10 h-10 rounded-lg bg-contain bg-no-repeat bg-center flex-shrink-0"
                                style={{
                                  backgroundImage: `url(${org.logoUrl})`,
                                }}
                              />
                              <div className="flex flex-col min-w-0 flex-1 items-start relative">
                                <h3 className="relative text-wrap self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-card-foreground text-sm sm:text-base tracking-[0] leading-4 sm:leading-5">
                                  {org.name}
                                </h3>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>

                    {/* Horizontal ScrollArea for medium and large screens */}
                    <ScrollArea dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="w-full rounded-md border p-4 hidden md:block">
                      <div className="flex gap-3 pb-4">
                        {relatedOrganizations.map((org, index) => (
                          <Card
                            key={index}
                            className="flex h-[94px] w-auto items-center gap-3 p-4 relative bg-card rounded-lg border border-border hover:shadow-md transition-shadow flex-shrink-0"
                          >
                            <CardContent className="flex items-center gap-3 p-0">
                              <div
                                className="relative w-10 h-10 rounded-lg bg-contain bg-no-repeat bg-center flex-shrink-0"
                                style={{
                                  backgroundImage: `url(${org.logoUrl})`,
                                }}
                              />
                              <div className="flex flex-col min-w-0 flex-1 items-start relative">
                                <h3 className="relative text-wrap self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-card-foreground text-sm sm:text-base tracking-[0] leading-4 sm:leading-5">
                                  {org.name}
                                </h3>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" className="mt-2" />
                    </ScrollArea>
                  </>
                )}
              </div>

              {/* Organization Details Section */}
              <div className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-xl sm:text-[22px] tracking-[0] leading-6 sm:leading-7">
                  {currentOrganization.name}
                </h2>
              </div>

              {/* Organization Image */}
              <div className="flex items-start p-4 relative self-stretch w-full flex-[0_0_auto] bg-background">
                <Card className="gap-2 bg-background rounded-xl overflow-hidden flex items-start relative flex-1 grow border-0">
                  <CardContent
                    className="p-0 relative flex-1 grow h-[200px] sm:h-[280px] lg:h-[400px] bg-contain bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${currentOrganization.imageUrl})`,
                    }}
                  />
                </Card>
              </div>

              {/* Organization Description */}
              <div className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
                  {currentOrganization.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-start justify-around relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-row gap-3 sm:gap-[12px] px-4 py-3 items-start relative flex-1 grow">
                  {actionButtons.map((button, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-8 px-4 py-0 bg-primary text-primary-foreground rounded-2xl border-none min-w-[84px] max-w-[480px]"
                      onClick={() => handleButtonClick(button.url)}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
