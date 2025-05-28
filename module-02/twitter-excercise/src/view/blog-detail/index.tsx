import { fetchBlogServiceById } from "@/service/blog.service";
import { IBlog } from "@/interface/blog.interface";
import RichText from "@/components/richText";

export default async function BlogDetailView({ id }: { id: string }) {
  const { fields }: IBlog = await fetchBlogServiceById(id);
  return (
    <div className="w-[800px] mr-auto ml-auto">
      {fields ? (
        <div>
          <div className="font-bold text-4xl mb-4">{fields.title}</div>
          <div className="p-2">
            <RichText article={fields.article} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
