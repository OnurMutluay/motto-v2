import CaseDetailDescription from '@/components/cases/CaseDetailDescription';
import CaseDetailGrid from '@/components/cases/CaseDetailGrid';
import CaseDetailHeader from '@/components/cases/CaseDetailHeader';
import styles from '../../styles/cases/casedetailgrid.module.css';
import { Fragment } from 'react';
import CaseArrows from '@/components/cases/CaseArrows';
import Footer from '@/components/global/Footer';

const Lipton = () => {
    return (
        <Fragment>
            <CaseDetailHeader url="/xguard/header.jpg" title="xGUARD" />
            <CaseDetailDescription
                description="We set out to produce designs and projects that are far from ordinary. We add our unique touch to every job and set new standards by combining aesthetics and function."
                services={[
                    'Web Design',
                    'Mobile App',
                    'Visual AI',
                    'Brand Identity',
                    'Art Direction',
                ]}
            />

            <CaseDetailGrid grid={2} images={['/xguard/1.png', '/xguard/2.png']} />
            <CaseDetailGrid grid={2} images={['/xguard/3.png', '/xguard/4.png']} />

            <CaseDetailGrid grid={3} images={['/xguard/5.png', '/xguard/6.png', '/xguard/7.png']} />
            <CaseDetailDescription
                oneCol={true}
                oneColTitle="We add our unique touch to every job and set new standards by combining aesthetics and function."
                oneColDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <div style={{ backgroundColor: '#fff' }} className={styles.colorized}>
                <CaseDetailGrid grid={2} images={['/xguard/8.png', '/xguard/9.png']} />
                <CaseDetailGrid
                    grid={3}
                    images={['/xguard/10.png', '/xguard/11.png', '/xguard/12.png']}
                />
            </div>

            <CaseArrows
                previous="FitAction"
                previousLink="/cases/fitaction"
                next="Palamut"
                nextLink="/cases/palamut"
            />

            <Footer />
        </Fragment>
    );
};

export default Lipton;
