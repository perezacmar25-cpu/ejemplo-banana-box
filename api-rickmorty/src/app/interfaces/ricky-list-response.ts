import { RickyDetailResponse } from "./ricky-detail-response";

export interface RickListResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: RickyDetailResponse[];
}
