import ProductImageUploadForm from '../../../components/UploadForm/ProductImageUploadForm';
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
    const [files, setFiles] = useState<File[]>([]);
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

        dispatch(
            postCreateProduct({
                files,
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
                <ProductImageUploadForm onChangeFiles={setFiles} />
                <ContentContainer />
                <Button border={true} type="submit">
                    상품 등록
                </Button>
            </form>
        </WriteWrapper>
    );
};

export default Write;
