import React from 'react'
import { Message, Dialogs } from 'components'

import './home.scss'

export default function Home() {
    return (
        <section className='home'>
            <Dialogs items={[
                // {
                //     _id:1,
                //     user: {
                //         fullname: 'Ulkiora',
                //         avatar: "https://sun6-14.userapi.com/c857616/v857616403/135faa/937vLTSteVk.jpg?ava=1",
                //         online: true
                //     },
                //     message: {
                //         text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem',
                //         isReaded: false,
                //         date: '2020-01-24T13:51:50',
                //         unreaded: 3,
                //         readed: false,
                //     }
                // },
                // {
                //     _id:2,
                //     user: {
                //         fullname: 'Ulkiora',
                //         avatar: "https://sun6-14.userapi.com/c857616/v857616403/135faa/937vLTSteVk.jpg?ava=1",
                //         online: true
                //     },
                //     message: {
                //         text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem',
                //         isReaded: false,
                //         date: '2020-01-27T13:51:50',
                //         unreaded: 3,
                //         readed: false,
                //     }
                // },
                // {
                //     _id:3,
                //     user: {
                //         fullname: 'Ulkiora',
                //         avatar: "https://sun6-14.userapi.com/c857616/v857616403/135faa/937vLTSteVk.jpg?ava=1",
                //         online: true
                //     },
                //     message: {
                //         text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem',
                //         isReaded: false,
                //         date: '2020-01-21T13:51:50',
                //         unreaded: 10,
                //         readed: false,
                //     }
                // },
            ]}
            />
            <Message
                avatar="https://sun9-7.userapi.com/c830608/v830608079/4f8e2/edHZsB_huUE.jpg?ava=1"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum."
                date="2020-01-26T13:51:50"
                isReaded={false}
                audio="https://notificationsounds.com/soundfiles/c361bc7b2c033a83d663b8d9fb4be56e/file-sounds-1146-quest.mp3"
                _id='2'
            />
            {/* <Message
                avatar="https://sun6-14.userapi.com/c857616/v857616403/135faa/937vLTSteVk.jpg?ava=1"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum."
                date="2019-01-26T13:51:50"
                isMe={false}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/50x50/?nature,water',
                        _id: 1
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/50x50/?nature,forest',
                        _id: 2
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/50x50/?nature,sky',
                        _id: 3
                    }
                ]}
                _id='1'
            />
            <Message
                avatar="https://sun9-7.userapi.com/c830608/v830608079/4f8e2/edHZsB_huUE.jpg?ava=1"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum."
                date="2020-01-26T13:51:50"
                isMe={true}
                isReaded={false}
                _id='2'
            />
            <Message
                avatar="https://sun9-7.userapi.com/c830608/v830608079/4f8e2/edHZsB_huUE.jpg?ava=1"
                isReaded={false}
                isTyping={true}
                _id='3'
            />
            <Message
                avatar="https://sun6-14.userapi.com/c857616/v857616403/135faa/937vLTSteVk.jpg?ava=1"
                date="2019-01-26T13:51:50"
                isMe={false}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/150x150/?nature,water',
                        _id: 1
                    }
                ]}
                _id='4'
            /> */}
        </section>
    )
}
