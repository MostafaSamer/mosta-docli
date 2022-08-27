import { FC, PropsWithChildren } from 'react'
import { Typography } from 'antd';
import styles from './Description.module.css';

const { Paragraph } = Typography;

interface Props {
    description: String;
}

const Description: FC<PropsWithChildren<Props>> = ({ description }) => {

    return (
        <div className={styles.descriptionWrapper}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <Paragraph>{description}</Paragraph>
                </div>
            </div>
        </div>
    )
}

export default Description
