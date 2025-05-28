import { fetchBlogService } from "@/service/blog.service";
import Link from "next/link";
import { IBlog } from "@/interface/blog.interface";

export default async function BlogView() {
  const blogs: IBlog[] = await fetchBlogService();

  return (
    <div className="w-[800px] mr-auto ml-auto">
      {blogs
        ? blogs.map((blog, idx) => (
            <Link key={idx} href={`/blog/${blog.sys.id}`}>
              <div className="mb-10">
                <div className="font-bold text-4xl mb-4">
                  {blog.fields.title}
                </div>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
}
