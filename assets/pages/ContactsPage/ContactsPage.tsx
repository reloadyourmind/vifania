import { Col, Row, Space, Typography } from 'antd';
import { BasePage } from 'assets/components/BasePage/BasePage';
import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { MapPinIcon, PhoneIcon } from 'assets/components/Icons/Icons';
import { Map } from 'assets/components/Map/Map';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

export const ContactsPage = observer(() => {
    return (
        <BasePage>
            <ContentSection title={t('Page.Contacts.Title', 'Контакты')}>
                <Row gutter={16}>
                    <Col xs={24}>
                        <StyledSpace size={40}>
                            <Space size={10}>
                                <PhoneIcon />
                                <StyledText>
                                    {t(
                                        'Page.Contacts.Phone',
                                        '+375 44 461-68-62',
                                    )}
                                </StyledText>
                            </Space>
                            <Space size={10}>
                                <MapPinIcon />
                                <StyledText>
                                    {t(
                                        'Page.Contacts.Address',
                                        'Минск, улица Ротмистрова, 70',
                                    )}
                                </StyledText>
                            </Space>
                        </StyledSpace>
                    </Col>
                    <StyledCol xs={24}>
                        <Map />
                    </StyledCol>
                </Row>
            </ContentSection>
        </BasePage>
    );
});

const StyledSpace = styled(Space)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled(Typography.Text)`
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
`;

const StyledCol = styled(Col)`
    margin-top: 50px;
`;
