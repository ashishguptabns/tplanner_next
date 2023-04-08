import { baseUrl } from "../utils/constants";

const fetchBlogByIdUrl = `${baseUrl}/fetchBlogById/?id=`;

export async function getBlogData(blogId: string) {
  const response = await fetch(fetchBlogByIdUrl + `${blogId}`, {
    next: { revalidate: 24 * 60 * 60 },
  });
  return await response.json();
}
