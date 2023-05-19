import {Images} from "@/types/Images.ts"

export type Response = {
  album_type: string;
  artists: object[];
  available_markets: string[];
  external_urls: {};
  href: string;
  images: Images[];
  id: string;
  name: string;
  release_date: string;
  total_tracks: number;
  type: string;
  uri: string;
};
