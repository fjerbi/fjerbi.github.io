import { SocialLinkType } from '@/lib/types';

import { Icon } from '@iconify/react';
import SocialLink from './SocialLink';

const SocialIcon = ({ icon, url }: SocialLinkType) => {
  return (
    <li key={url}>
      <SocialLink href={url}>
        <Icon icon={icon} width={24} height={24} />
      </SocialLink>
    </li>
  );
};

export default SocialIcon;
