import S from '@sanity/desk-tool/structure-builder';
import { createSuperPane } from 'sanity-super-pane';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Creator').child(createSuperPane('creator', S)),
      S.listItem().title('Opera').child(createSuperPane('opera', S)),
      S.listItem().title('Aria').child(createSuperPane('aria', S)),
      S.listItem()
        .title('Featured Aria')
        .child(createSuperPane('featuredAria', S)),
      S.listItem().title('Voice Type').child(createSuperPane('voiceType', S))
    ]);
