import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useLanguage } from "@/LanguageContext";

export default function CrisesArchive(): React.ReactElement {
  const { currentLanguage } = useLanguage();

  // Static data representing API response structure
  const archiveData = {
    aboutSection: {
      title: {
        en: "About the Crisis Archive",
        ar: "حول أرشيف الأزمة",
      },
      description: {
        en: "The Crisis Archive is dedicated to documenting and preserving the historical record of the mass atrocities committed against the religious minority group in the region. This archive serves as a critical resource for researchers, educators, policymakers, and the public, aiming to promote understanding, accountability, and prevention of future atrocities.",
        ar: "يُكرس أرشيف الأزمة لتوثيق وحفظ السجل التاريخي للفظائع الجماعية المرتكبة ضد الأقلية الدينية في المنطقة. يُعتبر هذا الأرشيف مصدراً حيوياً للباحثين والمعلمين وصناع السياسات والجمهور، بهدف تعزيز الفهم والمساءلة ومنع الفظائع المستقبلية.",
      },
    },
    historicalContext: {
      title: {
        en: "Historical Context",
        ar: "السياق التاريخي",
      },
      description: {
        en: "The crisis unfolded against a backdrop of long-standing tensions and discrimination against the religious minority group. Decades of marginalization and persecution culminated in a systematic campaign of violence and oppression, beginning in 2014. The archive meticulously documents the events leading up to the crisis, the atrocities committed, and the ongoing impact on the affected communities.",
        ar: "تطورت الأزمة على خلفية من التوترات طويلة الأمد والتمييز ضد الأقلية الدينية. عقود من التهميش والاضطهاد بلغت ذروتها في حملة منهجية من العنف والقمع، بدءاً من عام 2014. يوثق الأرشيف بدقة الأحداث التي أدت إلى الأزمة، والفظائع المرتكبة، والتأثير المستمر على المجتمعات المتضررة.",
      },
    },
    affectedCommunity: {
      title: {
        en: "The Affected Community",
        ar: "المجتمع المتضرر",
      },
      description: {
        en: "The religious minority group, with a history spanning thousands of years in the region, has faced numerous challenges to their existence. This archive focuses on the recent atrocities, highlighting the resilience and strength of the community in the face of unimaginable suffering. It aims to amplify their voices and ensure their stories are heard.",
        ar: "الأقلية الدينية، التي لها تاريخ يمتد لآلاف السنين في المنطقة، واجهت تحديات عديدة لوجودها. يركز هذا الأرشيف على الفظائع الأخيرة، مسلطاً الضوء على مرونة وقوة المجتمع في مواجهة المعاناة التي لا يمكن تصورها. يهدف إلى تضخيم أصواتهم وضمان سماع قصصهم.",
      },
    },
    archivePurpose: {
      title: {
        en: "Purpose of the Archive",
        ar: "الغرض من الأرشيف",
      },
      description: {
        en: "The Crisis Archive serves multiple critical purposes:",
        ar: "يخدم أرشيف الأزمة عدة أغراض حيوية:",
      },
      items: [
        {
          number: "1",
          title: {
            en: "Documentation:",
            ar: "التوثيق:",
          },
          description: {
            en: "To create a comprehensive and accessible record of the atrocities, including testimonies, documents, images, and other forms of evidence.",
            ar: "لإنشاء سجل شامل ومتاح للفظائع، بما في ذلك الشهادات والوثائق والصور وأشكال أخرى من الأدلة.",
          },
        },
        {
          number: "2",
          title: {
            en: "Education:",
            ar: "التعليم:",
          },
          description: {
            en: "To educate the public about the crisis, its causes, and its consequences, fostering a deeper understanding of the issues.",
            ar: "لتثقيف الجمهور حول الأزمة وأسبابها وعواقبها، وتعزيز فهم أعمق للقضايا.",
          },
        },
        {
          number: "3",
          title: {
            en: "Advocacy:",
            ar: "المناصرة:",
          },
          description: {
            en: "To support advocacy efforts for justice, accountability, and the prevention of future atrocities.",
            ar: "لدعم جهود المناصرة من أجل العدالة والمساءلة ومنع الفظائع المستقبلية.",
          },
        },
        {
          number: "4",
          title: {
            en: "Remembrance:",
            ar: "التذكر:",
          },
          description: {
            en: "To honor the victims and survivors, ensuring their stories are not forgotten and contributing to the healing process.",
            ar: "لتكريم الضحايا والناجين، وضمان عدم نسيان قصصهم والمساهمة في عملية الشفاء.",
          },
        },
        {
          number: "5",
          title: {
            en: "Research:",
            ar: "البحث:",
          },
          description: {
            en: "To provide a valuable resource for researchers studying genocide, human rights, and related fields.",
            ar: "لتوفير مصدر قيم للباحثين الذين يدرسون الإبادة الجماعية وحقوق الإنسان والمجالات ذات الصلة.",
          },
        },
      ],
    },
    keyFacts: {
      title: {
        en: "Key Facts and Statistics",
        ar: "الحقائق والإحصائيات الرئيسية",
      },
      facts: [
        {
          label: {
            en: "Start Date",
            ar: "تاريخ البداية",
          },
          value: {
            en: "August 2014",
            ar: "أغسطس 2014",
          },
          secondLabel: {
            en: "Peak Violence",
            ar: "ذروة العنف",
          },
          secondValue: {
            en: "2014-2017",
            ar: "2014-2017",
          },
        },
        {
          label: {
            en: "Estimated Casualties",
            ar: "الضحايا المقدرون",
          },
          value: {
            en: "Thousands",
            ar: "الآلاف",
          },
          secondLabel: {
            en: "Displaced Persons",
            ar: "النازحون",
          },
          secondValue: {
            en: "Hundreds of thousands",
            ar: "مئات الآلاف",
          },
        },
        {
          label: {
            en: "International Recognition",
            ar: "الاعتراف الدولي",
          },
          value: {
            en: "Recognized as genocide by several nations and organizations",
            ar: "معترف بها كإبادة جماعية من قبل عدة دول ومنظمات",
          },
          secondLabel: {
            en: "",
            ar: "",
          },
          secondValue: {
            en: "",
            ar: "",
          },
        },
      ],
    },
    missionStatement: {
      title: {
        en: "Mission Statement",
        ar: "بيان المهمة",
      },
      description: {
        en: "Our mission is to preserve the memory of the atrocities committed against the religious minority group, to educate current and future generations about the dangers of hatred and violence, and to advocate for a world free from genocide and mass atrocities. We are committed to ensuring that the voices of the victims and survivors are heard and that their experiences contribute to a more just and peaceful future.",
        ar: "مهمتنا هي الحفاظ على ذكرى الفظائع المرتكبة ضد الأقلية الدينية، وتثقيف الأجيال الحالية والمستقبلية حول مخاطر الكراهية والعنف، والدعوة لعالم خالٍ من الإبادة الجماعية والفظائع الجماعية. نحن ملتزمون بضمان سماع أصوات الضحايا والناجين وأن تساهم تجاربهم في مستقبل أكثر عدالة وسلاماً.",
      },
    },
  };

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-card">
        <main className="items-start justify-center px-4 sm:px-8 md:px-16 lg:px-40 py-5 flex-1 grow flex relative self-stretch w-full">
          <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-50.00px]">
            <section className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col min-w-0 sm:min-w-72 items-start relative flex-[0_0_auto]">
                <h2
                  className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl sm:text-[32px] tracking-[0] leading-8 sm:leading-10 break-words sm:whitespace-nowrap"
                  dangerouslySetInnerHTML={{
                    __html: archiveData.aboutSection.title[currentLanguage],
                  }}
                />
              </div>
            </section>

            <section className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <p
                className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6"
                dangerouslySetInnerHTML={{
                  __html: archiveData.aboutSection.description[currentLanguage],
                }}
              />
            </section>

            <Separator className="my-6" />

            <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3
                className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg sm:text-[22px] tracking-[0] leading-6 sm:leading-7"
                dangerouslySetInnerHTML={{
                  __html: archiveData.historicalContext.title[currentLanguage],
                }}
              />
            </section>

            <section className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <p
                className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6"
                dangerouslySetInnerHTML={{
                  __html:
                    archiveData.historicalContext.description[currentLanguage],
                }}
              />
            </section>

            <Separator className="my-6" />

            <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3
                className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg sm:text-[22px] tracking-[0] leading-6 sm:leading-7"
                dangerouslySetInnerHTML={{
                  __html: archiveData.affectedCommunity.title[currentLanguage],
                }}
              />
            </section>

            <section className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <p
                className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6"
                dangerouslySetInnerHTML={{
                  __html:
                    archiveData.affectedCommunity.description[currentLanguage],
                }}
              />
            </section>

            <Separator className="my-6" />

            <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3
                className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg sm:text-[22px] tracking-[0] leading-6 sm:leading-7"
                dangerouslySetInnerHTML={{
                  __html: archiveData.archivePurpose.title[currentLanguage],
                }}
              />
            </section>

            <section className="flex flex-col items-start pt-1 pb-6 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch space-y-6">
                <div
                  className="[font-family:'Newsreader-Regular',Helvetica] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-6 sm:leading-7 text-justify"
                  dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
                  dangerouslySetInnerHTML={{
                    __html: archiveData.archivePurpose.description[currentLanguage],
                  }}
                />
                
                <div className="space-y-4" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
                  {archiveData.archivePurpose.items.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex items-start gap-3 p-4 bg-muted/30 rounded-lg transition-colors duration-200 ${
                        currentLanguage === 'ar' 
                          ? 'border-r-4 border-primary/20 hover:border-primary/40' 
                          : 'border-l-4 border-primary/20 hover:border-primary/40'
                      }`}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-primary font-semibold text-sm">
                          {item.number}
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 
                          className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6"
                          dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
                          dangerouslySetInnerHTML={{
                            __html: item.title[currentLanguage],
                          }}
                        />
                        <p
                          className="[font-family:'Newsreader-Regular',Helvetica] font-normal text-muted-foreground text-sm tracking-[0] leading-5 sm:leading-6"
                          dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
                          dangerouslySetInnerHTML={{
                            __html: item.description[currentLanguage],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Separator className="my-6" />

            <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3
                className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg sm:text-[22px] tracking-[0] leading-6 sm:leading-7"
                dangerouslySetInnerHTML={{
                  __html: archiveData.keyFacts.title[currentLanguage],
                }}
              />
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 w-full">
              {archiveData.keyFacts.facts.map((fact, index) => (
                <Card
                  key={index}
                  className="p-4 bg-card border-border hover:shadow-md transition-shadow duration-200"
                >
                  <CardContent className="p-0 space-y-3">
                    <div className="space-y-2">
                      <div
                        className="text-muted-foreground text-xs sm:text-sm font-medium [font-family:'Newsreader-Regular',Helvetica] tracking-[0] leading-[18px] sm:leading-[21px]"
                        dangerouslySetInnerHTML={{
                          __html: fact.label[currentLanguage],
                        }}
                      />
                      <div
                        className="text-foreground text-sm sm:text-base font-semibold [font-family:'Newsreader-Regular',Helvetica] tracking-[0] leading-[20px] sm:leading-[24px]"
                        dangerouslySetInnerHTML={{
                          __html: fact.value[currentLanguage],
                        }}
                      />
                    </div>

                    {fact.secondLabel[currentLanguage] && (
                      <div className="space-y-2 pt-2 border-t border-border">
                        <div
                          className="text-muted-foreground text-xs sm:text-sm font-medium [font-family:'Newsreader-Regular',Helvetica] tracking-[0] leading-[18px] sm:leading-[21px]"
                          dangerouslySetInnerHTML={{
                            __html: fact.secondLabel[currentLanguage],
                          }}
                        />
                        <div
                          className="text-foreground text-sm sm:text-base font-semibold [font-family:'Newsreader-Regular',Helvetica] tracking-[0] leading-[20px] sm:leading-[24px]"
                          dangerouslySetInnerHTML={{
                            __html: fact.secondValue[currentLanguage],
                          }}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator className="my-6" />

            <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3
                className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg sm:text-[22px] tracking-[0] leading-6 sm:leading-7"
                dangerouslySetInnerHTML={{
                  __html: archiveData.missionStatement.title[currentLanguage],
                }}
              />
            </section>

            <section className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <p
                className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6"
                dangerouslySetInnerHTML={{
                  __html:
                    archiveData.missionStatement.description[currentLanguage],
                }}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
