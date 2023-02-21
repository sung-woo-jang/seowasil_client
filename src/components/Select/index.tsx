function Select() {
    const categories = [
        { id: 1, title: '상품문의' },
        { id: 2, title: '배송문의' },
        { id: 3, title: '기타문의' },
    ];

    return (
        <select>
            {categories.map(({ id, title }, index) => (
                <option value={title} key={id}>
                    {title}
                </option>
            ))}
        </select>
    );
}

export default Select;
