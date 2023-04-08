import { ActivityDomain } from "./activity";
import { CommentDomain } from "./comment";

export function tripDtoToDomain(tripDTO: TripDTO): TripDomain {
  return tripDTO as TripDomain;
}

export interface TripDomain {
  id?: string;
  dateRange?: string;
  cityTo?: string;
  interCityTravelCost?: number;
  withinPlaceCommuteCost?: number;
  totalBudget?: number;
  departDate?: string;
  cityImgUrl?: string;
  cityFrom?: string;
  returnDate?: string;
  isPrivate?: boolean;
  activities?: ActivityDomain[];
  comments?: CommentDomain[];
  postedByPhotoUrl?: string;
  blogLink?: string;
  blogId?: string;
  postedByUserId?: string;
}

export interface TripDTO {
  id?: string;
  dateRange?: string;
  cityTo?: string;
  interCityTravelCost?: number;
  withinPlaceCommuteCost?: number;
  totalBudget?: number;
  departDate?: string;
  cityImgUrl?: string;
  cityFrom?: string;
  returnDate?: string;
  isPrivate?: boolean;
  activities?: ActivityDomain[];
  comments?: CommentDomain[];
  postedByPhotoUrl?: string;
  blogLink?: string;
  blogId?: string;
  postedByUserId?: string;
}
