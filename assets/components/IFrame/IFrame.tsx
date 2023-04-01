import React from 'react';

type IFrameProps = {
    src: string;
    ratio?: string;
};

export const IFrame = ({ src, ratio }: IFrameProps) => {
    return (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe
            src={src}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
                aspectRatio: ratio || '16/9',
                borderRadius: '25px',
                backgroundColor: '#0f0f0f',
            }}
        />
    );
};
