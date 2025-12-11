import React from 'react';
import { motion } from 'framer-motion';

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Smooth elegant ease
    }
};

const numberVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

function App() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white text-stone-900 font-sans selection:bg-stone-200 selection:text-black antialiased">

            {/* Navigation: Text Only, Minimal */}
            <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-8 md:px-16 text-stone-900">
                <div
                    className="cursor-pointer hover:opacity-50 transition-opacity"
                    onClick={() => scrollTo('hero')}
                >
                    <img src="/logo.png" alt="M's Capital" className="h-12 md:h-16 w-auto" />
                </div>
                <div className="flex space-x-12 text-[10px] font-medium tracking-[0.15em] uppercase hidden md:flex">
                    <button onClick={() => scrollTo('business')} className="hover:line-through decoration-stone-400 transition-all">Business</button>
                    <button onClick={() => scrollTo('company')} className="hover:line-through decoration-stone-400 transition-all">Company</button>
                    <button onClick={() => window.location.href = 'mailto:info@mscapital.co.jp'} className="hover:line-through decoration-stone-400 transition-all">
                        Contact
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-screen-2xl mx-auto w-full"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] text-stone-900 mb-12"
                    >
                        株式会社M's Capital Holdings<br />
                        <span className="text-stone-300 ml-2 md:ml-4 font-light"></span>
                    </motion.h1>

                    <motion.div variants={fadeInUp} className="w-full h-[1px] bg-stone-200 mb-8 origin-left" />

                    <div className="flex justify-between items-end">
                        <motion.p variants={fadeInUp} className="text-xs tracking-[0.3em] text-stone-400 uppercase">
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-xs tracking-[0.3em] text-stone-400 uppercase hidden md:block">
                            Est. 2004
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Business Section */}
            <section id="business" className="border-t border-stone-200">
                <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-32 md:py-48">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">

                        {/* Left Column: Header & Number */}
                        <div className="md:col-span-1 relative">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="sticky top-32"
                            >
                                <div className="relative">
                                    <motion.span
                                        variants={numberVariant}
                                        className="text-[8rem] md:text-[12rem] leading-none font-bold text-stone-100 absolute -top-16 -left-4 -z-10 select-none"
                                    >
                                        01
                                    </motion.span>
                                    <motion.h2 variants={fadeInUp} className="text-xs font-bold tracking-[0.25em] text-stone-900 pt-4 mb-2">
                                        BUSINESS
                                    </motion.h2>
                                    <motion.p variants={fadeInUp} className="text-[10px] text-stone-400 tracking-widest font-mono">
                                        OUR SERVICES
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="md:col-span-2 md:pl-24 lg:pl-32">
                            <motion.ul
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="space-y-16" // Increased spacing between items
                            >
                                {[
                                    { title: "Subsidiary Management", subtitle: "子会社の経営管理指導", desc: "グループ全体の価値最大化を目指した、戦略的かつ実務的な経営指導を行います。" },
                                    { title: "Venue Operation", subtitle: "ライブハウス運営", desc: "文化発信の拠点としてのライブハウス運営を通じ、地域活性化とエンターテインメントの振興に貢献します。" },
                                    { title: "My-th Management", subtitle: "My-thの運営・管理", desc: "アイドルシーンを変える新たな価値を創造し、持続可能な運営体制を構築・維持管理します。" }
                                ].map((item, index) => (
                                    <motion.li key={index} variants={fadeInUp} className="group cursor-default">
                                        <h3 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 mb-4 group-hover:text-stone-600 transition-colors duration-300">
                                            {item.subtitle}
                                        </h3>
                                        {/* Added English title for magazine feel */}
                                        <p className="text-xs tracking-[0.15em] text-stone-400 uppercase mb-4">{item.title}</p>
                                        <p className="text-sm text-stone-500 leading-loose max-w-lg">
                                            {item.desc}
                                        </p>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Section */}
            <section id="company" className="border-t border-stone-200">
                <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-32 md:py-48">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">

                        {/* Left Column: Header & Number */}
                        <div className="md:col-span-1 relative">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="sticky top-32"
                            >
                                <div className="relative">
                                    <motion.span
                                        variants={numberVariant}
                                        className="text-[8rem] md:text-[12rem] leading-none font-bold text-stone-100 absolute -top-16 -left-4 -z-10 select-none"
                                    >
                                        02
                                    </motion.span>
                                    <motion.h2 variants={fadeInUp} className="text-xs font-bold tracking-[0.25em] text-stone-900 pt-4 mb-2">
                                        COMPANY
                                    </motion.h2>
                                    <motion.p variants={fadeInUp} className="text-[10px] text-stone-400 tracking-widest font-mono">
                                        CORPORATE PROFILE
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="md:col-span-2 md:pl-24 lg:pl-32">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <dl className="grid grid-cols-1 gap-0 border-t border-stone-200">
                                    {[
                                        { label: "Company Name", jaLabel: "社名", value: "株式会社M's Capital Holdings" },
                                        { label: "Representative", jaLabel: "代表取締役", value: "牧野 亘紘" },
                                        { label: "Established", jaLabel: "設立", value: "平成16年（2004年）6月" },
                                        { label: "Location", jaLabel: "住所", value: "〒441-3147\n愛知県豊橋市大岩町字火打坂30-1" }
                                    ].map((row, i) => (
                                        <div key={i} className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-stone-200 items-baseline hover:bg-stone-50 transition-colors duration-300 -mx-4 px-4">
                                            {/* English Label (Small) */}
                                            <dt className="md:col-span-3 text-[10px] text-stone-400 uppercase tracking-widest mb-2 md:mb-0">
                                                {row.label}
                                            </dt>
                                            {/* Value (Main) */}
                                            <dd className="md:col-span-9 text-lg md:text-xl font-medium text-stone-800 whitespace-pre-line">
                                                {row.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-stone-200 py-24 bg-stone-900 text-stone-400">
                <div className="max-w-screen-2xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-end">
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-2xl font-semibold tracking-tighter text-white mb-2">M's Capital Holdings Inc.</h4>
                        <div className="flex flex-col space-y-1 text-xs font-mono opacity-50">
                            <span>EST. 2004</span>
                            <span>TOYOHASHI, AICHI</span>
                        </div>
                    </div>
                    <p className="text-[10px] tracking-widest uppercase opacity-40">
                        &copy; M's Capital Holdings Inc. All Rights Reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
}

export default App;
