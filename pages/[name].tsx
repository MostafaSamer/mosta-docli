import React, { FC, useState } from 'react';
import { useRouter } from 'next/router'
import Header from "../shared/components/Header"
import CodeLine from '../shared/components/CodeLine'
import CommandBlock from '../shared/components/CommadBlock'
import { useEffect } from 'react';
import getSingleCommand from "../data/Data"
import { ILine } from '../shared/Interfaces/line';

const Command: FC = () => {
    const router = useRouter()

    const [commandData, setCommandData] = useState<ILine>();
    
    useEffect(() => {
        const name: string = typeof router.query.name == "string"? router.query.name : "";
        console.log({name})
        name && getSingleCommand.getSingleCommand(name)
        .catch(err => {console.log(err)})
        .then(data => {console.log({data}); setCommandData(data)})
    }, [router])

    return (
        <>
            <Header />
            {commandData && <CodeLine commandData={commandData}/>}
            {commandData && <CommandBlock commandData={commandData} />}
        </>
    )
}

export default Command
