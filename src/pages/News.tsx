import React from "react";
import ArticleListSection from "../components/news/ArticleListSection";
import ArticlePreviewSection from "../components/news/ArticlePreviewSection";
import ContentWrapperSection from "../components/news/ContentWrapperSection";
import FeaturedArticleSection from "../components/news/FeaturedArticleSection";
import HeaderSection from "../components/news/HeaderSection";
import MainContentSection from "../components/news/MainContentSection";
import NavigationSection from "../components/news/NavigationSection";
import NewsSection from "../components/news/NewsSection";
import RelatedArticlesSection from "../components/news/RelatedArticlesSection";
import SidebarSection from "../components/news/SidebarSection";
export default function News(): React.ReactElement {
  return (
    <div className="flex flex-col items-start w-full bg-white">
      {" "}
      <div className="flex flex-col min-h-[800px] w-full bg-[#191919]">
        {" "}
        {/* <MainContentSection />{" "} */}
        <div className="flex justify-center px-40 py-5 w-full">
          {" "}
          <div className="flex flex-col max-w-[960px] w-full">
            {" "}
            <div className="flex flex-wrap justify-around gap-[12px] p-4 w-full">
              {" "}
              <div className="w-72">
                {" "}
                <h1 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[32px] leading-10">
                  {" "}
                  News{" "}
                </h1>{" "}
              </div>{" "}
            </div>{" "}
            <ContentWrapperSection />
             <NavigationSection /> 
             <SidebarSection />{" "}
            <HeaderSection /> 
            <NewsSection />
             <ArticleListSection />{" "}
            <ArticlePreviewSection /> 
            <FeaturedArticleSection />{" "}
            <RelatedArticlesSection />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
