import { XSymbol } from '../../icons';

function Cart() {
    return (
        <main>
            <div className="container">
                <div>
                    <ul>
                        <li>
                            <div>
                                <input type="checkbox" /* checked="useState사용" value=""*/ />
                            </div>
                            <a href="/productions/663177/selling">
                                <div>
                                    <img
                                        alt="상품 이미지"
                                        src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164793249458891173.jpg?w=256&amp;h=256&amp;c=c"
                                    />
                                </div>
                                <div>
                                    <h1>
                                        [애즈풀] 캘리 헤드리스 수납침대 침대프레임 SS/Q (매트리스
                                        별도)
                                    </h1>
                                    <p>배송비 40,000원 착불&nbsp;|&nbsp;업체직접배송</p>
                                </div>
                            </a>
                            <button type="button" aria-label="삭제">
                                <XSymbol />
                            </button>
                            <div>
                                <h2>0 년생</h2>
                                <button type="button" aria-label="삭제">
                                    <XSymbol />
                                </button>
                                <div>
                                    <div>{/* 빈 공간 */}</div>
                                    <p>
                                        <span>249,000</span>원
                                    </p>
                                </div>
                            </div>
                            <div>
                                <span>249,000 원</span>
                            </div>
                            <footer>
                                <p>배송비 착불 40,000원</p>
                            </footer>
                        </li>
                    </ul>
                    <div>
                        <div>
                            <dt>총 상품금액</dt>
                            <dd>
                                <span>869,000</span>원
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
                                - <span>321,000</span>원
                            </dd>
                        </div>
                        <div>
                            <dt>결제금액</dt>
                            <dd>
                                <span>548,000</span>원
                            </dd>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <dt>총 상품금액</dt>
                                <dd>
                                    <span>869,000</span>원
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
                                    - <span>321,000</span>원
                                </dd>
                            </div>
                            <div>
                                <dt>결제금액</dt>
                                <dd>
                                    <span>548,000</span>원
                                </dd>
                            </div>
                        </div>
                        <div>
                            <button type="button">2개 상품 구매하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cart;
