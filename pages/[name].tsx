import React, { FC, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import Header from "../shared/components/Header"
import CodeLine from '../shared/components/CodeLine'
import CommandBlock from '../shared/components/CommadBlock'
import Description from "../shared/components/Description"
import { useEffect } from 'react';
import Data from "../data/Data"
import { ILine } from '../shared/Interfaces/line';
import getRandomColors from '../shared/services/RandomColors'
import Footer from '../shared/components/Footer';

const underLineHeight = 10;
const spaceBetweenLine = 30;

const Command: FC = () => {
    const router = useRouter();
    const codeLineRef = useRef<any>([]);
    const codeBlockRef = useRef<any>([]);

    const [commandData, setCommandData] = useState<ILine>();
    const [colors, setColors] = useState<Array<string>>([]);

    // Drawing Lines
    const getBoardReady = () => {
        let c = document.getElementById("drawBoard") as HTMLCanvasElement | null;
        c!.width = document.body.offsetWidth;
        c!.height = document.body.offsetHeight;
        let ctx = c?.getContext("2d");
        return ctx;
    }
    const getcodeLinePrefrence = (item: any) => {
        const top = item.getBoundingClientRect().top;
        const left = item.getBoundingClientRect().left;
        const width = item.getBoundingClientRect().width;
        const height = item.getBoundingClientRect().height;

        return { top, left, width, height }
    }
    const drawUnderLine = (ctx: any, item: any, index: number) => {
        const { top, left, width, height } = getcodeLinePrefrence(item);

        const startX = left;
        const startY = top + height;

        ctx?.moveTo(startX, startY);
        ctx?.lineTo(startX, startY + underLineHeight);
        ctx?.lineTo(startX + width, startY + underLineHeight);
        ctx?.lineTo(startX + width, startY);
        return ctx;
    }
    const drawFlowLine = (ctx: any, item: any, index: number) => {
        const numCodeLine = codeLineRef.current.length;
        const leftDir = index < numCodeLine / 2;
        const { top, left, width, height } = getcodeLinePrefrence(item);

        let startX = left + (width / 2);
        let startY = top + height + underLineHeight;
        ctx?.moveTo(startX, startY);

        startY = startY + 20 + (leftDir? (index * spaceBetweenLine) : ((numCodeLine - index -1) * spaceBetweenLine) )
        ctx?.lineTo(startX, startY);

        const lineLongLeft = codeBlockRef.current[0].getBoundingClientRect().left - ((index + 1) * spaceBetweenLine)
        const lineLongRight = codeBlockRef.current[0].getBoundingClientRect().left + codeBlockRef.current[0].getBoundingClientRect().width + (index * spaceBetweenLine)
        startX = (leftDir? lineLongLeft : lineLongRight);
        ctx?.lineTo(startX, startY);

        const stopPoint = codeBlockRef.current[index].getBoundingClientRect().top + (codeBlockRef.current[index].getBoundingClientRect().height / 2);
        startY = stopPoint;
        ctx?.lineTo(startX, startY);

        const newStopPointLeft = startX + ((index + 1) * spaceBetweenLine);
        const newStopPointRight = startX - ((index) * spaceBetweenLine);
        startX = (leftDir? newStopPointLeft : newStopPointRight);
        ctx?.lineTo(startX, startY);
        return ctx;
    }
    const drawLine = (ctx: any, item: any, index: number) => {
        ctx = drawUnderLine(ctx, item, index);
        ctx = drawFlowLine(ctx, item, index);
        ctx?.stroke();
    }
    const drawLines = () => {
        let ctx = getBoardReady();
        codeLineRef.current.map((item: any, index: number) => {
            ctx?.beginPath();
            ctx!.strokeStyle = colors[index]
            drawLine(ctx, item, index);
        })
    }

    useEffect(() => {
        const name: string = typeof router.query.name == "string" ? router.query.name : "";
        name && Data.getSingleCommand(name)
            .catch(err => { console.log(err) })
            .then(data => { setCommandData(data) })
    }, [router])

    useEffect(() => {
        if(commandData) {
            setColors(getRandomColors(commandData?.commands.length))
        };
    }, [commandData])

    useEffect(() => {
        if(commandData && document) {
            drawLines();
        };
    }, [commandData, colors])

    return (
        <>
            <canvas id="drawBoard" style={{position:"absolute", top: "0", left: "0", zIndex: "-1"}}>
            Your browser does not support the HTML5 canvas tag.</canvas>
            <Header />
            {commandData && <Description description={commandData.description}/>}
            {commandData && <CodeLine codeLineRef={codeLineRef} commandData={commandData}/>}
            {commandData && colors && <CommandBlock codeBlockRef={codeBlockRef} commandData={commandData} colors={colors}/>}
            <Footer />
        </>
    )
}

export default Command
