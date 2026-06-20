"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Waves,
  TreePine,
  Camera,
  Tent,
  Baby,
  UtensilsCrossed,
  Clock,
  Ticket,
  MapPin,
  Star,
  ChevronDown,
  ArrowUp,
  Menu,
  X,
  Phone,
  Navigation,
  Droplets,
  Mountain,
  Sparkles,
  Heart,
  AtSign,
  Globe,
  MapPinned,
  Car,
  CreditCard,
  Coffee,
  ShieldCheck,
  Wifi,
  HelpCircle,
} from "lucide-react";
import "./melung.css";

/* ---------- Animation variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

/* ---------- Section Wrapper ---------- */
function AnimatedSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      {children}
    </motion.section>
  );
}

/* ---------- Feature Data ---------- */
const features = [
  {
    icon: <Waves size={32} />,
    iconClass: "pool",
    title: "Kolam Renang Alami",
    desc: "Kolam renang ikonik di tengah sawah terasering dengan air jernih langsung dari mata air pegunungan Gunung Slamet — tanpa kaporit!",
  },
  {
    icon: <TreePine size={32} />,
    iconClass: "nature",
    title: "Pemandangan Alam",
    desc: "Hamparan sawah hijau dengan latar pegunungan yang memukau. Udara sejuk khas dataran tinggi di ketinggian 400-500 mdpl.",
  },
  {
    icon: <Camera size={32} />,
    iconClass: "photo",
    title: "Spot Foto Instagramable",
    desc: "Selfie deck di atas sawah, Jembatan Manggis, dan berbagai area swafoto yang siap mempercantik feed Instagram Anda.",
  },
  {
    icon: <Tent size={32} />,
    iconClass: "camp",
    title: "Camping Ground",
    desc: "Area berkemah yang nyaman di tengah alam. Bangun pagi dengan pemandangan pegunungan dan suara alami pedesaan.",
  },
  {
    icon: <Baby size={32} />,
    iconClass: "play",
    title: "Area Bermain Anak",
    desc: "Playground yang aman dan menyenangkan untuk anak-anak, dilengkapi area ciblon (bermain air) di kali kecil yang segar.",
  },
  {
    icon: <UtensilsCrossed size={32} />,
    iconClass: "food",
    title: "Kuliner Khas Banyumas",
    desc: "Warung kuliner dengan menu khas Banyumas — mendoan, nasi liwet, dan jajanan tradisional lainnya yang menggugah selera.",
  },
];

/* ---------- Gallery Data ---------- */
const gallery = [
  {
    src: "/wisata-1.jpeg",
    alt: "Gazebo bambu di pinggir sawah Pagubugan Melung",
    label: "Gazebo Bersantai",
    large: true,
  },
  {
    src: "/wisata-2.jpeg",
    alt: "Kolam renang alami di Pagubugan Melung",
    label: "Kolam Renang Alami",
  },
  {
    src: "/wisata-3.jpeg",
    alt: "Pemandangan kolam dan bukit di Pagubugan Melung",
    label: "Pemandangan Kolam",
  },
  {
    src: "/wisata-4.jpeg",
    alt: "Papan informasi fasilitas di Pagubugan Melung",
    label: "Papan Informasi",
  },
  {
    src: "/wisata-5.jpeg",
    alt: "Akses jalan setapak batu di pinggir aliran air",
    label: "Jalan Setapak",
  },
  {
    src: "/wisata-6.jpeg",
    alt: "Area bermain dan gazebo di Pagubugan Melung",
    label: "Area Bermain & Gazebo",
  },
];

