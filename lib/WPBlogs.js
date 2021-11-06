/** @format */

import fetch from "node-fetch";

export async function getBlogsSortedPostsData() {
  const repoUrl = "https://blog.usuyuki.net/wp-json/wp/v2/posts?per_page=5";
  const response = await fetch(repoUrl);
  const blogs = await response.json();

  const allBlogsPostsData = blogs.map((blog) => {
    const id = blog.id;
    const title = blog.title.rendered;
    const date = blog.date_gmt;
    const link = blog.link;
    const thumbnail = blog.thumbnail.url;
    const contentExc = blog.excerpt.rendered;
    const contentRaw = blog.content.rendered;
    const contentRemovedTags = contentExc.replace(
      /<("[^"]*"|'[^']*'|[^'">])*>/g,
      ""
    );

    const content = contentRemovedTags;
    // contentRemovedTags.length >= 200
    //   ? contentRemovedTags.substr(0, 200) + "…………(続く)"
    //   : contentRemovedTags;

    return {
      id,
      title,
      date,
      link,
      content,
      thumbnail,
    };
  });

  return allBlogsPostsData;
}
