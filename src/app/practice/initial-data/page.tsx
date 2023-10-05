import { getUsers } from '@/api/users';
import ListUsers from './list-users';
import { Suspense } from 'react';

export default async function InitialData() {
    const users = await getUsers();

    return (
        <Suspense
            fallback={
                <p style={{ textAlign: 'center' }}>loading... on initial request</p>
            }
        >
            <ListUsers users={users} />;
        </Suspense>
    );
}
