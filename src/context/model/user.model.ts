import { ImageSourcePropType } from 'react-native';

export interface UserDataModel {
  id: string;
  id_token: string;
  access_token: string;
  refresh_token: string;
  first_name: string;
  last_name: string;
  last_access_at: string;
  profile_picture: ImageSourcePropType;
}
