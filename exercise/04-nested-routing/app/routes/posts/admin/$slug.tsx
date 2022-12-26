import { useParams } from "@remix-run/react";

export default function EditPost() {
  const { slug } = useParams();
  return (
    <div>
      <h3>Edit Post view</h3>
      <p>Slug: {slug}</p>
    </div>
  );
}
