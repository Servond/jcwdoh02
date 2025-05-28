import BlogDetailView from "@/view/blog-detail";
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <BlogDetailView id={id} />;
}
