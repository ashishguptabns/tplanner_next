import { NextApiRequest, NextApiResponse } from "next";
import { baseUrl } from "../../../utils/constants";
import { ResponseCode } from "../../../model/domain/response";

export const fetchBlogByIdApi = "api/fetchBlogById/";
const fetchBlogByIdUrl = `${baseUrl}/fetchBlogById/?id=`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { blogId } = req.query;
    if (blogId) {
      const data = await getBlogData(blogId as string);
      res.status(ResponseCode.OK).json(data);
    }
  } catch (err) {
    console.log(err);
    res.status(ResponseCode.FAIL);
  }
}
export async function getBlogData(blogId: string) {
  const response = await fetch(fetchBlogByIdUrl + `${blogId}`, {
    next: { revalidate: 60 * 60 },
  });
  return await response.json();
}
