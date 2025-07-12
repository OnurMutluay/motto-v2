import styles from '../../styles/services/techstack.module.css';

const TechStack = () => {
    return (
        <div className={styles.container}>
            <h3>Our Tech Stack</h3>

            <div className={styles.stackContainer}>
                <img src="/tech/js.png" alt="Javascript" />
                <img src="/tech/swift.png" alt="Swift" />
                <img src="/tech/react.png" alt="React" />
                <img src="/tech/kotlin.png" alt="Kotlin" />
                <img src="/tech/nextjs.png" alt="Next.JS" />
                <img src="/tech/typescript.png" alt="TypeScript" />
                <img src="/tech/adobe.png" alt="Adobe" />
                <img src="/tech/sketch.png" alt="Sketch" />
                <img src="/tech/figma.png" alt="Figma" />
                <img src="/tech/shopify.png" alt="Shopify" />
                <img src="/tech/aws.png" alt="AWS" />
                <img src="/tech/googlecloud.png" alt="Google Cloud" />
            </div>
        </div>
    );
};

export default TechStack;
