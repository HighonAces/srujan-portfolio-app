import { Timeline } from 'react-twitter-widgets'
import {Wrapper} from "../Header/Header.styles";


const TwitterFeed = () => (
    <Wrapper>
        <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'SrujanReddy_1'
            }}
            options={{
                height: '400',
                width: '600'
            }}
        />
    </Wrapper>

)

export default TwitterFeed
