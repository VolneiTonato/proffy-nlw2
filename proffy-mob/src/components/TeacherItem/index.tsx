import React from 'react';
import { Image } from 'react-native';
import {
    Container,
    Profile,
    ProfileAvatar,
    ProfileInfo,
    ProfileInfoName,
    ProfileInfoSubject,
    BioContent,
    FooterContainer,
    FooterPriceText,
    FooterPriceInnerText,
    FooterButtonsContainer,
    ContactButton,
    ContactButtonText,
    FavoriteButton,
} from './styles';

// import heartOutlineIcon from '../../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../../assets/images/icons/whatsapp.png';

const TeacherItem: React.FC = () => {
    return (
        <Container>
            <Profile>
                <ProfileAvatar
                    source={{
                        uri:
                            'https://avatars0.githubusercontent.com/u/2885444?s=460&u=ff22fad3d95f1e4b0024a82801593ba245d8227f&v=4',
                    }}
                />
                <ProfileInfo>
                    <ProfileInfoName>Volnei Tonato</ProfileInfoName>
                    <ProfileInfoSubject>ReactJS</ProfileInfoSubject>
                </ProfileInfo>
            </Profile>

            <BioContent style={{ marginHorizontal: 24 }}>
                ReactJS PHP Nodejs
            </BioContent>

            <FooterContainer>
                <FooterPriceText>
                    Preço/hora {`   `}
                    <FooterPriceInnerText>R$ 80,00</FooterPriceInnerText>
                </FooterPriceText>

                <FooterButtonsContainer>
                    <FavoriteButton isFavorited>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unFavoriteIcon} />
                    </FavoriteButton>

                    <ContactButton>
                        <Image source={whatsappIcon} />
                        <ContactButtonText>Entrar em contato</ContactButtonText>
                    </ContactButton>
                </FooterButtonsContainer>
            </FooterContainer>
        </Container>
    );
};

export default TeacherItem;
