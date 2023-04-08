import { ErrorResponse, ResponseType, ServerResponse } from "../model/response";
import { TripDTO, TripDomain, tripDtoToDomain } from "../model/trip";
import { baseUrl } from "../utils/constants";

const fetchTripsByTypeUrl = `${baseUrl}/fetchTripsByType?type=`;
const fetchTripByIdUrl = `${baseUrl}/fetchTripByIdForViewPage?id=`;

export async function validateAndSaveTripUseCase(
  tripDomain: TripDomain,
  error: (errResponse: ErrorResponse) => void,
  success: (serverResponse: ServerResponse) => void
) {
  // try {
  //   const response = await fetch(savePostApi, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(tripDomain),
  //   });
  //   const data = await response.json();
  //   success({ msg: data, status: ResponseType.OK });
  // } catch (err) {
  //   error({ status: ResponseType.FAIL, msg: JSON.stringify(err) });
  // }
}

export async function fetchTripsByTypeUseCase(
  type: string,
  success: (data: TripDomain[]) => void,
  error: (msg: string) => void
) {
  try {
    const response = await fetch(`${fetchTripsByTypeUrl}${type}`);
    const resultBody = await response.json();
    if (resultBody.result && resultBody.result.length == 0) {
    } else {
      var tripsData: TripDTO[] = resultBody as TripDTO[];
      var tripsDomain: TripDomain[] = [];
      tripsData.forEach((tripDTO) => {
        tripsDomain.push(tripDtoToDomain(tripDTO));
      });
      success(tripsDomain);
    }
  } catch (err) {
    error(JSON.stringify(err));
  }
}

export async function getTripData(tripId: string) {
  const response = await fetch(fetchTripByIdUrl + `${tripId}`, {
    next: { revalidate: 24 * 60 * 60 },
  });
  return await response.json();
}
