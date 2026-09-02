import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

interface ImageData {
  src: string;
  alt: string;
}

interface SDGItem {
  image: ImageData;
  content: string;
}

interface OurValuesProps {
  craftedOne: ImageData;
  craftedTwo: ImageData;
  sdg: SDGItem[];
  purposeOne: ImageData;
  purposeTwo: ImageData;
}

export default function OurValues({
  craftedOne,
  craftedTwo,
  sdg,
  purposeOne,
  purposeTwo,
}: OurValuesProps) {
  return (
    <TabGroup className="col-span-12 flex flex-col gap-custom-m-l items-center">
      <TabList className="flex gap-custom-s">
        <Tab className="cursor-pointer py-custom-xs px-custom-s border-2 border-gray-300 rounded-2xl font-display text-heading-medium text-muted-moss data-hover:bg-cream data-selected:bg-green data-selected:text-pure-white transition-all duration-200">
          crafted
        </Tab>
        <Tab className="cursor-pointer py-custom-xs px-custom-s border-2 border-gray-300 rounded-2xl font-display text-heading-medium text-muted-moss data-hover:bg-cream data-selected:bg-blue data-selected:text-pure-white transition-all duration-200">
          4 sustainability pillars
        </Tab>
        <Tab className="cursor-pointer py-custom-xs px-custom-s border-2 border-gray-300 rounded-2xl font-display text-heading-medium text-muted-moss data-hover:bg-cream data-selected:bg-orange data-selected:text-pure-white transition-all duration-200">
          purpose
        </Tab>
      </TabList>
      <TabPanels className="py-custom-s-m">
        <TabPanel className="grid grid-cols-12 auto-rows-auto gap-x-custom-s gap-y-custom-s items-start justify-center">
          <div className="col-span-4 col-end-5 row-span-2 row-end-3 font-body font-normal text-body-large max-w-text-body-large text-deep-pine-charcoal">
            Our process begins with thoughtful product design, guided by the
            principles of rethink, reduce, reuse, repurpose, and recycle. By
            holding on to these values into every stage of the developments, we
            strive to minimize waste and develop products that are efficient,
            purposeful, and built to deliver long-term value.
          </div>
          <div className="col-span-7 col-end-13 row-end-2 h-32 flex gap-custom-s">
            <img
              src={craftedOne.src}
              alt={craftedOne.alt}
              className="w-40 h-40 aspect-square object-cover object-center rounded-xl"
            />
            <div className="flex flex-col gap-custom-2xs">
              <span className="font-body font-bold text-body-large text-deep-pine-charcoal">
                "One-way in, one-way out"
              </span>
              <span className="font-body font-normal text-body-normal max-w-text-body-normal text-deep-pine-charcoal">
                Every piece of plastic waste that enters our workshop must leave
                as a useful and impactful products aligned with our roots in
                circularity and sustainability.
              </span>
            </div>
          </div>
          <div className="col-span-7 col-end-13 row-end-3 flex gap-custom-s">
            <img
              src={craftedTwo.src}
              alt={craftedTwo.alt}
              className="w-40 h-40 aspect-square object-cover object-center rounded-xl"
            />
            <div className="flex flex-col gap-custom-2xs">
              <span className="font-body font-bold text-body-large text-deep-pine-charcoal">
                Efficient in-house process
              </span>
              <span className="font-body font-normal text-body-normal max-w-text-body-normal text-deep-pine-charcoal">
                Our product design and essential goods are created efficiently,
                less waste, and easy to assemble. Because from one product, it
                can be reused, repaired, and recycled — this is how our circular
                system works.
              </span>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="grid grid-cols-12 auto-rows-auto gap-x-custom-s gap-y-custom-s items-start justify-center">
          {sdg.map(({ image, content }) => (
            <div className="col-span-3 flex flex-col gap-custom-s">
              <img
                className="w-full aspect-square object-cover object-center rounded-xl"
                src={image.src}
                alt={image.alt}
              />
              <span className="font-body font-normal text-body-large text-deep-pine-charcoal">
                {content}
              </span>
            </div>
          ))}
        </TabPanel>
        <TabPanel className="grid grid-cols-12 auto-rows-auto gap-x-custom-s gap-y-custom-s items-start justify-center">
          <div className="col-span-4 col-end-5 row-span-2 row-end-3 font-body font-normal text-body-large max-w-text-body-large text-deep-pine-charcoal">
            Every products crafted, contribute small impact towards the problem
            we have stated.
          </div>

          <div className="col-span-7 col-end-13 row-end-2 flex gap-custom-s">
            <img
              src={purposeOne.src}
              alt={purposeOne.alt}
              className="w-40 h-40 aspect-square object-cover object-center rounded-xl"
            />
            <div className="flex flex-col gap-custom-2xs">
              <span className="font-body font-bold text-body-large text-deep-pine-charcoal">
                Functional and emotionally valuable
              </span>
              <span className="font-body font-normal text-body-normal max-w-text-body-normal text-deep-pine-charcoal">
                Each product is designed to be functional, durable, and
                emotionally valuable. There's no perfection in every products
                but there's a story behind every product we craft.
              </span>
            </div>
          </div>
          <div className="col-span-7 col-end-13 row-end-3 flex gap-custom-s">
            <img
              src={purposeTwo.src}
              alt={purposeTwo.alt}
              className="w-40 h-40 aspect-square object-cover object-center rounded-xl"
            />
            <div className="flex flex-col gap-custom-2xs">
              <span className="font-body font-bold text-body-large text-deep-pine-charcoal">
                Transparency for impact and awareness
              </span>
              <span className="font-body font-normal text-body-normal max-w-text-body-normal text-deep-pine-charcoal">
                Transparency is part of our process. We share our journey to
                create environmental impact and raise awareness, in order to
                establish collective responsibility among social & community.
              </span>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
