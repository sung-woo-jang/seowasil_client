import Counter from './counter';
import ListUsers from './list-users';
import { Suspense } from 'react';

// 권장되는 방식
// 현재는 SEO에 좋지 않지만 향후 해결할 것으로 보임
export default async function Page() {
    return (
        <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
            <Counter />
            <Suspense
                fallback={
                    <p style={{ textAlign: 'center' }}>loading... on initial request</p>
                }
            >
                <ListUsers />
            </Suspense>
        </main>
    );
}
