import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/LanguageContext";
import { useParams, useNavigate } from "react-router-dom";
import { organizationsApi } from "@/services/organizationsApi";
import type { OrganizationsData } from "@/types/organizations";

// Updated interfaces to match API response
interface RelatedOrganization {
  name: string;
  logoUrl: string;
  id: number;
  organizationId: string;
  type: "organizations" | "initiatives";
}


// Updated fallback data structure to match API
const fallbackOrganizationsData: OrganizationsData = {
  en: {
    relatedOrganizations: [
      { 
        name: "Global Relief Network", 
        logoUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
        id: 1,
        organizationId: "org-fallback-001",
        type: "organizations"
      },
      { 
        name: "Aid for All", 
        logoUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
        id: 2,
        organizationId: "org-fallback-002",
        type: "organizations"
      },
      { 
        name: "Hope Without Borders", 
        logoUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=300&fit=crop",
        id: 3,
        organizationId: "init-fallback-001",
        type: "initiatives"
      },
      { 
        name: "United Assistance", 
        logoUrl: "https://images.unsplash.com/photo-1507679799987-7379428750ca?w=500&h=300&fit=crop",
        id: 4,
        organizationId: "org-fallback-003",
        type: "organizations"
      },
      { 
        name: "Compassion in Action", 
        logoUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop",
        id: 5,
        organizationId: "org-fallback-004",
        type: "organizations"
      },
    ],
    currentOrganization: {
      name: "Humanity First",
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=300&fit=crop",
      description: "Humanity First is a global humanitarian organization dedicated to providing aid and support to communities affected by genocide and mass atrocities. Our mission is to alleviate suffering, promote human dignity, and foster resilience in the face of crisis. We work tirelessly to deliver essential services, advocate for human rights, and empower individuals to rebuild their lives.",
      type: "organizations",
      categories: [null, null],
      organizationId: "org-fallback-default"
    },
    actionButtons: [
      { text: "Contact", url: "mailto:contact@humanityfirst.org" },
      { text: "Visit Website", url: "https://www.humanityfirst.org" },
    ],
    pageTitle: "Organizations",
  },
  ar: {
    relatedOrganizations: [
      { 
        name: "شبكة الإغاثة العالمية", 
        logoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
        id: 1,
        organizationId: "org-fallback-001",
        type: "organizations"
      },
      { 
        name: "المساعدة للجميع", 
        logoUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
        id: 2,
        organizationId: "org-fallback-002",
        type: "organizations"
      },
      { 
        name: "الأمل بلا حدود", 
        logoUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
        id: 3,
        organizationId: "init-fallback-001",
        type: "initiatives"
      },
      { 
        name: "المساعدة المتحدة", 
        logoUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop",
        id: 4,
        organizationId: "org-fallback-003",
        type: "organizations"
      },
      { 
        name: "الرحمة في العمل", 
        logoUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
        id: 5,
        organizationId: "org-fallback-004",
        type: "organizations"
      },
    ],
    currentOrganization: {
      name: "الإنسانية أولاً",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      description: "الإنسانية أولاً هي منظمة إنسانية عالمية مكرسة لتقديم المساعدة والدعم للمجتمعات المتضررة من الإبادة الجماعية والفظائع الجماعية. مهمتنا هي تخفيف المعاناة وتعزيز الكرامة الإنسانية وتعزيز المرونة في مواجهة الأزمات. نعمل بلا كلل لتقديم الخدمات الأساسية والدفاع عن حقوق الإنسان وتمكين الأفراد من إعادة بناء حياتهم.",
      type: "organizations",
      categories: [null, null],
      organizationId: "org-fallback-default"
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
  const { organizationId } = useParams<{ organizationId: string }>();
  const navigate = useNavigate();
  
  const [organizationsData, setOrganizationsData] = useState<OrganizationsData>(fallbackOrganizationsData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch organizations data from API
  useEffect(() => {
    const fetchOrganizationsData = async () => {
      try {
        setLoading(true);
        setError(null);
        const id = organizationId ?? 'org-fallback-default';
        const data = await organizationsApi.getOrganizationsData(id);
        setOrganizationsData(data);
      } catch (err) {
        console.error('Failed to fetch organizations data:', err);
        setError('Failed to load organizations data. Using fallback data.');
        setOrganizationsData(fallbackOrganizationsData);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizationsData();
  }, [organizationId]);

  // Click handler for related organizations
  const handleRelatedOrgClick = (org: RelatedOrganization) => {
    navigate(`/organization/${org.organizationId}`);
  };

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

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-foreground">Loading organizations...</p>
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
      
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-background">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          {/* Main Content */}
          <main className="items-start justify-center px-2 md:px-4 lg:px-8 py-5 flex-1 grow flex relative self-stretch w-full">
            <div className="flex flex-col w-full max-w-7xl items-start relative flex-1 grow mb-[-1.00px]">
              {/* Organizations Title */}
              <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-full sm:w-72 items-start relative">
                  <h2 className="text-center relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl sm:text-[32px] tracking-[0] leading-8 sm:leading-10">
                    {pageTitle}
                  </h2>
                </div>
              </div>

              {/* Organization Cards */}
              <div className="flex flex-col items-start gap-3 p-4 relative self-stretch w-full flex-[0_0_auto]">
                {relatedOrganizations.length === 0 ? (
                  <></>
                ) : (
                  <>
                    {/* Vertical ScrollArea for small screens */}
                    <ScrollArea dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="h-[300px] w-full rounded-md border p-4 block md:hidden">
                      <div className="flex flex-col gap-3 pr-4">
                        {relatedOrganizations.map((org) => (
                          <Card
                            key={org.organizationId}
                            className="flex h-[94px] w-full items-center gap-3 p-4 relative bg-card rounded-lg border border-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 hover:bg-accent/50 group"
                            onClick={() => handleRelatedOrgClick(org)}
                          >
                            <CardContent className="flex items-center gap-3 p-0">
                              <div
                                className="relative w-20 h-20 rounded-lg bg-cover bg-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                  backgroundImage: org.logoUrl ? `url(${org.logoUrl})` : 'none',
                                  backgroundColor: org.logoUrl ? 'transparent' : '#f0f0f0'
                                }}
                              />
                              <div className="flex flex-col min-w-0 flex-1 items-start relative">
                                <h3 className="relative text-wrap self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-card-foreground text-sm sm:text-base tracking-[0] leading-4 sm:leading-5 transition-colors duration-300 group-hover:text-primary">
                                  {org.name}
                                </h3>
                                <span className="text-xs text-muted-foreground capitalize mt-1">
                                  {org.type === "organizations" ? (currentLanguage === 'ar' ? 'منظمة' : 'Organization') : (currentLanguage === 'ar' ? 'مبادرة' : 'Initiative')}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>

                    {/* Horizontal ScrollArea for medium and large screens */}
                    <ScrollArea dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="w-full rounded-md border p-4 hidden md:block">
                      <div className="flex gap-3 pb-4">
                        {relatedOrganizations.map((org) => (
                          <Card
                            key={org.organizationId}
                            className="flex h-[94px] w-auto items-center gap-3 p-4 relative bg-card rounded-lg border border-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 hover:bg-accent/50 flex-shrink-0 group"
                            onClick={() => handleRelatedOrgClick(org)}
                          >
                            <CardContent className="flex items-center gap-3 p-0">
                              <div
                                className="relative w-10 h-10 rounded-lg bg-cover bg-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                  backgroundImage: org.logoUrl ? `url(${org.logoUrl})` : 'none',
                                  backgroundColor: org.logoUrl ? 'transparent' : '#f0f0f0'
                                }}
                              />
                              <div className="flex flex-col min-w-0 flex-1 items-start relative">
                                <h3 className="relative text-wrap self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-card-foreground text-sm sm:text-base tracking-[0] leading-4 sm:leading-5 transition-colors duration-300 group-hover:text-primary">
                                  {org.name}
                                </h3>
                                <span className="text-xs text-muted-foreground capitalize">
                                  {org.type === "organizations" ? (currentLanguage === 'ar' ? 'منظمة' : 'Org') : (currentLanguage === 'ar' ? 'مبادرة' : 'Init')}
                                </span>
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
