interface OrderInfo {
    name?: string;
    phoneNumber?: string;
    delivery_request?: string; //  배송 요청사항
    address1?: string; //  우편번호
    address2?: string; //  주소
    address3?: string; //  상세주소
    amount?: number; // 주문 수량
    price?: number; // 주문 가격
    user_id?: number | string;
    product_id?: number | string;
}
