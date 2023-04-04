import { NextApiRequest, NextApiResponse } from "next";
import { baseUrl } from "../../../utils/constants";
import { ResponseCode } from "../../../model/domain/response";

export const fetchTripsByTypeApi = "api/fetchTripsByType/";
const fetchTripsByTypeUrl = `${baseUrl}/fetchTripsByType?type=`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { type } = req.query;
    const response = await fetch(fetchTripsByTypeUrl + `${type}`, {
      next: { revalidate: 60 * 60 },
    });
    const data = await response.json();
    res.status(ResponseCode.OK).json(data);
  } catch (err) {
    console.log(err);
    res.status(ResponseCode.FAIL);
  }
}
