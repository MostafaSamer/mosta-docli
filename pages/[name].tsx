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
        console.log(window.scrollY)
        var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;
        c!.width = document.body.offsetWidth;
        c!.height = document.body.offsetHeight;
        var ctx = c?.getContext("2d");
        ctx?.beginPath();
        const startX = codeLineRef.current[0].getBoundingClientRect().left  + (codeLineRef.current[0].getBoundingClientRect().width / 2)
        const startY = codeLineRef.current[0].getBoundingClientRect().top + codeLineRef.current[0].getBoundingClientRect().height
        ctx?.moveTo(startX, startY);
        ctx?.lineTo(startX, startY + 50);
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
        <canvas id="myCanvas" style={{position:"absolute", border :"1px solid #d3d3d3;", top: "0", left: "0"}}>
            Your browser does not support the HTML5 canvas tag.</canvas>
            <Header />
            {commandData && <CodeLine codeLineRef={codeLineRef} commandData={commandData} />}
            {commandData && <CommandBlock commandData={commandData} />}
        </>
    )
}

export default Command
