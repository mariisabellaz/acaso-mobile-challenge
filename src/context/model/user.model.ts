interface UserModels {
  id: string;
  created_at: string;
  updated_at: string;
  email: string;
  first_name: string;
  last_name: string;
  nickname: string;
  bio: string;
  birthday: string;
  children_qty: number;
  civil_state: string;
  instagram: string;
  whats_app: string;
  linkedin: string;
  city_current_id: string;
  city_born_at_id: string;
  state_current_id: string;
  state_born_at_id: string;
  company_id: string;
  occupation_id: string;
  work_field_id: string;
  skills_want: Array<[]>;
  skills_can: Array<[]>;
  hobbies: Array<[]>;
  onboard_complete: boolean;
  last_access_at: string;
  profile_picture: string;
  groups: Array<[]>;
  spotify: SpotifyProps;
  badge: string;
  microverse_role: string;
}

interface SpotifyProps {
  display_name: string;
  top_artist: TopArtistProps;
  top_genre: string;
  most_recent_saved_show: MostRecentSavedShowProps;
}

interface TopArtistProps {
  id: string;
  name: string;
  url: string;
  genres: Array<[string]>;
}

interface MostRecentSavedShowProps {
  id: string;
  name: string;
  url: string;
}
