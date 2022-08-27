import { FC, useEffect, useState, PropsWithChildren } from 'react'
import { Col, Row, Typography } from 'antd';
import styles from './CodeLine.module.css';
import { ILine } from '../../../shared/Interfaces/line';

const { Title, Paragraph } = Typography;

interface Props {
    commandData: ILine;
    codeLineRef: any;
}

const CodeLine: FC<PropsWithChildren<Props>> = ({ commandData, codeLineRef }) => {

    return (
        <div className='code-line-wrapper'>
            <div className={styles.container}>
                <div className='code-line'>
                    <Row gutter={12} align='middle' justify='center'>
                        {
                            commandData?.commands?.length > 0 &&
                            commandData?.commands.map((item: any, index) =>
                                <Col key={index}>
                                    <Title level={3} ref={el => codeLineRef.current[index] = el}>{item.command}</Title>
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
