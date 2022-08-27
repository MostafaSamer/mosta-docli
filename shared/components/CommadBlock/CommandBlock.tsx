import React, { FC, PropsWithChildren } from 'react'
import { Col, Row, Typography } from 'antd';
import { ILine } from '../../Interfaces/line';
import styles from './CommandBlock.module.css'

const { Title, Text } = Typography;

interface CommandBlocksProps {
    commandData: ILine;
    codeBlockRef: any;
    colors: Array<string>
}

interface CommandBlockProps {
    description: String;
    color: string
}

const CommandBlock: FC<PropsWithChildren<CommandBlockProps>> = ({ description, color }) => {
    return (
        <div className={styles.command_block_wrapper}>
            <div className={styles.command_block} style={{border: "1px solid " + color}}>
                <Text>
                    {description}
                </Text>
            </div>
        </div>
    )
}

const CommandBlocks: FC<PropsWithChildren<CommandBlocksProps>> = ({ commandData, codeBlockRef, colors }) => {
    return (
        <div className={styles.command_blocks_wrapper}>
            <div className={styles.container}>
                <div className='command-blocks'>
                    {
                        commandData.commands.length > 0 &&
                        commandData.commands.map((command, index) => {
                            return <div ref={(el: any) => codeBlockRef.current[index] = el} key={index}>
                                <CommandBlock description={command.description} color={colors[index]}/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CommandBlocks
