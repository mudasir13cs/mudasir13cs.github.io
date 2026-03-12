// ===================================
// Professional Portfolio - Translations
// Author: Mudasir
// Languages: English (EN) & Korean (KR)
// ===================================

const translations = {
    // ===================================
    // ENGLISH TRANSLATIONS
    // ===================================
    en: {
        nav: {
            home: "Home",
            about: "About",
            research: "Research",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            download: "Resume"
        },
        hero: {
            greeting: "Hi there, I'm",
            subtitle: "AI Engineer / Multimodal AI Developer / AI Researcher / Full-Stack / Mobile App Specialist",
            description: "Driven researcher and developer passionate about bridging cutting-edge AI technology with real-world applications through innovative software solutions.",
            years: "Years Experience",
            projects: "Projects Delivered",
            publications: "Publications",
            models: "AI Models",
            contact: "Get In Touch",
            work: "View My Work",
            available: "Available for opportunities",
            degree: "MS AI Convergence (4.28/4.5)",
            scroll: "Scroll to explore"
        },
        about: {
            tag: "Who I Am",
            title: "About Me",
            description: "Combining academic research excellence with practical industry experience",
            heading: "ML / Multimodal AI / Researcher / Full Stack & Mobile Developer — 9+ Years",
            intro: "I'm a passionate technologist based in Seoul, South Korea. I completed my MS in AI Convergence (GPA 4.28/4.5) at Soongsil University and currently work part-time as a Full Stack Developer at Cublick Digital. My journey spans Pakistan to Korea, combining research in ML, multimodal AI, and LLMs with hands-on full-stack and mobile development.",
            research: "My research focuses on developing advanced retrieval systems that adapt to different document domains. I specialize in LLM fine-tuning, Agentic AI, RAG architectures, and have published 2 peer-reviewed papers in international journals. I've also developed and deployed 5 AI models on Hugging Face with optimization techniques like GGUF quantization achieving 75% size reduction.",
            development: "On the development side, I've built 20+ production applications across iOS, Android, Flutter, and web platforms. From AI-powered digital signage to property management systems, I bring ideas to life with clean, scalable code. I also maintain 2 open-source packages on pub.dev with 350+ weekly downloads.",
            highlight1: "Published Researcher",
            highlight2: "Full Stack Expert",
            highlight3: "Mobile Specialist",
            highlight4: "Team Leader",
            resume: "Download Resume (EN)",
            resume_kr: "Download Resume (KR)",
            exp1: {
                title: "Full Stack Developer (Part-time)",
                company: "Cublick Digital Co., Ltd., Seoul",
                date: "March 2024 - Present",
                detail1: "Flutter, AngularJS, Native Android (Java, Kotlin)",
                detail2: "Node.js, NestJS, MongoDB backend",
                detail3: "Whisper STT, AI APIs, n8n automation pipelines"
            },
            exp2: {
                title: "Research Assistant",
                company: "Soongsil University, Seoul",
                date: "March 2024 - January 2026",
                detail1: "ML, LLMs (GPT-4, LLaMA, BERT), YOLO detection/segmentation",
                detail2: "n8n AI workflows, 2 published papers, Teaching Assistant"
            },
            exp3: {
                title: "Team Lead & Sr. Mobile Developer",
                company: "Progatix, Karachi",
                date: "June 2023 - February 2024",
                detail1: "Led Agile development team",
                detail2: "Native & hybrid mobile apps"
            }
        },
        research: {
            tag: "Academic Excellence",
            title: "Research & Publications",
            description: "Contributing to cutting-edge AI research with published papers and deployed models",
            education: "Education",
            thesis: "Thesis:",
            ms: {
                degree: "Master of Science: AI Convergence",
                year: "2026 · CGPA 4.28/4.5",
                thesis: "Field-Adaptive Dense Retrieval of Structured Documents"
            },
            ms_cs: {
                degree: "Master of Science: Computer Science",
                year: "2018, Karachi, Pakistan"
            },
            bs: {
                degree: "Bachelor of Computer Science",
                year: "2015, Jamshoro, Pakistan"
            },
            publications: "Publications",
            paper1: {
                title: "Field-Adaptive Dense Retrieval of Structured Documents",
                journal: "Journal of the Korea Multimedia Society",
                abstract: "This paper presents a novel approach to dense retrieval that adapts to different document fields and structures, improving retrieval accuracy across diverse document types."
            },
            paper2: {
                title: "Robust Text-to-Cypher Using CoBGT Model",
                journal: "Applied Sciences",
                abstract: "Presents the CoBGT model combining BERT, GraphSAGE, and Transformer architectures for converting natural language queries to Cypher queries."
            },
            view: "View Paper",
            download: "Download PDF",
            models: "AI Models on Hugging Face",
            models_desc: "5 production-ready AI models for field-adaptive dense retrieval deployed on Hugging Face",
            model1: "Bi-encoder model for field-adaptive document retrieval with domain-specific fine-tuning",
            model2: "Generates domain-specific queries for document retrieval",
            model3: "Quantized version with 75% size reduction for efficient deployment",
            model4: "Generates field-aware document descriptions and summaries",
            model5: "Production-ready optimized version for real-time applications",
            view_model: "View Model",
            all_models: "View All Models on Hugging Face"
        },
        skills: {
            tag: "What I Do",
            title: "Skills & Expertise",
            description: "ML, Multimodal AI, n8n, Whisper, YOLO, full-stack & mobile development",
            ai: "AI & Machine Learning",
            vision: "Computer Vision & Multimodal",
            automation: "AI Automation & Workflow",
            audio: "Audio & Speech AI",
            mobile: "Mobile Development",
            web: "Web Development",
            database: "Databases",
            tools: "Tools & DevOps"
        },
        projects: {
            tag: "Portfolio",
            title: "Featured Projects",
            description: "20+ production applications across mobile and web platforms",
            all: "All Projects",
            mobile: "Mobile Apps",
            ai: "AI & ML",
            web: "Web Apps",
            packages: "Open Source",
            project1: "Advanced AI research project implementing dense retrieval systems that adapt to different document domains. Published in international journal with 5 deployed models on Hugging Face.",
            project2: "Cross-platform property management system built with Flutter. Single codebase for Android, iOS, and Web with Stripe payments, Certn background checks, and video consultation.",
            project3: "Real-time security guard tracking system with GPS, background operation, battery optimization, and admin approval workflows. Native Android & iOS implementation.",
            project4: "AI-powered digital signage solution with content recommendation, real-time analytics, and remote management for multiple screens across different locations.",
            project5: "Universal emoji picker for Flutter with 2700+ emojis, 35+ categories, smart search, and cross-platform support. 250+ weekly downloads on pub.dev.",
            project6: "Comprehensive data parsing utility library for Dart with zero dependencies. Type conversions, validation, encoding, and cross-platform support. 100+ weekly downloads.",
            project7: "Enterprise procurement reporting system with real-time tracking, approval workflows, and comprehensive analytics. Built with Flutter for iOS and Android.",
            project8: "Multi-tenant school management platform enabling parents to monitor academic progress across multiple institutions with real-time updates and communication tools.",
            project9: "Native iOS/Android app with BLE integration for Water Link Spin Touch devices. Real-time water chemistry readings and PDF report generation.",
            more: "Including LolyHub, Rent College Pads, Auto Service Repair, Tap n' Save, HubPro Tracking, INDEL, and various web applications."
        },
        contact: {
            tag: "Get In Touch",
            title: "Let's Work Together",
            description: "Open for collaboration opportunities, research projects, and freelance work",
            email: "Email",
            phone: "Phone",
            location: "Location",
            social: "Connect With Me",
            form: {
                name: "Your Name",
                email: "Your Email",
                subject: "Subject",
                message: "Your Message",
                send: "Send Message"
            }
        },
        footer: {
            tagline: "ML / Multimodal AI / Researcher / Full Stack & Mobile Developer",
            quick: "Quick Links",
            about: "About",
            research: "Research",
            skills: "Skills",
            projects: "Projects",
            resources: "Resources",
            resume_en: "Resume (EN)",
            resume_kr: "Resume (KR)",
            contact_title: "Contact",
            copyright: "© 2026 Mudasir. All rights reserved."
        }
    },

    // ===================================
    // KOREAN TRANSLATIONS (한국어)
    // ===================================
    ko: {
        nav: {
            home: "홈",
            about: "소개",
            research: "연구",
            skills: "기술",
            projects: "프로젝트",
            contact: "연락처",
            download: "이력서"
        },
        hero: {
            greeting: "안녕하세요, 저는",
            subtitle: "AI 엔지니어 / 멀티모달 AI 개발자 / AI 연구원 / 풀스택 / 모바일 앱 전문가",
            description: "최첨단 AI 기술을 혁신적인 소프트웨어 솔루션을 통해 실제 응용 프로그램과 연결하는 데 열정적인 연구원이자 개발자입니다.",
            years: "년 경력",
            projects: "완료 프로젝트",
            publications: "논문",
            models: "AI 모델",
            contact: "연락하기",
            work: "작업 보기",
            available: "기회 모색 중",
            degree: "AI융합 석사 (4.28/4.5)",
            scroll: "스크롤하여 탐색"
        },
        about: {
            tag: "나는 누구인가",
            title: "소개",
            description: "학문적 연구 우수성과 실무 산업 경험의 결합",
            heading: "ML / 멀티모달 AI / 연구원 / 풀스택 및 모바일 개발자 — 9년 이상",
            intro: "저는 서울에 거주하며 숭실대학교 AI융합 석사(학점 4.28/4.5)를 마쳤고, 현재 큐블릭 디지털에서 풀스택 개발자로 파트타임 근무 중입니다. 파키스탄에서 한국까지 ML, 멀티모달 AI, LLM 연구와 풀스택·모바일 개발 경험을 쌓았습니다.",
            research: "제 연구는 다양한 문서 도메인에 적응하는 고급 검색 시스템 개발에 중점을 둡니다. LLM 미세 조정, 에이전트 AI, RAG 아키텍처를 전문으로 하며, 국제 학술지에 2편의 동료 평가 논문을 발표했습니다. 또한 GGUF 양자화와 같은 최적화 기술로 75% 크기 감소를 달성하여 Hugging Face에 5개의 AI 모델을 개발하고 배포했습니다.",
            development: "개발 측면에서는 iOS, Android, Flutter 및 웹 플랫폼에서 20개 이상의 프로덕션 애플리케이션을 구축했습니다. AI 기반 디지털 사이니지부터 부동산 관리 시스템까지, 깨끗하고 확장 가능한 코드로 아이디어를 실현합니다. 또한 주당 350회 이상 다운로드되는 pub.dev의 2개 오픈 소스 패키지를 유지 관리합니다.",
            highlight1: "출판 연구원",
            highlight2: "풀스택 전문가",
            highlight3: "모바일 전문가",
            highlight4: "팀 리더",
            resume: "이력서 다운로드 (영문)",
            resume_kr: "이력서 다운로드 (한글)",
            exp1: {
                title: "풀스택 개발자 (파트타임)",
                company: "큐블릭 디지털, 서울",
                date: "2024년 3월 - 현재",
                detail1: "Flutter, AngularJS, 네이티브 Android (Java, Kotlin)",
                detail2: "Node.js, NestJS, MongoDB 백엔드",
                detail3: "Whisper STT, AI API, n8n 자동화 파이프라인"
            },
            exp2: {
                title: "연구 보조원",
                company: "숭실대학교, 서울",
                date: "2024년 3월 - 2026년 1월",
                detail1: "ML, LLM(GPT-4, LLaMA, BERT), YOLO 검출/분할",
                detail2: "n8n AI 워크플로우, 논문 2편, 조교"
            },
            exp3: {
                title: "팀 리드 및 선임 모바일 개발자",
                company: "프로가틱스, 카라치",
                date: "2023년 6월 - 2024년 2월",
                detail1: "애자일 개발 팀 리드",
                detail2: "네이티브 및 하이브리드 모바일 앱"
            }
        },
        research: {
            tag: "학문적 우수성",
            title: "연구 및 출판물",
            description: "출판된 논문과 배포된 모델을 통한 최첨단 AI 연구 기여",
            education: "학력",
            thesis: "논문:",
            ms: {
                degree: "이학 석사: AI융합",
                year: "2026 · 학점 4.28/4.5",
                thesis: "구조화된 문서의 필드 적응형 밀집 검색"
            },
            ms_cs: {
                degree: "이학 석사: 컴퓨터 과학",
                year: "2018년, 카라치, 파키스탄"
            },
            bs: {
                degree: "컴퓨터 과학 학사",
                year: "2015년, 잠쇼로, 파키스탄"
            },
            publications: "출판물",
            paper1: {
                title: "구조화된 문서의 필드 적응형 밀집 검색",
                journal: "한국멀티미디어학회지",
                abstract: "이 논문은 다양한 문서 유형에서 검색 정확도를 향상시키는 다양한 문서 필드 및 구조에 적응하는 밀집 검색에 대한 새로운 접근 방식을 제시합니다."
            },
            paper2: {
                title: "CoBGT 모델을 사용한 강력한 텍스트-투-사이퍼",
                journal: "응용 과학",
                abstract: "자연어 쿼리를 Cypher 쿼리로 변환하기 위해 BERT, GraphSAGE 및 Transformer 아키텍처를 결합한 CoBGT 모델을 제시합니다."
            },
            view: "논문 보기",
            download: "PDF 다운로드",
            models: "Hugging Face의 AI 모델",
            models_desc: "Hugging Face에 배포된 필드 적응형 밀집 검색을 위한 5개의 프로덕션 준비 AI 모델",
            model1: "도메인별 미세 조정을 통한 필드 적응형 문서 검색용 바이인코더 모델",
            model2: "문서 검색을 위한 도메인별 쿼리 생성",
            model3: "효율적인 배포를 위한 75% 크기 감소를 가진 양자화 버전",
            model4: "필드 인식 문서 설명 및 요약 생성",
            model5: "실시간 애플리케이션을 위한 프로덕션 준비 최적화 버전",
            view_model: "모델 보기",
            all_models: "Hugging Face에서 모든 모델 보기"
        },
        skills: {
            tag: "제가 하는 일",
            title: "기술 및 전문성",
            description: "ML, 멀티모달 AI, n8n, Whisper, YOLO, 풀스택 및 모바일 개발",
            ai: "AI 및 머신러닝",
            vision: "컴퓨터 비전 및 멀티모달",
            automation: "AI 자동화 및 워크플로우",
            audio: "오디오 및 음성 AI",
            mobile: "모바일 개발",
            web: "웹 개발",
            database: "데이터베이스",
            tools: "도구 및 DevOps"
        },
        projects: {
            tag: "포트폴리오",
            title: "주요 프로젝트",
            description: "모바일 및 웹 플랫폼에서 20개 이상의 프로덕션 애플리케이션",
            all: "모든 프로젝트",
            mobile: "모바일 앱",
            ai: "AI 및 ML",
            web: "웹 앱",
            packages: "오픈 소스",
            project1: "다양한 문서 도메인에 적응하는 밀집 검색 시스템을 구현하는 고급 AI 연구 프로젝트. Hugging Face에 배포된 5개 모델과 함께 국제 학술지에 게재되었습니다.",
            project2: "Flutter로 구축된 크로스 플랫폼 부동산 관리 시스템. Stripe 결제, Certn 신원 조회 및 비디오 상담을 통한 Android, iOS 및 웹용 단일 코드베이스.",
            project3: "GPS, 백그라운드 작동, 배터리 최적화 및 관리자 승인 워크플로우를 갖춘 실시간 경비 추적 시스템. 네이티브 Android 및 iOS 구현.",
            project4: "콘텐츠 추천, 실시간 분석 및 여러 위치에 걸친 여러 화면에 대한 원격 관리 기능을 갖춘 AI 기반 디지털 사이니지 솔루션.",
            project5: "2700개 이상의 이모지, 35개 이상의 카테고리, 스마트 검색 및 크로스 플랫폼 지원을 갖춘 Flutter용 범용 이모지 선택기. pub.dev에서 주당 250회 이상 다운로드.",
            project6: "종속성이 없는 Dart용 포괄적인 데이터 구문 분석 유틸리티 라이브러리. 타입 변환, 검증, 인코딩 및 크로스 플랫폼 지원. 주당 100회 이상 다운로드.",
            project7: "실시간 추적, 승인 워크플로우 및 포괄적인 분석 기능을 갖춘 엔터프라이즈 조달 보고 시스템. iOS 및 Android용 Flutter로 구축.",
            project8: "부모가 실시간 업데이트 및 통신 도구를 통해 여러 기관에서 학업 진행 상황을 모니터링할 수 있는 멀티테넌트 학교 관리 플랫폼.",
            project9: "Water Link Spin Touch 장치용 BLE 통합이 포함된 네이티브 iOS/Android 앱. 실시간 수질 화학 판독 및 PDF 보고서 생성.",
            more: "LolyHub, Rent College Pads, Auto Service Repair, Tap n' Save, HubPro Tracking, INDEL 및 다양한 웹 애플리케이션 포함."
        },
        contact: {
            tag: "연락하기",
            title: "함께 일해요",
            description: "협력 기회, 연구 프로젝트 및 프리랜스 작업에 열려 있습니다",
            email: "이메일",
            phone: "전화",
            location: "위치",
            social: "나와 연결",
            form: {
                name: "이름",
                email: "이메일",
                subject: "제목",
                message: "메시지",
                send: "메시지 보내기"
            }
        },
        footer: {
            tagline: "ML / 멀티모달 AI / 연구원 / 풀스택 및 모바일 개발자",
            quick: "빠른 링크",
            about: "소개",
            research: "연구",
            skills: "기술",
            projects: "프로젝트",
            resources: "자료",
            resume_en: "이력서 (영문)",
            resume_kr: "이력서 (한글)",
            contact_title: "연락처",
            copyright: "© 2026 Mudasir. 모든 권리 보유."
        }
    }
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
