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
            <CaseDetailHeader url="/gastronometro/header.jpg" title="GASTRONOMETRO" />
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

            <CaseDetailGrid grid={2} images={['/gastronometro/1.png', '/gastronometro/2.png']} />
            <CaseDetailGrid grid={2} images={['/gastronometro/3.png', '/gastronometro/4.png']} />

            <CaseDetailGrid
                grid={3}
                images={['/gastronometro/5.png', '/gastronometro/6.png', '/gastronometro/7.png']}
            />

            <div style={{ backgroundColor: '#fff' }} className={styles.colorized}>
                <CaseDetailDescription
                    color="#1D1D1D"
                    oneCol={true}
                    oneColTitle="We add our unique touch to every job and set new standards by combining aesthetics and function."
                    oneColDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />

                <CaseDetailGrid
                    grid={2}
                    images={['/gastronometro/8.png', '/gastronometro/9.png']}
                />
                <CaseDetailGrid
                    grid={3}
                    images={[
                        '/gastronometro/10.png',
                        '/gastronometro/11.png',
                        '/gastronometro/12.png',
                    ]}
                />
            </div>

            <CaseDetailGrid grid={2} images={['/gastronometro/13.png', '/gastronometro/14.png']} />
            <CaseDetailGrid
                grid={3}
                images={['/gastronometro/15.png', '/gastronometro/16.png', '/gastronometro/17.png']}
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
