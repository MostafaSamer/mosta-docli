import { FC } from 'react'
import { Col, Row, Typography } from 'antd';
import Image from 'next/image';

import styles from './Header.module.css'
import Link from 'next/link';

const { Title, Text } = Typography;

const Header: FC = () => {
    return (
        <div className='header-wrapper'>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link href="/">
                        <Row gutter={12} align='middle' justify='center'>
                            <Col>
                                <Image src='/images/pluginIcon.png' width={"80%"} height={"80%"} />
                            </Col>
                            <Col>
                                <Title level={1} className={styles.header_title}>mosta-<Text className={styles.header_title_2}>docli</Text></Title>
                            </Col>
                        </Row>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
