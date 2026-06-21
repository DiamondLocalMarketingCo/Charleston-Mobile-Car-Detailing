type GoogleReview = {
  author_name?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
  time?: number;
};

type GooglePlaceDetailsResponse = {
  status?: string;
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: GoogleReview[];
  };
};

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

export async function getGoogleReviewSummary(): Promise<GoogleReviewSummary | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,rating,user_ratings_total,reviews,url");
  url.searchParams.set("key", apiKey);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 12 },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as GooglePlaceDetailsResponse;

    if (data.status !== "OK" || !data.result) {
      return null;
    }

    return {
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      profileUrl: data.result.url,
      reviews: (data.result.reviews ?? [])
        .filter((review) => review.text)
        .map((review) => ({
          name: review.author_name ?? "Google reviewer",
          rating: review.rating ?? 5,
          text: review.text ?? "",
          relativeTime: review.relative_time_description,
        })),
    };
  } catch {
    return null;
  }
}
