function PaymentSummary() {
    return (
        <section>
            <section>
                <div>결제금액</div>
                <div></div>
            </section>
            <div>
                <section>
                    <div>
                        <div>총 상품 금액</div>
                        <div>59,800원</div>
                    </div>
                    <div>
                        <div>배송비</div>
                        <div>0원</div>
                    </div>
                    <div>
                        <div>쿠폰 사용</div>
                        <div>0원</div>
                    </div>
                    <div>
                        <div>포인트 사용</div>
                        <div>0원</div>
                    </div>
                    <div>
                        <div>최종 결제 금액</div>
                        <div>
                            <span>59,800</span>&nbsp;원
                            <div>
                                <strong>60 P</strong>&nbsp;적립 예정
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default PaymentSummary;
