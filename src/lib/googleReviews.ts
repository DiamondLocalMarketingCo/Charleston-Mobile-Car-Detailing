import { business } from "@/lib/site";
import { manualReviews } from "@/lib/manualReviews";

export type SiteReview = {
  name: string;
  rating: number;
  text: string;
  relativeTime?: string;
};

export type GoogleReviewSummary = {
  rating?: number;
  totalReviews?: number;
  reviews: SiteReview[];
  profileUrl?: string;
};

export async function getGoogleReviewSummary(): Promise<GoogleReviewSummary> {
  return {
    rating: 5,
    totalReviews: 5,
    profileUrl: business.googleReviewsUrl,
    reviews: [...manualReviews],
  };
}
