import { FC, useEffect, useState, PropsWithChildren } from 'react'
import { Col, Row, Typography } from 'antd';
import styles from './CodeLine.module.css';
import getSingleCommand from "../../../data/Data"
import { ILine } from '../../../shared/Interfaces/line';

const { Title, Paragraph } = Typography;

interface Props {
    commandData: ILine;
}

const CodeLine: FC<PropsWithChildren<Props>> = ({ commandData }) => {

    return (
        <div className='code-line-wrapper'>
            <div className={styles.container}>
                <div className='code-line'>
                    <Row gutter={12} align='middle' justify='center'>
                        {
                            commandData?.commands?.length > 0 &&
                            commandData?.commands.map((item: any, index) =>
                                <Col key={index}>
                                    <Title level={3}>{item.command}</Title>
                                </Col>
                            )
                        }
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default CodeLine
