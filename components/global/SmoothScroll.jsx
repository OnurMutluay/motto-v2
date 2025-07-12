import React, { useRef, useState, useCallback, useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useViewportScroll, useTransform, useSpring, motion } from 'framer-motion';

const SmoothScroll = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef(null);
    const [pageHeight, setPageHeight] = useState(0);

    const resizePageHeight = useCallback((entries) => {
        for (let entry of entries) {
            setPageHeight(entry.contentRect.height);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries));
        if (scrollRef.current) {
            resizeObserver.observe(scrollRef.current);
        }

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', checkMobile);
        };
    }, [resizePageHeight]);

    const { scrollY } = useViewportScroll();
    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
    const physics = { damping: 18, mass: 0.2, stiffness: 120 };
    const spring = useSpring(transform, physics);

    return (
        <>
            {isMobile ? (
                <div>{children}</div>
            ) : (
                <motion.div ref={scrollRef} style={{ y: spring }} className="scroll-container">
                    {children}
                </motion.div>
            )}
            <div style={{ height: pageHeight }} />
        </>
    );
};

export default SmoothScroll;
