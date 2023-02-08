import UploadForm from '../../../components/UploadForm';
import ContentContainer from '../../../components/ContentContainer';
import { WriteWrapper } from './style';

const Write = (props) => {
    return (
        <WriteWrapper>
            <UploadForm />
            <ContentContainer />
        </WriteWrapper>
    );
};

export default Write;
