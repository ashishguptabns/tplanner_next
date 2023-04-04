import { NextApiRequest, NextApiResponse } from "next";
import { baseUrl } from "../../../utils/constants";
import { ResponseCode } from "../../../model/domain/response";

export const fetchTripByIdApi = "api/fetchTripById/";
export const fetchTripByIdUrl = `${baseUrl}/fetchTripByIdForViewPage?id=`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { tripId } = req.query;
    if (tripId) {
      const response = await fetch(fetchTripByIdUrl + `${tripId}`, {
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
