import UploadForm from '../../../components/UploadForm';
import ContentContainer from '../../../components/ContentContainer';
import { WriteWrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postCreateProduct } from '../../../utils/api/Product/postCreateProduct';
import { setSeletedIsCompleted } from '../../../store/slice/productSlice';
import { Button } from '../../../components/UI/Button';

const Write = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [productFiles, setProductFiles] = useState<File[]>([]);
    const [productDetailFiles, setProductDetailFiles] = useState<File[]>([]);
    const {
        category_id,
        description,
        minAmount,
        prevPrice,
        sellPrice,
        status,
        title,
        isCompleted,
    } = useSelector((state: RootState) => state.product);

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (productFiles.length === 0 && productDetailFiles.length === 0)
            return alert('사진 파일을 올려주세요');

        if (category_id === null) return alert('카테고리를 반드시 설정해야 합니다.');
        if (description.length === 0) return alert('상품 설명글을 입력하여 주세요.');
        if (minAmount.length === 0) return alert('최소 주문 수량을 입력해주세요');
        if (sellPrice.length === 0 && prevPrice.length === 0)
            return alert('금액 설정을 해주셔야 합니다.');
        if (prevPrice <= sellPrice) return alert('판매 가격은 상품가격보다 낮아야 합니다.');
        if (title.length === 0 && title === null) return alert('상품명을 입력해주세요');

        dispatch(
            postCreateProduct({
                productFiles,
                productDetailFiles,
                category_id,
                description,
                minAmount,
                prevPrice,
                sellPrice,
                status,
                title,
            }),
        );
    };

    // 게시물 등록 완료 시 관리자 페이지로 이동
    useEffect(() => {
        if (isCompleted) {
            navigate('/admin', { replace: true });
            dispatch(setSeletedIsCompleted());
        }
    }, [isCompleted, navigate, dispatch]);

    return (
        <WriteWrapper>
            <form onSubmit={onSubmitHandler}>
                <UploadForm
                    onChangeFiles={setProductFiles}
                    buttonId="product-images"
                    infoMessage="상품 사진 업로드 폼."
                />
                <UploadForm
                    onChangeFiles={setProductDetailFiles}
                    buttonId="product-detail-imagwes"
                    infoMessage="상품 설명용 사진 업로드 폼."
                />
                <ContentContainer />
                <Button border={true} type="submit">
                    상품 등록
                </Button>
            </form>
        </WriteWrapper>
    );
};

export default Write;
