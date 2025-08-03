import { Card, CardContent } from "@/components/ui/card";
import road from "@/assets/road.png";
import { useLanguage } from "@/LanguageContext";

const storiesData = {
  pageTitle: {
    en: "Stories",
    ar: "القصص"
  },
  pageDescription: {
    en: "Explore personal accounts and narratives from the crisis, offering a deeper understanding of the human impact.",
    ar: "استكشف الحسابات الشخصية والروايات من الأزمة، مما يوفر فهماً أعمق للتأثير الإنساني."
  },
  featuredSectionTitle: {
    en: "Featured Stories",
    ar: "القصص المميزة"
  },
  allStoriesTitle: {
    en: "All Stories",
    ar: "جميع القصص"
  },
  featuredStories: [
    {
      id: 1,
      title: {
        en: "A Mother's Resilience",
        ar: "مرونة الأم"
      },
      description: {
        en: "Discover how a mother's love and determination helped her family survive the crisis.",
        ar: "اكتشف كيف ساعد حب الأم وعزيمتها عائلتها على النجاة من الأزمة."
      },
      imageUrl: road,
      url: "/story/mothers-resilience"
    },
    {
      id: 2,
      title: {
        en: "A Young Man's Journey",
        ar: "رحلة شاب"
      },
      description: {
        en: "Follow a young man's harrowing journey through the conflict and his fight for justice.",
        ar: "تابع رحلة شاب مؤلمة عبر الصراع وكفاحه من أجل العدالة."
      },
      imageUrl: road,
      url: "/story/young-mans-journey"
    },
    {
      id: 3,
      title: {
        en: "Hope Amidst Despair",
        ar: "الأمل وسط اليأس"
      },
      description: {
        en: "Witness the stories of individuals who found hope and strength in the face of adversity.",
        ar: "اشهد قصص الأفراد الذين وجدوا الأمل والقوة في مواجهة الشدائد."
      },
      imageUrl: road,
      url: "/story/hope-amidst-despair"
    }
  ],
  allStories: [
    {
      id: 1,
      title: {
        en: "The Survivor's Voice",
        ar: "صوت الناجي"
      },
      imageUrl: road,
      url: "/story/survivors-voice"
    },
    {
      id: 2,
      title: {
        en: "Echoes of the Past",
        ar: "أصداء الماضي"
      },
      imageUrl: road,
      url: "/story/echoes-of-the-past"
    },
    {
      id: 3,
      title: {
        en: "Rebuilding Lives",
        ar: "إعادة بناء الحياة"
      },
      imageUrl: road,
      url: "/story/rebuilding-lives"
    },
    {
      id: 4,
      title: {
        en: "Witness Accounts",
        ar: "شهادات الشهود"
      },
      imageUrl: road,
      url: "/story/witness-accounts"
    },
    {
      id: 5,
      title: {
        en: "Journeys of Hope",
        ar: "رحلات الأمل"
      },
      imageUrl: road,
      url: "/story/journeys-of-hope"
    },
    {
      id: 6,
      title: {
        en: "Voices of Courage",
        ar: "أصوات الشجاعة"
      },
      imageUrl: road,
      url: "/story/voices-of-courage"
    },
    {
      id: 7,
      title: {
        en: "Stories of Resilience",
        ar: "قصص المرونة"
      },
      imageUrl: road,
      url: "/story/stories-of-resilience"
    },
    {
      id: 8,
      title: {
        en: "The Human Spirit",
        ar: "الروح الإنسانية"
      },
      imageUrl: road,
      url: "/story/the-human-spirit"
    }
  ]
};

export default function Stories() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-card">
        <main className="items-start justify-center px-1 sm:px-8 md:px-16 lg:px-40 py-5 flex-1 grow flex relative self-stretch w-full">
          <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-1.00px]">
            <section className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex align-center flex-col w-full items-center gap-3 relative flex-[0_0_auto]">
                <div className="w-full max-w-[658px] flex-[0_0_auto] flex flex-col items-start relative">
                  <h2 className="relative text-center self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl sm:text-3xl lg:text-[32px] tracking-[0] leading-8 sm:leading-10">
                    {storiesData.pageTitle[currentLanguage]}
                  </h2>
                </div>

                <div className="inline-flex flex-col text-wrap items-start relative flex-[0_0_auto]">
                  <p className="relative text-wrap self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-muted-foreground text-sm ">
                    {storiesData.pageDescription[currentLanguage]}
                  </p>
                </div>
              </div>
            </section>

            <section className="flex flex-col items-start pt-4 pb-2 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg tracking-[0] leading-[23px]">
                {storiesData.featuredSectionTitle[currentLanguage]}
              </h3>
            </section>

            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col sm:flex-row items-start gap-3 p-4 relative flex-1 grow">
                {storiesData.featuredStories.map((story) => (
                  <Card
                    key={story.id}
                    className="flex flex-col w-full sm:min-w-60 items-start gap-4 relative flex-1 self-stretch grow rounded-lg bg-card border border-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50"
                    onClick={() => (window.location.href = story.url)}
                  >
                    <div
                      className="relative self-stretch w-full h-[169px] rounded-xl bg-contain bg-no-repeat bg-center transition-transform duration-300 hover:scale-102"
                      style={{ backgroundImage: `url(${story.imageUrl})` }}
                    />
                    <CardContent className="flex flex-col items-start p-4 relative self-stretch w-full">
                      <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-card-foreground text-base tracking-[0] leading-6 transition-colors duration-300 hover:text-primary">
                        {story.title[currentLanguage]}
                      </h4>
                      <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-muted-foreground text-sm tracking-[0] leading-[21px]">
                        {story.description[currentLanguage]}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <section className="flex flex-col items-start pt-4 pb-2 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg tracking-[0] leading-[23px]">
                {storiesData.allStoriesTitle[currentLanguage]}
              </h3>
            </section>

            <div className="flex flex-col items-start gap-3 p-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 relative w-full">
                {storiesData.allStories.map((story) => (
                  <Card
                    key={story.id}
                    className="gap-3 pt-0 pb-3 px-0 self-stretch flex flex-col items-start relative bg-card border border-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50"
                    onClick={() => (window.location.href = story.url)}
                  >
                    <div
                      className="relative self-stretch w-full h-[99px] rounded-xl bg-contain bg-no-repeat bg-center transition-transform duration-300 hover:scale-102"
                      style={{ backgroundImage: `url(${story.imageUrl})` }}
                    />
                    <CardContent className="flex flex-col items-start p-2 relative self-stretch w-full">
                      <h4 className="relative text-center self-stretch mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-card-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 transition-colors duration-300 hover:text-primary">
                        {story.title[currentLanguage]}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
