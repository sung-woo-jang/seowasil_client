'use client';
import { Card, CardContent, CardHeader } from '@/components/ProductCard/card';
import numberWithCommas from '@/utils/numberWithCommas';
import storedImageUrlGenerator from '@/utils/storedImageUrlGenerator';
import Image from 'next/image';
import classes from './styles.module.scss';
import isNull from 'lodash/isNull';
import { Badge } from '@/components/Badge';
import Link from 'next/link';
import { useGetProducts } from '@/api/products/getProducts';

export default function ProductCard() {
    const { data } = useGetProducts();
    return (
        <div style={{ maxWidth: '1280px', marginBottom: '3rem' }}>
            <div className={classes.cardGrid}>
                {data?.map(
                    ({
                        category,
                        description,
                        id,
                        isBest,
                        minAmount,
                        prevPrice,
                        productImageUrl,
                        sellPrice,
                        status,
                        title,
                        viewCount,
                    }) => (
                        <Card key={id} className={classes.Card}>
                            <CardHeader>
                                <Link href={`/products/${id}`}>
                                    <div className={classes.imgBox}>
                                        <Image
                                            alt="Blog Cover"
                                            className={classes.imgContent}
                                            height={300}
                                            src={storedImageUrlGenerator(
                                                productImageUrl[0].storedFileName
                                            )}
                                            width={700}
                                        />
                                    </div>
                                </Link>
                            </CardHeader>
                            <CardContent>
                                <h3 className="text-lg font-semibold">{title}</h3>
                                <p className="text-sm text-gray-500">{description}</p>
                                <PriceArea prevPrice={prevPrice} sellPrice={sellPrice} />
                            </CardContent>
                        </Card>
                    )
                )}
            </div>
        </div>
    );
}

function PriceArea({
    sellPrice,
    prevPrice,
}: {
    sellPrice: number;
    prevPrice: number | null;
}) {
    if (isNull(prevPrice))
        return (
            <div className={classes.flexItem}>
                <span className="text-xl font-bold ml-2">
                    {numberWithCommas(sellPrice)}원
                </span>
            </div>
        );
    return (
        <div className={classes.flexItem}>
            <Badge variant="secondary">{Math.ceil((sellPrice / prevPrice) * 100)}%</Badge>
            <span className="text-xl font-bold ml-2">
                {numberWithCommas(sellPrice)}원
            </span>
            <span className="text-sm text-gray-500 line-through ml-2">
                {numberWithCommas(prevPrice)}원
            </span>
        </div>
    );
}
