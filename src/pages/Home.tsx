import React, { useState, useEffect } from "react";
import AidAndResponseSection from "../components/home/AidAndResponseSection";
import SuggestionList from "../components/home/SuggestionList";
import ComponentNodeSectionGroup from "../components/home/ComponentNodeSectionGroup";
import HeroSection from "../components/home/HeroSection";
import MediaGallery from "@/components/home/MediaGallery";
import { homeApi } from "@/services/homeApi";
import type { 
  HomeData, 
  HomeContentItem, 
  ExtractedHeroData,
  ExtractedMediaGalleryData,
  ExtractedAidData,
  ExtractedSuggestionsData,
  ExtractedSectionGroupData,
  ComponentNodeContent
} from "@/types/home";

// Fallback data (your existing apiData structure)
const fallbackHomeData: HomeData = {
  data: [
    // Hero Content
    {
      id: "hero-1",
      type: "hero",
      content: {
        en: {
          title: "Silenced Voices of Suwayda",
          image: "https://picsum.photos/800/400",
        },
        ar: {
          title: "أصوات السويداء المكتومة",
          image: "https://picsum.photos/800/400",
        },
      },
    },

    // Media Gallery
    {
      id: "media-gallery-1",
      type: "media_gallery",
      content: {
        title: { en: "Media Gallery", ar: "معرض الوسائط" },
        mediaItems: [
          {
            id: "media-1",
            url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
            title: { en: "Image Title", ar: "عنوان الصورة" },
            description: { en: "Description...", ar: "الوصف..." },
            sourceUrl: "https://source.com",
            type: "image",
          },
          {
            id: "media-2",
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            title: { en: "Video Title", ar: "عنوان الفيديو" },
            description: { en: "Description...", ar: "الوصف..." },
            sourceUrl: "https://source.com",
            type: "video",
          },
        ],
      },
    },

    // Aid Organizations
    {
      id: "aid-organizations",
      type: "aid_organizations",
      title: { en: "Aid and Response", ar: "المساعدات والاستجابة" },
      content: [
        {
          id: "aid-org-1",
          en: {
            name: "Humanitarian Aid International",
            description: "Providing essential aid and support to affected communities.",
            backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
            url: "https://www.humanitarianaid.org"
          },
          ar: {
            name: "المساعدات الإنسانية الدولية",
            description: "تقديم المساعدات الأساسية والدعم للمجتمعات المتضررة.",
            backgroundImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=300&fit=crop",
            url: "https://www.humanitarianaid.org"
          },
        },
        {
          id: "aid-org-2",
          en: {
            name: "Doctors Without Borders",
            description: "Offering medical assistance and healthcare services.",
            backgroundImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop",
            url: "https://www.doctorswithoutborders.org"
          },
          ar: {
            name: "أطباء بلا حدود",
            description: "تقديم المساعدة الطبية وخدمات الرعاية الصحية.",
            backgroundImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop",
            url: "https://www.doctorswithoutborders.org"
          },
        },
        {
          id: "aid-org-3",
          en: {
            name: "Red Crescent Society",
            description: "Delivering emergency relief and humanitarian aid.",
            backgroundImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=300&fit=crop",
            url: "https://www.ifrc.org"
          },
          ar: {
            name: "جمعية الهلال الأحمر",
            description: "تقديم الإغاثة الطارئة والمساعدات الإنسانية.",
            backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
            url: "https://www.ifrc.org"
          },
        },
        {
          id: "aid-org-4",
          en: {
            name: "Global Relief Fund",
            description: "Supporting long-term recovery and development efforts.",
            backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
            url: "https://www.globalrelieffund.org"
          },
          ar: {
            name: "صندوق الإغاثة العالمي",
            description: "دعم جهود التعافي والتنمية طويلة المدى.",
            backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
            url: "https://www.globalrelieffund.org"
          },
        },
      ],
    },

    // Suggestions
    {
      id: "suggestions",
      type: "suggestions",
      content: [
        {
          id: "suggestion-1",
          key: "takeAction",
          en: {
            title: "Take Action",
            description: "Support the victims of the Suwayda crisis and help bring an end to the atrocities.",
            buttonText: "Donate",
            buttonVariant: "outline" as const,
          },
          ar: {
            title: "اتخذ إجراءً",
            description: "ادعم ضحايا أزمة السويداء وساعد في وضع حد للفظائع.",
            buttonText: "تبرع",
            buttonVariant: "outline" as const,
          },
        },
        {
          id: "suggestion-2",
          key: "shareTestimony",
          en: {
            title: "Share Testimony",
            description: "If you have witnessed or experienced the events in Suwayda, share your story to help raise awareness.",
            buttonText: "Share Testimony",
            buttonVariant: "outline" as const,
          },
          ar: {
            title: "شارك شهادتك",
            description: "إذا كنت قد شهدت أو عشت الأحداث في السويداء، شارك قصتك للمساعدة في زيادة الوعي.",
            buttonText: "شارك شهادتك",
            buttonVariant: "outline" as const,
          },
        },
        {
          id: "suggestion-3",
          key: "volunteer",
          en: {
            title: "Volunteer",
            description: "Join our team of volunteers to support our efforts in providing aid and raising awareness.",
            buttonText: "Volunteer",
            buttonVariant: "outline" as const,
          },
          ar: {
            title: "تطوع",
            description: "انضم إلى فريق المتطوعين لدينا لدعم جهودنا في تقديم المساعدة وزيادة الوعي.",
            buttonText: "تطوع",
            buttonVariant: "outline" as const,
          },
        },
        {
          id: "suggestion-4",
          key: "alertMedia",
          en: {
            title: "Alert Media",
            description: "Help us amplify the voices of the victims by alerting media outlets to the ongoing Crisis.",
            buttonText: "Alert Media",
            buttonVariant: "outline" as const,
          },
          ar: {
            title: "تنبيه الإعلام",
            description: "ساعدنا في تضخيم أصوات الضحايا من خلال تنبيه وسائل الإعلام للأزمة المستمرة.",
            buttonText: "تنبيه الإعلام",
            buttonVariant: "outline" as const,
          },
        },
      ],
    },

    // Component Nodes and Testimonials
    {
      id: "component-node-1",
      type: "component_node",
      content: {
        en: {
          category: "Breaking News",
          title: "Suwayda Crisis Escalates",
          description: "Recent reports indicate a surge in violence and human rights violations in Suwayda, raising concerns about the safety of civilians.",
          imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
        },
        ar: {
          category: "أخبار عاجلة",
          title: "تصاعد أزمة السويداء",
          description: "تشير التقارير الأخيرة إلى ارتفاع في العنف وانتهاكات حقوق الإنسان في السويداء، مما يثير المخاوف بشأن سلامة المدنيين.",
          imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
        },
        url: "https://example.com/suwayda-crisis",
      },
    },

    {
      id: "testimonial-wrapper-1",
      type: "testimonial",
      content: {
        en: {
          category: "Survivor Story",
          title: "Aisha's Journey",
          description: "Aisha, a survivor from Suwayda, recounts her harrowing escape from the conflict zone and her struggle to rebuild her life.",
          imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
        },
        ar: {
          category: "قصة ناجية",
          title: "رحلة عائشة",
          description: "تحكي عائشة، الناجية من السويداء، عن هروبها المؤلم من منطقة الصراع وكفاحها لإعادة بناء حياتها.",
          imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=300&fit=crop",
        },
        url: "https://example.com/aisha-story",
      },
    },

    {
      id: "testimonial-2",
      type: "testimonial",
      content: {
        en: {
          category: "Survivor Story",
          title: "Omar's Account",
          description: "Omar shares his experience of witnessing atrocities and his efforts to document the events to ensure accountability.",
          imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
        },
        ar: {
          category: "قصة ناجي",
          title: "شهادة عمر",
          description: "يشارك عمر تجربته في مشاهدة الفظائع وجهوده لتوثيق الأحداث لضمان المساءلة.",
          imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
        },
        url: "https://example.com/omar-account",
      },
    },

    {
      id: "key-events-1",
      type: "key_events",
      content: {
        en: {
          category: "Update",
          title: "Aid Efforts Intensify",
          description: "International organizations are ramping up aid efforts to provide essential supplies and support to affected communities in Suwayda.",
          imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
        },
        ar: {
          category: "تحديث",
          title: "تكثيف جهود المساعدة",
          description: "تعمل المنظمات الدولية على تكثيف جهود المساعدة لتوفير الإمدادات الأساسية والدعم للمجتمعات المتضررة في السويداء.",
          imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop",
        },
        url: "https://example.com/aid-efforts",
      },
    },

    // Section Groups
    {
      id: "section-group-1",
      type: "section_group",
      content: {
        title: { en: "test", ar: "اختبار" },
        sections: ["testimonial-wrapper-1", "testimonial-2"],
      },
    },

    {
      id: "section-group-2",
      type: "section_group",
      content: {
        title: { en: "Crisis Documentation", ar: "توثيق الأزمة" },
        sections: ["component-node-1", "key-events-1"],
      },
    },
  ],
};

