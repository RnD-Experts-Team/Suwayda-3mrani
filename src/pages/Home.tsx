import React from "react";
import AidAndResponseSection from "../components/home/AidAndResponseSection";
import SuggestionList from "../components/home/SuggestionList";
import ComponentNodeSectionGroup from "../components/home/ComponentNodeSectionGroup";
import roadImage from "../assets/road.png";
import HeroSection from "../components/home/HeroSection";
import MediaGallery from "@/components/home/MediaGallery";

const Home = (): React.ReactElement => {
  // Unified API-like data structure
  const apiData = [
    // Hero Content
    {
      id: "hero-1",
      type: "hero",
      content: {
        en: {
          title: "Silenced Voices of Suwayda",
          image: roadImage,
        },
        ar: {
          title: "أصوات السويداء المكتومة",
          image: roadImage,
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
            url: roadImage,
            title: { en: "Image Title", ar: "عنوان الصورة" },
            description: { en: "Description...", ar: "الوصف..." },
            sourceUrl: "https://source.com",
            type: "image",
          },
          {
            id: "media-2",
            url: roadImage,
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
            description:
              "Providing essential aid and support to affected communities.",
            backgroundImage: roadImage,
            url: "https://www.humanitarianaid.org"
          },
          ar: {
            name: "المساعدات الإنسانية الدولية",
            description: "تقديم المساعدات الأساسية والدعم للمجتمعات المتضررة.",
            backgroundImage: roadImage,
            url: "https://www.humanitarianaid.org"
          },
        },
        {
          id: "aid-org-2",
          en: {
            name: "Doctors Without Borders",
            description: "Offering medical assistance and healthcare services.",
            backgroundImage: roadImage,
            url: "https://www.doctorswithoutborders.org"
          },
          ar: {
            name: "أطباء بلا حدود",
            description: "تقديم المساعدة الطبية وخدمات الرعاية الصحية.",
            backgroundImage: roadImage,
            url: "https://www.doctorswithoutborders.org"
          },
        },
        {
          id: "aid-org-3",
          en: {
            name: "Red Crescent Society",
            description: "Delivering emergency relief and humanitarian aid.",
            backgroundImage: roadImage,
            url: "https://www.ifrc.org"
          },
          ar: {
            name: "جمعية الهلال الأحمر",
            description: "تقديم الإغاثة الطارئة والمساعدات الإنسانية.",
            backgroundImage: roadImage,
            url: "https://www.ifrc.org"
          },
        },
        {
          id: "aid-org-4",
          en: {
            name: "Global Relief Fund",
            description:
              "Supporting long-term recovery and development efforts.",
            backgroundImage: roadImage,
            url: "https://www.globalrelieffund.org"
          },
          ar: {
            name: "صندوق الإغاثة العالمي",
            description: "دعم جهود التعافي والتنمية طويلة المدى.",
            backgroundImage: roadImage,
            url: "https://www.globalrelieffund.org"
          },
        },
      ],
    },

    // Suggestions
    //how to help at the end
    {
      id: "suggestions",
      type: "suggestions",
      content: [
        {
          id: "suggestion-1",
          key: "takeAction",
          en: {
            title: "Take Action",
            description:
              "Support the victims of the Suwayda crisis and help bring an end to the atrocities.",
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
            description:
              "If you have witnessed or experienced the events in Suwayda, share your story to help raise awareness.",
            buttonText: "Share Testimony",
            buttonVariant: "outline" as const,
          },
          ar: {
            title: "شارك شهادتك",
            description:
              "إذا كنت قد شهدت أو عشت الأحداث في السويداء، شارك قصتك للمساعدة في زيادة الوعي.",
            buttonText: "شارك شهادتك",
            buttonVariant: "outline" as const,
          },
        },
        {
          id: "suggestion-3",
          key: "volunteer",
          en: {
            title: "Volunteer",
            description:
              "Join our team of volunteers to support our efforts in providing aid and raising awareness.",
            buttonText: "Volunteer",
            buttonVariant: "outline" as const,
          },
          ar: {
            title: "تطوع",
            description:
              "انضم إلى فريق المتطوعين لدينا لدعم جهودنا في تقديم المساعدة وزيادة الوعي.",
            buttonText: "تطوع",
            buttonVariant: "outline" as const,
          },
        },
        {
          id: "suggestion-4",
          key: "alertMedia",
          en: {
            title: "Alert Media",
            description:
              "Help us amplify the voices of the victims by alerting media outlets to the ongoing Crisis.",
            buttonText: "Alert Media",
            buttonVariant: "outline" as const,
          },
          ar: {
            title: "تنبيه الإعلام",
            description:
              "ساعدنا في تضخيم أصوات الضحايا من خلال تنبيه وسائل الإعلام للأزمة المستمرة.",
            buttonText: "تنبيه الإعلام",
            buttonVariant: "outline" as const,
          },
        },
      ],
    },

    // Component Node Data
    //links with images and descriptions
    {
      id: "component-node-1",
      type: "component_node",
      content: {
        en: {
          category: "Breaking News",
          title: "Suwayda Crisis Escalates",
          description:
            "Recent reports indicate a surge in violence and human rights violations in Suwayda, raising concerns about the safety of civilians.",
          imageUrl: roadImage,
        },
        ar: {
          category: "أخبار عاجلة",
          title: "تصاعد أزمة السويداء",
          description:
            "تشير التقارير الأخيرة إلى ارتفاع في العنف وانتهاكات حقوق الإنسان في السويداء، مما يثير المخاوف بشأن سلامة المدنيين.",
          imageUrl: roadImage,
        },
        url: "https://example.com/suwayda-crisis",
      },
    },

    // Testimonial Wrapper Data
    {
      id: "testimonial-wrapper-1",
      type: "testimonial",
      content: {
        en: {
          category: "Survivor Story",
          title: "Aisha's Journey",
          description:
            "Aisha, a survivor from Suwayda, recounts her harrowing escape from the conflict zone and her struggle to rebuild her life.",
          imageUrl: roadImage,
        },
        ar: {
          category: "قصة ناجية",
          title: "رحلة عائشة",
          description:
            "تحكي عائشة، الناجية من السويداء، عن هروبها المؤلم من منطقة الصراع وكفاحها لإعادة بناء حياتها.",
          imageUrl: roadImage,
        },
        url: "https://example.com/aisha-story",
      },
    },

    // Testimonial Data
    {
      id: "testimonial-2",
      type: "testimonial",
      content: {
        en: {
          category: "Survivor Story",
          title: "Omar's Account",
          description:
            "Omar shares his experience of witnessing atrocities and his efforts to document the events to ensure accountability.",
          imageUrl: roadImage,
        },
        ar: {
          category: "قصة ناجي",
          title: "شهادة عمر",
          description:
            "يشارك عمر تجربته في مشاهدة الفظائع وجهوده لتوثيق الأحداث لضمان المساءلة.",
          imageUrl: roadImage,
        },
        url: "https://example.com/omar-account",
      },
    },

    // Key Events Data
    {
      id: "key-events-1",
      type: "key_events",
      content: {
        en: {
          category: "Update",
          title: "Aid Efforts Intensify",
          description:
            "International organizations are ramping up aid efforts to provide essential supplies and support to affected communities in Suwayda.",
          imageUrl: roadImage,
        },
        ar: {
          category: "تحديث",
          title: "تكثيف جهود المساعدة",
          description:
            "تعمل المنظمات الدولية على تكثيف جهود المساعدة لتوفير الإمدادات الأساسية والدعم للمجتمعات المتضررة في السويداء.",
          imageUrl: roadImage,
        },
        url: "https://example.com/aid-efforts",
      },
    },

    // Section Groups
    {
      id: "section-group-1",
      type: "section_group",
      content: {
        title: {
          en: "test",
          ar: "اختبار",
        },
        sections: ["testimonial-wrapper-1", "testimonial-2"], // References to other items
      },
    },

    {
      id: "section-group-2",
      type: "section_group",
      content: {
        title: {
          en: "Crisis Documentation",
          ar: "توثيق الأزمة",
        },
        sections: ["component-node-1", "key-events-1"], // References to other items
      },
    },
  ];

  // Helper functions to extract data from the unified structure
  const getDataByType = (type: string) => {
    return apiData.find((item) => item.type === type)?.content;
  };

  const getDataById = (id: string) => {
    return apiData.find((item) => item.id === id)?.content;
  };

  // Extract specific data for components
  const heroContent = getDataByType("hero");
  const galleryData = getDataByType("media_gallery");
  const aidOrganizationsData = apiData.find(
    (item) => item.type === "aid_organizations"
  );
  const aidOrganizations = aidOrganizationsData?.content;
  const aidTitle = aidOrganizationsData?.title;
  const suggestions = getDataByType("suggestions");

  // Get testimonials and component nodes for groups
  const testimonialWrapperData = getDataById("testimonial-wrapper-1");
  const testimonialData = getDataById("testimonial-2");
  const componentNodeData = getDataById("component-node-1");
  const keyEventsData = getDataById("key-events-1");

  // Get section group data
  const sectionGroup1 = getDataById("section-group-1");
  const sectionGroup2 = getDataById("section-group-2");

  // Create suggestion array
  const suggestionArray = suggestions || [];

  // Create group data using titles from apiData
  const groupData = {
    title: sectionGroup2?.title || { en: "", ar: "" },
    sections: [componentNodeData, keyEventsData],
  };

  const groupData2 = {
    title: sectionGroup1?.title || { en: "", ar: "" },
    sections: [testimonialWrapperData, testimonialData],
  };

  return (
    <div className="flex flex-col w-full bg-background">
      <div className="flex flex-col w-full bg-card">
        <div className="flex justify-center px-4 md:px-10 lg:px-40 py-5 w-full">
          <div className="flex flex-col max-w-[960px] w-full">
            {/* Hero Section */}
            <HeroSection content={heroContent as any} />

            {/* Media Gallery Heading */}
            <MediaGallery data={galleryData as any} />

            {/* Component Node Section Group */}
            <ComponentNodeSectionGroup
              title={groupData2.title}
              sections={groupData2.sections as any[]}
            />

            {/* Component Node Section Group */}
            <ComponentNodeSectionGroup
              title={groupData.title}
              sections={groupData.sections as any[]}
            />

            {/* Aid and Response Section with title */}
            <AidAndResponseSection
              organizations={aidOrganizations as any[]}
              title={aidTitle || { en: "", ar: "" }}
            />

            {/* Updated Suggestion components with en/ar structure */}
            <SuggestionList suggestions={suggestionArray as any[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
