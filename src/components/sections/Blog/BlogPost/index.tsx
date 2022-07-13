import Image from "next/image";
import Link from "next/link";
import Card from "../../../common/Card";

interface BlogPostProps {
  href: string;
  title: string;
  description: string;
  coverImageUrl: string;
}

function BlogPost({ title, description, coverImageUrl, href }: BlogPostProps) {
  return (
    <Link passHref href={href}>
      <a>
        <Card className="group relative">
          <div className="fancy-gradient absolute inset-0.5 -z-10 opacity-0 blur transition-opacity group-hover:opacity-75 group-focus:opacity-75"></div>
          <div className="relative">
            {coverImageUrl && (
              <Image
                alt={`${title} blog post thumbnail`}
                objectFit="cover"
                height={600}
                width={1400}
                src={coverImageUrl}
              />
            )}
          </div>
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-secondary">{description}</p>
          </div>
        </Card>
      </a>
    </Link>
  );
}

export default BlogPost;
