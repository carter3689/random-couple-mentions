import React, {useRef, useState} from 'react';
import Pusher from 'pusher-js/with-encryption';
import PropTypes from 'prop-types'

// Enable pusher logging -- DISABLE BEFORE PRODUCTION
Pusher.logToConsole = true;

export const Main = (props:any) => {

    const myBtn = useRef('');
    let [channel_var, setChannel] = useState('my-channel')



    let pusher = new Pusher('4f49109f3026b201754a', {
        cluster: 'us2'
    });

    let channel = pusher.subscribe(`${channel_var}`);

    channel.bind('my-event', (data:any) => {
        alert(JSON.stringify(data))
    })
    return (
        <div>
            <h1>Pusher Test</h1>

            <button onClick={ () => setChannel(channel_var = 'test-channel')}>New Channel</button>

            <p>Try publishing an event to channel <code>{channel_var}</code> with the event name 
            <code>my-event</code>
            </p>
        </div>
    )
}



