"use client"
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";
import {Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
type Props = {};

const Index: React.FC<Props> = ({}) => {
  return (
      <AnimatePresence mode={"wait"}>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <motion.div
                  initial={{opacity: 0, scale: 0.8}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1]}}
              >
                  <Typography fontSize={"xxx-large"}>WIDER2</Typography>
              </motion.div>
          </main>
      </AnimatePresence>
);
}

export default Index;