import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from './select';
import classes from './styles.module.scss';
import { Button } from '@/components/VButton';
import { CardHeader, CardContent, CardFooter, Card } from './card';
import { Badge } from './badge';
import Image from 'next/image';

export function ProductLists() {
  return (
    <>
      <div className={classes.selectBox}>
        <h1 className="text-2xl font-bold">인기 상품</h1>
        <Select>
          <SelectTrigger id="sort" style={{ width: '50%' }}>
            <SelectValue placeholder="최신순" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="latest">최신순</SelectItem>
            <SelectItem value="popularity">인기순</SelectItem>
            <SelectItem value="price-low-high">가격 낮은순</SelectItem>
            <SelectItem value="price-high-low">가격 높은순</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div key="1" style={{ maxWidth: '1280px', marginBottom: '3rem' }}>
        <div className={classes.cardGrid}>
          <Card className="w-full">
            <CardHeader>
              <div className={classes.imgBox}>
                <Image
                  alt="Blog Cover"
                  className={classes.imgContent}
                  height={300}
                  src={`${'/images/sample-1.jpg'}`}
                  width={700}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">
                [제품명] 제품 설명이 들어가는 곳
              </h3>
              <p className="text-sm text-gray-500">추가 설명이 들어가는 곳</p>
              <div className={classes.flexItem}>
                <Badge variant="secondary">35%</Badge>
                <span className="text-xl font-bold ml-2">724,900원</span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  1,000,000원
                </span>
              </div>
            </CardContent>
            <CardFooter className={classes.cardFooter}>
              <Badge>무료 배송</Badge>
              <Button variant="ghost">장바구니</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
