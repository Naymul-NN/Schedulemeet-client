import BlogCard from "@/components/blog/BlogCard";
import TopArticleCard from "@/components/blog/TopArticleCard";
import Title from "@/shared/Title/title";
import React from "react";

const Blog = () => {
  return (
    <div className="blogContainer bg-gray-50 text-gray-950  ">
      <div className="blogWrapper   m-auto pt-6  ">
        {/* title section starts  */}

        <Title title={"The Sense Blog"} />

        <p className="   text-center font-medium text-sm sm:text-base md:text-lg pt-3 pb-5   ">
          The latest updates, stories, ideas and guides from the Sense team.
        </p>

        {/* title section ends  */}

        {/* top 3 articles section starts  */}
        <div className="topArticles  py-9 bg-blue-100   ">
          {/* top article title starts  */}

          <div className="topArticleTitle text-xl sm:text-2xl md:text-3xl font-bold sm:font-semibold  text-center pb-8 ">
            <h1>Explore our top articles</h1>
          </div>
          {/* top article title ends  */}

          <div className="topArticleCardContainer w-[75%] sm:w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8  ">
            <TopArticleCard />
            <TopArticleCard />
            <TopArticleCard />
          </div>
        </div>
        {/* top 3 articles section ends  */}

        {/* main blog section starts  */}

        <div className="allBlogs  bg-red-400 py-3 w-[90%] m-auto  ">
          {/* title starts  */}
          <h1 className="  text-3xl text-center font-semibold py-3   ">
            Our Latest blogs
          </h1>
          {/* title ends  */}

          {/* blog cards  */}
          <div className="blogCards mt-4  bg-orange-400 grid grid-cols-3 gap-x-4 gap-y-9  ">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          {/* blog cards ends  */}
        </div>

        {/* main blog section ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Blog;
