import { ActivityDomain } from "./activity-domain";
import { CommentDomain } from "./comment-domain";

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
