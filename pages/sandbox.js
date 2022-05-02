import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Sandbox() {
  return (
    <>
      <PageSEO
        title={`Sandbox - ${siteMetadata.author}`}
        description={siteMetadata.description}
        // availableLocales={availableLocales}
      />
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sandbox
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {/* {projectsData?.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                // imgSrc={d.imgSrc} // issue with height and width - no image actually
                href={d.href}
                className="p-4"
              />
            ))} */}
          </div>
        </div>
      </div>
    </>
  )
}
