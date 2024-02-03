import classes from './styles.module.scss';

import { getProducts, useGetProducts } from '@/api/products/client/useGetProducts';
import Link from 'next/link';
import storedImageUrlGenerator from '@/utils/storedImageUrlGenerator';
import Image from 'next/image';
import CommonContainer from '@/components/CommonContainer';

interface IProductGridProps {
  title: string;
}

export default async function RecommendedProducts({ title }: IProductGridProps) {
  const data = await getProducts();
  return (
    <div className={classes.ProductContainer}>
      <CommonContainer>
        <div className={classes.ProductBox}>
          <div className={classes.productMain}>
            {/* #REUSED STYLE */}
            <h2 style={{ marginTop: '8rem' }} className="title">
              {title}
            </h2>

            <div className={classes.productGridWrapper}>
              {data.map(({ category, id, productImageUrl, sellPrice, title }) => (
                <div className={classes.showCase} key={id}>
                  <Link href={`/products/${id}`}>
                    <div className={classes.showcaseBanner}>
                      {productImageUrl[0] && (
                        <Image
                          className={classes.productImgDefault}
                          src={storedImageUrlGenerator(productImageUrl[0].storedFileName)}
                          alt={title}
                          width="300"
                          height={0}
                          sizes="100vw"
                        />
                      )}
                      {productImageUrl[1] && (
                        <Image
                          className={classes.productImgHover}
                          src={storedImageUrlGenerator(productImageUrl[1].storedFileName)}
                          alt={title}
                          width="300"
                          height={0}
                          sizes="100vw"
                        />
                      )}
                    </div>

                    <div className={classes.showcaseContent}>
                      <div className={classes.showcaseCategory}>
                        <h3>{title}</h3>
                      </div>

                      <div className={classes.showcaseTitle}>{category.name}</div>

                      <div className={classes.priceBox}>
                        <div className={classes.price}>{sellPrice}원</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
}
