import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AidAndResponseSection from "../components/home/AidAndResponseSection";
import LocalGroupsSection from "../components/aidEfforts/LocalGroupsSection";
import { useLanguage } from "@/LanguageContext";
import { aidEffortsApi } from "@/services/aidEffortsApi";
import type {
  AidEffortsData,
  OrganizationSection,
  InitiativeSection,
} from "@/types/aidEfforts";

// Your existing fallback data structure
const fallbackAidEffortsData: AidEffortsData = {
  pageContent: {
    heroTitle: {
      en: "Aid Efforts",
      ar: "جهود المساعدة",
    },
    heroDescription: {
      en: "Explore the organizations and initiatives dedicated to providing aid and support to those affected by the crisis. Learn about their work, impact, and how you can contribute.",
      ar: "استكشف المنظمات والمبادرات المكرسة لتقديم المساعدة والدعم للمتضررين من الأزمة. تعرف على عملهم وتأثيرهم وكيف يمكنك المساهمة.",
    },
    sectionTitle: {
      en: "Aid Efforts",
      ar: "جهود المساعدة",
    },
  },
  actionButtons: [
    {
      text: { en: "Donate", ar: "تبرع" },
      url: "/donate",
    },
    {
      text: { en: "Volunteer", ar: "تطوع" },
      url: "/volunteer",
    },
    {
      text: { en: "Get Involved", ar: "شارك معنا" },
      url: "/get-involved",
    },
  ],
  sections: [
    {
      id: "international-organizations",
      title: {
        en: "International Organizations",
        ar: "المنظمات الدولية",
      },
      type: "organizations",
      items: [
        {
          en: {
            name: "Global Relief Coalition",
            description:
              "GRC provides emergency relief and long-term support to communities affected by conflict and disaster.",
            backgroundImage:
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
            url: "https://www.globalreliefcoalition.org",
          },
          ar: {
            name: "تحالف الإغاثة العالمي",
            description:
              "يقدم تحالف الإغاثة العالمي الإغاثة الطارئة والدعم طويل الأمد للمجتمعات المتضررة من النزاعات والكوارث.",
            backgroundImage:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
            url: "https://www.globalreliefcoalition.org",
          },
        },
        {
          en: {
            name: "Humanity First Aid",
            description:
              "HFA delivers essential aid and medical assistance to those in need, focusing on vulnerable populations.",
            backgroundImage:
              "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=300&fit=crop",
            url: "https://www.humanityfirstaid.org",
          },
          ar: {
            name: "الإنسانية أولاً للمساعدات",
            description:
              "تقدم الإنسانية أولاً المساعدات الأساسية والمساعدة الطبية للمحتاجين، مع التركيز على الفئات الضعيفة.",
            backgroundImage:
              "https://images.unsplash.com/photo-1507679799987-7379428750ca?w=500&h=300&fit=crop",
            url: "https://www.humanityfirstaid.org",
          },
        },
        {
          en: {
            name: "World Health Alliance",
            description:
              "WHA works to improve health outcomes in crisis-affected areas, providing medical care and resources.",
            backgroundImage:
              "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop",
            url: "https://www.worldhealthalliance.org",
          },
          ar: {
            name: "تحالف الصحة العالمي",
            description:
              "يعمل تحالف الصحة العالمي على تحسين النتائج الصحية في المناطق المتضررة من الأزمات، وتقديم الرعاية الطبية والموارد.",
            backgroundImage:
              "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=300&fit=crop",
            url: "https://www.worldhealthalliance.org",
          },
        },
      ],
    },
    {
      id: "local-groups",
      title: {
        en: "Local Groups",
        ar: "المجموعات المحلية",
      },
      type: "initiatives",
      items: [
        {
          en: {
            title: "Community Support Network",
            description:
              "A network of local volunteers providing direct assistance to affected families.",
            url: "/community-support",
          },
          ar: {
            title: "شبكة الدعم المجتمعي",
            description:
              "شبكة من المتطوعين المحليين تقدم المساعدة المباشرة للعائلات المتضررة.",
            url: "/community-support",
          },
        },
        {
          en: {
            title: "Hope for Tomorrow",
            description:
              "Focuses on rebuilding lives and communities through education and empowerment programs.",
            url: "/hope-tomorrow",
          },
          ar: {
            title: "أمل للغد",
            description:
              "يركز على إعادة بناء الحياة والمجتمعات من خلال برامج التعليم والتمكين.",
            url: "/hope-tomorrow",
          },
        },
        {
          en: {
            title: "Resilience Builders",
            description:
              "Works on the ground to foster resilience and recovery in the aftermath of the crisis.",
            url: "/resilience-builders",
          },
          ar: {
            title: "بناة المرونة",
            description:
              "يعمل على الأرض لتعزيز المرونة والتعافي في أعقاب الأزمة.",
            url: "/resilience-builders",
          },
        },
        {
          en: {
            title: "Emergency Response Team",
            description:
              "Rapid response unit providing immediate assistance during crisis situations.",
            url: "/emergency-response",
          },
          ar: {
            title: "فريق الاستجابة الطارئة",
            description:
              "وحدة استجابة سريعة تقدم المساعدة الفورية خلال حالات الأزمات.",
            url: "/emergency-response",
          },
        },
        {
          en: {
            title: "Youth Empowerment Initiative",
            description:
              "Empowering young people to become leaders in their communities through various programs.",
            url: "/youth-empowerment",
          },
          ar: {
            title: "مبادرة تمكين الشباب",
            description:
              "تمكين الشباب ليصبحوا قادة في مجتمعاتهم من خلال برامج متنوعة.",
            url: "/youth-empowerment",
          },
        },
      ],
    },
    {
      id: "stories-of-hope",
      title: {
        en: "Stories of Hope",
        ar: "قصص الأمل",
      },
      type: "organizations",
      items: [
        {
          en: {
            name: "Community Rebuilds",
            description:
              "A community comes together to rebuild their homes and lives after the crisis.",
            backgroundImage:
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
            url: "#community-rebuilds",
          },
          ar: {
            name: "إعادة بناء المجتمع",
            description:
              "يجتمع المجتمع لإعادة بناء منازلهم وحياتهم بعد الأزمة.",
            backgroundImage:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
            url: "#community-rebuilds",
          },
        },
        {
          en: {
            name: "Children's Education Program",
            description:
              "An education program helps children recover and learn in a safe environment.",
            backgroundImage:
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
            url: "#education-program",
          },
          ar: {
            name: "برنامج تعليم الأطفال",
            description:
              "برنامج تعليمي يساعد الأطفال على التعافي والتعلم في بيئة آمنة.",
            backgroundImage:
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop",
            url: "#education-program",
          },
        },
        {
          en: {
            name: "Volunteer Spotlight",
            description:
              "Meet a volunteer who has dedicated their time to helping those affected by the crisis.",
            backgroundImage:
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
            url: "#volunteer-spotlight",
          },
          ar: {
            name: "تسليط الضوء على المتطوعين",
            description: "تعرف على متطوع كرس وقته لمساعدة المتضررين من الأزمة.",
            backgroundImage:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
            url: "#volunteer-spotlight",
          },
        },
      ],
    },
  ],
};

