'use client';
import { Button } from '@/components/VButton';
import classes from './styles.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import storedImageUrlGenerator from '@/utils/storedImageUrlGenerator';
import {
    IGetProductDetailResponse,
    useGetProductDetail,
} from '@/api/products/getProductDetail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import isNull from 'lodash/isNull';
import numberWithCommas from '@/utils/numberWithCommas';

export function ProductDescription({ params }: { params: string }) {
    const { data } = useGetProductDetail(params);

    const { productImageUrl, category, description, prevPrice, sellPrice, title } =
        data as IGetProductDetailResponse;

    const [activeImg, setActiveImage] = useState<string>(
        storedImageUrlGenerator(productImageUrl[0].storedFileName)
    );

    return (
        // <div className="max-w-5xl mx-auto my-10">
        <div className={classes.MainContainer}>
            <div className={classes.ImageContainer}>
                <Image
                    className={classes.MainImage}
                    src={activeImg}
                    alt=""
                    width={650}
                    height={650}
                />
                <div className="flex space-x-2">
                    {productImageUrl.map(({ id, storedFileName }) => (
                        <Image
                            className={classes.ProductImage}
                            key={id}
                            src={storedImageUrlGenerator(storedFileName)}
                            alt={storedFileName}
                            onMouseEnter={() => {
                                setActiveImage(storedImageUrlGenerator(storedFileName));
                            }}
                            width={96}
                            height={96}
                        />
                    ))}
                </div>
            </div>

            <div className={classes.FlexContainer}>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="text-sm text-gray-500">{category.name}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FavoriteBorderIcon className="text-gray-400" />
                        <IosShareIcon className="text-gray-400" />
                        <MoreHorizIcon className="text-gray-400" />
                    </div>
                </div>
                {/* 별점 */}
                <div className="my-4">
                    <RenderStarsRatingComponent rating={0} />
                    <PriceArea prevPrice={prevPrice} sellPrice={sellPrice} />
                </div>
                <div className="border-t border-b py-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm">{description} </span>
                    </div>
                </div>
                <div className="my-4">
                    <div className="flex items-center space-x-2">
                        <Button className="px-4 py-2 bg-blue-600 text-white rounded">
                            구매하기
                        </Button>
                        {/* <Button className="px-4 py-2 bg-gray-100 text-gray-600 rounded">
                장바구니
              </Button> */}
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}

const RenderStarsRatingComponent = ({ rating }: { rating: number }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <StarBorderIcon
                key={i}
                className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
            />
        );
    }
    return (
        <div className="flex items-center space-x-2">
            {stars}
            {/* <span className="text-sm text-gray-500">(0 리뷰)</span> */}
        </div>
    );
};

function PriceArea({
    sellPrice,
    prevPrice,
}: {
    sellPrice: number;
    prevPrice: number | null;
}) {
    if (isNull(prevPrice))
        return (
            <div className="flex items-center space-x-1 my-2">
                <span className="text-3xl font-bold text-black-600">
                    {numberWithCommas(sellPrice)}원
                </span>
            </div>
        );
    return (
        <div className="flex items-center space-x-1 my-2">
            <span className="text-lg line-through text-gray-400">
                {numberWithCommas(prevPrice)}원
            </span>
            <span className="text-3xl font-bold text-red-600">
                {numberWithCommas(sellPrice)}원
            </span>
            <span className="text-sm bg-red-200 text-red-600 px-1 rounded">
                {Math.ceil((sellPrice / prevPrice) * 100)}%
            </span>
        </div>
    );
}
