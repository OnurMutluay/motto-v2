import Link from 'next/link';
import styles from '../../styles/cases/caselist.module.css';
import ButtonArrow from '../global/ButtonArrow';

const CaseList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <Link href="/cases/lipton">
                    <div className={styles.caseCard}>
                        <img src="/cases/lipton/lipton.jpg" alt="Lipton" />
                        <div className={styles.bottom}>
                            <div className={styles.texts}>
                                <h4>Lipton</h4>
                                <p>Creative Assets</p>
                            </div>

                            <ButtonArrow />
                        </div>
                    </div>
                </Link>

                <Link href="/cases/fitaction">
                    <div className={styles.caseCard}>
                        <img src="/cases/fitaction/fitaction.jpg" alt="FitAction" />
                        <div className={styles.bottom}>
                            <div className={styles.texts}>
                                <h4>FitAction</h4>
                                <p>Mobile App - Branding - Startup</p>
                            </div>

                            <ButtonArrow />
                        </div>
                    </div>
                </Link>

                <Link href="/cases/trt">
                    <div className={styles.caseCard}>
                        <img src="/cases/trt/trt.jpg" alt="TRT Global" />
                        <div className={styles.bottom}>
                            <div className={styles.texts}>
                                <h4>TRT Global</h4>
                                <p>Mobile App UI</p>
                            </div>

                            <ButtonArrow />
                        </div>
                    </div>
                </Link>

                <Link href="/cases/gastronometro">
                    <div className={styles.caseCard}>
                        <img src="/cases/gastronometro/gastronometro.jpg" alt="Gastronometro" />
                        <div className={styles.bottom}>
                            <div className={styles.texts}>
                                <h4>Gastronometro</h4>
                                <p>Web UI - Development</p>
                            </div>

                            <ButtonArrow />
                        </div>
                    </div>
                </Link>

                <Link href="/cases/xguard">
                    <div className={styles.caseCard}>
                        <img src="/cases/xguard/xguard.jpg" alt="xGuard" />
                        <div className={styles.bottom}>
                            <div className={styles.texts}>
                                <h4>xGuard</h4>
                                <p>Branding</p>
                            </div>

                            <ButtonArrow />
                        </div>
                    </div>
                </Link>

                <Link href="/cases/yore">
                    <div className={styles.caseCard}>
                        <img src="/cases/yore/yore.jpg" alt="Yöre" />
                        <div className={styles.bottom}>
                            <div className={styles.texts}>
                                <h4>Yöre</h4>
                                <p>Branding - Package Designs</p>
                            </div>

                            <ButtonArrow />
                        </div>
                    </div>
                </Link>

                <Link href="/cases/heva">
                    <div className={styles.caseCard}>
                        <img src="/cases/heva/heva.jpg" alt="Heva" />
                        <div className={styles.bottom}>
                            <div className={styles.texts}>
                                <h4>Heva Clinic</h4>
                                <p>Back-End - Front-End - Mobile App - Branding</p>
                            </div>

                            <ButtonArrow />
                        </div>
                    </div>
                </Link>

                <Link href="/cases/bakpay">
                    <div className={styles.caseCard}>
                        <img src="/cases/bakpay/bakpay.jpg" alt="Bak Pay" />
                        <div className={styles.bottom}>
                            <div className={styles.texts}>
                                <h4>Bak Pay</h4>
                                <p>Branding</p>
                            </div>

                            <ButtonArrow />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CaseList;
