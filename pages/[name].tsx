import React, { FC, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import Header from "../shared/components/Header"
import CodeLine from '../shared/components/CodeLine'
import CommandBlock from '../shared/components/CommadBlock'
import { useEffect } from 'react';
import Data from "../data/Data"
import { ILine } from '../shared/Interfaces/line';

const underLineHeight = 10;
const spaceBetweenLine = 10;

const Command: FC = () => {
    const router = useRouter();
    const codeLineRef = useRef<any>([]);

    const [commandData, setCommandData] = useState<ILine>();

    const getBoardReady = () => {
        let c = document.getElementById("drawBoard") as HTMLCanvasElement | null;
        c!.width = document.body.offsetWidth;
        c!.height = document.body.offsetHeight;
        let ctx = c?.getContext("2d");
        ctx?.beginPath();
        return ctx;
    }

    const getcodeLinePrefrence = (item: any) => {
        const top = item.getBoundingClientRect().top;
        const left = item.getBoundingClientRect().left;
        const width = item.getBoundingClientRect().width;
        const height = item.getBoundingClientRect().height;

        return { top, left, width, height }
    }

    const drawUnderLine = (ctx: any) => {
        codeLineRef.current.map((item: any) => {
            const { top, left, width, height } = getcodeLinePrefrence(item);

            const startX = left;
            const startY = top + height;

            ctx?.moveTo(startX, startY);
            ctx?.lineTo(startX, startY + underLineHeight);
            ctx?.lineTo(startX + width, startY + underLineHeight);
            ctx?.lineTo(startX + width, startY);
        })
        return ctx;
    }

    const drawFlowLine = (ctx: any) => {
        codeLineRef.current.map((item: any, index: number) => {
            const { top, left, width, height } = getcodeLinePrefrence(item);

            const startX = left + (width / 2);
            const startY = top + height;

            ctx?.moveTo(startX, startY + underLineHeight);
            ctx?.lineTo(startX, startY + underLineHeight + 10 + (index * spaceBetweenLine));
        })
        return ctx;
    }

    const drawLine = () => {
        let ctx = getBoardReady();
        ctx = drawUnderLine(ctx);
        ctx = drawFlowLine(ctx);
        ctx?.stroke();
    }

    useEffect(() => {
        const name: string = typeof router.query.name == "string" ? router.query.name : "";
        name && Data.getSingleCommand(name)
            .catch(err => { console.log(err) })
            .then(data => { setCommandData(data) })
    }, [router])

    useEffect(() => {
        if(commandData && document) drawLine();
    }, [commandData])

    return (
        <>
        <canvas id="drawBoard" style={{position:"absolute", border :"1px solid #d3d3d3", top: "0", left: "0"}}>
            Your browser does not support the HTML5 canvas tag.</canvas>
            <Header />
            {commandData && <CodeLine codeLineRef={codeLineRef} commandData={commandData} />}
            {commandData && <CommandBlock commandData={commandData} />}
        </>
    )
}

export default Command
