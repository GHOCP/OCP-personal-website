"use client";

import { motion } from "motion/react";

export default function TestMotion() {
  return (
    <div style={{ padding: 24 }}>
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 300, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          display: "inline-block",
          width: 100,
          height: 100,
          background: "red",
          borderRadius: 12,
        }}
      />
    </div>
  );
}