const Home = (): React.ReactElement => {
  const [homeData, setHomeData] = useState<HomeData>(fallbackHomeData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch home data from API
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await homeApi.getHomeData();
        setHomeData(data);
      } catch (err) {
        console.error('Failed to fetch home data:', err);
        setError('Failed to load home data. Using fallback data.');
        // Keep using fallback data on error
        setHomeData(fallbackHomeData);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  // Helper functions to extract data from the unified structure
  const getDataByType = (type: string): HomeContentItem | undefined => {
    return homeData.data.find((item) => item.type === type);
  };

  const getDataById = (id: string): HomeContentItem | undefined => {
    return homeData.data.find((item) => item.id === id);
  };

  // Extract specific data for components
  const extractHeroData = (): ExtractedHeroData | null => {
    const heroItem = getDataByType("hero");
    if (heroItem && heroItem.type === "hero") {
      return heroItem.content;
    }
    return null;
  };

  const extractMediaGalleryData = (): ExtractedMediaGalleryData | null => {
    const galleryItem = getDataByType("media_gallery");
    if (galleryItem && galleryItem.type === "media_gallery") {
      return galleryItem.content;
    }
    return null;
  };

  const extractAidData = (): ExtractedAidData | null => {
    const aidItem = getDataByType("aid_organizations");
    if (aidItem && aidItem.type === "aid_organizations") {
      return {
        title: aidItem.title,
        organizations: aidItem.content,
      };
    }
    return null;
  };

  const extractSuggestionsData = (): ExtractedSuggestionsData | null => {
    const suggestionsItem = getDataByType("suggestions");
    if (suggestionsItem && suggestionsItem.type === "suggestions") {
      return { suggestions: suggestionsItem.content };
    }
    return null;
  };

  const extractSectionGroupData = (groupId: string): ExtractedSectionGroupData | null => {
    const groupItem = getDataById(groupId);
    if (groupItem && groupItem.type === "section_group") {
      const sections = groupItem.content.sections
        .map(sectionId => getDataById(sectionId))
        .filter((item): item is ComponentNodeContent => 
          item !== undefined && 
          (item.type === "component_node" || item.type === "testimonial" || item.type === "key_events")
        )
        .map(item => item.content);

      return {
        title: groupItem.content.title,
        sections,
      };
    }
    return null;
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-foreground">Loading home content...</p>
      </div>
    );
  }

  // Extract data
  const heroContent = extractHeroData();
  const galleryData = extractMediaGalleryData();
  const aidData = extractAidData();
  const suggestionsData = extractSuggestionsData();
  const sectionGroup1Data = extractSectionGroupData("section-group-1");
  const sectionGroup2Data = extractSectionGroupData("section-group-2");

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Error message */}
      {error && (
        <div className="w-full px-4 py-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="flex flex-col w-full bg-card">
        <div className="flex justify-center px-4 md:px-10 lg:px-40 py-5 w-full">
          <div className="flex flex-col max-w-[960px] w-full">
            {/* Hero Section */}
            {heroContent && <HeroSection content={heroContent} />}

            {/* Media Gallery */}
            {galleryData && <MediaGallery data={galleryData} />}

            {/* Section Group 1 (Testimonials) */}
            {sectionGroup1Data && (
              <ComponentNodeSectionGroup
                title={sectionGroup1Data.title}
                sections={sectionGroup1Data.sections}
              />
            )}

            {/* Section Group 2 (Crisis Documentation) */}
            {sectionGroup2Data && (
              <ComponentNodeSectionGroup
                title={sectionGroup2Data.title}
                sections={sectionGroup2Data.sections}
              />
            )}

            {/* Aid and Response Section */}
            {aidData && (
              <AidAndResponseSection
                organizations={aidData.organizations}
                title={aidData.title}
              />
            )}

            {/* Suggestions */}
            {suggestionsData && (
              <SuggestionList suggestions={suggestionsData.suggestions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
