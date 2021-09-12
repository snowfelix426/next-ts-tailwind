import React from 'react';
import Image from 'next/image';

export interface IPostProps {
  imageUrl: string;
  name?: string;
  date?: string;
  description?: string;
  isImageLeft?: boolean;
}

const Post = ({
  imageUrl,
  name,
  date,
  description,
  isImageLeft = true,
}: IPostProps) => {
  return (
    <div className="grid gap-6 lg:gap-14 lg:grid-cols-2">
      <div className={`block ${isImageLeft ? '' : 'lg:order-last'}`}>
        <Image
          src={imageUrl}
          alt="post-img"
          width={480}
          height={300}
          objectFit="cover"
          layout="responsive"
          className="w-full"
        />
      </div>

      <div className={`${isImageLeft ? '' : 'lg:text-right'}`}>
        <span className="text-sm lg:text-base text-dark-golden">{date}</span>
        <h3 className="pt-1 mb-2 text-xl font-medium leading-none text-black lg:text-2xl lg:mb-4">
          {name}
        </h3>
        <p className="text-sm text-light-grey">{description}</p>
      </div>
    </div>
  );
};

export default Post;
