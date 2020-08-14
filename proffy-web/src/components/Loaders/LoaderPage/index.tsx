import React from 'react';

import { Container, Content } from './styles';

interface LoaderPageProps {
    visibled: boolean;
}

const LoaderPage: React.FC<LoaderPageProps> = ({ visibled }) => {
    return (
        <>
            {visibled ? (
                <Container>
                    <Content>
                        <h1>Loader...</h1>
                    </Content>
                </Container>
            ) : null}
        </>
    );
};

export default LoaderPage;
