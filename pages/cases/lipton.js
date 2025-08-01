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
            <CaseDetailHeader url="/lipton/header.jpg" title="LIPTON" />
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

            <CaseDetailGrid grid={2} images={['/lipton/1.png', '/lipton/2.png']} />
            <CaseDetailGrid grid={2} images={['/lipton/3.png', '/lipton/4.png']} />

            <div style={{ backgroundColor: '#E3E7EB' }} className={styles.colorized}>
                <CaseDetailGrid
                    grid={3}
                    images={['/lipton/5.png', '/lipton/6.png', '/lipton/7.png']}
                />

                <CaseDetailGrid
                    grid={3}
                    images={['/lipton/8.png', '/lipton/9.png', '/lipton/10.png']}
                />
            </div>

            <CaseDetailDescription
                oneCol={true}
                oneColTitle="We add our unique touch to every job and set new standards by combining aesthetics and function."
                oneColDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />

            <CaseDetailGrid grid={2} images={['/lipton/11.png', '/lipton/12.png']} />
            <CaseDetailGrid grid={2} images={['/lipton/13.png', '/lipton/14.png']} />
            <CaseDetailGrid
                grid={3}
                images={['/lipton/15.png', '/lipton/16.png', '/lipton/17.png']}
            />

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
