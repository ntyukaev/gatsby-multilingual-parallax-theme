/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next, Link, Trans } from "gatsby-plugin-react-i18next";
import ProjectCard from "../components/project-card";

const Projects = () => {
  const { language } = useI18next();
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          id
          fields {
            updated
            language
            path
            sourceInstanceName
          }
          frontmatter {
            title
            previewImageUrl
            description
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.nodes.filter(
    (post) =>
      post.fields.language === language &&
      post.fields.sourceInstanceName === "posts"
  );
  return (
    <>
      <h2>
        <Trans>Projects</Trans>
      </h2>
      {posts.slice(0, 4).map((post) => (
        <ProjectCard
          preview={post.frontmatter.previewImageUrl}
          key={post.id}
          bg={"linear-gradient(to right, #009245 0%, #FCEE21 100%)"}
          title={post.frontmatter.title}
          updated={post.fields.updated}
          link={post.fields.path}
        >
          {post.frontmatter.description}
        </ProjectCard>
      ))}
      {posts.length > 4 && (
        <Link
          sx={{
            gridColumn: "-1/1",
            textAlign: "center",
            fontWeight: "bold",
            background: "background",
            padding: 2,
          }}
          to="/projects"
        >
          <Trans>Show All</Trans>
        </Link>
      )}
    </>
  );
};

export default Projects;