/* ---------- Reviews Data ---------- */
const reviews = [
  {
    name: "Anisa Rahma",
    initial: "AR",
    date: "Mei 2026",
    text: "Tempatnya sangat indah dan menyejukkan! Kolam renangnya bersih banget, airnya langsung dari mata air pegunungan. Anak-anak senang banget bermain di sini.",
    stars: 5,
  },
  {
    name: "Budi Santoso",
    initial: "BS",
    date: "April 2026",
    text: "Hidden gem Banyumas! Pemandangan sawah terasering yang luar biasa. Harga tiket sangat terjangkau. Cocok untuk healing bareng keluarga di akhir pekan.",
    stars: 5,
  },
  {
    name: "Dian Puspita",
    initial: "DP",
    date: "April 2026",
    text: "Spot foto di sini keren banget. Jembatan Manggis dan selfie deck di atas sawah itu wajib dicoba. Makanan di warungnya juga enak, mendoannya juara!",
    stars: 5,
  },
  {
    name: "Rizky Firmansyah",
    initial: "RF",
    date: "Maret 2026",
    text: "Camping di sini pengalaman yang luar biasa. Bangun pagi dengan pemandangan Gunung Slamet yang megah. Udara sejuk, suasana tenang. Pasti balik lagi!",
    stars: 5,
  },
  {
    name: "Siti Nurhaliza",
    initial: "SN",
    date: "Maret 2026",
    text: "Datang sama teman-teman untuk ciblon di kali. Airnya segar banget! Fasilitas lengkap, ada toilet, ruang ganti, dan pendapa untuk istirahat.",
    stars: 4,
  },
  {
    name: "Andi Prasetyo",
    initial: "AP",
    date: "Februari 2026",
    text: "Akses jalan sudah bagus meskipun ada beberapa titik sempit. Setibanya di lokasi langsung terpukau dengan keindahannya. Worth it banget!",
    stars: 5,
  },
];

/* ---------- Particles (deterministic to avoid hydration mismatch) ---------- */
const PARTICLE_DATA = [
  { l: 5, t: 12, d: 0.2, dur: 7 }, { l: 15, t: 45, d: 1.5, dur: 9 }, { l: 25, t: 78, d: 3.0, dur: 8 },
  { l: 35, t: 23, d: 0.8, dur: 11 }, { l: 45, t: 56, d: 2.3, dur: 7.5 }, { l: 55, t: 89, d: 4.1, dur: 10 },
  { l: 65, t: 34, d: 1.2, dur: 8.5 }, { l: 75, t: 67, d: 5.5, dur: 9.5 }, { l: 85, t: 15, d: 3.7, dur: 7.2 },
  { l: 95, t: 42, d: 6.0, dur: 11.5 }, { l: 10, t: 58, d: 0.5, dur: 8.3 }, { l: 20, t: 81, d: 2.8, dur: 9.8 },
  { l: 30, t: 29, d: 7.2, dur: 7.8 }, { l: 40, t: 63, d: 4.5, dur: 10.2 }, { l: 50, t: 91, d: 1.8, dur: 8.7 },
  { l: 60, t: 18, d: 5.3, dur: 9.2 }, { l: 70, t: 47, d: 3.5, dur: 11.3 }, { l: 80, t: 72, d: 6.8, dur: 7.6 },
  { l: 90, t: 36, d: 0.9, dur: 10.5 }, { l: 8, t: 55, d: 2.1, dur: 8.9 }, { l: 18, t: 84, d: 4.8, dur: 9.4 },
  { l: 28, t: 41, d: 7.5, dur: 7.3 }, { l: 38, t: 69, d: 1.6, dur: 10.8 }, { l: 48, t: 22, d: 5.9, dur: 8.1 },
  { l: 58, t: 53, d: 3.2, dur: 11.1 }, { l: 68, t: 87, d: 0.4, dur: 9.6 }, { l: 78, t: 31, d: 6.3, dur: 7.9 },
  { l: 88, t: 64, d: 2.6, dur: 10.3 }, { l: 3, t: 76, d: 4.2, dur: 8.6 }, { l: 98, t: 49, d: 7.8, dur: 9.1 },
];

