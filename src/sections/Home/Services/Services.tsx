import React from 'react';
import Link from 'next/link';
import { BeakerIcon } from '@heroicons/react/solid';

export interface IServicesProps {
  content?: any;
}

const Hero = ({ content }: IServicesProps) => {
  const { title, description, servicesList } = content;
  return (
    <div className="px-6 mt-20 mb-12 lg:px-20 md:px-10 lg:mt-30 lg:mb-25">
      <div className="w-full mx-auto text-center max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-4">
          <div className="lg:col-start-2 lg:col-span-10">
            <h2 className="text-2xl leading-none text-dark-golden uppercase lg:text-3xl pt-3.5 mb-4 lg:mb-8">
              {title}
            </h2>
            <div
              className="text-sm leading-none text-black lg:text-lg"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          <div className="gap-4 mt-8 lg:col-start-1 lg:col-span-12 lg:grid lg:grid-cols-3 lg:mt-12">
            {servicesList?.map((service: any, id: number) => (
              <div className="text-center" key={id}>
                <BeakerIcon className="w-6 h-6 mx-auto mb-4 text-dark-golden lg:mb-6" />
                <h4 className="mb-2 text-base font-bold uppercase text-dark-grey lg:text-lg lg:mb-3">
                  {service.name}
                </h4>
                <p className="text-sm lg:text-base text-light-grey">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
