export type Language = "en" | "bn";

export const translations = {
  en: {
    // Brand & System
    "brand.name": "BhumiSync",
    "brand.tagline": "Land Registry",
    "brand.live": "Sync Live",

    // Navigation
    "nav.overview": "Overview",
    "nav.howItWorks": "How It Works",
    "nav.verifyLand": "Verify Land",
    "nav.qrVerification": "QR Verification",
    "nav.accessPortal": "Access Portal",

    // Hero Section
    "hero.badge": "Decentralized Land Ledger",
    "hero.titlePre": "Verify land",
    "hero.titleHighlight": "before you buy",
    "hero.description":
      "Instant cadastral deed verification and cryptographic ownership audit across all 64 land offices.",
    "hero.district": "District",
    "hero.upazila": "Upazila",
    "hero.mouza": "Mouza",
    "hero.daag": "Daag / Plot No",
    "hero.sampleDeed": "Sample: Deed SYN-D-0001 • Khatian 1187 (BS) • Seller SYN Rahim Uddin",
    "hero.scanQr": "Scan QR",
    "hero.verifyRecord": "Verify Record",

    // Parcel Ledger Peek
    "ledger.title": "Live Parcel Ledger Record",
    "ledger.verified": "Verified Clear Title",
    "ledger.dossier": "Full Inspection Dossier",
    "ledger.mouzaDaag": "Mouza / Daag",
    "ledger.plotClass": "Plot Class: Commercial",
    "ledger.khatianRef": "Khatian Reference",
    "ledger.jlNo": "JL No: 89",
    "ledger.sellerReg": "Seller Registry",
    "ledger.buyerReg": "Buyer Registry",
    "ledger.shareTransferred": "Share Transferred",
    "ledger.sellerBal": "Seller Bal: 0.2500",
    "ledger.instrumentCase": "Instrument & Case",

    // Key Metrics Grid
    "metrics.blockedTitle": "Double sales blocked",
    "metrics.blockedBadge": "+100% prevented",
    "metrics.blockedSub": "Real-time ledger collision lock",
    "metrics.deedsTitle": "Deeds sealed",
    "metrics.deedsBadge": "Tamper-proof",
    "metrics.deedsSub": "SHA-256 cryptographically audited",
    "metrics.mutationsTitle": "Mutations completed",
    "metrics.mutationsBadge": "Avg. 48 hrs",
    "metrics.mutationsSub": "Direct Sub-Registrar to AC Land sync",
    "metrics.officesTitle": "Offices connected",
    "metrics.officesBadge": "All Upazilas",
    "metrics.officesSub": "Complete national registry grid",

    // Workflow Section
    "workflow.tag": "Workflow",
    "workflow.title": "How it works",
    "workflow.description":
      "Every parcel transaction executes an immutable three-phase cryptographic settlement.",
    "workflow.step1Number": "Step 01",
    "workflow.step1Title": "Deed registered",
    "workflow.step1Desc":
      "Deed no. SYN-D-0001 logged with biometric verification at Savar Sub-Registry.",
    "workflow.step1Badge": "Pass",
    "workflow.step2Number": "Step 02",
    "workflow.step2Title": "Share locked",
    "workflow.step2Desc":
      "Share 0.2500 (4 anna) locked in real-time ledger against unauthorized resale.",
    "workflow.step2Badge": "Secure",
    "workflow.step3Number": "Step 03",
    "workflow.step3Title": "Mutation approved",
    "workflow.step3Desc":
      "Case MUT-2026-000001 signed at Savar AC Land Office; new Khatian generated.",
    "workflow.step3Badge": "Approved",

    // Ecosystem Value Grid
    "ecosystem.tag": "Continuous Ecosystem Stream",
    "ecosystem.tagPaused": "Paused on Hover",
    "ecosystem.title": "Institutional Ecosystem Value",
    "ecosystem.description":
      "Synchronized administrative access across public citizens, revenue officers, and judiciary bodies. Hover any card to pause stream.",
    "ecosystem.citizenRole": "Citizen",
    "ecosystem.citizenDesc":
      "Verify ownership, seller share, and encumbrances before committing funds.",
    "ecosystem.citizenAction": "Citizen Portal",
    "ecosystem.subRegistrarRole": "Sub-Registrar",
    "ecosystem.subRegistrarDesc":
      "Prevent overlapping deeds with instant biometric and cadastral spatial validation.",
    "ecosystem.subRegistrarAction": "Registrar Pipeline",
    "ecosystem.acLandRole": "AC Land",
    "ecosystem.acLandDesc":
      "Process and update mutation records automatically without cumbersome paper delays.",
    "ecosystem.acLandAction": "Mutation Court",
    "ecosystem.bankCourtRole": "Bank & Court",
    "ecosystem.bankCourtDesc":
      "Query authentic mortgage liens and freeze disputed land parcels with judicial permanence.",
    "ecosystem.bankCourtAction": "Institutional Access",

    // Auth & Login Screen (Part 02)
    "auth.badge": "Tamper-Proof Ledger Node",
    "auth.securityTitle": "Sovereign Land Registry Ledger",
    "auth.securityDesc":
      "Cryptographically secure cadastral title verification and tamper-proof deed authentication across Savar Sub-Registry and Savar AC Land Office.",
    "auth.feat1Title": "Cadastral Geo-Indexing",
    "auth.feat1Desc": "Real-time parcel alignment across Mouza SYN-Savar, Daag 452/1.",
    "auth.feat2Title": "Biometric & NID Escrow",
    "auth.feat2Desc": "Instant ownership lock preventing dual conveyance.",
    "auth.feat3Title": "Zero-Knowledge Ledgers",
    "auth.feat3Desc": "Inter-departmental reconciliation with immutable SHA-256 seals.",
    "auth.nodeStatus": "Official Gov Ledger Protocol Node #84 Online",
    "auth.nodeVersion": "v4.19-SYN",
    "auth.tabLogin": "Login",
    "auth.tabRegister": "Register",
    "auth.rolePresetLabel": "Quick Role Preset",
    "auth.roleCitizen": "Citizen",
    "auth.roleSubRegistrar": "Sub-Registrar",
    "auth.roleAcLand": "AC Land",
    "auth.roleBank": "Bank / Court",
    "auth.roleAdmin": "Admin",
    "auth.emailLabel": "Cadastral Email or Citizen ID",
    "auth.officialPortal": "Official Portal",
    "auth.emailPlaceholder": "citizen@bhumisync.gov.bd",
    "auth.passwordLabel": "Cryptographic Password",
    "auth.passwordPlaceholder": "Enter cryptographic passphrase",
    "auth.forgotPassword": "Forgot password?",
    "auth.rememberSession": "Remember device session (24h)",
    "auth.shaValid": "SHA-256 Valid",
    "auth.signInBtn": "Sign In to BhumiSync",
    "auth.signingIn": "Verifying Cryptographic Credentials...",
    "auth.fullNameLabel": "Full Name",
    "auth.fullNamePlaceholder": "SYN Rahim Uddin",
    "auth.phoneLabel": "Phone Number",
    "auth.phonePlaceholder": "+880 1700-000000",
    "auth.nidLabel": "National ID (NID) Escrow ID",
    "auth.nidPlaceholder": "SYN-NID-A10021",
    "auth.citizenEmailLabel": "Citizen Email Address",
    "auth.citizenEmailPlaceholder": "user@example.com",
    "auth.passphraseLabel": "Security Passphrase",
    "auth.passphrasePlaceholder": "Create strong passphrase",
    "auth.registerBtn": "Submit Land Ledger Enrolment",
    "auth.submitting": "Creating Immutable Citizen Account...",
    "auth.staffNotice":
      "Staff accounts are created by the administrator. Sub-Registrars and AC Land Officers should use institutional credentials.",
    "auth.loginSuccess": "Authenticated successfully. Redirecting to portal...",
    "auth.registerSuccess": "Citizen enrolment complete! You can now log in.",

    // Footer
    "footer.rights": "© 2026 BhumiSync Technologies. All rights reserved.",
    "footer.operational": "All nodes operational",
  },

  bn: {
    // Brand & System
    "brand.name": "ভূমি",
    "brand.tagline": "ভূমি রেজিস্ট্রি ব্যবস্থা",
    "brand.live": "লাইভ সংযোগ",

    // Navigation
    "nav.overview": "সারসংক্ষেপ",
    "nav.howItWorks": "কার্যপদ্ধতি",
    "nav.verifyLand": "জমি যাচাই",
    "nav.qrVerification": "কিউআর যাচাই",
    "nav.accessPortal": "পোর্টাল লগইন",

    // Hero Section
    "hero.badge": "বিকেন্দ্রীভূত ভূমি লেজার",
    "hero.titlePre": "জমি কেনার আগে",
    "hero.titleHighlight": "যাচাই করুন",
    "hero.description":
      "দেশের ৬৪টি ভূমি অফিসের সাথে সরাসরি সংযুক্ত ক্যাডাস্ট্রাল দলিল ও স্বত্বাধিকারের তাৎক্ষণিক ডিজিটাল যাচাইকরণ।",
    "hero.district": "জেলা",
    "hero.upazila": "উপজেলা",
    "hero.mouza": "মৌজা",
    "hero.daag": "দাগ নম্বর",
    "hero.sampleDeed": "নমুনা: দলিল SYN-D-0001 • খতিয়ান ১১৮৭ (বিএস) • বিক্রেতা রহিম উদ্দিন",
    "hero.scanQr": "কিউআর স্ক্যান",
    "hero.verifyRecord": "রেকর্ড যাচাই",

    // Parcel Ledger Peek
    "ledger.title": "লাইভ খতিয়ান ও দলিল রেকর্ড",
    "ledger.verified": "যাচাইকৃত নিষ্কণ্টক স্বত্ব",
    "ledger.dossier": "সম্পূর্ণ পরিদর্শন ডসিয়ার",
    "ledger.mouzaDaag": "মৌজা / দাগ",
    "ledger.plotClass": "জমির শ্রেণি: বাণিজ্যিক",
    "ledger.khatianRef": "খতিয়ান নম্বর",
    "ledger.jlNo": "জে.এল নম্বর: ৮৯",
    "ledger.sellerReg": "নিবন্ধিত বিক্রেতা",
    "ledger.buyerReg": "নিবন্ধিত ক্রেতা",
    "ledger.shareTransferred": "হস্তান্তরিত হিস্যা",
    "ledger.sellerBal": "অবশিষ্ট হিস্যা: ০.২৫০০",
    "ledger.instrumentCase": "দলিল ও নামজারি কেস",

    // Key Metrics Grid
    "metrics.blockedTitle": "দ্বৈত বিক্রি প্রতিহত",
    "metrics.blockedBadge": "+১০০% সুরক্ষিত",
    "metrics.blockedSub": "রিয়েল-টাইম লেজার সংঘর্ষ লক",
    "metrics.deedsTitle": "নিবন্ধিত দলিল",
    "metrics.deedsBadge": "অপরিবর্তনীয়",
    "metrics.deedsSub": "ক্রিপ্টোগ্রাফিক ডিজিটাল সিলযুক্ত",
    "metrics.mutationsTitle": "সম্পন্ন নামজারি",
    "metrics.mutationsBadge": "গড় ৪৮ ঘণ্টা",
    "metrics.mutationsSub": "সাব-রেজিস্ট্রার ও এসি ল্যান্ড সরাসরি সমন্বয়",
    "metrics.officesTitle": "সংযুক্ত ভূমি অফিস",
    "metrics.officesBadge": "সকল উপজেলা",
    "metrics.officesSub": "সারাদেশের সমন্বিত নেটওয়ার্ক",

    // Workflow Section
    "workflow.tag": "কার্যপদ্ধতি",
    "workflow.title": "এটি কীভাবে কাজ করে",
    "workflow.description":
      "প্রতিটি ভূমি লেনদেন অপরিবর্তনীয় তিন-ধাপ বিশিষ্ট ডিজিটাল নিরাপত্তা ব্যবস্থায় সম্পাদিত হয়।",
    "workflow.step1Number": "ধাপ ০১",
    "workflow.step1Title": "দলিল নিবন্ধন",
    "workflow.step1Desc":
      "বায়োমেট্রিক ও জাতীয় পরিচয়পত্র যাচাই সাপেক্ষে সাব-রেজিস্ট্রার অফিসে দলিল নিবন্ধিত হয়।",
    "workflow.step1Badge": "উত্তীর্ণ",
    "workflow.step2Number": "ধাপ ০২",
    "workflow.step2Title": "হিস্যা লক",
    "workflow.step2Desc":
      "বিক্রিত অংশের হিস্যা স্বয়ংক্রিয়ভাবে লেজারে লক হয়ে যায় যাতে পুনরায় বিক্রি সম্ভব না হয়।",
    "workflow.step2Badge": "সুরক্ষিত",
    "workflow.step3Number": "ধাপ ০৩",
    "workflow.step3Title": "স্বয়ংক্রিয় নামজারি",
    "workflow.step3Desc":
      "এসি ল্যান্ড অফিসে নামজারি কেস অনুমোদিত হয়ে নতুন ডিজিটাল খতিয়ান সৃষ্টি হয়।",
    "workflow.step3Badge": "অনুমোদিত",

    // Ecosystem Value Grid
    "ecosystem.tag": "সমন্বিত সেবা প্রবাহ",
    "ecosystem.tagPaused": "স্থগিত",
    "ecosystem.title": "প্রাতিষ্ঠানিক ইকোসিস্টেম সেবা",
    "ecosystem.description":
      "সাধারণ নাগরিক, রাজস্ব কর্মকর্তা এবং বিচারিক প্রতিষ্ঠানের মধ্যে সমন্বিত ও স্বচ্ছ সেবা। যে কোনো কার্ডে হোভার করে থামান।",
    "ecosystem.citizenRole": "নাগরিক",
    "ecosystem.citizenDesc":
      "অর্থ প্রদানের পূর্বে জমির সঠিক মালিকানা, বিক্রেতার অংশ ও দায়মুক্ততা নিশ্চিত করুন।",
    "ecosystem.citizenAction": "সিটিজেন পোর্টাল",
    "ecosystem.subRegistrarRole": "সাব-রেজিস্ট্রার",
    "ecosystem.subRegistrarDesc":
      "তাৎক্ষণিক বায়োমেট্রিক ও ভৌগোলিক যাচাইয়ের মাধ্যমে জাল দলিল রোধ করুন।",
    "ecosystem.subRegistrarAction": "রেজিস্ট্রার পাইপলাইন",
    "ecosystem.acLandRole": "সহকারী কমিশনার (ভূমি)",
    "ecosystem.acLandDesc":
      "কাগুজে জটিলতা ছাড়াই সরাসরি ডিজিটাল দলিল থেকে দ্রুত নামজারি খতিয়ান প্রণয়ন।",
    "ecosystem.acLandAction": "নামজারি আদালত",
    "ecosystem.bankCourtRole": "ব্যাংক ও আদালত",
    "ecosystem.bankCourtDesc":
      "বন্ধকী ঋণের তথ্য যাচাই এবং বিরোধপূর্ণ জমিতে আদালতের নিষেধাজ্ঞা জারি।",
    "ecosystem.bankCourtAction": "প্রাতিষ্ঠানিক প্রবেশ",

    // Auth & Login Screen (Part 02)
    "auth.badge": "ট্যাম্পার-প্রুফ লেজার নোড",
    "auth.securityTitle": "সার্বভৌম ভূমি রেজিস্ট্রি লেজার",
    "auth.securityDesc":
      "সাভার সাব-রেজিস্ট্রি এবং সাভার সহকারী কমিশনার (ভূমি) অফিসের মধ্যে ক্রিপ্টোগ্রাফিকভাবে সুরক্ষিত দলিল ও স্বত্ব যাচাইকরণ ব্যবস্থা।",
    "auth.feat1Title": "ক্যাডাস্ট্রাল জিও-ইনডেক্সিং",
    "auth.feat1Desc": "মৌজা সিন-সাভার, দাগ ৪৫২/১-এর রিয়েল-টাইম মানচিত্র ও সীমানা সমন্বয়।",
    "auth.feat2Title": "বায়োমেট্রিক ও এনআইডি এসক্রো",
    "auth.feat2Desc": "তাৎক্ষণিক মালিকানা লক যা একই জমির একাধিক বিক্রি প্রতিহত করে।",
    "auth.feat3Title": "জিরো-নলেজ লেজার",
    "auth.feat3Desc": "অপরিবর্তনীয় এসএইচএ-২৫৬ সিল সহ আন্তঃবিভাগীয় স্বয়ংক্রিয় সমন্বয়।",
    "auth.nodeStatus": "অফিসিয়াল সরকারি লেজার প্রোটোকল নোড #৮৪ সক্রিয়",
    "auth.nodeVersion": "ভার্সন ৪.১৯-এসওয়াইএন",
    "auth.tabLogin": "লগইন",
    "auth.tabRegister": "নিবন্ধন",
    "auth.rolePresetLabel": "ভূমিকা নির্বাচন",
    "auth.roleCitizen": "নাগরিক",
    "auth.roleSubRegistrar": "সাব-রেজিস্ট্রার",
    "auth.roleAcLand": "সহকারী কমিশনার (ভূমি)",
    "auth.roleBank": "ব্যাংক / আদালত",
    "auth.roleAdmin": "প্রশাসক",
    "auth.emailLabel": "ক্যাডাস্ট্রাল ইমেইল বা নাগরিক এনআইডি",
    "auth.officialPortal": "অফিসিয়াল পোর্টাল",
    "auth.emailPlaceholder": "citizen@bhumisync.gov.bd",
    "auth.passwordLabel": "ক্রিপ্টোগ্রাফিক পাসওয়ার্ড",
    "auth.passwordPlaceholder": "নিরাপদ পাসফ্রেজ লিখুন",
    "auth.forgotPassword": "পাসওয়ার্ড ভুলে গেছেন?",
    "auth.rememberSession": "ডিভাইস সেশন মনে রাখুন (২৪ ঘণ্টা)",
    "auth.shaValid": "এসএইচএ-২৫৬ যাচাইকৃত",
    "auth.signInBtn": "ভূমি সিঙ্কে প্রবেশ করুন",
    "auth.signingIn": "ক্রিপ্টোগ্রাফিক প্রমাণপত্র যাচাই হচ্ছে...",
    "auth.fullNameLabel": "পূর্ণ নাম",
    "auth.fullNamePlaceholder": "রহিম উদ্দিন",
    "auth.phoneLabel": "মোবাইল নম্বর",
    "auth.phonePlaceholder": "+৮৮০ ১৭০০-০০০০০০",
    "auth.nidLabel": "জাতীয় পরিচয়পত্র (এনআইডি) নম্বর",
    "auth.nidPlaceholder": "SYN-NID-A10021",
    "auth.citizenEmailLabel": "নাগরিক ইমেইল ঠিকানা",
    "auth.citizenEmailPlaceholder": "citizen@example.com",
    "auth.passphraseLabel": "নিরাপত্তা পাসফ্রেজ",
    "auth.passphrasePlaceholder": "শক্তিশালী পাসফ্রেজ তৈরি করুন",
    "auth.registerBtn": "ভূমি লেজার নিবন্ধন জমা দিন",
    "auth.submitting": "নাগরিক অ্যাকাউন্ট তৈরি হচ্ছে...",
    "auth.staffNotice":
      "কর্মকর্তা অ্যাকাউন্টগুলো প্রশাসক দ্বারা তৈরি করা হয়। সাব-রেজিস্ট্রার ও সহকারী কমিশনার (ভূমি) কর্মকর্তাদের প্রাতিষ্ঠানিক তথ্য ব্যবহার করতে হবে।",
    "auth.loginSuccess": "প্রমাণপত্র সফলভাবে যাচাই হয়েছে। পোর্টালে পাঠানো হচ্ছে...",
    "auth.registerSuccess": "নাগরিক নিবন্ধন সম্পন্ন হয়েছে! এখন লগইন করতে পারেন।",

    // Footer
    "footer.rights": "© ২০২৬ ভূমি সিঙ্ক টেকনোলজিস। সর্বস্বত্ব সংরক্ষিত।",
    "footer.operational": "সকল সিস্টেম সক্রিয়",
  },
};
