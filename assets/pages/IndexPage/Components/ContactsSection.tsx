import { Col, Row, Space, Typography } from 'antd';
import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { MapPinIcon, PhoneIcon } from 'assets/components/Icons/Icons';
import { Map } from 'assets/components/Map/Map';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

export const ContactsSection = observer(() => {
    return (
        <ContentSection
            title={t('Page.Index.ContactsSection.Title', 'Контакты')}
            backgroundColor="#FFFFFF"
        >
            <Row gutter={16}>
                <Col xs={24}>
                    <StyledSpace size={40}>
                        <Space size={10}>
                            <PhoneIcon />
                            <StyledText>
                                {t(
                                    'Page.Index.ContactsSection.Phone',
                                    '+375 44 461-68-62',
                                )}
                            </StyledText>
                        </Space>
                        <Space size={10}>
                            <MapPinIcon />
                            <StyledText>
                                {t(
                                    'Page.Index.ContactsSection.Address',
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
