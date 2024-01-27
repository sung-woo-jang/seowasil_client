'use client';
import { ICategory, useGetCategories } from '@/api/categories/getCategories';
import classes from './styles.module.scss';
import Link from 'next/link';
import CommonContainer from '@/components/CommonContainer';

export default function DesktopNavigation({ categories }: { categories: ICategory[] }) {
  const { data } = useGetCategories(categories);
  return (
    <nav className={classes.desktopNavigationWrapper}>
      <CommonContainer>
        <ul className={classes.desktopMenuCategoryList}>
          {data?.map(({ id, name, link }) => (
            <li className={classes.menuCategory} key={id}>
              <Link className={classes.menuTitle} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </CommonContainer>
    </nav>
  );
}
