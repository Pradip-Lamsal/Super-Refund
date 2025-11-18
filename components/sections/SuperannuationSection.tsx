"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SuperannuationSection() {
  return (
    <section
      id="superannuation"
      className="py-20 bg-gradient-subtle relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-[#6dd400]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#0095eb]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 space-y-32">
        {/* What is SUPERANNUATION FUND */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              {/* Decorative green circle */}
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#6dd400]/20 rounded-full blur-2xl" />
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#6dd400] rounded-full -z-10" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                  alt="Woman checking phone"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f6f3a]">
              What is SUPERANNUATION FUND ?
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                In Australia, it is a legal obligation of employers to pay its
                employee an equivalent of 9.5% of their wages if they earn over
                $ 450 in a month. This is known as Super Guarantee contribution.
                Some employers pay more than 9.5% up to 17%, however, they can
                not pay any less than 9.5%. This is paid to salaried employees
                and to some independent sole traders too, i.e. someone working
                on ABN as well.
              </p>

              <p>
                As you earn wages, this 9.5% is normally paid to your nominated
                Super Fund account, and if you fail to pay this, your employer
                is legally compelled to pay to a default super fund account
                which they open for you.
              </p>

              <p>
                In a circumstance when they do not have enough information about
                you to open a super fund account, they are obligated to pay to
                your ATO Super account.
              </p>
            </div>
          </motion.div>
        </div>

        {/* What is SUPERANNUATION REFUND */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f6f3a]">
              What is SUPERANNUATION REFUND ?
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The superfund is a compulsory retirement saving account and is
                not normally accessible by the account holder as they wish. It
                is only accessible after you retire after age 60 or 65 if you
                choose not to retire. There are some of the circumstance when
                you are allowed to request a super refund.
              </p>

              <p>
                Specially, it is easier to request super refund if a temporary
                resident leaves Australia with no intention to return back.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              {/* Decorative green circle */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#6dd400]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#6dd400] rounded-full -z-10" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=700&fit=crop"
                  alt="Woman with credit card"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
