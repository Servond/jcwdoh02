import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export default function RichText({
  article,
}: {
  article: Document | undefined;
}) {
  if (!article) return null;

  return <>{documentToReactComponents(article)}</>;
}
