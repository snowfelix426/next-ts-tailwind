import React from 'react';
import Link from 'next/link';
import Post from '@components/Post/Post';
import { BeakerIcon } from '@heroicons/react/solid';

export interface IBlogsProps {
  content?: any;
}

const Blogs = ({ content }: IBlogsProps) => {
  const { title, description, postList } = content;
  return (
    <div className="px-6 mt-20 mb-12 lg:px-20 md:px-10 lg:mt-40 lg:mb-25">
      <div className="w-full mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-4">
          <div className="text-center lg:col-start-5 lg:col-span-4">
            <h2 className="text-3xl leading-none text-dark-golden uppercase lg:text-4xl pt-3.5 mb-4 lg:mb-8">
              {title}
            </h2>
            <div
              className="text-sm leading-normal text-black lg:text-lg"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          <div className="grid gap-12 mt-8 lg:col-start-2 lg:col-span-10 lg:mt-12">
            {postList?.map((post: any, id: number) => (
              <Post
                key={id}
                name={post.name}
                description={post.description}
                date={post.date}
                imageUrl={post.featuredImage}
                isImageLeft={id % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
