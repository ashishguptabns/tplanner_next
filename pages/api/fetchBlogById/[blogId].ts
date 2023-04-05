import { NextApiRequest, NextApiResponse } from "next";
import { baseUrl } from "../../../utils/constants";
import { ResponseCode } from "../../../model/domain/response";

export const fetchBlogByIdApi = "api/fetchBlogById/";
export const fetchBlogByIdUrl = `${baseUrl}/fetchBlogById/?id=`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { blogId } = req.query;
    if (blogId) {
      const response = await fetch(fetchBlogByIdUrl + `${blogId}`, {
        next: { revalidate: 60 * 60 },
      });
      const data = await response.json();
      res.status(ResponseCode.OK).json(data);
    }
  } catch (err) {
    console.log(err);
    res.status(ResponseCode.FAIL);
  }
}
