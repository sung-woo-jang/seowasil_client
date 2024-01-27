import Link from 'next/link';

import classes from './styles.module.scss';
import Image from 'next/image';
import CommonContainer from '@/components/CommonContainer';

const banner = [
  {
    id: 1,
    image_path: `/images/sample-2.jpg`,
    image_alt: `women's latest fashion sale`,
    sub_title: ``,
    title: ``,
    banner_text: ``,
    link: `#`,
  },

  {
    id: 3,
    image_path: `/images/sample-1.jpg`,
    image_alt: `new fashion summer sale`,
    sub_title: `Sale Offer`,
    title: `New fashion summer sale`,
    banner_text: `2900`,
    link: `#`,
  },
];

export default function Banner() {
  return (
    <div className={classes.bannerWrapper}>
      <CommonContainer>
        <div className={classes.sliderContainer}>
          {banner.map(
            ({ id, image_path, image_alt, sub_title, title, banner_text, link }) => (
              <div className={classes.sliderItem} key={id}>
                <Image
                  className={classes.bannerImg}
                  src={image_path}
                  alt={image_alt}
                  width="0"
                  height="0"
                  sizes="100vw"
                />

                <div className={classes.bannerContent}>
                  <p className={classes.bannerSubtitle}>{sub_title}</p>

                  <h2 className={classes.bannerTitle}>{title}</h2>

                  {banner_text.length !== 0 && (
                    <>
                      <p className={classes.bannerText}>
                        판매가: <b>{banner_text}</b> 원
                      </p>

                      <Link className={classes.bannerBtn} href={link}>
                        사러가기
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </CommonContainer>
    </div>
  );
}
