const SEO = {
  defaultTitle: "Kevin Yuki's portfolio",
  description:
    "Enthusiast developer passionate about the technology world. I create and design fast and accessible programs to make your idea a real-world product.",
  additionalMetaTags: [
    {
      property: "keywords",
      content:
        "kevin yuki, kevin yuki portfolio, kevin, kevin portfolio, hiyudev, hiyudev portfolio",
    },
    {
      name: "theme_color",
      content: "#ec4899",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/asset/favicon.ico",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiyudev.me/",
    title: "Kevin Yuki's portfolio",
    site_name: "Kevin Yuki's portfolio",
    description:
      "Enthusiast developer passionate about the technology world. I create and design fast and accessible programs to make your idea a real-world product.",
    images: [
      {
        url: "https://readme.so/asset/banner.png",
        width: 1360,
        height: 768,
        alt: "Og Image Alt",
      },
    ],
    imageWidth: 1360,
    imageHeight: 768,
  },
  twitter: {
    handle: "@Hiyudev",
    cardType: "summary_large_image",
  },
};

export default SEO;
