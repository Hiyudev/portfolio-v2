import Link from "next/link";

const LinksPage = () => {
  return (
    <div>
      <h1>Links</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/links">Links</Link>
      </p>
    </div>
  );
};

export default LinksPage;
