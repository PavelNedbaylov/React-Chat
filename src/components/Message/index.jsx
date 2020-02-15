import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { Time, MessageAudio, Avatar } from 'components'

import './message.scss'
import readedSvg from 'assets/readed.svg'
import noreadedSvg from 'assets/noreaded.svg'

export default function Message({ user, text, date, isMe, isReaded, attachments, isTyping, audio, _id }) {
    return (
        <div className={classNames('message', {
            'message-isme': isMe,
            'message-notme': !isMe,
            'message-is-typing': !isTyping
        })}
        >
            <div className="message__content">
                {isMe ? <img className={'message__icon'+(isReaded?' readed':' noreaded')} src={isReaded ? readedSvg : noreadedSvg} alt="Checked icon" /> : ''}
                <div className="message__avatar">
                    <Avatar avatar={user.avatar} id={_id} fullname={user.fullname}/>
                </div>
                {isTyping && (<div className="chat-bubble">
                    <div className="loading">
                        <div className="dot one"></div>
                        <div className="dot two"></div>
                        <div className="dot three"></div>
                    </div>
                </div>)}
                <div>
                    {text && !audio && (<p className="message__text">
                        {text}
                    </p>)}
                    {attachments && <div className="message__attached">
                        {attachments.map(v => {
                            return (
                                <div key={v._id} className={classNames('message__attached-img', { 'single': attachments.length === 1 })}>
                                    <img src={v.url} alt={v.filename} />
                                </div>)
                        })}
                    </div>}
                </div>
                {audio && <MessageAudio audioMessage={audio} />}
            </div>
            <Time className="message__date" date={date} />
        </div>
    )
}
Message.defaultProps = {
    user: {},
}
Message.propType = {
    avatar: propTypes.string,
    text: propTypes.string,
    date: propTypes.string,
    user: propTypes.object,
    isTyping: propTypes.bool,
}
