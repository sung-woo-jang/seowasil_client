function OrderSummary() {
    return (
        <section>
            <section>
                <div>주문상품</div>
                <div>$건</div>
                <div>
                    <svg
                        className="icon"
                        fill="none"
                        viewBox="0 0 16 10"
                        preserveAspectRatio="xMidYMid meet"
                        width="1em"
                        height="1em"
                        style={{ color: 'white', background: 'black' }}
                    >
                        <path
                            fill="currentColor"
                            d="M1.75.833L8 6.873l6.25-6.04L15.5 1.98 8 9.167.5 1.98 1.75.833z"
                        ></path>
                    </svg>
                </div>
            </section>
            <div className="open expanded">
                <section>
                    <div>
                        <picture>
                            <img
                                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164023278275776992.jpg?w=72&amp;h=72&amp;c=c"
                                alt="{상품명}"
                            />
                        </picture>
                        <div>
                            <div>문그로우</div>
                            <ul>
                                <li>문그로우 n년생</li>
                            </ul>
                            <div>
                                <span>00,000원</span>
                                <div>{/* | 넣는 용도 */}</div>
                                <span>00개</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default OrderSummary;
