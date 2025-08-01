import { Card, CardContent } from "@/components/ui/card";

// Define data for featured stories
const featuredStories = [
  {
    id: 1,
    title: "A Mother's Resilience",
    description:
      "Discover how a mother's love and determination helped her family survive the crisis.",
    imageUrl: "/depth-7-frame-0.png",
  },
  {
    id: 2,
    title: "A Young Man's Journey",
    description:
      "Follow a young man's harrowing journey through the conflict and his fight for justice.",
    imageUrl: "/image.png",
  },
  {
    id: 3,
    title: "Hope Amidst Despair",
    description:
      "Witness the stories of individuals who found hope and strength in the face of adversity.",
    imageUrl: "/depth-7-frame-0-2.png",
  },
];

// Define data for all stories
const allStories = [
  { id: 1, title: "The Survivor's Voice", imageUrl: "/depth-7-frame-0-3.png" },
  { id: 2, title: "Echoes of the Past", imageUrl: "/depth-7-frame-0-4.png" },
  { id: 3, title: "Rebuilding Lives", imageUrl: "/depth-7-frame-0-5.png" },
  { id: 4, title: "Witness Accounts", imageUrl: "/depth-7-frame-0-6.png" },
  { id: 5, title: "Journeys of Hope", imageUrl: "/depth-7-frame-0-7.png" },
  { id: 6, title: "Voices of Courage", imageUrl: "/depth-7-frame-0-8.png" },
  { id: 7, title: "Stories of Resilience", imageUrl: "/depth-7-frame-0-9.png" },
  { id: 8, title: "The Human Spirit", imageUrl: "/depth-7-frame-0-10.png" },
];

export default function Stories() {
  return (
    <div className="flex flex-col items-start relative bg-white">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-[#191919]">
        <main className="items-start justify-center px-40 py-5 flex-1 grow flex relative self-stretch w-full">
          <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-1.00px]">
            <section className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col min-w-72 items-start gap-3 relative flex-[0_0_auto]">
                <div className="w-[658px] flex-[0_0_auto] flex flex-col items-start relative">
                  <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-10">
                    Stories
                  </h2>
                </div>

                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm tracking-[0] leading-[21px]">
                    Explore personal accounts and narratives from the crisis,
                    offering a deeper understanding of the human impact.
                  </p>
                </div>
              </div>
            </section>

            <section className="flex flex-col items-start pt-4 pb-2 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[23px]">
                Featured Stories
              </h3>
            </section>

            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start gap-3 p-4 relative flex-1 grow">
                {featuredStories.map((story) => (
                  <Card
                    key={story.id}
                    className="flex flex-col min-w-60 items-start gap-4 relative flex-1 self-stretch grow rounded-lg bg-transparent border-0"
                  >
                    <div
                      className="relative self-stretch w-full h-[169px] rounded-xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${story.imageUrl})` }}
                    />
                    <CardContent className="flex flex-col items-start p-0 relative self-stretch w-full">
                      <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                        {story.title}
                      </h4>
                      <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm tracking-[0] leading-[21px]">
                        {story.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <section className="flex flex-col items-start pt-4 pb-2 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[23px]">
                All Stories
              </h3>
            </section>

            <div className="flex flex-col items-start gap-3 p-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start gap-3 relative flex-1 self-stretch w-full grow">
                {allStories.slice(0, 5).map((story) => (
                  <Card
                    key={story.id}
                    className="w-44 gap-3 pt-0 pb-3 px-0 self-stretch flex flex-col items-start relative bg-transparent border-0"
                  >
                    <div
                      className="relative self-stretch w-full h-[99px] rounded-xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${story.imageUrl})` }}
                    />
                    <CardContent className="flex flex-col items-start p-0 relative self-stretch w-full">
                      <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                        {story.title}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-start gap-3 relative flex-1 self-stretch w-full grow">
                {allStories.slice(5).map((story) => (
                  <Card
                    key={story.id}
                    className="w-44 gap-3 pt-0 pb-3 px-0 self-stretch flex flex-col items-start relative bg-transparent border-0"
                  >
                    <div
                      className="relative self-stretch w-full h-[99px] rounded-xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${story.imageUrl})` }}
                    />
                    <CardContent className="flex flex-col items-start p-0 relative self-stretch w-full">
                      <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                        {story.title}
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
