import React, { FC, useEffect, useState } from 'react'
import Data from "../../../data/Data"
import styles from './CodeNameBlock.module.css'
import { useRouter } from 'next/router';
import { Typography } from 'antd';
import Link from 'next/link';

const { Text } = Typography;

const CommandBlocks: FC = () => {
    const router = useRouter()

    const [allCommand, setAllCommand] = useState<Array<String>>([]);

    useEffect(() => {
        Data.getAllCommands()
            .catch(err => { console.log(err) })
            .then(data => { setAllCommand(data.name) })
    }, [router])

    return (
        <div className={styles.code_name_blocks_wrapper}>
            <div className={styles.container}>
                <div className='codeNameBlock'>
                    {
                        allCommand.length > 0 &&
                        allCommand.map((name, index) => {
                            return <Link href={`/${name}`}>
                            <Text key={index}>
                                <div className={styles.name_block}>
                                    <div className={styles.name}>
                                        {name}
                                    </div>
                                </div>
                            </Text>
                            </Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CommandBlocks
