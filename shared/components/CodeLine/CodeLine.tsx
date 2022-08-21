import { FC, useEffect, useState, PropsWithChildren } from 'react'
import { Col, Row, Typography } from 'antd';
import styles from './CodeLine.module.css';
import getSingleCommand from "../../../data/Data"

const { Title, Paragraph } = Typography;

interface Props {
    fileName: string;
}

const CodeLine: FC<PropsWithChildren<Props>> = ({ fileName }) => {

    const [commandData, setCommandData] = useState<any>();
    
    useEffect(() => {
        console.log({fileName})
        getSingleCommand.getSingleCommand(fileName)
        .catch(err => {console.log(err)})
        .then(data => {setCommandData(data)})
    }, [])

    return (
        <div className='code-line-wrapper'>
            <div className={styles.container}>
                <div className='code-line'>
                    <Row gutter={12} align='middle' justify='center'>
                        {
                            commandData?.commands?.length > 0 &&
                            commandData?.commands.map((item: any) =>
                                <Col>
                                    <Title level={3}>{item.command}</Title>
                                </Col>
                            )
                        }
                        <Col>
                            <Title level={3}>Mostafa</Title>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default CodeLine
