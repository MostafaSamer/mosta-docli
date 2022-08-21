import React, { FC, PropsWithChildren } from 'react'
import { Col, Row, Typography } from 'antd';
import { ILine } from '../../Interfaces/line';
import styles from './CommandBlock.module.css'

const { Title, Text } = Typography;

interface CommandBlocksProps {
    commandData: ILine;
}

interface CommandBlockProps {
    description: String;
}

const CommandBlock: FC<PropsWithChildren<CommandBlockProps>> = ({ description }) => {
    return (
        <div className={styles.command_block_wrapper}>
            <div className={styles.command_block}>
                <Text>
                    {description}
                </Text>
            </div>
        </div>
    )
}

const CommandBlocks: FC<PropsWithChildren<CommandBlocksProps>> = ({ commandData }) => {
    return (
        <div className={styles.command_blocks_wrapper}>
            <div className={styles.container}>
                <div className='command-blocks'>
                    {
                        commandData.commands.length > 0 &&
                        commandData.commands.map((command, index) => {
                            return <CommandBlock key={index} description={command.description} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CommandBlocks
