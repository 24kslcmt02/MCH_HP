import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const Disclosure = () => {
    return (
        <div className="bg-white text-stone-900 font-sans selection:bg-stone-200 selection:text-black antialiased min-h-screen flex flex-col">
            {/* Navigation: Minimal */}
            <nav className="flex items-center justify-between px-8 py-8 md:px-16 text-stone-900">
                <Link to="/" className="cursor-pointer hover:opacity-50 transition-opacity">
                    <img src="/logo.png" alt="M's Capital" className="h-12 md:h-16 w-auto" />
                </Link>
                <div className="flex space-x-12 text-[10px] font-medium tracking-[0.15em] uppercase">
                    <Link to="/" className="hover:line-through decoration-stone-400 transition-all">Back to Home</Link>
                </div>
            </nav>

            {/* Content Section */}
            <main className="flex-grow">
                <section className="max-w-screen-xl mx-auto px-8 md:px-16 py-24 md:py-32">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none text-stone-900 mb-16"
                        >
                            特定商取引法に基づく表示
                        </motion.h1>

                        <motion.div variants={fadeInUp} className="w-full h-[1px] bg-stone-200 mb-16" />

                        <div className="max-w-3xl">
                            <dl className="space-y-12">
                                {[
                                    { label: "販売事業者名", value: "株式会社M's Capital Holdings" },
                                    { label: "運営統括責任者", value: "牧野　亘紘" },
                                    { label: "所在地", value: "〒441-3147\n愛知県豊橋市大岩町字火打坂30番地1" },
                                    { label: "連絡先", value: "メール　：info@my-th.jp\n電話番号：メールにてご請求いただければ、遅滞なく開示いたします" },
                                    { label: "販売価格・利用料金", value: "• チェキ券、特典券、電子チケット：購入手続きの際に画面に表示されます。\n• コレクション機能（サブスクリプション）：申込ページに記載の月額料金をご確認ください。\n※表示価格は全て消費税込みの価格です。" },
                                    { label: "商品代金以外の必要料金", value: "• 消費税\n• インターネットをするために必要となる通信料・プロバイダ料金・その他インターネット利用のために必要となる料金（それぞれの額は、利用者が契約を締結したインターネットプロバイダー又は携帯電話会社等にお問い合わせください）" },
                                    { label: "お支払い方法", value: "• クレジットカード決済\n• コンビニ決済" },
                                    { label: "お支払い時期", value: "• 通常販売（先着順のイベントチケット、チェキ券など）：ご注文時にお支払いが確定します。\n• 抽選販売：ご当選と同時に、お申し込み時にご登録いただいたお支払い方法にて決済が確定します。\n• コレクション機能（サブスクリプション）：契約した日付で毎月自動で課金されます。" },
                                    { label: "商品の引き渡し時期", value: "購入手続きの完了後、商品詳細画面に表示されたイベント及び受け取り方法で商品等を引き渡します。" },
                                    { label: "サブスクリプションの引き渡し時期", value: "契約手続きが完了した時点で、直ちにアプリ内のコレクション機能をご利用いただけます。特別な設定や追加の操作は不要で、契約成立後すぐにサービスが開始されます。" },
                                    { label: "返品・交換・キャンセルについて", value: "• お客様都合による返品・キャンセル：ご購入後の返品、交換、キャンセル、払い戻しは一切お受けできません。あらかじめご了承ください。\n• サービス都合による払い戻し：イベントの中止など、当社の都合によりサービスを提供できなかった場合に限り、払い戻しの対応をいたします。払い戻し方法については、対象のお客様に別途アプリ内通知またはメールにてご案内いたします。\n• サブスクリプション：サービスの性質上、サブスクリプション料金の返金は原則として承っておりません。" },
                                    { label: "販売条件に関する特約", value: "抽選販売へのお申し込みには、サブスクリプションへの登録と、当社が指定する方法による本人確認手続きを完了していただく必要がございます。本人確認が完了していない場合、抽選にご参加いただけませんので、あらかじめご了承ください。" },
                                    { label: "サブスクリプションの自動更新について", value: "サブスクリプションは、契約期間満了時にお客様による解約手続きがない限り、同一条件で自動的に更新されます。更新時には、契約時にご登録いただいたお支払い方法へ継続して請求が行われます。" },
                                    { label: "サブスクリプションの解約について", value: "サブスクリプションの解約は、アプリ内のマイページからいつでもお手続きいただけます。解約が完了した場合、次回以降の請求は行われず、現在の契約期間終了をもってサービス提供が停止されます。なお、日割りでの返金は承っておりません。" },
                                    { label: "動作環境", value: "本アプリをご利用いただくために必要な動作環境は、App StoreまたはGoogle Playのアプリダウンロードページをご確認ください。" },
                                    { label: "商品・サービスに関する特記事項", value: "• 当サービスで購入された電子チケット、チェキ券、その他特典券の有償・無償を問わず第三者への譲渡および転売行為を固く禁じます。\n• 本アプリで発行されるチェキ券、その他特典券には有効期限が定められているものもございます。有効期限を過ぎたものは失効し、ご利用いただけません。\n• 退会された場合、購入済みの商品やポイント、未使用の特典券は全て失効します。\n• サービスの公正な利用のため、お一人様1アカウントでのご利用をお願いしております。複数アカウントの所持が確認された場合、利用規約に基づき対応いたします。\n• 抽選販売での電子チケット、チェキ券、その他特典券は、当選者のみが利用できます。抽選結果はご登録のメールアドレス宛に送信され、アプリ内通知でも発表いたします。\n• サブスクリプション機能で提供されるコレクション機能は、使用済みのチェキ券画像を閲覧するためのものです。チェキ券そのものの利用を再度可能にするものではありません。" }
                                ].map((item, index) => (
                                    <motion.div key={index} variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-stone-100 pb-8 last:border-0">
                                        <dt className="text-xs font-bold tracking-widest text-stone-400 uppercase">
                                            {item.label}
                                        </dt>
                                        <dd className="md:col-span-2 text-sm md:text-base text-stone-800 font-medium whitespace-pre-line leading-relaxed">
                                            {item.value}
                                        </dd>
                                    </motion.div>
                                ))}
                            </dl>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-stone-200 py-12 bg-stone-900 text-stone-400 mt-20">
                <div className="max-w-screen-2xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[10px] tracking-widest uppercase opacity-40">
                        &copy; M's Capital Holdings Inc. All Rights Reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <Link to="/" className="text-[10px] tracking-widest uppercase hover:text-white transition-colors">Home</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Disclosure;
