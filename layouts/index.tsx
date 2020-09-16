import hydrate from "next-mdx-remote/hydrate";
import Heading from "../components/Heading";
import Link from "next/link";

export default function PostPage({ children, frontMatter, NODE_ENV }) {
  const content = process.env.NODE_ENV === "production" ? hydrate(children, { components: { Heading } }) : children;
  
  return (
      <>
        <header>
          <nav>
            <Link href="/">
              <a>👈 Go back home</a>
            </Link>
          </nav>
        </header>
        <div className="post-header">
          <h1>{frontMatter.title}</h1>
          {frontMatter.description && <p className="description">{frontMatter.description}</p>}
        </div>
        <main>{content}</main>
        
        <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
      </>
  );
}