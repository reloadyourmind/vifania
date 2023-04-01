import { UrlHelper } from 'assets/utils/UrlHelper';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

type YouTubeVideoCardProps = {
    video: any;
};

export const YouTubeVideoCard = observer(({ video }: YouTubeVideoCardProps) => {
    const streamUrl = `https://www.youtube.com/watch?v=${video?.id?.videoId}`;

    return (
        <VideoCard
            preview={video?.snippet?.thumbnails?.high?.url}
            onClick={() => UrlHelper.openLinkInNewTab(streamUrl)}
        >
            <VideoTitle>{video?.snippet?.title}</VideoTitle>
        </VideoCard>
    );
});

const VideoCard = styled.div<{ preview?: string }>`
    touch-action: manipulation;
    cursor: pointer;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    border-radius: 25px;
    background: url(${(props) => props?.preview});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;

    &:hover {
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
        background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
        ),
        url(${(props) => props?.preview});
        background-repeat: no-repeat;
        background-position: center;
        background-size:  cover;
      }
    }
`;

const VideoTitle = styled.div`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(26.3158px);
    width: 100%;
    height: 40px;
    padding: 10px 20px;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    text-overflow: ellipsis;
`;