export default function AidEfforts(): React.ReactElement {
  const { currentLanguage } = useLanguage();

  const [aidEffortsData, setAidEffortsData] = useState<AidEffortsData>(
    fallbackAidEffortsData
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from API
  useEffect(() => {
    const fetchAidEffortsData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await aidEffortsApi.getAidEffortsData();
        setAidEffortsData(data);
      } catch (err) {
        console.error("Failed to fetch aid efforts data:", err);
        setError("Failed to load aid efforts data. Using fallback content.");
        // Keep using fallback data on error
        setAidEffortsData(fallbackAidEffortsData);
      } finally {
        setLoading(false);
      }
    };

    fetchAidEffortsData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-foreground">Loading aid efforts...</p>
      </div>
    );
  }

  // Extract data for easier access
  const { pageContent, actionButtons, sections } = aidEffortsData;
  const internationalOrganizations = sections.find(
    (s) => s.id === "international-organizations"
  ) as OrganizationSection | undefined;
  const localGroups = sections.find((s) => s.id === "local-groups") as
    | InitiativeSection
    | undefined;
  const storiesOfHope = sections.find((s) => s.id === "stories-of-hope") as
    | OrganizationSection
    | undefined;

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Error message */}
      {error && (
        <div className="w-full px-4 py-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="flex flex-col w-full bg-card">
        <div className="flex flex-col w-full">
          <div className="px-4 sm:px-8 md:px-16 lg:px-40 py-5 flex justify-center w-full">
            <div className="flex flex-col max-w-[960px] w-full">
              {/* Hero Section */}
              <section className="flex flex-wrap items-start justify-around gap-3 p-4 w-full">
                <Card className="bg-transparent border-none shadow-none w-full">
                  <CardContent className="flex flex-col gap-3 p-0">
                    <h2 className="font-bold text-center text-foreground text-[32px] leading-10 [font-family:'Newsreader-Bold',Helvetica] mt-0">
                      {pageContent.heroTitle[currentLanguage]}
                    </h2>
                    <p className="text-sm text-[#adadad] leading-[21px] [font-family:'Newsreader-Regular',Helvetica] m-0">
                      {pageContent.heroDescription[currentLanguage]}
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* International Organizations Section */}
              {internationalOrganizations && (
                <AidAndResponseSection
                  organizations={internationalOrganizations.items}
                  title={internationalOrganizations.title}
                />
              )}

              {/* Local Groups Section */}
              {localGroups && (
                <LocalGroupsSection
                  initiatives={localGroups.items}
                  sectionTitle={localGroups.title}
                />
              )}

              {/* Stories of Hope Section */}
              {storiesOfHope && (
                <AidAndResponseSection
                  organizations={storiesOfHope.items}
                  title={storiesOfHope.title}
                />
              )}

              {/* Section Title */}
              <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
                <h2 className="font-bold text-foreground text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7">
                  {pageContent.sectionTitle[currentLanguage]}
                </h2>
              </div>

              {/* Action Buttons */}
              <section className="flex justify-center w-full py-3">
                <div className="flex flex-wrap justify-center gap-3 px-4 max-w-[480px] w-full">
                  {actionButtons.map((button, index) => (
                    <Button
                      key={index}
                      className="h-10 rounded-[20px] px-4"
                      variant="outline"
                      onClick={() => (window.location.href = button.url)}
                    >
                      <span className="font-bold [font-family:'Newsreader-Bold',Helvetica] text-sm leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {button.text[currentLanguage]}
                      </span>
                    </Button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
