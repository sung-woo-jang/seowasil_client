import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { cn } from '@/utils/cn';

import { Colors } from '@/styles/global-variables';
import AuthButton from './AuthButton';
import classes from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import DesktopNavigation from '../DesktopNavigation';
import MobileBottomNavigation from '../MobileBottomNavigation';
import { Badge } from '@/components/Badge';
import React from 'react';

function HeaderSocialLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link target="_blank" href={href}>
      {children}
    </Link>
  );
}

export default async function Header() {
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

        <div className={classes.headerAlertNews}></div>

        <ButtonGroup className={classes.ButtonGroup}>
          <AuthButton />
        </ButtonGroup>
      </div>

      <div className={classes.headerMain}>
        <div className={classes.headerMainContainer}>
          <Link href="/" className={classes.headerLogo}>
            <Image src="/logo2.svg" alt="Next.js Logo" width={200} height={50} />
          </Link>

          {/* <SearchInput /> */}

          {/* <div className={classes.headerUserActions}>
            <button>
              <PersonOutlineOutlinedIcon />
            </button>

            <button>
              <FavoriteBorderOutlinedIcon />
              <Badge variant="default">0</Badge>
            </button>

            <button>
              <ShoppingCartOutlinedIcon />
              <Badge variant="default">0</Badge>
            </button>
          </div> */}
        </div>
      </div>
      <DesktopNavigation />
      <MobileBottomNavigation />
    </header>
  );
}

function SearchInput() {
  return (
    <div key="1" className={classes.headerSearchContainer}>
      <input className={classes.searchField} placeholder="Search" type="search" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={classes.searchButton}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
}
