import React from 'react';
import tailSpin from '@static/images/tail-spin.svg';

import { Container, LoaderImage } from './styles';

interface LoaderProps {
    isVisibled: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isVisibled }) => {
    return (
        <Container isVisibled={isVisibled}>
            <LoaderImage src={tailSpin} alt="loader" />
        </Container>
    );
};

export default Loader;
