function DeliveryAddress() {
    return (
        <section>
            <section style={{ display: 'flex' }}>
                <div>배송지</div>
                <div></div>
                <button type="button">변경</button>
            </section>
            <div>
                <section>
                    <div>
                        <div>이름</div>
                    </div>
                    <div>인천 미추홀구 숙골로43번길 59 (도화동) 우리 푸름빌, 402호</div>
                    <div>
                        <div className="name">주소</div>
                        <div className="phone">010-0000-0000</div>
                    </div>
                    <label htmlFor="save-default-address-input">
                        <div>
                            <input
                                type="checkbox"
                                id="save-default-address-input"
                                name="isChangeDefaultAddress"
                                value=""
                            />
                            <span>
                                <svg width="1em" height="1em" viewBox="0 0 16 16">
                                    <path
                                        fill="currentColor"
                                        d="M6.185 10.247l7.079-7.297 1.435 1.393-8.443 8.703L1.3 8.432l1.363-1.464z"
                                    ></path>
                                </svg>
                            </span>
                        </div>
                        기본 배송지로 저장
                    </label>
                    <div>
                        <input type="text" placeholder="배송 요청사항을 입력해주세요" />
                    </div>
                </section>
            </div>
        </section>
    );
}

export default DeliveryAddress;
