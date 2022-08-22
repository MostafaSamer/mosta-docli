import React, { FC, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import Header from "../shared/components/Header"
import CodeLine from '../shared/components/CodeLine'
import CommandBlock from '../shared/components/CommadBlock'
import { useEffect } from 'react';
import Data from "../data/Data"
import { ILine } from '../shared/Interfaces/line';

const Command: FC = () => {
    const router = useRouter();
    const codeLineRef = useRef<any>([]);

    const [commandData, setCommandData] = useState<ILine>();

    const DrawLine = () => {
        console.log(codeLineRef.current[0].offsetHeight)
        var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;
        c!.width = window.innerWidth;
        c!.height = window.innerHeight - 400;
        var ctx = c?.getContext("2d");
        ctx?.beginPath();
        ctx?.moveTo(0, codeLineRef.current[0].offsetHeight);
        ctx?.lineTo(1194, 100);
        ctx?.stroke();
    }

    useEffect(() => {
        const name: string = typeof router.query.name == "string" ? router.query.name : "";
        name && Data.getSingleCommand(name)
            .catch(err => { console.log(err) })
            .then(data => { setCommandData(data) })
    }, [router])

    useEffect(() => {
        if(commandData && document) DrawLine();
    }, [commandData])

    return (
        <>
            <Header />
            <canvas id="myCanvas" style={{position:"absolute", border :"1px solid #d3d3d3;"}}>
                Your browser does not support the HTML5 canvas tag.</canvas>
            {commandData && <CodeLine codeLineRef={codeLineRef} commandData={commandData} />}
            {commandData && <CommandBlock commandData={commandData} />}
        </>
    )
}

export default Command
