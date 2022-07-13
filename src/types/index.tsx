import {
  Article,
  GithubLogo,
  House,
  Link,
  ShareNetwork,
  TwitterLogo,
} from "phosphor-react";

export const SocialList = {
  Twitter: {
    logo: <TwitterLogo aria-label="Twitter logo" weight={"bold"} />,
    link: "/social/twitter",
  },
  Github: {
    logo: <GithubLogo aria-label="Github logo" weight={"bold"} />,
    link: "/social/github",
  },
};

export const HomeSectionsList = {
  HOME: {
    label: {
      value: "home",
      description: "view home",
    },
    link: "/",
    image: {
      source: <House aria-label="House image" weight="bold" />,
    },
  },
  PROJECTS: {
    label: {
      value: "projects",
      description: "view projects",
    },
    link: "/#projects",
    image: {
      source: <ShareNetwork aria-label="Projects image" weight="bold" />,
    },
  },
  BLOGS: {
    label: {
      value: "blogs",
      description: "view blog articles",
    },
    link: "/#blogs",
    image: {
      source: <Article aria-label="Blog articles" weight="bold" />,
    },
  },
  LINKS: {
    label: {
      value: "links",
      description: "view links page",
    },
    link: "/links",
    image: {
      source: <Link aria-label="Links image" weight="bold" />,
    },
  },
};
