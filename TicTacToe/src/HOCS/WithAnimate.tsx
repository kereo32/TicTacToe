import { motion } from 'framer-motion';

export default function withAnimate<T extends {}>(Component: (props: T) => JSX.Element, options?: {}) {
  return function WithAnimate(props: T) {
    return (
      <motion.div className="w-full h-screen flex justify-center items-center" {...options}>
        <Component {...props} />
      </motion.div>
    );
  };
}
