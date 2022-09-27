import ProfileCard from 'common/components/Card/ProfileCard';
import { basicInfoSideinfo as strings } from '../strings';

const profile = strings.profile;

const BasicInfoSideinfo = () => {
  return <ProfileCard profile={profile} />;
};

export default BasicInfoSideinfo;
