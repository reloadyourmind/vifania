import { Button, Col, Row } from 'antd';
import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { RightArrowIcon } from 'assets/components/Icons/Icons';
import { IFrame } from 'assets/components/IFrame/IFrame';
import { YouTubeVideoCard } from 'assets/components/VideoCard/VideoCard';
import { YouTubeApiStore } from 'assets/stores/YouTubeApiStore/YouTubeApiStore';
import { UrlHelper } from 'assets/utils/UrlHelper';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

const store = YouTubeApiStore;
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@onebreath4908';

export const YouTubeSection = observer(() => {
    const [lastStream, ...otherStreams] = store.streams;

    return (
        <ContentSection>
            <Row gutter={[20, 40]}>
                <Col xs={24}>
                    <IFrame
                        src={`https://www.youtube.com/embed/${lastStream?.id?.videoId}`}
                    />
                </Col>
                <Col xs={24}>
                    <StiledWrapper>
                        <StiledTitle>
                            {t(
                                'Page.Index.YouTubeSection.OtherStreams',
                                'Предыдущие трансляции:',
                            )}
                        </StiledTitle>
                        <Button
                            type="link"
                            onClick={() =>
                                UrlHelper.openLinkInNewTab(YOUTUBE_CHANNEL_URL)
                            }
                        >
                            <StyledSpace>
                                <StiledLink>
                                    {t(
                                        'Page.Index.YouTubeSection.ChannelLink',
                                        'Смотреть на канале Youtube',
                                    )}
                                </StiledLink>
                                <RightArrowIcon />
                            </StyledSpace>
                        </Button>
                    </StiledWrapper>
                </Col>
                {otherStreams.map((stream: any) => {
                    return (
                        <Col xs={8} key={stream?.id?.videoId}>
                            <YouTubeVideoCard video={stream} />
                        </Col>
                    );
                })}
            </Row>
        </ContentSection>
    );
});

const StiledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StiledTitle = styled.span`
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;

    color: #000000;
`;

const StyledSpace = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
`;

const StiledLink = styled.span`
    height: 16px;
    line-height: 16px !important;
`;
