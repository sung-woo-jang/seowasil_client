function OrdererInfo() {
    return (
        <section>
            <section>
                <div>주문자</div>
                <div>
                    <div>
                        홍길동 <span>010-0000-0000</span>
                    </div>
                </div>
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
                        <path d="M1.75.833L8 6.873l6.25-6.04L15.5 1.98 8 9.167.5 1.98 1.75.833z"></path>
                    </svg>
                </div>
            </section>
            <div className="open expanded">
                <section>
                    <label>
                        <div>이름</div>
                        <div>
                            <input name="name" maxLength={10} value="홍길동" />
                        </div>
                    </label>
                    <label>
                        <div>휴대전화</div>
                        <div>
                            <div>
                                <div>
                                    <select name="phone1">
                                        <option value="" disabled={true}>
                                            선택
                                        </option>
                                        <option value="0">010</option>
                                        <option value="1">011</option>
                                        <option value="2">016</option>
                                        <option value="3">017</option>
                                        <option value="4">018</option>
                                        <option value="5">019</option>
                                    </select>
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 10 10"
                                        fill="currentColor"
                                    >
                                        <path d="M0 3l5 5 5-5z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    placeholder="입력해주세요"
                                    size={1}
                                    maxLength={9}
                                    value="7637-0624"
                                />
                            </div>
                        </div>
                    </label>
                </section>
            </div>
        </section>
    );
}

export default OrdererInfo;
