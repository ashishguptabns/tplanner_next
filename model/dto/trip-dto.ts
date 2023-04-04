import { ActivityDomain } from "../domain/activity-domain";
import { CommentDomain } from "../domain/comment-domain";

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
