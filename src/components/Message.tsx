import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Daud Shaima,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
        Hey babe, I know you’re not one for a HUGE fuss about your BIRTHDAY, but I can’t help wanting to tell you how INCREDIBLE you are—not just TODAY, but EVERY single day. You’ve got this QUIET magic about you that LIGHTS up my world in ways I didn’t even know were POSSIBLE before you came along. I LOVE how you make EVERYTHING feel so EASY and REAL, from the LITTLE moments we share to the way you just GET me without me having to say a WORD. I’m so GRATEFUL you were BORN, even if you’d rather keep it LOW-KEY. So, no PRESSURE, but I hope you’ll let me treat you to something SMALL—maybe your FAVORITE takeout or a CHILL night in—because you DESERVE to feel SPECIAL, even if it’s just between US. 
        </p>
        <p className="text-lg text-pink-600 font-semibold">
        Love you MORE than you know.
        </p>
      </motion.div>
    </div>
  );
};

export default Message;