import { copyComponent, galleryComponent, imageComponent } from './components';
import info, { infoCredentials, infoDetails, infoSocials } from './info';
import { colSpan, elements } from './layout';
import page, { pageBlock } from './page';
import user from './user';
import work, { workCard } from './work';

export const schemaTypes = [
  // components
  copyComponent,
  galleryComponent,
  imageComponent,

  // layout
  colSpan,
  elements,

  // info
  info,
  infoCredentials,
  infoDetails,
  infoSocials,

  // work
  work,
  workCard,

  user,

  page,
  pageBlock,
];
