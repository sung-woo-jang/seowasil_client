'use client';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { User } from '@/app/practice/types';
import { getUsers } from '@/api/users';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';

import * as S from './style';

export default function CategoryCard() {
  const { data } = useQuery<User[]>(['stream-hydrate-users'], getUsers, {
    staleTime: 5 * 1000,
    cacheTime: 6 * 1000,
  });
  return (
    <Grid container spacing={2} columns={12}>
      {data?.map((user) => (
        <Grid key={user.id} xs={4}>
          <Link href={`/products/category/${'something'}`}>
            <S.CategoryCardContainer>
              <Image
                src={`https://robohash.org/${user.id}`}
                alt={user.name}
                width={180}
                height={180}
              />
              <div>
                <h3>{user.name}</h3>
              </div>
            </S.CategoryCardContainer>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
