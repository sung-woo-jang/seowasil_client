'use client';
// CSS
import Link from 'next/link';
import * as S from './style';
import { useQuery } from '@tanstack/react-query';
import { User } from '@/app/types';
import { getUsers } from '@/api/users';

export default function CategoryCard() {
  const { data } = useQuery<User[]>(['stream-hydrate-users'], getUsers, {
    staleTime: 5 * 1000,
    cacheTime: 6 * 1000,
  });
  return (
    <Link to={`/products/category`}>
      <S.CategoryCardContainer>
        {data?.map((user) => (
          <div key={user.id} style={{ border: '1px solid #ccc', textAlign: 'center' }}>
            <img
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              alt={user.name}
              style={{ width: 180, height: 180 }}
            />
            <h3>{user.name}</h3>
          </div>
        ))}

        <S.CategoryCardImage
          crossOrigin="anonymous"
          src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
          alt={user.name}
        />
        <div>
          <h3>{user.name}</h3>
        </div>
      </S.CategoryCardContainer>
    </Link>
  );
}
