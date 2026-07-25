"use client";

import {
  motion,
  useInView,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

/**
 * FadeIn Component
 * Animate elements fading in from any direction when mounted or scrolled into view.
 */
export function FadeIn({
  children,
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'none'
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = "",
  once = true,
  viewportMargin = "-50px",
  ...props
}) {
  const getVariants = () => {
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
      none: {},
    };

    return {
      hidden: {
        opacity: 0,
        ...(directions[direction] || {}),
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0], // smooth cubic-bezier
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScaleIn Component
 * Smooth scale & fade entrance animation.
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  initialScale = 0.9,
  className = "",
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer & StaggerItem
 * Seamlessly stagger child animations for lists, grids, or feature blocks.
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.2,
  className = "",
  once = true,
  ...props
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = "up",
  distance = 20,
  duration = 0.5,
  className = "",
  ...props
}) {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

/**
 * HoverCard Component
 * Reusable interactive spring hover and tap animation wrapper.
 */
export function HoverCard({
  children,
  scale = 1.03,
  y = -4,
  tapScale = 0.97,
  className = "",
  ...props
}) {
  return (
    <motion.div
      whileHover={{ scale, y }}
      whileTap={{ scale: tapScale }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * TiltCard Component
 * Interactive 3D tilt perspective effect based on mouse movement across the element.
 */
export function TiltCard({
  children,
  tiltMaxAngle = 10,
  scaleOnHover = 1.02,
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltMaxAngle, -tiltMaxAngle]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltMaxAngle, tiltMaxAngle]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: scaleOnHover }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`perspective-1000 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * MagneticButton Component
 * Button that moves magnetically towards the user's cursor when hovered.
 */
export function MagneticButton({
  children,
  strength = 0.35,
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * AnimateModal Component
 * Smooth spring backdrop and scale modal dialog animation wrapper.
 */
export function AnimateModal({
  isOpen,
  onClose,
  children,
  className = "",
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className={className}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * FloatingParticles Component
 * Ambient background floating particles.
 */
export function FloatingParticles({
  count = 25,
  color = "bg-blue-400/20",
  maxSize = 6,
  minSize = 2,
  className = "",
}) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
      yDistance: Math.random() * -40 - 10,
    }));
    setParticles(generated);
  }, [count, maxSize, minSize]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${color}`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, p.yDistance, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/**
 * GlowFollower Component
 * Smooth cursor-tracking ambient spotlight/glow effect.
 */
export function GlowFollower({
  targetRef,
  size = 250,
  color = "rgba(0, 94, 166, 0.15)",
  className = "",
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (targetRef?.current) {
        const rect = targetRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      } else {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    const container = targetRef?.current || window;
    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);

    if (targetRef?.current) {
      targetRef.current.addEventListener("mouseenter", onEnter);
      targetRef.current.addEventListener("mouseleave", onLeave);
    }

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (targetRef?.current) {
        targetRef.current.removeEventListener("mouseenter", onEnter);
        targetRef.current.removeEventListener("mouseleave", onLeave);
      }
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [targetRef]);

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none z-10 hidden lg:block ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        left: mousePos.x - size / 2,
        top: mousePos.y - size / 2,
      }}
      animate={{
        scale: isHovered ? 1.2 : 1,
        opacity: isHovered ? 1 : 0.4,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 25 }}
    />
  );
}

/**
 * TextReveal Component
 * Smooth line/word reveal animation for titles and hero headings.
 */
export function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.05,
  once = true,
}) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={containerVariants}
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
    >
      {words.map((word, idx) => (
        <motion.span key={idx} variants={wordVariants} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
