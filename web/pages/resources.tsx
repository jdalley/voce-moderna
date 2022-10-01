import Layout, { LayoutProps } from '@components/Layout';
import { ExternalLinkIcon } from '@heroicons/react/solid';

const resources = [
  {
    description: `A compilation of original works by
		composers in the African Diaspora.`,
    url: `http://africandiasporamusicproject.org`,
    urlText: `African Diaspora Music Project`,
  },
  {
    description: `A community for BIPOC opera professionals and a
		resource for companies, collaborators, and recruiters to engage
		with a wide range of BIPOC talent in the field.`,
    url: `https://www.bipocarts.com/#/`,
    urlText: `BIPOC Arts`,
  },
  {
    description: `A resource to help you program works for solo
		voice(s) and instruments by composers who are Black, Indigenous,
		or People of Colour.`,
    url: `https://morebipocvoices.com/`,
    urlText: `BIPOC Voices`,
  },
  {
    description: `An in-progress list of operas by Black
		composers and about the Black experience.`,
    url: `https://docs.google.com/document/d/1MU-_C9LkIhtsLphlNGNty9qYIla5AGIQh8cR8yFAdVU/edit`,
    urlText: `Black Opera Database`,
  },
  {
    description: `Profiles of composers from
		historically excluded groups who have consented to being
		represented in our databases.`,
    url: `https://www.composerdiversity.com/composer-diversity-database`,
    urlText: `Composer Diversity Database`,
  },
  {
    description: ``,
    url: `http://www.pytheasmusic.org/opera_by_women.html`,
    urlText: `Contemporary Opera by Women Composers`,
  },
  {
    description: `A charitable foundation that is here to
		make a positive change in the fight against gender inequality
		within the music industry. Our main goal is to celebrate, advance,
		and amplify women in music so that they are seen, heard, and
		appreciated for their talent so they can leave a legacy of
		inspiration for future generations.`,
    url: `https://donne-uk.org/`,
    urlText: `Donne, Women in Music`,
  },
  {
    description: `A collection of fifty new art songs set exclusively to Irish language texts.`,
    url: `https://www.cmc.ie/AmhrainEalaineGhaeilge`,
    urlText: `Irish Language Art Song Project`,
  },
  {
    description: ``,
    url: `https://www.operaamerica.org/industry-resources/`,
    urlText: `Opera America: Industry Resources`,
  },
  {
    description: `A simple way to search through the vast number of art
		songs by poet, date of composition, thematic links, keywords, or
		utility.`,
    url: `https://www.songhelix.com/`,
    urlText: `SongHelix`,
  },
  {
    description: `A nonprofit database, charting the
		lives and works of composers in the here and now.`,
    url: `http://www.composers21.com`,
    urlText: `The Living Composers Project`,
  },

  {
    description: `A comprehensive database of operas and arias.`,
    url: `https://theoperadatabase.com/`,
    urlText: `The Opera Database`,
  },
  {
    description: `The mission of United in Opera is to inspire
		creativity, provide vital resources, and to mentor musicians so
		that they may have an impact on the opera world. We support
		musicians without regards to race, ethnicity, gender, sexuality,
		or financial situation.`,
    url: `https://www.unitedinopera.org/`,
    urlText: `United in Opera`,
  },
];

export default function Faq() {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Resources - Voce Moderna',
    },
  };
  return (
    <Layout customMeta={layoutProps.customMeta}>
      <div className="mx-auto max-w-4xl py-4 px-4 text-center sm:py-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Resources
        </h2>
        <p className="mt-4 text-gray-500">
          Looking for something else? Check out some of these other fantastic
          resources:
        </p>
        <div className="mt-8">
          <ul role="list" className="divide-y divide-gray-200">
            {resources.map((resource) => (
              <li key={resource.url} className="flex justify-center py-4">
                <div className="ml-3">
                  <p className="font-medium text-gray-900">
                    <a
                      href={resource.url}
                      className=" hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.urlText}
                      <ExternalLinkIcon className="mx-1 mb-1 inline h-4 w-4" />
                    </a>
                  </p>
                  <p className=" text-gray-500">{resource.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
