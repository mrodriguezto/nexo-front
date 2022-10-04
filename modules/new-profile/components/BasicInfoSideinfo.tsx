import ProfileCard from 'common/components/Card/ProfileCard';
import { useAppSelector } from 'store';

const BasicInfoSideinfo = () => {
  const profile = useAppSelector((state) => state.newProfile.profile);

  return (
    <ProfileCard
      profile={{
        display_name: profile.display_name,
        calification: 'Calificación',
        contacts: 0,
        location: profile.location,
        title: profile.title,
      }}
    />
  );
};

export default BasicInfoSideinfo;
