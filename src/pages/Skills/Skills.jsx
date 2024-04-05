import React, { useEffect, useState } from "react";
import SkillPost from "./SkillPost";
import "./Skills.css";
import useStore from "../../zustand";

const Blogs = () => {
  const { data } = useStore();
  console.log(data.skills);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // Number of posts per page

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>
      <div className="blog-posts">
        <ul className="blog-posts-list">
          {data?.skills?.map((post, index) => (
            <SkillPost
              key={index}
              title={post.name}
              category={post.category}
              // date={post.date}
              image={post.image.url}
              description={post.percentage}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
