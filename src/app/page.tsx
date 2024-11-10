"use client"
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";
import {Typography} from "@mui/material";
import Link from 'next/link'

export default function Home() {
  return (
      <AnimatePresence mode={"wait"}>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <motion.div
                  initial={{opacity: 0, scale: 0.8}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1]}}
              >
                  <Typography fontSize={"xxx-large"}>WIDER</Typography>
                  <Link href={"/about"}>あ</Link>
              </motion.div>
          </main>
      </AnimatePresence>
);
}
