import { ICategory, getCategories } from '@/api/categories/getCategories';
import classes from './styles.module.scss';
import Link from 'next/link';
import CommonContainer from '@/components/CommonContainer';

const convertCategories = (data: ICategory[]) => [
  {
    id: 10000,
    name: `Home`,
    menu_item: null,
    link: '/',
  },
  ...data.map(({ id, name }) => ({
    id,
    name,
    menu_item: null,
    link: `/category/${id}`,
  })),
  // {
  //   id: 10001,
  //   name: `문의사항`,
  //   menu_item: null,
  //   link: 'contact',
  // },
];

export default async function DesktopNavigation() {
  const categories = await getCategories();
  const data = convertCategories(categories);
  return (
    <nav className={classes.desktopNavigationWrapper}>
      <CommonContainer>
        <ul className={classes.desktopMenuCategoryList}>
          {data.map(({ id, name, link }) => (
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
