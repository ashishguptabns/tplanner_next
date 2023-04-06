import {
  ErrorResponse,
  ResponseType,
  ServerResponse,
} from "../model/domain/response";
import { savePostApi } from "../pages/api/save-post";
import { TripDTO } from "../model/dto/trip-dto";
import { TripDomain } from "../model/domain/trip-domain";
import { fetchTripsByTypeApi } from "../pages/api/fetchTripsByType/[type]";

export async function validateAndSaveTripUseCase(
  tripDomain: TripDomain,
  error: (errResponse: ErrorResponse) => void,
  success: (serverResponse: ServerResponse) => void
) {
  try {
    const response = await fetch(savePostApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripDomain),
    });
    const data = await response.json();
    success({ msg: data, status: ResponseType.OK });
  } catch (err) {
    error({ status: ResponseType.FAIL, msg: JSON.stringify(err) });
  }
}

export async function fetchTripsByTypeUseCase(
  type: string,
  success: (data: TripDTO[]) => void,
  error: (msg: string) => void
) {
  try {
    const response = await fetch(`${fetchTripsByTypeApi}${type}`);
    const resultBody = await response.json();
    if (resultBody.result && resultBody.result.length == 0) {
    } else {
      var tripsData: TripDTO[] = resultBody as TripDTO[];
      success(tripsData);
    }
  } catch (err) {
    error(JSON.stringify(err));
  }
}
