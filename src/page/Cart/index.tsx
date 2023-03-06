import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { XSymbol } from '../../icons';
import { RootState } from '../../store';
import { getCartByUser, getCartByUserRespnseData } from '../../utils/api/Cart/getCartByUser';
import { numberWithCommas } from '../../utils/fomatter/numberWithCommas';

function Cart() {
    /* Todo
        cart에서 userId보내서 정보 받아옴
    */
    const { id } = useSelector((state: RootState) => state.auth);
    const [products, setProducts] = useState<getCartByUserRespnseData[]>([]);
    useEffect(() => {
        (async () => {
            if (id) {
                const data = await getCartByUser(id);
                setProducts(data);
            }
        })();
    }, [id]);

    console.log(products);

    return (
        <main>
            <div className="container">
                <ul>
                    {products.map(
                        ({ id, category, product_id, stored_file_name, title, total_price }) => (
                            <li key={id}>
                                <div>
                                    <input type="checkbox" /* checked="useState사용" value=""*/ />
                                </div>
                                <Link to={`product/${product_id}`}>
                                    <div>
                                        <img
                                            alt={title}
                                            src={`${process.env.REACT_APP_AWS_URL}${stored_file_name[0]}`}
                                            style={{ width: '80px', height: '80px' }}
                                        />
                                    </div>
                                    <div>
                                        <h1>{category}</h1>
                                        <p>배송비 40,000원 착불&nbsp;|&nbsp;업체직접배송</p>
                                    </div>
                                </Link>
                                <button type="button" aria-label="삭제">
                                    {/* Todo delete api 연결 */}
                                    <XSymbol />
                                </button>
                                <div>
                                    <h2>{title}</h2>
                                    <button type="button" aria-label="삭제">
                                        <XSymbol />
                                    </button>
                                    <div>
                                        <div>{/* 빈 공간 */}</div>
                                        <p>
                                            <span>{numberWithCommas(total_price)}</span>원
                                        </p>
                                    </div>
                                </div>

                                <footer>
                                    <p>배송비 착불 40,000원</p>
                                </footer>
                            </li>
                        ),
                    )}
                </ul>
                {/* 총 구매액 요약 */}
                <div>
                    <div>
                        <dt>총 상품금액</dt>
                        <dd>
                            <span>
                                {/* prevPrice * amount */}
                                {numberWithCommas(
                                    products.reduce(
                                        (acc, { prev_price, amount }) => acc + prev_price * amount,
                                        0,
                                    ),
                                )}
                            </span>
                            원
                        </dd>
                    </div>
                    <div>
                        <dt>총 배송비</dt>
                        <dd>
                            + <span>0</span>원
                        </dd>
                    </div>
                    <div>
                        <dt>총 할인금액</dt>
                        <dd>
                            -{' '}
                            <span>
                                {/* (prevPrice - sellPrice) * amount */}
                                {numberWithCommas(
                                    products.reduce(
                                        (acc, { prev_price, sell_price, amount }) =>
                                            acc + (prev_price - sell_price) * amount,
                                        0,
                                    ),
                                )}
                            </span>
                            원
                        </dd>
                    </div>
                    <div>
                        <dt>결제금액</dt>
                        <dd>
                            <span>
                                {/* sellPrice * amount */}
                                {numberWithCommas(
                                    products.reduce(
                                        (acc, { sell_price, amount }) => acc + sell_price * amount,
                                        0,
                                    ),
                                )}
                            </span>
                            원
                        </dd>
                    </div>
                </div>
            </div>
            <div>
                <button type="button">n개 상품 구매하기</button>
            </div>
        </main>
    );
}

export default Cart;
