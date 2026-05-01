/**
 * Reusable Framer Motion animation variants
 */

// Page transitions
export const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
}

// Container for staggered children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.5,
    }
  }
}

// Staggered item (for use with containerVariants)
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// Hero text stagger (for headings)
export const heroTextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Card hover animation
export const cardHoverVariants = {
  rest: { 
    y: 0, 
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)'
  },
  hover: { 
    y: -8,
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

// Button tap animation
export const buttonTapVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
  tap: { scale: 0.98, transition: { duration: 0.1 } }
}

// Modal/Dialog animation
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
}

// Backdrop animation
export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
}

// Slide in from left
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
}

// Slide in from right
export const slideInRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    x: 40,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
}

// Fade and scale
export const fadeScaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

// Badge pulse (for cart badge, notification indicators)
export const pulseVariants = {
  pulse: {
    scale: [1, 1.2, 1],
    transition: { duration: 2, repeat: Infinity }
  }
}

// Number counter
export const numberCounterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
}

// List item animation
export const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 }
  }
}
