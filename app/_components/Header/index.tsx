'use client';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { Colors } from '@/styles/global-variables';
import AuthButton from './AuthButton';
import classes from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '../Badge';
import DesktopNavigation from '../DesktopNavigation';
import MobileBottomNavigation from '../MobileBottomNavigation';

function HeaderSocialLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a target="_blank" href={href}>
      {children}
    </a>
  );
}

export default function Header() {
  return (
    <header>
      <div className={classes.headerTop}>
        <ul className={classes.headerSocialContainer}>
          <li>
            <HeaderSocialLink href="https://www.youtube.com/@user-sl1sq3rt7m">
              <Image
                src="/youtube-168-svgrepo-com.svg"
                alt="Next.js Logo"
                width={32}
                height={32}
                priority
              />
            </HeaderSocialLink>
          </li>

          <li>
            <HeaderSocialLink href="https://blog.naver.com/jmvjmv123">
              <Image
                src="/naver-square-svgrepo-com.svg"
                alt="Next.js Logo"
                width={32}
                height={32}
                priority
              />
            </HeaderSocialLink>
          </li>

          <li>
            <HeaderSocialLink href="#">
              <Image
                src="/instagram-1-svgrepo-com.svg"
                alt="Next.js Logo"
                width={32}
                height={32}
                priority
              />
            </HeaderSocialLink>
          </li>
        </ul>

        <div className={classes.headerAlertNews}>{/* <p>무료 배송</p> */}</div>

        <ButtonGroup style={{ display: 'flex', gap: '10px' }}>
          <AuthButton />

          <Link href={'/products/add'}>
            <Button variant="text" style={{ color: Colors.SonicSilver }}>
              상품 등록
            </Button>
          </Link>
        </ButtonGroup>
      </div>

      <div className={classes.headerMain}>
        <div className={classes.headerMainContainer}>
          <Link href="/" className={classes.headerLogo}>
            <Image
              src="/logo2.svg"
              alt="Next.js Logo"
              width={200}
              height={50}
              priority
            />
          </Link>

          <div className={classes.headerSearchContainer}>
            <input
              className={classes.searchField}
              type="search"
              name="search"
              placeholder="상품명 검색"
            />

            <button className={classes.searchButton} type="button">
              <SearchOutlinedIcon />
            </button>
          </div>

          <div className={classes.headerUserActions}>
            <button>
              <PersonOutlineOutlinedIcon />
            </button>

            <button>
              <FavoriteBorderOutlinedIcon />
              <Badge count={0} />
            </button>

            <button>
              <ShoppingCartOutlinedIcon />
              <Badge count={0} />
            </button>
          </div>
        </div>
      </div>

      <DesktopNavigation />
      <MobileBottomNavigation />
    </header>
  );
}
