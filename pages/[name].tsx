import React, { FC } from 'react';
import { useRouter } from 'next/router'
import Header from "../shared/components/Header"
import CodeLine from '../shared/components/CodeLine/CodeLine'
import { useEffect } from 'react';

const Command: FC = () => {
    const router = useRouter()
    const name: string = typeof router.query.name == "string"? router.query.name : "";

    return (
        <>
            <Header />
            {name && <CodeLine fileName={name}/>}
        </>
    )
}

export default Command