function Particles() {
  return (
    <div className="melung-hero-particles">
      {PARTICLE_DATA.map((p, i) => (
        <div
          key={i}
          className="melung-particle"
          style={{
            left: `${p.l}%`,
            top: `${p.t}%`,
            animationDelay: `${p.d}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Fasilitas Data ---------- */
const amenities = [
  { icon: <Waves size={24} />, title: "Kolam Renang Alami", desc: "Air jernih dan segar langsung dari pegunungan" },
  { icon: <Mountain size={24} />, title: "Gazebo", desc: "Tempat bersantai nyaman menikmati pemandangan" },
  { icon: <Tent size={24} />, title: "Area Kemping", desc: "Spot mendirikan tenda yang asri dan tenang" },
  { icon: <Droplets size={24} />, title: "Toilet / Kamar Bilas", desc: "Fasilitas bersih dengan air yang mengalir deras" },
  { icon: <UtensilsCrossed size={24} />, title: "Warung Makan Lokal", desc: "Menyediakan mendoan hangat & kuliner khas" },
];

/* ---------- FAQ Data ---------- */
const faqs = [
  { q: "Apakah kolam renangnya menggunakan kaporit?", a: "Tidak, air kolam kami 100% alami dan mengalir langsung dari mata air pegunungan Gunung Slamet sehingga bebas bahan kimia kimia, tidak pedih di mata, dan sangat menyegarkan." },
  { q: "Apakah akses jalan aman untuk kendaraan roda empat (mobil)?", a: "Ya, akses jalan sudah beraspal dan bisa dilewati mobil. Namun, di beberapa titik jalan cukup sempit dan menanjak, sehingga pengemudi disarankan berhati-hati saat berpapasan dengan kendaraan lain." },
  { q: "Apakah diperbolehkan membawa makanan dari luar?", a: "Pengunjung diperbolehkan membawa bekal dari luar, namun kami sangat mengimbau untuk selalu menjaga kebersihan dengan membuang sampah pada tempatnya. Kami juga memiliki warung yang menyediakan ragam kuliner lokal yang patut Anda coba!" },
  { q: "Bagaimana cara menyewa perlengkapan camping?", a: "Anda bisa langsung menghubungi kontak resmi (WhatsApp/Instagram) kami yang tertera di bagian bawah halaman ini untuk melakukan reservasi spot camping maupun penyewaan tenda." }
];

/* ---------- FAQ Item Component ---------- */
function FaqAccordion({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className={`melung-faq-item ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ y: -2 }}
    >
      <div className="melung-faq-question">
        <h4>{q}</h4>
        <div className="melung-faq-icon">
          <ChevronDown size={20} />
        </div>
      </div>
      <div className="melung-faq-answer">
        <p>{a}</p>
      </div>
    </motion.div>
  );
}

/* ============================================
   MAIN PAGE COMPONENT
   ============================================ */
export default function WisataMelungPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="melung-page">
      {/* ===== NAVBAR ===== */}
      <nav className={`melung-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="melung-navbar-inner">
          <a href="#" className="melung-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="melung-logo-icon">🌿</div>
            <div className="melung-logo-text">
              Pagubugan <span>Melung</span>
            </div>
          </a>

          <ul className="melung-nav-links">
            <li><a href="#highlights" onClick={(e) => { e.preventDefault(); scrollToSection("highlights"); }}>Highlights</a></li>
            <li><a href="#galeri" onClick={(e) => { e.preventDefault(); scrollToSection("galeri"); }}>Galeri</a></li>
            <li><a href="#tentang" onClick={(e) => { e.preventDefault(); scrollToSection("tentang"); }}>Tentang</a></li>
            <li><a href="#info" onClick={(e) => { e.preventDefault(); scrollToSection("info"); }}>Info</a></li>
            <li><a href="#fasilitas" onClick={(e) => { e.preventDefault(); scrollToSection("fasilitas"); }}>Fasilitas</a></li>
            <li><a href="#ulasan" onClick={(e) => { e.preventDefault(); scrollToSection("ulasan"); }}>Ulasan</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection("faq"); }}>FAQ</a></li>
            <li>
              <a href="#lokasi" className="melung-nav-cta" onClick={(e) => { e.preventDefault(); scrollToSection("lokasi"); }}>
                <MapPin size={16} /> Lokasi
              </a>
            </li>
          </ul>

          <button className="melung-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <div className={`melung-mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#highlights" onClick={(e) => { e.preventDefault(); scrollToSection("highlights"); }}>Highlights</a>
        <a href="#galeri" onClick={(e) => { e.preventDefault(); scrollToSection("galeri"); }}>Galeri</a>
        <a href="#tentang" onClick={(e) => { e.preventDefault(); scrollToSection("tentang"); }}>Tentang</a>
        <a href="#info" onClick={(e) => { e.preventDefault(); scrollToSection("info"); }}>Info</a>
        <a href="#fasilitas" onClick={(e) => { e.preventDefault(); scrollToSection("fasilitas"); }}>Fasilitas</a>
        <a href="#ulasan" onClick={(e) => { e.preventDefault(); scrollToSection("ulasan"); }}>Ulasan</a>
        <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection("faq"); }}>FAQ</a>
        <a href="#lokasi" onClick={(e) => { e.preventDefault(); scrollToSection("lokasi"); }}>Lokasi</a>
      </div>

      {/* ===== HERO ===== */}
      <section className="melung-hero" ref={heroRef}>
        <motion.div className="melung-hero-bg" style={{ y: heroY }}>
          <Image
            src="/wisata-1.jpeg"
            alt="Wisata Pagubugan Melung — Kolam renang alami di tengah sawah"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <div className="melung-hero-overlay" />
        <Particles />

        <motion.div
          className="melung-hero-content"
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.div
            className="melung-hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Sparkles size={16} />
            Desa Wisata Melung — Kaki Gunung Slamet
          </motion.div>

          <h1 className="melung-hero-title">
            Surga <span className="highlight">Tersembunyi</span> di Tengah Sawah
          </h1>

          <p className="melung-hero-subtitle">
            Rasakan kesegaran kolam renang alami di tengah hamparan sawah terasering
            dengan air jernih dari mata air pegunungan Gunung Slamet.
          </p>

          <div className="melung-hero-actions">
            <motion.a
              href="#highlights"
              className="melung-btn-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection("highlights"); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={18} />
              Jelajahi Sekarang
            </motion.a>
            <motion.a
              href="#lokasi"
              className="melung-btn-secondary"
              onClick={(e) => { e.preventDefault(); scrollToSection("lokasi"); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navigation size={18} />
              Lihat Lokasi
            </motion.a>
          </div>

          <div className="melung-hero-stats">
            <div className="melung-hero-stat">
              <span className="melung-hero-stat-value">400+</span>
              <span className="melung-hero-stat-label">Meter dpl</span>
            </div>
            <div className="melung-hero-stat">
              <span className="melung-hero-stat-value">12K</span>
              <span className="melung-hero-stat-label">Harga Tiket (IDR)</span>
            </div>
            <div className="melung-hero-stat">
              <span className="melung-hero-stat-value">4.8</span>
              <span className="melung-hero-stat-label">Rating Pengunjung</span>
            </div>
            <div className="melung-hero-stat">
              <span className="melung-hero-stat-value">100%</span>
              <span className="melung-hero-stat-label">Air Alami</span>
            </div>
          </div>
        </motion.div>

      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <AnimatedSection className="melung-section" id="highlights">
        <div className="melung-section-header">
          <motion.div className="melung-section-label" variants={fadeUp} custom={0}>
            <Heart size={14} /> DAYA TARIK
          </motion.div>
          <motion.h2 className="melung-section-title" variants={fadeUp} custom={1}>
            Keistimewaan yang<br />Menanti Anda
          </motion.h2>
          <motion.p className="melung-section-desc" variants={fadeUp} custom={2}>
            Nikmati berbagai aktivitas seru di tengah keindahan alam Desa Melung
            yang masih alami dan terjaga kelestariannya.
          </motion.p>
        </div>

        <div className="melung-features-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="melung-feature-card"
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -8 }}
            >
              <div className={`melung-feature-icon ${f.iconClass}`}>{f.icon}</div>
              <h3 className="melung-feature-title">{f.title}</h3>
              <p className="melung-feature-desc">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ===== GALLERY ===== */}
      <AnimatedSection className="melung-gallery-section" id="galeri">
        <div className="melung-section-header">
          <motion.div className="melung-section-label" variants={fadeUp} custom={0}>
            <Camera size={14} /> GALERI
          </motion.div>
          <motion.h2 className="melung-section-title" variants={fadeUp} custom={1}>
            Keindahan yang<br />Tak Terlupakan
          </motion.h2>
          <motion.p className="melung-section-desc" variants={fadeUp} custom={2}>
            Setiap sudut Pagubugan Melung menawarkan pemandangan yang layak
            diabadikan. Intip pesonanya di sini!
          </motion.p>
        </div>

        <div className="melung-gallery-grid">
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              className={`melung-gallery-item ${g.large ? "large" : ""}`}
              variants={scaleIn}
              custom={i}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes={g.large ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                style={{ objectFit: "cover" }}
              />
              <div className="melung-gallery-overlay">
                <span className="melung-gallery-overlay-text">{g.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ===== ABOUT ===== */}
      <AnimatedSection className="melung-section melung-about" id="tentang">
        <div className="melung-about-grid">
          <motion.div className="melung-about-image" variants={fadeUp} custom={0}>
            <Image
              src="/wisata-2.jpeg"
              alt="Hamparan sawah terasering di Desa Melung"
              width={640}
              height={480}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
            <div className="melung-about-image-badge">
              <Mountain size={20} />
              <span>Kaki Gunung Slamet</span>
            </div>
          </motion.div>

          <motion.div className="melung-about-content" variants={fadeUp} custom={1}>
            <div className="melung-section-label">
              <TreePine size={14} /> TENTANG KAMI
            </div>
            <h2>
              Desa Wisata Melung,<br />
              <span style={{ color: "var(--melung-emerald)" }}>Permata Banyumas</span>
            </h2>
            <p>
              Pagubugan Melung adalah destinasi wisata alam yang terletak di Desa Melung,
              Kecamatan Kedungbanteng, Kabupaten Banyumas, Jawa Tengah. Berada di kaki
              Gunung Slamet pada ketinggian sekitar 400–500 meter di atas permukaan laut,
              tempat ini menawarkan suasana pedesaan yang asri, sejuk, dan damai.
            </p>
            <p>
              Daya tarik utamanya adalah kolam renang alami yang terletak di tengah area
              persawahan terasering. Air kolam berasal langsung dari mata air pegunungan
              (tuk) sehingga tetap bersih dan segar tanpa menggunakan kaporit. Nikmati
              keindahan alam Jawa Tengah yang autentik!
            </p>

            <div className="melung-about-features">
              <div className="melung-about-feature">
                <Droplets size={18} />
                <span>Air Alami Pegunungan</span>
              </div>
              <div className="melung-about-feature">
                <Mountain size={18} />
                <span>400–500 mdpl</span>
              </div>
              <div className="melung-about-feature">
                <TreePine size={18} />
                <span>Alam Terjaga</span>
              </div>
              <div className="melung-about-feature">
                <Heart size={18} />
                <span>Ramah Keluarga</span>
              </div>
            </div>

            <motion.a
              href="#lokasi"
              className="melung-btn-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection("lokasi"); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: "inline-flex" }}
            >
              <Navigation size={18} />
              Petunjuk Arah
            </motion.a>
          </motion.div>
        </div>

        {/* Video Dokumenter */}
        <motion.div variants={fadeUp} custom={2} style={{ marginTop: 80, textAlign: "center" }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, color: "var(--melung-text)" }}>
            Silakan Lihat Film Dokumenter Kami
          </h3>
          <p style={{ color: "var(--melung-text-muted)", marginBottom: 32, fontSize: 16 }}>
            Kenali lebih dekat pesona alam, budaya, dan keseruan yang ada di Desa Wisata Pagubugan Melung.
          </p>
          <div className="melung-video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jGRqIEgB5eY?si=N8TvuK6ZbfHg3QHR"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* ===== INFO CARDS ===== */}
      <AnimatedSection className="melung-section melung-info-section" id="info">
        <div className="melung-section-header">
          <motion.div className="melung-section-label" variants={fadeUp} custom={0}>
            <Ticket size={14} /> INFORMASI
          </motion.div>
          <motion.h2 className="melung-section-title" variants={fadeUp} custom={1}>
            Info Kunjungan
          </motion.h2>
          <motion.p className="melung-section-desc" variants={fadeUp} custom={2}>
            Semua yang perlu Anda ketahui sebelum berkunjung ke Pagubugan Melung.
          </motion.p>
        </div>

        <div className="melung-info-grid">
          <motion.div className="melung-info-card" variants={scaleIn} custom={0} whileHover={{ y: -6 }}>
            <div className="melung-info-card-icon time">
              <Clock size={26} />
            </div>
            <h3>Jam Operasional</h3>
            <p style={{ fontSize: 28, fontWeight: 800, color: "var(--melung-primary)", margin: "8px 0" }}>
              07.30 — 16.00
            </p>
            <p>WIB • Buka Setiap Hari</p>
            <p style={{ marginTop: 8, fontSize: 13, color: "var(--melung-text-muted)" }}>
              Waktu terbaik: 09.00–14.00 WIB
            </p>
          </motion.div>

          <motion.div className="melung-info-card" variants={scaleIn} custom={1} whileHover={{ y: -6 }}>
            <div className="melung-info-card-icon ticket">
              <Ticket size={26} />
            </div>
            <h3>Tiket Masuk</h3>
            <p className="price-tag">Rp12.000</p>
            <p>Per Orang</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 12 }}>
              <CreditCard size={16} style={{ color: "var(--melung-text-muted)" }} />
              <span style={{ fontSize: 13, color: "var(--melung-text-muted)" }}>
                Tunai & QRIS
              </span>
            </div>
          </motion.div>

          <motion.div className="melung-info-card" variants={scaleIn} custom={2} whileHover={{ y: -6 }}>
            <div className="melung-info-card-icon location">
              <Car size={26} />
            </div>
            <h3>Aksesibilitas</h3>
            <p style={{ fontSize: 28, fontWeight: 800, color: "var(--melung-primary)", margin: "8px 0" }}>
              ~30 Menit
            </p>
            <p>Dari Pusat Kota Purwokerto</p>
            <p style={{ marginTop: 8, fontSize: 13, color: "var(--melung-text-muted)" }}>
              Jarak ±10–15 km, jalan beraspal
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ===== FASILITAS ===== */}
      <AnimatedSection className="melung-section melung-amenities-section" id="fasilitas">
        <div className="melung-section-header">
          <motion.div className="melung-section-label" variants={fadeUp} custom={0}>
            <Coffee size={14} /> FASILITAS
          </motion.div>
          <motion.h2 className="melung-section-title" variants={fadeUp} custom={1}>
            Fasilitas Lengkap
          </motion.h2>
          <motion.p className="melung-section-desc" variants={fadeUp} custom={2}>
            Demi kenyamanan pengunjung, Pagubugan Melung telah dilengkapi
            dengan berbagai fasilitas penunjang yang memadai.
          </motion.p>
        </div>

        <div className="melung-amenities-grid">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              className="melung-amenity-card"
              variants={scaleIn}
              custom={i}
            >
              <div className="melung-amenity-icon">
                {item.icon}
              </div>
              <div className="melung-amenity-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ===== REVIEWS ===== */}
      <AnimatedSection className="melung-section melung-reviews-section" id="ulasan">
        <div className="melung-section-header">
          <motion.div className="melung-section-label" variants={fadeUp} custom={0}>
            <Star size={14} /> ULASAN
          </motion.div>
          <motion.h2 className="melung-section-title" variants={fadeUp} custom={1}>
            Kata Mereka tentang<br />Pagubugan Melung
          </motion.h2>
          <motion.p className="melung-section-desc" variants={fadeUp} custom={2}>
            Pengalaman nyata dari pengunjung yang telah merasakan keindahan
            dan kenyamanan wisata Pagubugan Melung.
          </motion.p>
        </div>

        <div className="melung-reviews-grid">
          {reviews.map((r, i) => (
            <motion.div key={i} className="melung-review-card" variants={scaleIn} custom={i} whileHover={{ y: -4 }}>
              <div className="melung-review-stars">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={16} />
                ))}
              </div>
              <p className="melung-review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="melung-review-author">
                <div className="melung-review-avatar">{r.initial}</div>
                <div>
                  <div className="melung-review-name">{r.name}</div>
                  <div className="melung-review-date">{r.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ===== FAQ ===== */}
      <AnimatedSection className="melung-section melung-faq-section" id="faq">
        <div className="melung-section-header">
          <motion.div className="melung-section-label" variants={fadeUp} custom={0}>
            <HelpCircle size={14} /> FAQ
          </motion.div>
          <motion.h2 className="melung-section-title" variants={fadeUp} custom={1}>
            Pertanyaan Umum
          </motion.h2>
          <motion.p className="melung-section-desc" variants={fadeUp} custom={2}>
            Temukan jawaban untuk pertanyaan yang sering diajukan oleh
            pengunjung sebelum datang ke Pagubugan Melung.
          </motion.p>
        </div>

        <div className="melung-faq-container">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <FaqAccordion q={faq.q} a={faq.a} />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ===== MAP ===== */}
      <AnimatedSection className="melung-section melung-map-section" id="lokasi">
        <div className="melung-map-container">
          <motion.div className="melung-map-frame" variants={fadeUp} custom={0}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1806539653844!2d109.20513687357344!3d-7.333598292674819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ff53f21362edd%3A0xb3deeb8d6c37ef9d!2sWisata%20Pagubugan%20Melung!5e0!3m2!1sid!2sid!4v1781592913278!5m2!1sid!2sid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Pagubugan Melung"
            />
          </motion.div>

          <motion.div className="melung-map-info" variants={fadeUp} custom={1}>
            <div className="melung-section-label">
              <MapPinned size={14} /> LOKASI
            </div>
            <h2>
              Cara Menuju<br />
              <span style={{ color: "var(--melung-emerald)" }}>Pagubugan Melung</span>
            </h2>
            <p>
              Terletak di Desa Melung, Kecamatan Kedungbanteng, Kabupaten Banyumas.
              Hanya sekitar 30 menit perjalanan dari pusat Kota Purwokerto.
            </p>

            <div className="melung-map-detail">
              <div className="melung-map-detail-icon">
                <MapPin size={20} />
              </div>
              <div className="melung-map-detail-text">
                <h4>Alamat Lengkap</h4>
                <p>
                  M684+HX7, Dusun III, Melung, Kec. Kedungbanteng, Kabupaten Banyumas,
                  Jawa Tengah 53152, Indonesia
                </p>
              </div>
            </div>

            <div className="melung-map-detail">
              <div className="melung-map-detail-icon">
                <Car size={20} />
              </div>
              <div className="melung-map-detail-text">
                <h4>Jarak Tempuh</h4>
                <p>±10–15 km dari Purwokerto (~30 menit via kendaraan bermotor)</p>
              </div>
            </div>

            <div className="melung-map-detail">
              <div className="melung-map-detail-icon">
                <Navigation size={20} />
              </div>
              <div className="melung-map-detail-text">
                <h4>Kondisi Jalan</h4>
                <p>Jalur beraspal, beberapa titik jalan cukup sempit dengan medan perbukitan</p>
              </div>
            </div>

            <div className="melung-map-detail">
              <div className="melung-map-detail-icon">
                <Phone size={20} />
              </div>
              <div className="melung-map-detail-text">
                <h4>Kontak</h4>
                <p>Instagram: @pagubugan_melung</p>
              </div>
            </div>

            <motion.a
              href="https://www.google.com/maps/search/Pagubugan+Melung"
              target="_blank"
              rel="noopener noreferrer"
              className="melung-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: "inline-flex", marginTop: 20 }}
            >
              <Navigation size={18} />
              Buka di Google Maps
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ===== CTA ===== */}
      <section className="melung-cta-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Siap untuk Petualangan?</h2>
          <p>
            Ajak keluarga & sahabat menikmati kesejukan alam Pagubugan Melung. Hanya Rp12.000 per orang!
          </p>
          <motion.a
            href="https://www.google.com/maps/search/Pagubugan+Melung"
            target="_blank"
            rel="noopener noreferrer"
            className="melung-btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin size={20} />
            Kunjungi Sekarang
          </motion.a>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="melung-footer">
        <div className="melung-footer-inner">
          <div className="melung-footer-grid">
            <div className="melung-footer-brand">
              <h3>
                Pagubugan <span>Melung</span>
              </h3>
              <p>
                Destinasi wisata alam terbaik di Banyumas. Kolam renang alami di tengah
                sawah terasering dengan air jernih dari mata air Gunung Slamet.
              </p>
              <div className="melung-footer-social">
                <a href="https://instagram.com/pagubugan_melung" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <AtSign size={18} />
                </a>
                <a href="#" aria-label="Facebook">
                  <Globe size={18} />
                </a>
                <a href="#" aria-label="Phone">
                  <Phone size={18} />
                </a>
              </div>
            </div>

            <div className="melung-footer-col">
              <h4>Navigasi</h4>
              <ul>
                <li><a href="#highlights" onClick={(e) => { e.preventDefault(); scrollToSection("highlights"); }}>Highlights</a></li>
                <li><a href="#galeri" onClick={(e) => { e.preventDefault(); scrollToSection("galeri"); }}>Galeri</a></li>
                <li><a href="#tentang" onClick={(e) => { e.preventDefault(); scrollToSection("tentang"); }}>Tentang</a></li>
                <li><a href="#info" onClick={(e) => { e.preventDefault(); scrollToSection("info"); }}>Info</a></li>
                <li><a href="#fasilitas" onClick={(e) => { e.preventDefault(); scrollToSection("fasilitas"); }}>Fasilitas</a></li>
                <li><a href="#ulasan" onClick={(e) => { e.preventDefault(); scrollToSection("ulasan"); }}>Ulasan</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection("faq"); }}>FAQ</a></li>
              </ul>
            </div>

            <div className="melung-footer-col">
              <h4>Fasilitas</h4>
              <ul>
                <li><a href="#">Kolam Renang</a></li>
                <li><a href="#">Camping Ground</a></li>
                <li><a href="#">Spot Foto</a></li>
                <li><a href="#">Area Bermain</a></li>
                <li><a href="#">Warung Kuliner</a></li>
              </ul>
            </div>

            <div className="melung-footer-col">
              <h4>Kontak</h4>
              <ul>
                <li><a href="https://instagram.com/pagubugan_melung" target="_blank" rel="noopener noreferrer">@pagubugan_melung</a></li>
                <li><a href="#">Desa Melung, Banyumas</a></li>
                <li><a href="#">Jawa Tengah 53152</a></li>
              </ul>
            </div>
          </div>

          <div className="melung-footer-bottom">
            <p>© 2026 Wisata Pagubugan Melung. Desa Melung, Kedungbanteng, Banyumas.</p>
            <p>Made with Mahasiswa Unsoed</p>
          </div>
        </div>
      </footer>

      {/* ===== BACK TO TOP ===== */}
      <button
        className={`melung-back-to-top ${showTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
}
