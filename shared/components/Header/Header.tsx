import { FC } from 'react'
import { Col, Row, Typography } from 'antd';
import Image from 'next/image';

import styles from './Header.module.css'

const { Title, Text } = Typography;

const Header: FC = () => {
    return (
        <div className='header-wrapper'>
            <div className={styles.container}>
                <div className='header'>
                    <Row gutter={12} align='middle' justify='center'>
                        <Col>
                            <Image src='/images/pluginIcon.png' width={"80%"} height={"80%"}/>
                        </Col>
                        <Col>
                            <Title level={1}>mosta-<Text className={styles.header_title_2}>docli</Text></Title>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Header
