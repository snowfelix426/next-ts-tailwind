import React from 'react';
import { Button, Input } from '@components/Common/Common';

export interface IContactProps {}

const Contact = ({}: IContactProps) => {
  return (
    <div className="px-6 py-20 bg-gray-100 lg:px-20 md:px-10 lg:py-30">
      <div className="w-full mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-4">
          <div className="xl:col-start-3 xl:col-span-8 lg:col-start-2 lg:col-span-10">
            <div className="text-center">
              <h2 className="text-2xl leading-none text-dark-golden uppercase lg:text-3xl pt-3.5 mb-4 lg:mb-8">
                Contact
              </h2>
            </div>

            <form className="w-full">
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <div className="mb-4 lg:mb-7">
                  <Input placeholder="First name" />
                </div>
                <div className="mb-4 lg:mb-7">
                  <Input placeholder="Last name" />
                </div>
              </div>

              <div className="mb-4 lg:mb-7">
                <Input placeholder="Your email" type="email" />
              </div>

              <textarea
                className="w-full px-2 py-1 mb-4 text-sm leading-tight bg-transparent border-b border-black appearance-none text-dark-grey placeholder-dark-grey lg:mb-7 lg:text-base focus:outline-none"
                placeholder="Message"
                rows={4}
                aria-label="Message"
              />

              <div className="mt-4 lg:mt-7">
                <Button
                  className="mx-auto lg:w-50"
                  type="submit"
                  color="outline"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
