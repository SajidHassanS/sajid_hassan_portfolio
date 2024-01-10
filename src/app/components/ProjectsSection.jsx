"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NFTs Website",
    description: "This website is developed in Next js",
    image: "/images/projects/nftative.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SajidHassanS/NFTATIVE.git",
    previewUrl: "/images/projects/nftative.png",
  },
  {
    id: 2,
    title: "Bootstrap Website",
    description: "this is simple xd to bootstrap website",
    image: "/images/projects/bootstrap.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SajidHassanS/xd-to-bootstrap.git",
    previewUrl: "/images/projects/bootstrap.png",
  },
  {
    id: 3,
    title: "School Portal ",
    description: "This portal in develop in MERN Stack",
    image: "/images/projects/mern_school.png",
    tag: ["All", "MERN"],
    gitUrl: "https://github.com/SajidHassanS/schoolfrontend.git",
    previewUrl: "/images/projects/mern_school.png",
  },
  {
    id: 4,
    title: "Restaurant Website",
    description: "This is html css bootstrap javascript website",
    image: "/images/projects/Durani_Restaurant.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SajidHassanS/Durani_Restaurant.git",
    previewUrl: "/images/projects/Durani_Restaurant.png",
  },
  {
    id: 5,
    title: "Netflix",
    description: "simple netflix website in next js",
    image: "/images/projects/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SajidHassanS/Netflix-next-js.git",
    previewUrl: "/images/projects/netflix.png",
  },
  {
    id: 5,
    title: "Catering Website",
    description: "catering website developed in bootstrap , js",
    image: "/images/projects/catering.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SajidHassanS/catering-website.git",
    previewUrl: "/images/projects/catering.png",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6 md:flex">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MERN"
          isSelected={tag === "MERN"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Wordpress"
          isSelected={tag === "Wordpress"}
        />
       
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
