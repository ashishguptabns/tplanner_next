import { NextApiRequest, NextApiResponse } from "next";
import { ResponseCode } from "../../../model/domain/response";
import { baseUrl } from "../../../utils/constants";

export const fetchTripByIdApi = "api/fetchTripById/";
const fetchTripByIdUrl = `${baseUrl}/fetchTripByIdForViewPage?id=`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { tripId } = req.query;
    if (tripId) {
      const data = await getTripData(tripId as string);
      res.status(ResponseCode.OK).json(data);
    }
  } catch (err) {
    console.log(err);
    res.status(ResponseCode.FAIL);
  }
}

export async function getTripData(tripId: string) {
  const response = await fetch(fetchTripByIdUrl + `${tripId}`, {
    next: { revalidate: 60 * 60 },
  });
  return await response.json();
}
