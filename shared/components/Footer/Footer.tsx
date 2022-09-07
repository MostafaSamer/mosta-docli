import { FC } from 'react'
import { Typography, } from 'antd';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const { Paragraph } = Typography;

const Footer: FC = () => {

    return (
        <div className={styles.footerWrapper}>
            <div className={styles.container}>
                <div className={styles.footer}>
                    <Paragraph>
                        Made with <span className={styles.footerHeart}><Image src={'/images/2764.png'} width={"20px"} height={"20px"} /></span> by <Link href={"https://github.com/MostafaSamer"}>Mostafa Samir</Link>
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}

export default Footer