import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function CrisesArchive(): React.ReactElement {
  // Key facts data
  const keyFacts = [
    {
      label: "Start Date",
      value: "August 2014",
      secondLabel: "Peak Violence",
      secondValue: "2014-2017",
    },
    {
      label: "Estimated Casualties",
      value: "Thousands",
      secondLabel: "Displaced Persons",
      secondValue: "Hundreds of thousands",
    },
    {
      label: "International Recognition",
      value: "Recognized as genocide by several nations and organizations",
      secondLabel: "",
      secondValue: "",
    },
  ];

  // Purpose list items
  const purposeItems = [
    {
      number: "1",
      title: "Documentation:",
      description:
        "To create a comprehensive and accessible record of the atrocities, including testimonies, documents, images, and other forms of evidence.",
    },
    {
      number: "2",
      title: "Education:",
      description:
        "To educate the public about the crisis, its causes, and its consequences, fostering a deeper understanding of the issues.",
    },
    {
      number: "3",
      title: "Advocacy:",
      description:
        "To support advocacy efforts for justice, accountability, and the prevention of future atrocities.",
    },
    {
      number: "4",
      title: "Remembrance:",
      description:
        "To honor the victims and survivors, ensuring their stories are not forgotten and contributing to the healing process.",
    },
    {
      number: "5",
      title: "Research:",
      description:
        "To provide a valuable resource for researchers studying genocide, human rights, and related fields.",
    },
  ];

  return (
    <div className="flex flex-col items-start relative bg-white">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-[#191919]">
        <main className="items-start justify-center px-40 py-5 flex-1 grow flex relative self-stretch w-full">
          <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-50.00px]">
            <section className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col min-w-72 items-start relative flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-10 whitespace-nowrap">
                  About the Crisis Archive
                </h2>
              </div>
            </section>

            <section className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                The Crisis Archive is dedicated to documenting and preserving
                the historical record of the mass atrocities committed against
                the religious minority group in the region. This archive serves
                as a critical resource for researchers, educators, policymakers,
                and the public, aiming to promote understanding, accountability,
                and prevention of future atrocities.
              </p>
            </section>

            <div className="relative self-stretch w-full h-10" />

            <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-7">
                Historical Context
              </h3>
            </section>

            <section className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                The crisis unfolded against a backdrop of long-standing tensions
                and discrimination against the religious minority group. Decades
                of marginalization and persecution culminated in a systematic
                campaign of violence and oppression, beginning in 2014. The
                archive meticulously documents the events leading up to the
                crisis, the atrocities committed, and the ongoing impact on the
                affected communities.
              </p>
            </section>

            <div className="relative self-stretch w-full h-10" />

            <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-7">
                The Affected Community
              </h3>
            </section>

            <section className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                The religious minority group, with a history spanning thousands
                of years in the region, has faced numerous challenges to their
                existence. This archive focuses on the recent atrocities,
                highlighting the resilience and strength of the community in the
                face of unimaginable suffering. It aims to amplify their voices
                and ensure their stories are heard.
              </p>
            </section>

            <div className="relative self-stretch w-full h-10" />

            <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-7">
                Purpose of the Archive
              </h3>
            </section>

            <section className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                The Crisis Archive serves multiple critical purposes:
                <br />
                <br />
                {purposeItems.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.number}. <strong>**{item.title}**</strong>{" "}
                    {item.description}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </section>

            <div className="relative self-stretch w-full h-10" />

            <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-7">
                Key Facts and Statistics
              </h3>
            </section>

            <Card className="flex flex-col items-start gap-6 p-4 relative self-stretch w-full flex-[0_0_auto] bg-transparent border-0">
              <CardContent className="p-0 w-full">
                {keyFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 relative flex-1 self-stretch w-full grow mb-6"
                  >
                    <div className="w-[186px] flex flex-col items-start px-0 py-5 relative self-stretch border-t [border-top-style:solid] border-[#e5e8ea]">
                      <div className="flex items-start relative flex-1 self-stretch w-full grow">
                        <div className="flex flex-col w-[186px] items-start relative self-stretch">
                          <div className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm tracking-[0] leading-[21px]">
                            {fact.label}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start relative flex-1 self-stretch w-full grow">
                        <div className="flex flex-col w-[186px] items-start relative self-stretch">
                          <div className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px]">
                            {fact.value}
                          </div>
                        </div>
                      </div>
                    </div>

                    {fact.secondLabel && (
                      <div className="w-[718px] flex flex-col items-start px-0 py-5 relative self-stretch border-t [border-top-style:solid] border-[#e5e8ea]">
                        <div className="flex items-start relative flex-1 self-stretch w-full grow">
                          <div className="w-[718px] self-stretch flex flex-col items-start relative">
                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm tracking-[0] leading-[21px]">
                              {fact.secondLabel}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start relative flex-1 self-stretch w-full grow">
                          <div className="w-[718px] self-stretch flex flex-col items-start relative">
                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px]">
                              {fact.secondValue}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="relative self-stretch w-full h-10" />

            <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-7">
                Mission Statement
              </h3>
            </section>

            <section className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                Our mission is to preserve the memory of the atrocities
                committed against the religious minority group, to educate
                current and future generations about the dangers of hatred and
                violence, and to advocate for a world free from genocide and
                mass atrocities. We are committed to ensuring that the voices of
                the victims and survivors are heard and that their experiences
                contribute to a more just and peaceful future.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
