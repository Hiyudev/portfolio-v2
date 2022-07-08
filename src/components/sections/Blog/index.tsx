import Title from "../../common/Title";

function BlogsSection() {
  return (
    <section id="blogs" className="mt-8 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2">
      <div className="space-y-4">
        <Title>Blog posts</Title>
        <p className="text-secondary">Pog</p>
      </div>
    </section>
  );
}

export default BlogsSection;
