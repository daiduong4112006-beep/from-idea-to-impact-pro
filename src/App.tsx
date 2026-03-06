import React from 'react';
import { 
  Lightbulb, 
  Users, 
  Calendar, 
  Search, 
  Palette, 
  Mic2, 
  Accessibility, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Globe,
  TrendingUp,
  Dumbbell,
  MessageSquare,
  Star,
  Presentation,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Play,
  Download,
  Settings,
  Maximize,
  ChevronRight,
  ArrowLeft,
  BookOpen,
  Target,
  FileText,
  Brain,
  Phone,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Types ---

type View = 'landing' | 'session-detail';

interface Session {
  id: string;
  title: string;
  desc: string;
  fullTitle: string;
  subtitle: string;
  goals: string[];
  topics: { title: string; desc: string }[];
  activities: string[];
  schedule: { stt: number; activity: string; performer: string; duration: string }[];
  slideUrl: string;
  worksheetUrl?: string;
  videoUrl?: string;
}

const SESSIONS: Session[] = [
  {
    id: '01',
    title: 'Giới thiệu & Lý thuyết cơ bản',
    desc: 'Hiểu về tầm quan trọng và cấu trúc cốt lõi của một bài thuyết trình hiệu quả.',
    fullTitle: 'Buổi 1: Giới thiệu & Lý thuyết cơ bản',
    subtitle: 'Xây dựng nền tảng vững chắc cho kỹ năng thuyết trình trong môi trường đại học.',
    goals: [
      "Sinh viên hiểu thuyết trình là gì và vì sao kỹ năng này quan trọng trong học tập đại học và công việc sau này.",
      "Nhận diện các yếu tố cốt lõi của một bài thuyết trình hiệu quả."
    ],
    topics: [
      { title: 'Thuyết trình trong môi trường đại học', desc: "Thuyết trình nhóm, báo cáo môn học, bảo vệ ý tưởng." },
      { title: 'Cấu trúc cơ bản của một bài thuyết trình', desc: "Mở bài – Nội dung chính – Kết luận." },
      { title: 'Nguyên tắc sắp xếp nội dung', desc: "Đơn giản hóa nội dung để người nghe dễ hiểu." },
      { title: 'Các lỗi phổ biến của sinh viên', desc: "Đọc slide, quá nhiều chữ, thiếu tương tác." }
    ],
    activities: [
      "Xem và phân tích 1 video thuyết trình tốt và 1 video thuyết trình chưa hiệu quả.",
      "Thảo luận nhóm: “Vì sao bài này dễ hiểu / khó hiểu?”"
    ],
    schedule: [
      { stt: 1, activity: "Giới thiệu kiến thức & ví dụ thực tế", performer: "Người dạy", duration: "15 phút" },
      { stt: 2, activity: "Xem & phân tích 2 video thuyết trình", performer: "Người học", duration: "10 phút" },
      { stt: 3, activity: "Thảo luận nhóm", performer: "Người học", duration: "15 phút" },
      { stt: 4, activity: "Tổng kết bài học", performer: "Người dạy", duration: "5 phút" }
    ],
    slideUrl: "https://drive.google.com/file/d/1WIsSE6LINfhqNvzCIcf5R5dfQrLGYcTJ/view",
    worksheetUrl: "https://drive.google.com/file/d/172SoLshi9ljas1hr8-c4z6Ob9BTDPH53/view?usp=sharing",
    videoUrl: "https://www.youtube.com/embed/r54CNEYmCyw"
  },
  {
    id: '02',
    title: 'Chuẩn bị Slide hướng đến khán giả',
    desc: 'Thiết kế slide đơn giản, rõ ràng và tập trung vào trải nghiệm người nghe.',
    fullTitle: 'Buổi 2: Chuẩn bị Slide hướng đến khán giả',
    subtitle: 'Slide là công cụ hỗ trợ, không phải kịch bản để đọc.',
    goals: [
      "Sinh viên hiểu vai trò của slide trong thuyết trình.",
      "Biết cách thiết kế slide đơn giản, rõ ràng và hướng đến khán giả.",
      "Tránh nhồi nhét nội dung, tập trung vào từ khóa và hình ảnh trực quan."
    ],
    topics: [
      { title: 'Nguyên tắc thiết kế slide hiệu quả', desc: "Ít chữ – ý chính – dễ nhìn. Mỗi slide chỉ truyền tải một thông điệp chính." },
      { title: 'Sử dụng Keyword', desc: "Thay thế các câu dài bằng từ khóa đắt giá." },
      { title: 'Trực quan hóa nội dung', desc: "Vai trò của hình ảnh, biểu đồ và ví dụ trực quan trong việc giúp khán giả hiểu và ghi nhớ." },
      { title: 'Các lỗi phổ biến khi làm slide', desc: "Quá nhiều chữ, sao chép nguyên văn, slide không liên quan đến lời nói." }
    ],
    activities: [
      "Phân tích 2 mẫu slide: 1 slide hiệu quả – 1 slide quá tải nội dung.",
      "Thực hành chỉnh sửa slide: Rút gọn chữ thành keyword, thay chữ bằng hình ảnh phù hợp.",
      "Peer feedback: “Slide này đã dễ nhìn và dễ hiểu với khán giả chưa?”"
    ],
    schedule: [
      { stt: 1, activity: "Phân tích ví dụ slide", performer: "Người dạy", duration: "15 phút" },
      { stt: 2, activity: "Thực hành chỉnh sửa slide", performer: "Người học", duration: "15 phút" },
      { stt: 3, activity: "Peer feedback", performer: "Người học", duration: "10 phút" },
      { stt: 4, activity: "Tổng kết bài học", performer: "Người dạy", duration: "5 phút" }
    ],
    slideUrl: "https://drive.google.com/file/d/1KlXiJkcyh3dHXU6E9e6uWd-f4hK_6NTF/view",
    worksheetUrl: "https://drive.google.com/file/d/1wcAFa_hU7gC3nfemEqXkQgpQheCe2IMD/view?usp=sharing",
    videoUrl: "https://www.youtube.com/embed/epd9hJsPiGg"
  },
  {
    id: '03',
    title: 'Kỹ năng Giao tiếp & Ngôn ngữ cơ thể',
    desc: 'Thể hiện sự chuyên nghiệp thông qua giọng nói và thần thái tự tin.',
    fullTitle: 'Buổi 3: Sự chuyên nghiệp – Kỹ năng Giao tiếp & Ngôn ngữ cơ thể',
    subtitle: 'Kết nối cảm xúc và truyền tải thông điệp mạnh mẽ đến khán giả.',
    goals: [
      "Sinh viên thể hiện được sự chuyên nghiệp khi thuyết trình trước lớp.",
      "Biết cách giao tiếp rõ ràng, có cảm xúc và tạo sự kết nối với khán giả.",
      "Nâng cao khả năng truyền đạt để người nghe hiểu – nhớ – cảm được thông điệp."
    ],
    topics: [
      { title: 'Sự chuyên nghiệp trong thuyết trình', desc: "Thái độ, tác phong, trang phục, tư thế đứng, cách mở đầu và kết thúc." },
      { title: 'Kỹ năng giao tiếp bằng lời nói', desc: "Giọng nói: âm lượng, tốc độ, nhấn nhá. Tránh nói đều đều hoặc quá nhanh." },
      { title: 'Ngôn ngữ cơ thể', desc: "Eye contact, cử chỉ tay. Tránh các thói quen gây mất tập trung." },
      { title: 'Kỹ thuật kể chuyện (Storytelling)', desc: "Sử dụng ví dụ cá nhân hoặc tình huống quen thuộc để kết nối người nghe." }
    ],
    activities: [
      "Luyện nói 1 đoạn trình bày 1 phút không sử dụng slide.",
      "Quay video ngắn phần trình bày và tự xem lại để nhận diện giọng nói, ngôn ngữ cơ thể.",
      "Nhận xét theo checklist “Professional Presentation”."
    ],
    schedule: [
      { stt: 1, activity: "Minh họa & hướng dẫn", performer: "Người dạy", duration: "15 phút" },
      { stt: 2, activity: "Luyện nói 1 phút", performer: "Người học", duration: "15 phút" },
      { stt: 3, activity: "Nhận xét theo checklist", performer: "Người học", duration: "10 phút" },
      { stt: 4, activity: "Tổng kết bài học", performer: "Người dạy", duration: "5 phút" }
    ],
    slideUrl: "https://drive.google.com/file/d/1xzeG7V1hzv-hTLarQwKRTCtnfm-QUuo-/view",
    worksheetUrl: "https://drive.google.com/file/d/1aeN0OqMUjZwgyt2-REEXgAywRXsAKPga/view?usp=sharing",
    videoUrl: "https://www.youtube.com/embed/TuiDaVFdYB4"
  },
  {
    id: '04',
    title: 'Thực hành trình bày – Phản hồi & Tổng kết',
    desc: 'Áp dụng toàn bộ kiến thức đã học vào bài thuyết trình thực tế.',
    fullTitle: 'Buổi 4: Thực hành trình bày – Phản hồi & Tổng kết',
    subtitle: 'Đánh giá sự tiến bộ và định hướng phát triển kỹ năng trong tương lai.',
    goals: [
      "Sinh viên áp dụng toàn bộ kiến thức và kỹ năng đã học trong khóa học.",
      "Rèn luyện kỹ năng nhận và phản hồi góp ý mang tính xây dựng.",
      "Phát triển metacognition – khả năng tự nhận thức và đánh giá sự tiến bộ bản thân.",
      "Biết cách tiếp tục cải thiện kỹ năng thuyết trình sau khóa học."
    ],
    topics: [
      { title: 'Thuyết trình thực tế', desc: "Trình bày cá nhân hoặc theo nhóm (3–5 phút)." },
      { title: 'So sánh bản thân', desc: "Nhận diện sự thay đổi về mức độ tự tin, cách chuẩn bị và trình bày trước và sau khóa học." },
      { title: 'Ứng dụng kỹ năng', desc: "Trong học tập đại học, hoạt động nhóm, đời sống và công việc tương lai." }
    ],
    activities: [
      "Trình bày thực tế trước lớp.",
      "Peer feedback: Ghi chú điểm mạnh và điểm cần cải thiện.",
      "Tự đánh giá: Điều học được lớn nhất và kỹ năng cần tiếp tục rèn luyện."
    ],
    schedule: [
      { stt: 1, activity: "Sinh viên trình bày", performer: "Người học", duration: "15 phút" },
      { stt: 2, activity: "Peer feedback", performer: "Người học", duration: "10 phút" },
      { stt: 3, activity: "Tổng kết & định hướng cải thiện", performer: "Người dạy", duration: "5 phút" }
    ],
    slideUrl: "https://drive.google.com/file/d/1mJT8sGIfxNXGN2nnxy5EHq29hRIzFGf1/view",
    videoUrl: "https://www.youtube.com/embed/sJt_i0hOugA"
  }
];

// --- Components ---

const Navbar = ({ onViewChange, onRegisterClick }: { onViewChange: (view: View) => void, onRegisterClick: () => void }) => (
  <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 lg:px-20 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => onViewChange('landing')}>
        <div className="text-orange-500 flex items-center">
          <Lightbulb className="w-8 h-8 fill-orange-500/20" />
        </div>
        <h2 className="text-xl font-extrabold tracking-tight hidden md:block text-slate-900">From Idea to Impact</h2>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        {['VẤN ĐỀ', 'MỤC TIÊU', 'ĐỐI TƯỢNG', 'LỘ TRÌNH', 'ĐỘI NGŨ'].map((item) => (
          <motion.a 
            key={item} 
            whileHover={{ scale: 1.05 }}
            className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors" 
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </motion.a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRegisterClick}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-orange-500/20"
        >
          Đăng ký ngay
        </motion.button>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer id="contact" className="px-6 lg:px-20 py-16 border-t border-slate-200 bg-white">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xl text-slate-900 uppercase tracking-tight">From Idea to Impact</h4>
          </div>
          <p className="text-slate-500 max-w-sm">
            Nhóm dự án thuộc về bộ môn SSA101 - Kỹ năng học tập đại học, Trường Đại học FPT. Chúng tôi mang đến giải pháp rèn luyện kỹ năng thuyết trình thực chiến và hiệu quả cho sinh viên.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-slate-900 uppercase text-sm tracking-wider">Liên kết</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a className="hover:text-orange-500 transition-colors" href="#vấn đề">Về chúng tôi</a></li>
            <li><a className="hover:text-orange-500 transition-colors" href="#lộ trình">Khóa học</a></li>
            <li><a className="hover:text-orange-500 transition-colors" href="#register">Đăng ký</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-slate-900 uppercase text-sm tracking-wider">Thông tin liên hệ</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
              0397291597
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
              daiduong4112006@gmail.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
              Đại học FPT Hà Nội
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-400">
          © 2024 From Idea to Impact - Workshop Series. Bản quyền thuộc về dự án From Idea to Impact.
        </div>
        <div className="flex gap-6">
          <a 
            className="text-slate-400 hover:text-orange-500 transition-colors" 
            href="https://www.facebook.com/hn.rickit?locale=vi_VN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a className="text-slate-400 hover:text-orange-500 transition-colors" href="#"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </motion.div>
  </footer>
);

// --- Landing Page Sections ---

const Hero = ({ onSeeRoadmap, onRegisterClick }: { onSeeRoadmap: () => void, onRegisterClick: () => void }) => (
  <section className="relative px-6 lg:px-20 py-20 lg:py-32 overflow-hidden bg-[#fdfaf6]">
    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20 pointer-events-none">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-64 h-64 bg-orange-500 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-40 w-80 h-80 bg-blue-500 rounded-full blur-[120px]"
      />
    </div>
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" /> Workshop Đại Học
        </div>
        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
          From Idea to <span className="text-orange-500">Impact</span>
        </h1>
        <div className="space-y-4">
          <p className="text-xl font-semibold text-slate-800 leading-snug">
            Chuẩn bị & Thuyết trình hiệu quả cho sinh viên đại học.
          </p>
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Một khóa học thực hành giúp sinh viên: Tổ chức ý tưởng rõ ràng, Thiết kế slide hướng đến khán giả, Thuyết trình tự tin và chuyên nghiệp.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-500" />
            4 Buổi học thực chiến
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-500" />
            Thời gian 30-45 phút
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={onRegisterClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-1"
          >
            Đăng ký tham gia
          </button>
          <button 
            onClick={onSeeRoadmap}
            className="bg-slate-200 hover:bg-slate-300 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all"
          >
            Xem lộ trình
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -10, 0]
        }}
        transition={{ 
          opacity: { duration: 0.6, delay: 0.2 },
          scale: { duration: 0.6, delay: 0.2 },
          y: { 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
          <img 
            src="https://lh3.googleusercontent.com/d/1dCrpQXKNVILbYnrcXG2wCMowxvaFt_Z8" 
            alt="From Idea to Impact Workshop" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
            <div className="text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-orange-400 mb-1">Workshop Series</p>
              <h3 className="text-3xl font-black tracking-tight">FROM IDEA TO IMPACT</h3>
              <p className="text-sm opacity-90 font-medium">Kỹ năng thuyết trình chuyên nghiệp cho sinh viên</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const WhySection = () => (
  <section id="vấn đề" className="px-6 lg:px-20 py-24 bg-white">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-slate-900">Vì sao sinh viên cần kỹ năng thuyết trình?</h2>
        <p className="text-slate-500 mb-16">Những khó khăn phổ biến nhất được ghi nhận qua khảo sát thực tế.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Palette, title: 'Thiết kế slide', desc: 'Mất nhiều thời gian nhưng slide vẫn rối mắt, chưa chuyên nghiệp.' },
          { isStat: true, title: 'Khó chuyển đổi ý tưởng', desc: 'Hơn nửa số sinh viên trong lớp AI2107 gặp khó khăn khi chuyển các nội dung học thuật phức tạp thành câu chuyện trực quan.' },
          { icon: Mic2, title: 'Trình bày tự tin', desc: 'Vượt qua nỗi sợ nói trước đám đông và rèn luyện phong thái chuyên nghiệp.' }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-xl hover:border-orange-500/20 transition-all"
          >
            {item.isStat ? (
              <div className="flex items-center justify-center mb-6">
                <span className="text-5xl font-black text-orange-500">58.1%</span>
              </div>
            ) : (
              <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                {item.icon && <item.icon className="w-8 h-8" />}
              </div>
            )}
            <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
            <p className="text-slate-500">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const GoalsSection = () => (
  <section id="mục tiêu" className="px-6 lg:px-20 py-24 bg-[#fdfaf6]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900">Mục tiêu khóa học</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">Trang bị bộ kỹ năng toàn diện để biến ý tưởng của bạn thành những bài thuyết trình có sức ảnh hưởng mạnh mẽ.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Search, title: 'Phân tích yêu cầu', sub: 'THẤU HIỂU BỐI CẢNH', desc: 'Xác định đúng mục tiêu, đối tượng khán giả và thông điệp cốt lõi cần truyền tải trong từng bài thuyết trình.' },
          { icon: Lightbulb, title: 'Xây dựng nội dung', sub: 'TƯ DUY LOGIC', desc: 'Học cách sắp xếp ý tưởng theo cấu trúc kể chuyện (storytelling) mạch lạc, logic và giàu sức thuyết phục.' },
          { icon: Palette, title: 'Thiết kế Slide', sub: 'TRỰC QUAN HÓA', desc: 'Làm chủ các nguyên tắc thiết kế hiện đại, sử dụng hình ảnh và màu sắc để thu hút sự chú ý của khán giả.' },
          { icon: Mic2, title: 'Làm chủ giọng nói', sub: 'KỸ THUẬT TRÌNH DIỄN', desc: 'Điều tiết hơi thở, ngữ điệu và tốc độ nói để tạo điểm nhấn và giữ lửa cho bài thuyết trình.' },
          { icon: Accessibility, title: 'Ngôn ngữ cơ thể', sub: 'THẦN THÁI TỰ TIN', desc: 'Sử dụng cử chỉ, ánh mắt và phong thái di chuyển để kết nối mạnh mẽ với người nghe trong khán phòng.' },
          { icon: CheckCircle2, title: 'Tự tin bứt phá', sub: 'KỸ NĂNG TRỌN ĐỜI', desc: 'Vượt qua rào cản tâm lý, tự tin trình bày dự án và nhận được sự đánh giá cao từ hội đồng chuyên môn.' },
        ].map((goal, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-3xl border border-orange-500/10 flex flex-col items-start gap-6 group hover:border-orange-500 transition-all duration-300 shadow-sm"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
              <goal.icon className="w-8 h-8" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900">{goal.title}</h3>
              <p className="text-sm font-semibold text-orange-500/80 uppercase tracking-wider">{goal.sub}</p>
              <p className="text-slate-500 leading-relaxed text-sm">{goal.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const RoadmapSection = ({ onSessionClick }: { onSessionClick: (sessionId: string) => void }) => (
  <section id="lộ trình" className="px-6 lg:px-20 py-24 bg-white">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">Lộ trình 4 Buổi học</h2>
        <p className="text-slate-500">Hành trình từ ý tưởng đến bài thuyết trình có sức ảnh hưởng.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SESSIONS.map((session, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => onSessionClick(session.id)}
            className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all cursor-pointer hover:border-orange-500/50 hover:bg-white hover:shadow-xl"
          >
            <div className="text-orange-500 text-xs font-bold mb-4">BUỔI {session.id}</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{session.title}</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">{session.desc}</p>
            <div className="flex items-center text-orange-500 font-bold text-sm">
              Chi tiết buổi học <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section id="đội ngũ" className="px-6 lg:px-20 py-24 bg-white">
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-bold tracking-tight mb-16 text-slate-900 uppercase"
      >
        Thành viên dự án
      </motion.h2>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
        {[
          { name: 'KIỀU ĐẠI DƯƠNG', role: 'Trưởng nhóm', img: 'https://lh3.googleusercontent.com/d/1m8Ovw13wezHT86Ou3kKWS4pgDbh5Ysir' },
          { name: 'TỐNG VIỆT THẢO', role: 'Nội dung', img: 'https://lh3.googleusercontent.com/d/1B6Q8KTQ4qX-OYFNIGISZthySi_UY6lvp' },
          { name: 'NGUYỄN VĂN TUẤN', role: 'Thiết kế', img: 'https://lh3.googleusercontent.com/d/1Dss5DuGSbJtYnD9rB_DqGf19wt5uC1O8' },
          { name: 'LÊ HUY CƯỜNG', role: 'Truyền thông', img: 'https://lh3.googleusercontent.com/d/11qt1Nzj2FQQpvjsF-fMfuZo-O3PUzjRY' },
          { name: 'NGUYỄN VĂN KIÊN', role: 'Đánh giá', img: 'https://lh3.googleusercontent.com/d/1neeAx0DqQG6bEL2TKtifzeQHQOUjUqi5' },
        ].map((mentor, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group"
          >
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-md border border-slate-100 group-hover:shadow-xl group-hover:scale-105">
              <img alt={mentor.name} className="w-full h-full object-cover" src={mentor.img} referrerPolicy="no-referrer" />
            </div>
            <h4 className="font-bold text-lg text-slate-900">{mentor.name}</h4>
            <p className="text-sm text-orange-500 font-semibold uppercase tracking-wider">{mentor.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const RegisterSection = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    mssv: '',
    major: 'Kỹ thuật phần mềm'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbzIJ-CLIahJm9PdhmOiI50Kh2zbiY1eSENjSXaTLn1BqBTngbqSBTdcc5A1NhuaKnwD/exec';
      
      // We use a simple fetch POST. Note: Apps Script might redirect, 
      // but fetch handles it. CORS might be an issue in some browsers 
      // for the response, but the data usually reaches the script.
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Use no-cors to avoid preflight issues with Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Since we use 'no-cors', we won't be able to read the response,
      // but the data will be sent. We assume success if no error is thrown.
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="px-6 lg:px-20 py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Đăng ký tham gia ngay</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Số lượng học viên được giới hạn để đảm bảo chất lượng hướng dẫn và thực hành tốt nhất cho từng sinh viên.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-xl flex items-center gap-3">
                <Star className="w-6 h-6 text-orange-500" />
                Đặc quyền dành cho bạn:
              </h4>
              <ul className="space-y-4 text-slate-300">
                {[
                  'Chứng nhận hoàn thành workshop',
                  'Bộ tài liệu Slide Template chuyên nghiệp',
                  'Quyền truy cập kho tài liệu bổ trợ vĩnh viễn',
                  'Buổi Feedback 1:1 cùng Mentor',
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-slate-900 p-8 lg:p-10 rounded-3xl shadow-2xl"
          >
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">Đăng ký thành công!</h3>
                <p className="text-slate-500">
                  Cảm ơn bạn đã đăng ký. Chúng tôi đã ghi nhận thông tin và sẽ liên hệ với bạn qua email <strong>{formData.email}</strong> trong vòng 24 giờ.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-orange-500 font-bold hover:underline"
                >
                  Đăng ký cho người khác
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Họ và tên</label>
                  <input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                    placeholder="Nguyễn Văn A" 
                    type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email sinh viên (@fpt.edu.vn)</label>
                  <input 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                    placeholder="a.nv@fpt.edu.vn" 
                    type="email" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Mã số sinh viên</label>
                    <input 
                      required
                      value={formData.mssv}
                      onChange={(e) => setFormData({...formData, mssv: e.target.value})}
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                      placeholder="SE123456" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Chuyên ngành</label>
                    <select 
                      value={formData.major}
                      onChange={(e) => setFormData({...formData, major: e.target.value})}
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    >
                      <option>Kỹ thuật phần mềm</option>
                      <option>Quản trị kinh doanh</option>
                      <option>Thiết kế đồ họa</option>
                      <option>Trí tuệ nhân tạo</option>
                      <option>Khác</option>
                    </select>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2" 
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Đang xử lý...
                    </>
                  ) : 'Xác nhận đăng ký'}
                </motion.button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  Chúng tôi sẽ liên hệ với bạn qua email trong vòng 24 giờ.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Session Detail View ---

const SessionDetail = ({ sessionId, onBack, onNextSession }: { sessionId: string; onBack: () => void; onNextSession: (nextId: string) => void }) => {
  const [activeTab, setActiveTab] = React.useState('content');
  const [isPlaying, setIsPlaying] = React.useState(false);
  const session = SESSIONS.find(s => s.id === sessionId) || SESSIONS[0];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset isPlaying when session changes
  React.useEffect(() => {
    setIsPlaying(false);
  }, [sessionId]);

  return (
    <div className="bg-[#f8f7f5] min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-orange-500/10 bg-white/80 backdrop-blur-md px-6 md:px-20 py-4">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">From Idea to Impact</h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={onBack} className="text-sm font-medium hover:text-orange-500 transition-colors uppercase">TRANG CHỦ</button>
              <a className="text-sm font-medium text-orange-500 uppercase" href="#">Khóa học</a>
              <button onClick={() => scrollToSection('materials')} className="text-sm font-medium hover:text-orange-500 transition-colors uppercase">Tài liệu</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-orange-500 transition-colors uppercase">Hỗ trợ</button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input className="h-10 w-48 lg:w-64 rounded-lg border-none bg-slate-100 pl-10 text-sm focus:ring-2 focus:ring-orange-500/50" placeholder="Tìm kiếm bài học..." type="text" />
            </div>
            <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden border-2 border-orange-500/20">
              <img alt="User Profile" className="h-full w-full object-cover" src="https://picsum.photos/seed/student/100/100" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1200px] px-6 py-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <button onClick={onBack} className="hover:text-orange-500">Trang chủ</button>
          <ChevronRight className="w-4 h-4" />
          <a className="hover:text-orange-500" href="#">Kỹ năng thuyết trình</a>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium text-slate-900">Buổi {session.id}</span>
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
            Học phần {session.id}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
            {session.fullTitle}
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            {session.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div id="video-player" className="group relative aspect-video overflow-hidden rounded-xl bg-slate-900 shadow-2xl">
              {isPlaying && session.videoUrl ? (
                <iframe 
                  src={`${session.videoUrl}?autoplay=1`}
                  title={session.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all duration-300"></div>
                  <img alt="Workshop Background" className="h-full w-full object-cover opacity-60" src={`https://picsum.photos/seed/session${session.id}/1200/800`} referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg hover:scale-110 transition-transform active:scale-95"
                    >
                      <Play className="w-10 h-10 fill-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-1 flex-1 rounded-full bg-white/20">
                        <div className="h-full w-1/4 rounded-full bg-orange-500"></div>
                      </div>
                      <span className="text-xs font-medium text-white">00:00 / Video bài giảng</span>
                    </div>
                    <div className="flex justify-between items-center text-white">
                      <span className="text-sm font-semibold">Bài giảng chi tiết: {session.title}</span>
                      <div className="flex gap-4">
                        <Settings className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                        <Maximize className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm border border-slate-100">
              <div className="flex border-b border-slate-100 mb-6 overflow-x-auto no-scrollbar">
                {[
                  { id: 'content', label: 'Nội dung bài học' },
                  { id: 'activities', label: 'Hoạt động' },
                  { id: 'schedule', label: 'Thời lượng' },
                  { id: 'homework', label: 'Bài tập' }
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "px-6 py-3 text-sm font-bold border-b-2 transition-all whitespace-nowrap",
                      activeTab === tab.id ? "border-orange-500 text-orange-500" : "border-transparent text-slate-500 hover:text-slate-900"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <AnimatePresence mode="wait">
                {activeTab === 'content' && (
                  <motion.div 
                    key="content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <section>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                        <Target className="w-5 h-5 text-orange-500" />
                        Mục tiêu học tập
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {session.goals.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                        <BookOpen className="w-5 h-5 text-orange-500" />
                        Nội dung chính
                      </h3>
                      <div className="space-y-4">
                        {session.topics.map((item, idx) => (
                          <div key={idx} className="p-4 border-l-4 border-orange-500 bg-slate-50 rounded-r-lg shadow-sm">
                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                            <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </motion.div>
                )}
                {activeTab === 'activities' && (
                  <motion.div 
                    key="activities"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <section>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                        <Dumbbell className="w-5 h-5 text-orange-500" />
                        Hoạt động trong buổi học
                      </h3>
                      <div className="grid gap-4">
                        {session.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold flex-shrink-0">
                              {idx + 1}
                            </div>
                            <p className="text-slate-700 font-medium">{activity}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </motion.div>
                )}
                {activeTab === 'schedule' && (
                  <motion.div 
                    key="schedule"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider">
                          <tr>
                            <th className="px-6 py-4">STT</th>
                            <th className="px-6 py-4">Hoạt động</th>
                            <th className="px-6 py-4">Người thực hiện</th>
                            <th className="px-6 py-4">Thời lượng</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {session.schedule.map((item) => (
                            <tr key={item.stt} className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4 font-bold text-slate-400">{item.stt}</td>
                              <td className="px-6 py-4 font-bold text-slate-900">{item.activity}</td>
                              <td className="px-6 py-4 text-slate-600">{item.performer}</td>
                              <td className="px-6 py-4 font-bold text-orange-500">{item.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
                {activeTab === 'homework' && (
                  <motion.div 
                    key="homework"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 text-center">
                      <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Bài tập về nhà Buổi {session.id}</h4>
                      <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">
                        Hoàn thành bài tập này trước buổi học tiếp theo để củng cố kiến thức và chuẩn bị cho các phần thực hành nâng cao.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-6 py-2 rounded-lg text-sm font-bold transition-all">
                          Tải đề bài tập
                        </button>
                        <button 
                          onClick={() => window.open('https://drive.google.com/drive/folders/1m0eJelxIkW9cxxYD7dbkE2wYc2fglmIH?usp=sharing', '_blank')}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all"
                        >
                          Nộp bài tập
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div id="materials" className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900">
                <Download className="w-5 h-5 text-orange-500" />
                Tài liệu học tập
              </h3>
              <div className="space-y-3">
                <a 
                  href={session.slideUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-orange-500/5 hover:border-orange-500 transition-all border border-transparent group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">Slide bài giảng_S{session.id}.pdf</p>
                      <p className="text-xs text-slate-500">4.2 MB</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-orange-500" />
                </a>
                {session.worksheetUrl && (
                  <a 
                    href={session.worksheetUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-orange-500/5 hover:border-orange-500 transition-all border border-transparent group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-bold text-slate-900">Phiếu bài tập_S{session.id}.pdf</p>
                        <p className="text-xs text-slate-500">1.1 MB</p>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-orange-500" />
                  </a>
                )}
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white shadow-lg">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Phương pháp của chúng tôi
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider opacity-80 mb-1">Học tập trải nghiệm</h4>
                  <p className="text-sm leading-relaxed">Chúng tôi tin vào việc "học đi đôi với hành". Mỗi buổi học bao gồm 60% thực hành và 40% lý thuyết.</p>
                </div>
                <div className="h-px bg-white/20"></div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider opacity-80 mb-1">Phản hồi từ bạn học</h4>
                  <p className="text-sm leading-relaxed">Phát triển cùng nhau thông qua những góp ý xây dựng từ các bạn học và người hướng dẫn.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">Tiến độ khóa học</h3>
                <span className="text-sm font-bold text-orange-500">{parseInt(session.id) * 25}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-orange-500 transition-all duration-1000" style={{ width: `${parseInt(session.id) * 25}%` }}></div>
              </div>
              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                {parseInt(session.id) < 4 ? (
                  <>Hoàn thành Buổi {session.id} và phiếu bài tập đính kèm để mở khóa <strong>Buổi {parseInt(session.id) + 1}: {SESSIONS[parseInt(session.id)].title}</strong>.</>
                ) : (
                  <>Chúc mừng! Bạn đã hoàn thành toàn bộ lộ trình khóa học <strong>From Idea to Impact</strong>.</>
                )}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 py-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-orange-500 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" />
              Quay lại Bảng điều khiển
            </button>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollToSection('video-player')}
                className="px-8 py-3 rounded-lg border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-white transition-all"
              >
                Xem lại buổi học
              </button>
              {parseInt(session.id) < 4 && (
                <button 
                  onClick={() => onNextSession((parseInt(session.id) + 1).toString().padStart(2, '0'))}
                  className="px-8 py-3 rounded-lg bg-orange-500 text-white font-bold shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
                >
                  Tiếp theo: {SESSIONS[parseInt(session.id)].title}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = React.useState<View>('landing');
  const [selectedSessionId, setSelectedSessionId] = React.useState<string>('01');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSessionClick = (id: string) => {
    setSelectedSessionId(id);
    setView('session-detail');
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="font-sans antialiased text-slate-900">
      <AnimatePresence mode="wait">
        {view === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar onViewChange={setView} onRegisterClick={() => scrollToSection('register')} />
            <main>
              <Hero 
                onSeeRoadmap={() => scrollToSection('lộ trình')} 
                onRegisterClick={() => scrollToSection('register')}
              />
              <WhySection />
              <GoalsSection />
              
              {/* Audience Section */}
              <section id="đối tượng" className="px-6 lg:px-20 py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                  >
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">Đối tượng tham gia</h2>
                    <p className="text-slate-500">Chương trình được thiết kế đặc biệt cho các bạn sinh viên năng động.</p>
                  </motion.div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { icon: GraduationCap, text: 'Sinh viên đại học năm 1 – năm 4' },
                      { icon: Globe, text: 'Sinh viên học kỹ năng hoặc tiếng Anh' },
                      { icon: TrendingUp, text: 'Sinh viên muốn cải thiện thuyết trình' },
                      { icon: Users, text: 'Số lượng mỗi khóa: 5–10 sinh viên' },
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center group"
                      >
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          <item.icon className="w-8 h-8" />
                        </div>
                        <p className="font-bold text-slate-800">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <RoadmapSection onSessionClick={handleSessionClick} />

              {/* Methodology Section */}
              <section className="px-6 lg:px-20 py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                  >
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">Phương pháp học tập</h2>
                    <p className="text-slate-500">Cách tiếp cận hiện đại giúp tối ưu hóa khả năng tiếp thu và thực hành.</p>
                  </motion.div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { icon: Dumbbell, title: 'Learning by doing', desc: 'Thực hành qua các nhiệm vụ cụ thể để rèn luyện kỹ năng tức thì.' },
                      { icon: MessageSquare, title: 'Group discussion', desc: 'Thảo luận nhóm sôi nổi để mở rộng góc nhìn và đa dạng hóa ý tưởng.' },
                      { icon: Star, title: 'Peer feedback', desc: 'Nhận những góp ý xây dựng từ bạn học để cùng nhau tiến bộ hơn.' },
                      { icon: Presentation, title: 'Real practice', desc: 'Thực hành các bài thuyết trình ngắn để làm quen với áp lực sân khấu.' },
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-3xl border border-slate-100 group hover:border-orange-500 transition-all"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                          <item.icon className="w-7 h-7" />
                        </div>
                        <h4 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <TeamSection />
              <RegisterSection />
            </main>
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="session-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SessionDetail 
              sessionId={selectedSessionId} 
              onBack={() => setView('landing')} 
              onNextSession={(nextId) => setSelectedSessionId(nextId)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
