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

type GoogleFindPlaceResponse = {
  status?: string;
  candidates?: Array<{
    place_id?: string;
  }>;
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

const placeSearchQuery = "Charleston Mobile Car Detailing Charleston WV";

async function findPlaceId(apiKey: string): Promise<string | null> {
  const url = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  url.searchParams.set("input", placeSearchQuery);
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url.toString(), {
    next: { revalidate: 60 * 60 * 24 * 7 },
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as GoogleFindPlaceResponse;
  return data.status === "OK" ? data.candidates?.[0]?.place_id ?? null : null;
}

export async function getGoogleReviewSummary(): Promise<GoogleReviewSummary | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return null;
  }

  const placeId = process.env.GOOGLE_PLACE_ID ?? (await findPlaceId(apiKey));

  if (!placeId) {
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
