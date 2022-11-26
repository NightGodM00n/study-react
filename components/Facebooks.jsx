import React,{useRef} from 'react';
import {Helmet} from 'react-helmet';

export function FB (){
    const ref = useRef(null)

    return (
        <>
            <Helmet>
                <script
                    async
                    defer
                    crossOrigin="anonymous"
                    src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v10.0"
                    nonce="F5crYADj"
                />
            </Helmet>

            <div
                ref={ref}
                className="fb-page"
                data-href="https://www.facebook.com/profile.php?id=100009002733638"
                data-tabs="timeline"
                data-width={ref?.current?.clientWidth ?? ''}
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
            />
        </>
    )
}
