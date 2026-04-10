import React, { useState } from "react";

// ══════════════════════════════════════════════════════════════
// 기관 데이터 (브랜드 가이드 완전 반영)
// ══════════════════════════════════════════════════════════════
const INST = {
  baeoom: {
    id: "baeoom", name: "배움사이버평생교육원", short: "배움",
    color: "#F7941D", colorDark: "#d4790f", bg: "#FFF7EE", textColor: "#7a3d00",
    slogan: "배우는 즐거움", theme: "기초와 신뢰의 배움",
    keywords: ["기초", "안정", "신뢰"],
    tone: "친근하고 명확한 설명형. 해요체 중심. 따뜻함·안정 감정 톤.",
    cta: "지금 시작하기",
    ctaMsg: "배움사이버평생교육원과 함께, 지금 바로 시작해 보세요.",
    brandMsg: "배우는 즐거움으로 시작되는 배움. 누구나 쉽게 시작할 수 있는 평생학습.",
    address: "서울특별시 강남구 언주로 727, 7층 (트리스빌딩)",
    tel: "1661-9149", url: "https://career.baeoom.com/",
    hashtags: "#배움사이버평생교육원 #배우는즐거움 #기초부터차근히 #학점은행제 #평생교육원",
    imageStyle: {
      thumb: `A square illustration with a photorealistic style.
Warm, sunlit interior with orange accent tones. Korean adult learner in a cozy, trustworthy setting.
Natural morning light, shallow depth of field, high quality DSLR photography feel.
Korean text {TITLE} displayed in a straight horizontal line,
inside a semi-transparent white rectangular overlay box,
centered in the image, straight and flat layout, no curve, no arc.
Size: 750x750 pixels, square format.`,
      mid: `Generate an image without any text or letters.
Photorealistic lifestyle photography. A Korean adult woman in her 30s~40s
in a warm, bright environment related to {TOPIC}.
Orange color accents, cozy and trustworthy atmosphere.
Natural lighting, high resolution.
Size: 1200x900 pixels, landscape format.`,
      cta: `Generate an image without any text or letters.
Photorealistic style. A smiling Korean woman at a bright home desk or cafe,
cheerfully engaged with learning. Warm orange tones, welcoming atmosphere.
Size: 1200x900 pixels, landscape format.`,
    },
  },
  baeron: {
    id: "baeron", name: "배론원격평생교육원", short: "배론",
    color: "#0076BE", colorDark: "#005a8e", bg: "#EEF6FF", textColor: "#003366",
    slogan: "배우며 논하다", theme: "깊이 배우고 함께 사유하는 배움",
    keywords: ["탐구", "성찰", "성장"],
    tone: "진중하고 지적인 사유 중심형. 입니다·합니다체. 통찰·분석 감정 톤.",
    cta: "과정 살펴보기",
    ctaMsg: "배론원격평생교육원에서 배움의 깊이를 경험해 보시기 바랍니다.",
    brandMsg: "배우며 논하다, 생각이 자라는 배움. 깊이 배우고 함께 성장하는 공간.",
    address: "서울특별시 강서구 양천로 583, A-710호 (염창동, 우림블루나인비즈니스센터)",
    tel: "1688-2465", url: "https://www.baeron.com/",
    hashtags: "#배론원격평생교육원 #배우며논하다 #생각이자라는배움 #학점은행제 #원격평생교육",
    imageStyle: {
      thumb: `A square image divided into two sections.
Top section: a navy blue (#0076BE) full-width banner strip occupying about 25% of the top,
containing large bold Korean text {TITLE} in white,
centered, filling about 80% of the banner width.
Bottom section: a clean line drawing illustration of a Korean adult learner
related to {TOPIC}. Simple educational props. Soft navy blue pastel background.
Black outline strokes, flat colors, no shading or gradients.
Friendly editorial illustration style similar to modern educational infographic characters.
Size: 750x750 pixels, square format.`,
      mid: `Generate an image without any text or letters.
Clean line drawing illustration style. A Korean adult in a quiet study setting,
engaged with {TOPIC}. Books, notebook, pen as props.
Soft navy blue pastel background. Black outline strokes, flat colors, no gradients.
Calm and intellectual mood.
Size: 1200x900 pixels, landscape format.`,
      cta: `Generate an image without any text or letters.
Clean line drawing illustration. A Korean adult looking forward with a confident expression,
educational items around them. Navy blue pastel tones, thoughtful and inspiring mood.
Black outline strokes, flat editorial style.
Size: 1200x900 pixels, landscape format.`,
    },
  },
  hub: {
    id: "hub", name: "허브원격평생교육원", short: "허브",
    color: "#6CB33F", colorDark: "#4e8a2b", bg: "#F0F8E8", textColor: "#2d5016",
    slogan: "배움으로 나아가다", theme: "변화를 배우는 새로운 시작",
    keywords: ["변화", "도전", "확장"],
    tone: "밝고 공감형. 감성적·실천 중심. 유연함·활기 감정 톤.",
    cta: "나의 변화 시작하기",
    ctaMsg: "허브원격평생교육원과 함께 변화의 첫 걸음을 내딛어 보세요.",
    brandMsg: "배움으로 나아가다. 지금, 나의 변화를 배우다.",
    address: "서울특별시 강서구 양천로 583, 에이-510호 (염창동, 우림블루나인비즈니스센터)",
    tel: "1661-4453", url: "https://www.hubedu.net/",
    hashtags: "#허브원격평생교육원 #배움으로나아가다 #나의새로운시작 #학점은행제 #커리어변화",
    imageStyle: {
      thumb: `A square image divided into left and right sections.
Left section (40% width): bright green (#6CB33F) background,
large bold Korean text {TITLE} in white, vertically centered,
line-broken into 2~3 lines for readability.
Right section (60% width): a 3D rendered illustration of a cheerful Korean woman
in her 30s related to {TOPIC}, smiling brightly.
Soft light green pastel background. Rounded glossy 3D character style,
cute and friendly proportions. Bright and energetic mood.
The two sections should feel cohesive with matching green color tones.
Size: 750x750 pixels, square format.`,
      mid: `Generate an image without any text or letters.
3D rendered illustration style. A cheerful Korean adult character
engaged with {TOPIC}. Bright green (#6CB33F) color accents.
Soft pastel background, rounded glossy 3D character style.
Energetic and motivating mood.
Size: 1200x900 pixels, landscape format.`,
      cta: `Generate an image without any text or letters.
3D rendered illustration. A Korean adult character looking forward with
an energetic, confident expression. Green color tones, dynamic composition.
Cute rounded 3D style, bright and action-oriented mood.
Size: 1200x900 pixels, landscape format.`,
    },
  },
};

// ══════════════════════════════════════════════════════════════
// 블로그 유형
// ══════════════════════════════════════════════════════════════
const BLOG_TYPES = [
  {
    id: "course", label: "과정형", icon: "📚",
    desc: "자격증·과정 소개, 취득 방법 안내",
    inputs: ["기관명", "과정/자격증명", "대상 독자"],
    placeholder: ["예) 사회복지사 2급", "예) 직장인 30대 여성"],
  },
  {
    id: "info", label: "정보형", icon: "📋",
    desc: "정책·법령·통계 기반 공신력 콘텐츠",
    inputs: ["기관명", "정책·법령·주제", "대상 독자"],
    placeholder: ["예) 학점은행제 2025 개정", "예) 성인학습자, 직장인"],
  },
  {
    id: "issue", label: "시기·이슈형", icon: "📰",
    desc: "절기·행사·사회 이슈와 배움 연결",
    inputs: ["기관명", "시기·이슈", "대상 독자", "문체 유형"],
    placeholder: ["예) 봄, 입학시즌, 수능 후", "예) 2030 여성, 취준생"],
  },
  {
    id: "promo", label: "프로모션형", icon: "🎁",
    desc: "이벤트·행사 공식 안내 콘텐츠",
    inputs: ["기관명", "이벤트 유형", "이벤트 주제"],
    placeholder: ["예) 경품 이벤트, 기대평 이벤트", "예) 봄맞이 수강신청 이벤트"],
  },
];

const ISSUE_STYLES = ["감성 에세이형", "블로그형", "정보 전달형"];

// ══════════════════════════════════════════════════════════════
// 프롬프트 생성기
// ══════════════════════════════════════════════════════════════
function buildPrompt(typeId, inst, values, issueStyle) {
  const isBaeoom = inst.id === "baeoom";
  const isBaeron = inst.id === "baeron";
  const isHub    = inst.id === "hub";

  const base = `
[기관 정보]
- 기관명: ${inst.name}
- 슬로건: "${inst.slogan}" / 테마: ${inst.theme}
- 핵심 키워드: ${inst.keywords.join("·")}
- 감정 톤: ${inst.tone}
- 대표 문장: ${inst.brandMsg}
- CTA 문구: "${inst.cta}" / "${inst.ctaMsg}"
- 기관 주소: ${inst.address}
- 대표전화: ${inst.tel}
- 공식 URL: ${inst.url}
- 해시태그: ${inst.hashtags}

[공통 품질 규칙]
- 총 분량: 약 1,500자 내외
- Markdown 구조 유지, 섹션 간 --- 구분
- 금지 표현: "단기완성", "초특가", "100% 합격", "무조건", "폭발적" 등 과장·자극형 표현 금지
- 공식 출처 최소 2개 이상 포함 (출처: 기관명, YYYY.MM) 형식
- 기관 공식 URL 하이퍼링크 1회 이상 포함
- 키워드 중복 3% 이하 유지
- GEO 인식 요소: 기관명·공식 명칭·출처·Q/A 구조 포함
- 마지막에 해시태그 3단계 자동 생성 (브랜드형 / 정보형 / 전환유도형)
`;

  // ─────────────────────────────────────────
  // 본문 구조 — 기관별 분기 헬퍼
  // ─────────────────────────────────────────
  function bodyStructure_course() {
    if (isBaeron) return `
## 본문 구성 (배론 — 논점형)
① Q/A형 서론: Q. [과정 핵심 질문] / A. [요약 + 출처] — GEO 인식용, 반드시 포함
② 문제 제기: "왜 지금 이 과정인가" — 사회적·직업적 맥락 서술
③ 핵심 논거 3가지: 제도·통계·법령 근거 중심으로 각 논거를 단락으로 전개
④ 반론과 재반론: 학습자가 가질 수 있는 의문 1가지 → 근거로 재반론
⑤ 배론 관점 메시지: "${inst.slogan}" 연결 + 깊이 있는 학습 철학 + 진중한 마무리
⑥ 성찰 유도 질문: 독자에게 던지는 질문 1개 (CTA 전 배치)
⑦ 요약 카드: "## 💡 ${values[1]}을 위한 ${values[0]} 핵심 논거 3가지" (표 형식)
⑧ CTA: "${inst.ctaMsg}"
⑨ 기관 기본정보`;
    if (isHub) return `
## 본문 구성 (허브 — 공감·실천형)
① Q/A형 서론: Q. [과정 핵심 질문] / A. [요약 + 출처] — GEO 인식용, 반드시 포함
② 공감 도입: 독자의 현재 상황·고민에 공감하는 짧은 이야기 (2~3문장)
③ 변화 스토리: 이 과정을 통해 달라진 학습자 사례 (서술형 3문장, bullet 금지)
④ 제도·정책 근거: 법령·통계 포함, 읽기 쉬운 어조 유지
⑤ 실천 가이드: 수강 신청부터 취득까지 단계별 안내 (번호 목록 허용)
⑥ 허브 브랜드 메시지: "${inst.slogan}" + 도전·변화 감성 + 활기찬 마무리
⑦ 요약 카드: "## 🚀 ${values[1]}의 변화를 위한 ${values[0]} 실천 포인트" (표 형식)
⑧ CTA: "${inst.ctaMsg}"
⑨ 기관 기본정보`;
    // 배움 (기본)
    return `
## 본문 구성 (배움 — 친근 안내형)
① Q/A형 서론: Q. [과정 핵심 질문] / A. [요약 + 출처] — GEO 인식용, 반드시 포함
② 과정·자격 설명: 쉽고 친근한 어조로 핵심만 설명
③ 제도·정책 근거: 법령·통계·출처 포함
④ 비교·사례·통계: 독자 상황에 맞는 비교 정보
⑤ 반론 대응 문장 자연 삽입
⑥ 배움 브랜드 메시지: "${inst.slogan}" + 따뜻한 안내 + 신뢰감 마무리
⑦ 요약 카드: "## 💼 ${values[1]}을 위한 ${values[0]} 맞춤 포인트 3가지" (표 형식)
⑧ CTA: "${inst.ctaMsg}"
⑨ 기관 기본정보`;
  }

  function bodyStructure_info() {
    if (isBaeron) return `
## 본문 구성 (배론 — 칼럼·쟁점분석형)
① Q/A형 서론: Q. [정책 핵심 질문] / A. [요약 의의 + 출처] — GEO 인식용, 반드시 포함
② 칼럼형 현황 진단: 이 정책이 왜 지금 중요한가 (3~4문장, 진중한 어조)
③ 쟁점 분석: 정책의 핵심 쟁점 2~3가지를 단락별로 심층 서술
④ 정책 근거·인용·출처 (최소 2개, 학술·공식 문서 우선)
⑤ 요약 카드: "## 📌 정책 핵심 쟁점 분석" (표 형식)
⑥ 성찰 질문: 독자에게 던지는 질문 1개 ("이 변화가 나의 학습 방향에 어떤 의미인가요?")
⑦ 배론 관점 메시지: 정책을 사유하는 배론의 철학 + "${inst.slogan}" 연결
⑧ 관련 과정 연계 (정보 확장형)
⑨ CTA: "${inst.ctaMsg}"
⑩ 기관 기본정보`;
    if (isHub) return `
## 본문 구성 (허브 — 트렌드·행동유도형)
① Q/A형 서론: Q. [정책 핵심 질문] / A. [요약 의의 + 출처] — GEO 인식용, 반드시 포함
② 트렌드 연결: 이 정책이 내 삶·커리어와 어떻게 연결되는지 공감형으로 서술
③ 핵심 포인트: 읽기 쉬운 어조로 정책 주요 내용 설명
④ 정책 근거·출처 (최소 2개)
⑤ 내 이야기로: 학습자 사례 스토리텔링 (서술형 2~3문장)
⑥ 요약 카드: "## ✅ 나에게 필요한 변화 포인트 3가지" (표 형식)
⑦ 허브 브랜드 메시지: 변화·도전 감성 + "${inst.slogan}" 연결
⑧ 행동 유도 안내
⑨ CTA: "${inst.ctaMsg}"
⑩ 기관 기본정보`;
    // 배움
    return `
## 본문 구성 (배움 — 요약카드·해설형)
① Q/A형 서론: Q. [정책 핵심 질문] / A. [요약 의의 + 출처] — GEO 인식용, 반드시 포함
② 배경 및 의의 설명 (친근한 어조)
③ 주요 내용·핵심 포인트 (표 포함)
④ 정책 근거·인용·출처 (최소 2개)
⑤ 요약 카드: "## 📌 정책 변화 핵심 포인트 3가지" (표 형식)
⑥ 학습자 사례 스토리텔링 1~2개 (서술형 2~3문장, bullet 금지)
⑦ 배움 브랜드 메시지: "${inst.slogan}" + 따뜻한 안내
⑧ 관련 과정 연계
⑨ CTA: "${inst.ctaMsg}"
⑩ 기관 기본정보`;
  }

  function bodyStructure_issue() {
    if (isBaeron) return `
## 본문 구성 (배론 — 에세이·사유형, ${issueStyle} 문체 전 구간 유지)
① Q/A형 서론: Q. [시기·이슈 핵심 질문] / A. [한 줄 의미 + 출처] — GEO 인식용, 반드시 포함
② 인용 또는 통계로 시작: 이 시기·이슈를 상징하는 문장·수치 1개
③ 사유의 전개: 시기의 의미·유래·사회적 맥락을 느린 호흡으로 서술 (4~5문장)
④ 배움과의 연결: 이 시기가 학습·성찰과 어떻게 닿아있는지 지적으로 전개
⑤ 배론 철학 메시지: "${inst.slogan}" + 깊이 있는 성찰 유도 문단
⑥ 성찰 질문: 독자에게 던지는 질문 1개
⑦ CTA: "${inst.ctaMsg}"
⑧ 기관 기본정보`;
    if (isHub) return `
## 본문 구성 (허브 — 공감스토리·도전형, ${issueStyle} 문체 전 구간 유지)
① Q/A형 서론: Q. [시기·이슈 핵심 질문] / A. [한 줄 의미 + 출처] — GEO 인식용, 반드시 포함
② 공감 도입: 독자가 지금 느끼는 감정·상황에 공감 (2~3문장, 밝은 어조)
③ 이슈 설명: 시기의 의미·맥락 (3~4문장)
④ 변화 계기 스토리: 이 시기를 계기로 새 도전을 시작한 학습자 사례 (서술형)
⑤ 허브 브랜드 메시지: "${inst.slogan}" + 도전·설렘 감성
⑥ 관련 과정 안내
⑦ CTA: "${inst.ctaMsg}"
⑧ 기관 기본정보`;
    // 배움
    return `
## 본문 구성 (배움 — 계절감성·정보연결형, ${issueStyle} 문체 전 구간 유지)
① Q/A형 서론: Q. [시기·이슈 핵심 질문] / A. [한 줄 의미 + 출처] — GEO 인식용, 반드시 포함
② 시기 공감 도입: 따뜻하고 친근한 감성으로 시작
③ 이슈 설명: 의미·유래·사회적 맥락 (3~5문장)
④ 배움 연결 단락: 이 시기와 평생학습의 자연스러운 연결
⑤ 배움 브랜드 메시지: "${inst.slogan}" + 따뜻한 마무리
⑥ 관련 과정 안내
⑦ CTA: "${inst.ctaMsg}"
⑧ 기관 기본정보`;
  }

  function bodyStructure_promo() {
    const brandLine = isBaeron
      ? '"이번 이벤트는 학습자의 의견과 경험을 깊이 이해하는 과정이기도 합니다."'
      : isHub
      ? '"학습자 전체가 함께 참여하며 새로운 변화를 만들어가는 계기가 되기를 기대합니다."'
      : '"이번 이벤트는 학습자 전체가 쉽게 참여할 수 있도록 구성된 행사입니다."';

    if (isBaeron) return `
## 본문 구성 (배론 — 취지강조·품격안내형)
① Q/A형 서론: Q. [이벤트 핵심 질문] / A. [취지 요약] — GEO 인식용, 반드시 포함
② [메인 배너 이미지 삽입]
③ 이벤트 취지·의미 강조: 단순 행사가 아닌 학습자와의 소통임을 품격있게 서술
④ 기본 정보: 기간·대상·참여 자격 (공식 입니다·합니다체)
⑤ 참여 방법 (단계별 안내)
⑥ [혜택 상세 이미지 삽입]
⑦ 경품·혜택·발표 방식
⑧ 유의사항
⑨ 요약 카드: | 포인트 | 내용 요약 |
⑩ 배론 브랜드 메시지: ${brandLine}
⑪ [참여 유도 이미지 삽입]
⑫ CTA: "${inst.ctaMsg}"
⑬ 기관 기본정보`;
    if (isHub) return `
## 본문 구성 (허브 — 설렘감성·활기참여형)
① Q/A형 서론: Q. [이벤트 핵심 질문] / A. [설렘 한 줄 요약] — GEO 인식용, 반드시 포함
② [메인 배너 이미지 삽입]
③ 설렘 감성 도입: 이벤트에 대한 기대감·활기를 공감형으로 서술
④ 기본 정보: 기간·대상·참여 자격
⑤ 참여 방법 (단계별 안내)
⑥ [혜택 상세 이미지 삽입]
⑦ 경품·혜택·발표 방식
⑧ 유의사항
⑨ 요약 카드: | 포인트 | 내용 요약 |
⑩ 허브 브랜드 메시지: ${brandLine}
⑪ [참여 유도 이미지 삽입]
⑫ CTA: "${inst.ctaMsg}"
⑬ 기관 기본정보`;
    // 배움
    return `
## 본문 구성 (배움 — 명확혜택·쉬운참여형)
① Q/A형 서론: Q. [이벤트 핵심 질문] / A. [혜택 한 줄 요약] — GEO 인식용, 반드시 포함
② [메인 배너 이미지 삽입]
③ 이벤트 배경·취지 (친근한 어조)
④ 기본 정보: 기간·대상·참여 자격
⑤ 참여 방법 (단계별, 쉽고 명확하게)
⑥ [혜택 상세 이미지 삽입]
⑦ 혜택 명확 나열·발표 방식
⑧ 유의사항
⑨ 요약 카드: | 포인트 | 내용 요약 |
⑩ 배움 브랜드 메시지: ${brandLine}
⑪ [참여 유도 이미지 삽입]
⑫ CTA: "${inst.ctaMsg}"
⑬ 기관 기본정보`;
  }

  // ─────────────────────────────────────────
  // 유형별 프롬프트 조합
  // ─────────────────────────────────────────
  if (typeId === "course") {
    return `당신은 ㈜배움 소속 3개 원격평생교육원의 과정형 블로그 콘텐츠를 작성하는 전문 라이터입니다.

${base}

[입력값]
- 과정/자격증명: ${values[0]}
- 대상 독자: ${values[1]}

[생성 단계 - 순서대로 실행]

## 1단계. 검색자 심리·의도 분석
- 페르소나 정의 (대상 독자 기반)
- 검색 의도 타입 (정보형/거래형/비교형 등)
- 핵심 욕구·불안·문제
- 구매 결정 요인 가중치 (상위 3가지)
- 장벽·오해와 무력화 문장 1개

---

## 2단계. SEO·GEO 최적화 제목 7개
| 번호 | 제목 | 검색의도매칭 | CTR근거 | 감정반응 | GEO인식 |
각 제목: 35~55자, 기관명+과정명+자연어질문형 포함
★ 최종 추천 제목: 번호 (근거 1줄)

---

## 3단계. 자료 조사 패킷
- 추천 검색 쿼리 5개
- 핵심 비교 기준 항목
- 정책·제도 근거 (「법령명」 제·조 + 출처)
- 공식 통계 2개 이상
- 반론 대응 문장 1개

---

## 4단계. 본문 (약 1,500자)
${bodyStructure_course()}

---
${inst.hashtags}
#학점은행제 #평생교육원 #온라인학위 #${values[0].replace(/\s/g,"")} #자격증취득`;
  }

  if (typeId === "info") {
    return `당신은 ㈜배움 소속 3개 원격평생교육원의 정보형(정책·법령·통계) 블로그 콘텐츠를 작성하는 전문 라이터입니다.

${base}

[입력값]
- 정책·법령·주제: ${values[0]}
- 대상 독자: ${values[1]}

[생성 단계 - 순서대로 실행]

## 1단계. 정책 주제 분류
①법령 제정·개정형 ②정책 시행·발표형 ③통계·연구보고형 ④기관 공고·지침형 ⑤사회·교육 트렌드형 중 분류
→ 분류 결과 및 필수 포함 요소 명시

---

## 2단계. GEO 인식형 제목 7개
| 번호 | 제목 | 정보유형 | GEO인식 | 감정톤 |
각 제목: 35~55자, 공식명칭+기관명+정책명 포함
★ 최종 추천 제목: 번호 (근거)

---

## 3단계. 정책 인용·출처 패킷
- 관련 법령 (「법령명」 제·조)
- 공식 통계 2개 이상 (수치·출처기관·날짜)
- 보도자료·공고문 출처

---

## 4단계. 본문 (약 1,500자)
${bodyStructure_info()}

---
${inst.hashtags}
#평생학습정책 #학점은행제 #교육법령 #공식통계 #정책해설`;
  }

  if (typeId === "issue") {
    const styleGuide = {
      "감성 에세이형": "서정적·묘사 중심·철학적 어조. 느린 호흡, 은유 표현, '–네요·–같아요·–이죠' 사용. 배론 중심 어울림.",
      "블로그형": "해요체 중심, 짧은 단락, 자연스러운 대화체. 정보+공감 중심, 생활 언어. 배움·허브 어울림.",
      "정보 전달형": "객관적·단정한 어조, '입니다·됩니다' 중심. 보도자료·칼럼형, 통계·공식 근거 활용.",
    }[issueStyle] || "";

    return `당신은 ㈜배움 소속 3개 원격평생교육원의 시기·이슈형 블로그 콘텐츠를 작성하는 전문 라이터입니다.

${base}

[입력값]
- 시기·이슈: ${values[0]}
- 대상 독자: ${values[1]}
- 문체 유형: ${issueStyle}
- 문체 규칙: ${styleGuide}

[생성 단계 - 순서대로 실행]

## 1단계. 시기·이슈 의미 분석
- 사회·문화·기원 관련 설명 (3~5문장)
- 배움과 연결되는 관점 도출
- 기관 브랜드와의 연결 포인트

---

## 2단계. GEO 인식형 제목 5개
| 번호 | 제목 | 스타일 | GEO인식 |
제목 규칙: 시기명 + 기관명 + 감정/정보 키워드 포함, 35~55자
★ 최종 추천 제목 1개

---

## 3단계. 본문 (약 1,500자)
${bodyStructure_issue()}

---
${inst.hashtags}
#${values[0].replace(/\s/g,"")}의배움 #계절과배움 #학점은행제 #평생교육`;
  }

  if (typeId === "promo") {
    return `당신은 ㈜배움 소속 3개 원격평생교육원의 이벤트·행사 안내 콘텐츠를 작성하는 전문 라이터입니다.

${base}

[입력값]
- 이벤트 유형: ${values[0]}
- 이벤트 주제: ${values[1]}
- 대상: 학습자 전체 (고정)

[생성 단계 - 순서대로 실행]

## 1단계. 이벤트 유형 분류
①참여형 ②경품형 ③캠페인형 ④정보형 중 분류
→ 필수 포함 요소 명시 (참여자격/기간/응모방식/혜택/발표일정 등)

---

## 2단계. GEO 인식형 제목 7개
규칙: 기관명·이벤트·행사·안내·참여 공식 용어 최소 2개 포함, 35~55자
| 번호 | 제목 | 이벤트유형 | GEO인식 | 감정톤 |
★ 최종 추천 제목 1~2개 + 근거

---

## 3단계. 이미지 삽입 위치 안내
① 서론 직후: [메인 배너 이미지 삽입]
② 혜택 설명 전후: [혜택 상세 이미지 삽입]
③ CTA 직전: [참여 유도 이미지 삽입]

---

## 4단계. 본문 (약 1,500자)
${bodyStructure_promo()}

---
${inst.hashtags}
#학습자이벤트 #참여이벤트 #교육원행사 #공식이벤트안내`;
  }

  return "";
}

// ══════════════════════════════════════════════════════════════
// 메인 컴포넌트
// ══════════════════════════════════════════════════════════════
export default function BlogGenerator() {
  const [step, setStep] = useState(1);
  const [instId, setInstId] = useState(null);
  const [typeId, setTypeId] = useState(null);
  const [values, setValues] = useState(["", ""]);
  const [issueStyle, setIssueStyle] = useState("블로그형");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedImg, setCopiedImg] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  // 참고자료
  const [links, setLinks] = useState([""]);
  const [refText, setRefText] = useState("");
  const [keyword, setKeyword] = useState("");

  // 4단계 서브스텝
  const [subStep, setSubStep] = useState("4a");
  const [titleCandidates, setTitleCandidates] = useState([]);
  const [selectedTitleIdx, setSelectedTitleIdx] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [analysisText, setAnalysisText] = useState("");
  const [imagePrompts, setImagePrompts] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [hashtagText, setHashtagText] = useState("");
  const [verifying, setVerifying] = useState(false);

  const inst = instId ? INST[instId] : null;
  const blogType = typeId ? BLOG_TYPES.find(t => t.id === typeId) : null;
  const accentColor = inst ? inst.color : "#555";

  // 링크 관리
  function addLink() { if (links.length < 5) setLinks([...links, ""]); }
  function removeLink(i) { setLinks(links.filter((_, idx) => idx !== i)); }
  function updateLink(i, v) { const l = [...links]; l[i] = v; setLinks(l); }

  // 참고자료 suffix
  function refSuffix() {
    const vl = links.filter(l => l.trim());
    let s = "";
    if (keyword.trim()) s += "\n\n[작성 방향·주요 키워드]\n" + keyword.trim();
    if (vl.length > 0) s += "\n\n[참고 링크]\n" + vl.map((l, i) => (i+1) + ". " + l).join("\n");
    if (refText.trim()) s += "\n\n[참고 자료]\n" + refText.trim().slice(0, 3000);
    return s;
  }

  // API 공통 호출
  async function callAPI(userPrompt, maxTokens) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: maxTokens || 1500,
        system: "당신은 ㈜배움 소속 원격평생교육원 전문 블로그 콘텐츠 라이터입니다. 주어진 지침과 브랜드 가이드를 철저히 따라 작성하세요. 과장·자극적 표현 금지. 공식 출처 필수 포함.",
        messages: [{ role: "user", content: userPrompt }]
      })
    });
    const data = await res.json();
    return (data.content || []).map(b => b.text || "").join("");
  }

  // 4a: 제목 생성
  async function generateTitles() {
    setLoading(true); setError("");
    const basePrompt = buildPrompt(typeId, inst, values, issueStyle);
    const prompt = basePrompt + refSuffix() + `

━━━━━━━━━━━━━━━━━━━━━━
지금은 [분석 + 제목]만 작성하세요. 본문은 작성하지 마세요.

## 1단계. 검색자 심리 분석 (3줄 이내)

## 2단계. SEO·GEO 최적화 제목 7개
반드시 아래 JSON 배열 형식으로만 출력 (다른 텍스트 없이):
[
  {"title": "제목1", "tag": "정보형·GEO✓"},
  {"title": "제목2", "tag": "전환형·SEO✓"},
  {"title": "제목3", "tag": "과정형·GEO✓"},
  {"title": "제목4", "tag": "감성형·GEO△"},
  {"title": "제목5", "tag": "정보형·SEO✓"},
  {"title": "제목6", "tag": "전환형·GEO✓"},
  {"title": "제목7", "tag": "과정형·SEO✓"}
]
★ 추천: 번호와 근거 1줄`;
    try {
      const text = await callAPI(prompt, 1200);
      const jsonMatch = text.match(/\[[\s\S]*?\]/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        setTitleCandidates(parsed);
      }
      setAnalysisText(text);
      setStep(4);
      setSubStep("4a");
    } catch(e) {
      setError("제목 생성 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

  // 제목 검증
  async function verifyTitle() {
    if (!editedTitle.trim()) return;
    setVerifying(true); setError("");
    try {
      const prompt = `아래 블로그 제목을 분석해서 태그를 붙여주세요.

제목: "${editedTitle}"
블로그 유형: ${blogType ? blogType.label : ""}
기관: ${inst ? inst.name : ""}

분석 기준:
- 정보형 / 과정형 / 전환형 / 감성형 중 하나
- GEO✓: 기관명·공식명칭·Q&A 구조 포함
- GEO△: GEO 요소 일부 포함
- SEO✓: 핵심 키워드 앞쪽 배치

JSON만 출력하세요 (마크다운 없이):
{"tag": "정보형·GEO✓·SEO✓", "chars": 42, "feedback": "한 줄 평가 20자 이내"}`;
      const text = await callAPI(prompt, 300);
      const m = text.match(/\{[\s\S]*?\}/);
      if (m) {
        const parsed = JSON.parse(m[0]);
        const newEntry = {
          title: editedTitle.trim(),
          tag: parsed.tag,
          feedback: parsed.feedback,
          isCustom: true
        };
        setTitleCandidates(prev => [newEntry, ...prev.filter(t => !t.isCustom)]);
        setSelectedTitleIdx(0);
      }
    } catch(e) {
      setError("검증 중 오류가 발생했습니다.");
    } finally {
      setVerifying(false);
    }
  }

  // 4b: 이미지 프롬프트 (단독 재생성용)
  async function generateImagePrompts() {
    setLoading(true); setError("");
    const finalTitle = editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "");
    const text = await callImagePrompts(finalTitle);
    setImagePrompts(text);
    setLoading(false);
  }

  async function callImagePrompts(finalTitle) {
    const shortTitle = finalTitle.length > 15 ? finalTitle.slice(0, 15) : finalTitle;
    const style = inst.imageStyle;
    const thumb = style.thumb
      .replace("{TITLE}", `"${shortTitle}"`)
      .replace("{TOPIC}", values[0] || "평생교육");
    const mid = style.mid.replace("{TOPIC}", values[0] || "평생교육");
    const cta = style.cta.replace("{TOPIC}", values[0] || "평생교육");

    const prompt = `아래 블로그 포스팅에 사용할 이미지 프롬프트 3개를 작성해주세요. 다른 내용은 절대 작성하지 마세요.

기관: ${inst.name} | 블로그 제목: "${finalTitle}" | 주제: ${values[0]}

각 구간 제목(썸네일 / 본문중간 / CTA)을 한국어로 표시하고,
아래 스타일 가이드를 기반으로 주제와 대상독자(${values[1] || "성인학습자"})에 맞게 구체적인 장면 묘사를 영어로 작성하세요.
스타일 가이드의 형식과 레이아웃 지시는 반드시 그대로 유지하세요.

[썸네일 스타일 가이드]
${thumb}

[본문중간 스타일 가이드]
${mid}

[CTA 스타일 가이드]
${cta}`;
    return await callAPI(prompt, 1200);
  }

  // 4c: 본문 + 이미지 프롬프트 + 해시태그 동시 생성
  async function generateBody() {
    setLoading(true); setError("");
    const finalTitle = editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "");
    const basePrompt = buildPrompt(typeId, inst, values, issueStyle);
    const prompt = basePrompt + refSuffix() + `

━━━━━━━━━━━━━━━━━━━━━━
확정 제목: "${finalTitle}"

본문만 작성하세요. 제목 분석·이미지 프롬프트는 생략.
약 1,500자의 완성된 블로그 본문을 Markdown 형식으로 작성하세요.
각 ## 섹션 제목에는 내용에 어울리는 이모지를 앞에 붙여주세요. (예: ## 📌 개요, ## 📋 주요 내용, ## ✅ 정리)
해시태그는 포함하지 마세요.`;
    try {
      const [bodyResult, imgResult] = await Promise.all([
        callAPI(prompt, 2500),
        callImagePrompts(finalTitle),
      ]);
      setBodyText(bodyResult);
      setImagePrompts(imgResult);
      await regenerateHashtags(finalTitle);
      setSubStep("4c");
    } catch(e) {
      setError("본문 생성 오류");
    } finally {
      setLoading(false);
    }
  }

  // 본문만 재생성
  async function regenerateBodyOnly() {
    setLoading(true); setError("");
    const finalTitle = editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "");
    const basePrompt = buildPrompt(typeId, inst, values, issueStyle);
    const prompt = basePrompt + refSuffix() + `

━━━━━━━━━━━━━━━━━━━━━━
확정 제목: "${finalTitle}"

본문만 작성하세요. 제목 분석·이미지 프롬프트는 생략.
약 1,500자의 완성된 블로그 본문을 Markdown 형식으로 작성하세요.
각 ## 섹션 제목에는 내용에 어울리는 이모지를 앞에 붙여주세요. (예: ## 📌 개요, ## 📋 주요 내용, ## ✅ 정리)
해시태그는 포함하지 마세요.`;
    try {
      const text = await callAPI(prompt, 2500);
      setBodyText(text);
    } catch(e) {
      setError("본문 재생성 오류");
    } finally {
      setLoading(false);
    }
  }

  // 해시태그 생성 (내부용 - finalTitle 파라미터 받음)
  async function regenerateHashtags(finalTitle) {
    const ft = finalTitle || editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "");
    const prompt = `기관: ${inst.name} | 슬로건: ${inst.slogan}
블로그 제목: "${ft}"
주제: ${values[0]} | 유형: ${blogType ? blogType.label : ""}

3단계 해시태그 생성:
① 브랜드 식별태그 (기관명 포함) 5개
② 정보/검색 태그 (제도·자격 관련) 5개
③ 전환유도 태그 (행동·감정 유발) 5개

총 15개, 줄바꿈으로 구분해 출력.`;
    const text = await callAPI(prompt, 400);
    setHashtagText(text);
  }

  // 해시태그만 재생성 (버튼용)
  async function generateHashtags() {
    setLoading(true); setError("");
    try {
      await regenerateHashtags();
    } catch(e) {
      setError("해시태그 재생성 오류");
    } finally {
      setLoading(false);
    }
  }

  // 전체 복사
  function fullContent() {
    const finalTitle = editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "");
    const cleanBody = bodyText.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
    return "# " + finalTitle + "\n\n" + cleanBody + "\n\n---\n" + hashtagText;
  }

  // 초기화
  function reset() {
    setStep(1); setInstId(null); setTypeId(null);
    setValues(["", ""]); setError(""); setIssueStyle("블로그형");
    setLinks([""]); setRefText(""); setKeyword("");
    setSubStep("4a"); setTitleCandidates([]); setSelectedTitleIdx(null);
    setEditedTitle(""); setAnalysisText(""); setImagePrompts("");
    setBodyText(""); setHashtagText(""); setCopiedImg(false); setCopiedBody(false); setCopiedAll(false); setVerifying(false);
  }

  // UI 헬퍼
  const Pill = ({ label, active, color, onClick }) => (
    <button onClick={onClick} style={{
      padding: "8px 16px", borderRadius: 20,
      border: "1.5px solid " + (active ? color : "#E2E8F0"),
      background: active ? color : "#fff",
      color: active ? "#fff" : "#64748B",
      fontSize: 13, fontWeight: 600, cursor: "pointer"
    }}>{label}</button>
  );

  const Spinner = () => (
    <span style={{
      display: "inline-block", width: 14, height: 14,
      border: "2px solid rgba(255,255,255,0.3)",
      borderTop: "2px solid #fff", borderRadius: "50%",
      animation: "spin 1s linear infinite"
    }} />
  );

  const subStepOrder = ["4a", "4c"];
  const subStepLabels = { "4a": "분석·제목", "4c": "본문·이미지·해시태그" };

  // 5단계 통합 진행 바
  const allSteps = [
    { label: "기관 선택",          active: step >= 1,               current: step === 1 },
    { label: "유형 선택",          active: step >= 2,               current: step === 2 },
    { label: "내용 입력",          active: step >= 3,               current: step === 3 },
    { label: "분석·제목",          active: step === 4,              current: step === 4 && subStep === "4a" },
    { label: "본문·이미지·해시태그", active: step === 4 && subStep === "4c", current: step === 4 && subStep === "4c" },
  ];

  const btnPrimary = (disabled) => ({
    flex: 1, padding: "12px 18px", borderRadius: 10, border: "none",
    background: disabled ? "#CBD5E1" : accentColor,
    color: "#fff", fontSize: 14, fontWeight: 700,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", gap: 8
  });
  const btnSecondary = (color) => ({
    padding: "11px 16px", borderRadius: 10,
    border: "1.5px solid " + (color || "#E2E8F0"),
    background: "#fff", color: color || "#64748B",
    fontSize: 13, fontWeight: 600, cursor: "pointer"
  });

  return (
    <div style={{ fontFamily: "'Noto Sans KR','Apple SD Gothic Neo',sans-serif", minHeight: "100vh", background: "#F1F5F9" }}>



      {/* 헤더 */}
      <div style={{
        background: inst ? ("linear-gradient(135deg," + inst.color + "EE," + inst.colorDark + ")") : "linear-gradient(135deg,#FCA5A5,#F9A8C9)",
        padding: "20px 24px 18px", color: "#fff"
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
              <span style={{ fontSize: 20 }}>✍️</span>
              <h1 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>(주)배움 블로그 작성기</h1>
              {inst && <span style={{ background: "rgba(255,255,255,0.25)", borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 700 }}>{inst.short}</span>}
            </div>
            <p style={{ margin: 0, fontSize: 12, opacity: 0.8 }}>브랜드 가이드·작성 지침 완전 반영 | SEO·GEO 최적화</p>
          </div>
          {step > 1 && (
            <button onClick={reset} style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "6px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer" }}>
              처음으로
            </button>
          )}
        </div>
      </div>

      {/* 진행 바 */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E2E8F0", padding: "14px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            {allSteps.map((s, i) => {
              const isLast = i === allSteps.length - 1;
              const lineActive = allSteps[i + 1] && (allSteps[i + 1].active || allSteps[i + 1].current);
              return (
                <React.Fragment key={i}>
                  {/* 원 + 라벨 */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, flexShrink: 0 }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: s.current ? accentColor : s.active ? accentColor + "99" : "#E2E8F0",
                      color: s.active ? "#fff" : "#94A3B8",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 700,
                      boxShadow: s.current ? ("0 0 0 3px " + accentColor + "33") : "none",
                      transition: "all 0.3s"
                    }}>
                      {s.active && !s.current ? "✓" : i + 1}
                    </div>
                    <span style={{ fontSize: 9, color: s.current ? "#334155" : s.active ? "#64748B" : "#94A3B8", fontWeight: s.current ? 700 : 400, whiteSpace: "nowrap" }}>{s.label}</span>
                  </div>
                  {/* 연결선 */}
                  {!isLast && (
                    <div style={{ flex: 1, height: 2, marginTop: 11, background: lineActive ? accentColor + "88" : "#E2E8F0", transition: "background 0.3s" }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 16px" }}>

        {/* STEP 1: 기관 선택 */}
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1E293B", marginBottom: 16 }}>기관을 선택해주세요</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {Object.values(INST).map(i => (
                <button key={i.id} onClick={() => { setInstId(i.id); setStep(2); }}
                  style={{
                    background: "#fff", border: "2px solid " + i.color + "22", borderRadius: 14,
                    padding: "22px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
                    cursor: "pointer", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = i.color; e.currentTarget.style.boxShadow = "0 4px 16px " + i.color + "22"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = i.color + "22"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)"; }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: i.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🏫</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: i.color, marginBottom: 4 }}>{i.name}</div>
                    <div style={{ fontSize: 11, color: "#64748B", lineHeight: 1.5 }}>"{i.slogan}"</div>
                    <div style={{ marginTop: 6, display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
                      {i.keywords.map(k => (
                        <span key={k} style={{ fontSize: 10, background: i.bg, color: i.color, borderRadius: 10, padding: "2px 7px", fontWeight: 600 }}>{k}</span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: 유형 선택 */}
        {step === 2 && inst && (
          <div>
            <div style={{ background: inst.bg, borderRadius: 10, padding: "10px 14px", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: inst.color }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: inst.color }}>{inst.name}</span>
              <span style={{ fontSize: 12, color: inst.textColor, opacity: 0.7 }}>— 블로그 유형을 선택해주세요</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {BLOG_TYPES.map(t => (
                <button key={t.id} onClick={() => { setTypeId(t.id); setValues(["", ""]); setStep(3); }}
                  style={{
                    background: "#fff", border: "2px solid #E2E8F0", borderRadius: 12,
                    padding: "18px 16px", textAlign: "left", cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = inst.color; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; }}
                >
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{t.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1E293B", marginBottom: 4 }}>{t.label}</div>
                  <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5 }}>{t.desc}</div>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} style={{ marginTop: 16, ...btnSecondary() }}>← 이전</button>
          </div>
        )}

        {/* STEP 3: 내용 입력 */}
        {step === 3 && inst && blogType && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: inst.bg, borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>{blogType.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: inst.color }}>{inst.name} · {blogType.label}</span>
            </div>

            {/* 입력 필드 */}
            {blogType.inputs.filter(inp => inp !== "기관명" && inp !== "문체 유형").map((label, idx) => (
              <div key={idx}>
                <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", display: "block", marginBottom: 7 }}>
                  {label} <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <input
                  value={values[idx] || ""}
                  onChange={e => { const v = [...values]; v[idx] = e.target.value; setValues(v); }}
                  placeholder={blogType.placeholder ? (blogType.placeholder[idx] || "") : ""}
                  style={{
                    width: "100%", padding: "11px 14px", borderRadius: 9,
                    border: "1.5px solid " + (values[idx] ? inst.color : "#E2E8F0"),
                    fontSize: 14, color: "#1E293B", outline: "none",
                    boxSizing: "border-box", background: "#fff"
                  }}
                />
              </div>
            ))}

            {/* 문체 선택 (이슈형만) */}
            {typeId === "issue" && (
              <div>
                <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", display: "block", marginBottom: 8 }}>문체 유형</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {ISSUE_STYLES.map(s => (
                    <Pill key={s} label={s} active={issueStyle === s} color={inst.color} onClick={() => setIssueStyle(s)} />
                  ))}
                </div>
              </div>
            )}

            {/* 키워드 */}
            <div>
              <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", display: "block", marginBottom: 7 }}>
                🎯 주요 키워드 · 작성 방향 <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 400 }}>(선택)</span>
              </label>
              <input
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="예) 2026년 개정, 온라인 실습, 비학위과정..."
                style={{
                  width: "100%", padding: "11px 14px", borderRadius: 9,
                  border: "1.5px solid " + (keyword.trim() ? inst.color : "#E2E8F0"),
                  fontSize: 13, color: "#1E293B", outline: "none",
                  boxSizing: "border-box", background: "#fff"
                }}
              />
            </div>

            {/* 참고 링크 */}
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>
                  🔗 참고 링크 <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 400 }}>(선택 · 최대 5개)</span>
                </label>
                {links.length < 5 && (
                  <button onClick={addLink} style={{ fontSize: 11, color: inst.color, background: inst.bg, border: "1px solid " + inst.color + "44", borderRadius: 6, padding: "3px 10px", cursor: "pointer", fontWeight: 700 }}>+ 추가</button>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {links.map((link, i) => (
                  <div key={i} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <input
                      value={link}
                      onChange={e => updateLink(i, e.target.value)}
                      placeholder="https://..."
                      style={{
                        flex: 1, padding: "10px 13px", borderRadius: 8,
                        border: "1.5px solid " + (link.trim() ? inst.color : "#E2E8F0"),
                        fontSize: 13, color: "#1E293B", outline: "none", background: "#fff"
                      }}
                    />
                    {links.length > 1 && (
                      <button onClick={() => removeLink(i)} style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid #E2E8F0", background: "#F8FAFC", color: "#94A3B8", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>×</button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 참고 자료 */}
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>
                  📋 참고 자료 <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 400 }}>(선택 · 텍스트 붙여넣기)</span>
                </label>
                {refText && <button onClick={() => setRefText("")} style={{ fontSize: 11, color: "#94A3B8", background: "none", border: "none", cursor: "pointer" }}>지우기</button>}
              </div>
              <textarea
                value={refText}
                onChange={e => setRefText(e.target.value)}
                placeholder={"이벤트 공지, 정책 문서, 통계 수치 등 복사해서 붙여넣으세요. (최대 4,000자)"}
                style={{
                  width: "100%", minHeight: 110, padding: "11px 14px", borderRadius: 9,
                  border: "1.5px solid " + (refText.trim() ? inst.color : "#E2E8F0"),
                  fontSize: 13, color: "#1E293B", outline: "none", resize: "vertical",
                  boxSizing: "border-box", lineHeight: 1.7, background: "#fff", fontFamily: "inherit"
                }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                <span style={{ fontSize: 11, color: refText.length > 3800 ? "#EF4444" : "#94A3B8" }}>{refText.length} / 4,000</span>
              </div>
            </div>

            {/* 브랜드 미리보기 */}
            <div style={{ background: "#F8FAFC", borderRadius: 10, padding: "12px 14px", border: "1px solid #E2E8F0" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", marginBottom: 6 }}>📌 적용 브랜드 지침</div>
              <div style={{ fontSize: 12, color: "#475569" }}>
                <span style={{ background: inst.color + "15", color: inst.color, borderRadius: 4, padding: "1px 6px", fontWeight: 700, marginRight: 6 }}>{inst.slogan}</span>
                {inst.tone.slice(0, 50)}...
              </div>
              <div style={{ marginTop: 6, fontSize: 11, color: "#94A3B8" }}>CTA: "{inst.cta}" · 금지 표현 자동 차단 · 공식 출처 2개 이상</div>
            </div>

            {error && <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, padding: "10px 14px", color: "#DC2626", fontSize: 13 }}>{error}</div>}

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setStep(2)} style={btnSecondary()}>← 이전</button>
              <button onClick={generateTitles} disabled={!values[0] || loading} style={btnPrimary(!values[0] || loading)}>
                {loading ? <><Spinner />분석 중...</> : "✨ 분석 · 제목 생성 시작"}
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: 서브스텝 */}
        {step === 4 && inst && blogType && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* 4a: 제목 선택 */}
            {subStep === "4a" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>🔍</span>
                  <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1E293B" }}>제목을 선택하고 필요하면 수정·검증하세요</h3>
                </div>

                {/* 제목 카드 목록 */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {titleCandidates.length > 0 ? titleCandidates.map((t, i) => (
                    <div key={i}
                      onClick={() => { setSelectedTitleIdx(i); setEditedTitle(t.title); }}
                      style={{
                        border: "2px solid " + (selectedTitleIdx === i ? inst.color : t.isCustom ? inst.color + "66" : "#E2E8F0"),
                        borderRadius: 10, padding: "12px 14px", cursor: "pointer",
                        background: selectedTitleIdx === i ? inst.bg : t.isCustom ? inst.color + "08" : "#fff",
                        position: "relative"
                      }}
                    >
                      {t.isCustom && (
                        <span style={{ position: "absolute", top: 8, right: 10, fontSize: 10, background: inst.color, color: "#fff", borderRadius: 4, padding: "1px 6px", fontWeight: 700 }}>✏️ 내 제목</span>
                      )}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 1,
                          background: selectedTitleIdx === i || t.isCustom ? inst.color : "#E2E8F0",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 11, fontWeight: 700, color: selectedTitleIdx === i || t.isCustom ? "#fff" : "#94A3B8"
                        }}>
                          {t.isCustom ? "★" : i + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13.5, fontWeight: t.isCustom ? 700 : 600, color: "#1E293B", lineHeight: 1.5 }}>{t.title}</div>
                          <div style={{ marginTop: 5, display: "flex", gap: 6, flexWrap: "wrap" }}>
                            {t.tag && <span style={{ fontSize: 11, color: inst.color, background: inst.color + "15", borderRadius: 4, padding: "1px 7px" }}>{t.tag}</span>}
                            {t.feedback && <span style={{ fontSize: 11, color: "#64748B", background: "#F1F5F9", borderRadius: 4, padding: "1px 7px" }}>{t.feedback}</span>}
                            {t.isCustom && <span style={{ fontSize: 11, color: "#10B981", background: "#ECFDF5", borderRadius: 4, padding: "1px 7px" }}>검증 완료</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div style={{ background: "#F8FAFC", borderRadius: 10, padding: 16, fontSize: 13, color: "#64748B", whiteSpace: "pre-wrap" }}>{analysisText}</div>
                  )}
                </div>

                {/* 편집 + 검증 */}
                <div style={{ background: "#F8FAFC", borderRadius: 12, padding: 14, border: "1px solid #E2E8F0" }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 8 }}>
                    ✏️ 제목 직접 수정 후 검증
                    <span style={{ fontWeight: 400, color: "#94A3B8", marginLeft: 6 }}>— 검증하면 ★번으로 목록 맨 위에 추가돼요</span>
                  </label>
                  <div style={{ display: "flex", gap: 8 }}>
                    <input
                      value={editedTitle}
                      onChange={e => setEditedTitle(e.target.value)}
                      placeholder="제목을 선택하거나 직접 입력하세요"
                      style={{
                        flex: 1, padding: "11px 14px", borderRadius: 9,
                        border: "1.5px solid " + (editedTitle ? inst.color : "#E2E8F0"),
                        fontSize: 13.5, fontWeight: 600, color: "#1E293B",
                        outline: "none", boxSizing: "border-box", background: "#fff"
                      }}
                    />
                    <button
                      onClick={verifyTitle}
                      disabled={!editedTitle.trim() || verifying}
                      style={{
                        padding: "11px 16px", borderRadius: 9, border: "none", flexShrink: 0,
                        background: !editedTitle.trim() || verifying ? "#CBD5E1" : inst.colorDark,
                        color: "#fff", fontSize: 13, fontWeight: 700,
                        cursor: !editedTitle.trim() || verifying ? "not-allowed" : "pointer",
                        display: "flex", alignItems: "center", gap: 6
                      }}
                    >
                      {verifying ? <><Spinner />분석 중</> : "🔍 검증"}
                    </button>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                    <span style={{ fontSize: 11, color: "#94A3B8" }}>권장 35~55자</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: editedTitle.length > 55 ? "#EF4444" : editedTitle.length >= 35 ? "#10B981" : "#94A3B8" }}>{editedTitle.length}자</span>
                  </div>
                </div>

                {error && <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, padding: "10px 14px", color: "#DC2626", fontSize: 13 }}>{error}</div>}

                <div style={{ display: "flex", gap: 10 }}>
                  <button onClick={() => setStep(3)} style={btnSecondary()}>← 다시 입력</button>
                  <button onClick={generateTitles} disabled={loading} style={btnSecondary(inst.color)}>🔄 재생성</button>
                  <button onClick={generateBody} disabled={selectedTitleIdx === null || loading} style={btnPrimary(selectedTitleIdx === null || loading)}>
                    {loading ? <><Spinner />생성 중...</> : "본문 생성 →"}
                  </button>
                </div>
              </div>
            )}

            {/* 4c: 확정 제목 + 이미지 프롬프트 + 본문 + 해시태그 */}
            {subStep === "4c" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                {/* 확정 제목 */}
                <div style={{ background: inst.bg, borderRadius: 12, padding: "14px 18px", border: "1px solid " + inst.color + "44", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 16 }}>📌</span>
                  <div>
                    <div style={{ fontSize: 11, color: inst.color, fontWeight: 700, marginBottom: 3 }}>확정 제목</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#1E293B" }}>
                      {editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "")}
                    </div>
                  </div>
                </div>

                {/* 이미지 프롬프트 섹션 */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 16 }}>🖼️</span>
                      <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1E293B" }}>이미지 프롬프트</h3>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => {
                        const copy = async () => {
                          try { await navigator.clipboard.writeText(imagePrompts); }
                          catch { const el = document.createElement("textarea"); el.value = imagePrompts; document.body.appendChild(el); el.select(); document.execCommand("copy"); document.body.removeChild(el); }
                          setCopiedImg(true); setTimeout(() => setCopiedImg(false), 2000);
                        }; copy();
                      }} style={{ padding: "5px 12px", borderRadius: 8, background: copiedImg ? "#10B981" : "#F1F5F9", color: copiedImg ? "#fff" : "#64748B", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                        {copiedImg ? "✓ 복사됨" : "📋 복사"}
                      </button>
                      <button onClick={generateImagePrompts} disabled={loading} style={{ padding: "5px 12px", borderRadius: 8, background: "#fff", color: inst.color, border: "1.5px solid " + inst.color, fontSize: 12, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer" }}>
                        {loading ? "생성 중..." : "🔄 재생성"}
                      </button>
                    </div>
                  </div>
                  <div style={{ background: "#fff", borderRadius: 12, border: "1px solid " + inst.color + "33", padding: 18, whiteSpace: "pre-wrap", fontSize: 12.5, lineHeight: 1.8, color: "#334155", maxHeight: 260, overflowY: "auto" }}>
                    {imagePrompts || <span style={{ color: "#94A3B8" }}>생성 중...</span>}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 16 }}>📝</span>
                      <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1E293B" }}>본문</h3>
                      <span style={{ fontSize: 11, color: "#94A3B8" }}>{instId === "baeoom" ? "나눔명조" : instId === "baeron" ? "나눔고딕" : "나눔스퀘어"}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => {
                        const copy = async () => {
                          try { await navigator.clipboard.writeText(bodyText); }
                          catch { const el = document.createElement("textarea"); el.value = bodyText; document.body.appendChild(el); el.select(); document.execCommand("copy"); document.body.removeChild(el); }
                          setCopiedBody(true); setTimeout(() => setCopiedBody(false), 2000);
                        }; copy();
                      }} style={{ padding: "5px 12px", borderRadius: 8, background: copiedBody ? "#10B981" : "#F1F5F9", color: copiedBody ? "#fff" : "#64748B", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                        {copiedBody ? "✓ 복사됨" : "📋 복사"}
                      </button>
                      <button onClick={regenerateBodyOnly} disabled={loading} style={{ padding: "5px 12px", borderRadius: 8, background: "#fff", color: inst.color, border: "1.5px solid " + inst.color, fontSize: 12, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer" }}>
                        {loading ? "생성 중..." : "🔄 재생성"}
                      </button>
                    </div>
                  </div>
                  <div style={{
                    background: "#fff", borderRadius: 12, border: "1px solid " + inst.color + "33",
                    padding: "24px 28px", maxHeight: 680, overflowY: "auto", color: "#1E293B",
                    fontFamily: instId === "baeoom" ? "'Nanum Myeongjo', serif" : instId === "baeron" ? "'Nanum Gothic', sans-serif" : "'Nanum Square', sans-serif",
                  }}>
                    {bodyText.split("\n").map((line, i) => {
                      const clean = line.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
                      if (clean.startsWith("## ")) return <h2 key={i} style={{ fontSize: 24, fontWeight: 700, margin: "20px 0 10px", color: "#1E293B", fontFamily: "inherit" }}>{clean.replace("## ", "")}</h2>;
                      if (clean.startsWith("# ")) return <h1 key={i} style={{ fontSize: 24, fontWeight: 800, margin: "0 0 16px", color: inst.color, fontFamily: "inherit" }}>{clean.replace("# ", "")}</h1>;
                      if (clean.startsWith("### ")) return <h3 key={i} style={{ fontSize: 19, fontWeight: 700, margin: "16px 0 8px", color: "#334155", fontFamily: "inherit" }}>{clean.replace("### ", "")}</h3>;
                      if (clean.startsWith("---")) return <hr key={i} style={{ border: "none", borderTop: "1px solid #E2E8F0", margin: "16px 0" }} />;
                      if (clean.trim() === "") return <div key={i} style={{ height: 8 }} />;
                      return <p key={i} style={{ fontSize: 19, lineHeight: 1.9, margin: "0 0 6px", fontFamily: "inherit" }}>{clean}</p>;
                    })}
                  </div>
                </div>

                {/* 해시태그 섹션 */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 16 }}>🏷️</span>
                      <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1E293B" }}>해시태그</h3>
                    </div>
                    <button onClick={generateHashtags} disabled={loading} style={{ padding: "5px 12px", borderRadius: 8, background: "#fff", color: inst.color, border: "1.5px solid " + inst.color, fontSize: 12, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer" }}>
                      {loading ? "생성 중..." : "🔄 재생성"}
                    </button>
                  </div>
                  <div style={{ background: "#fff", borderRadius: 12, border: "1px solid " + inst.color + "33", padding: "14px 18px" }}>
                    {hashtagText
                      ? <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {hashtagText.split(/\s+/).filter(t => t.startsWith("#")).map((tag, i) => (
                            <span key={i} style={{ fontSize: 13, color: inst.color, background: inst.color + "12", borderRadius: 20, padding: "3px 10px", fontWeight: 600 }}>{tag}</span>
                          ))}
                        </div>
                      : <span style={{ color: "#94A3B8", fontSize: 13 }}>해시태그 생성 중...</span>
                    }
                  </div>
                </div>

                {/* 전체 복사 */}
                <div style={{ background: inst.bg, borderRadius: 12, padding: 16, border: "1px solid " + inst.color + "22" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: inst.color, marginBottom: 8 }}>🎉 완성! 전체 콘텐츠 복사</div>
                  <div style={{ fontSize: 12, color: inst.textColor, marginBottom: 12 }}>제목 + 본문 + 해시태그가 모두 포함된 최종본을 복사합니다.</div>
                  <button onClick={() => {
                    const content = fullContent();
                    const copy = async () => {
                      try { await navigator.clipboard.writeText(content); }
                      catch { const el = document.createElement("textarea"); el.value = content; document.body.appendChild(el); el.select(); document.execCommand("copy"); document.body.removeChild(el); }
                      setCopiedAll(true); setTimeout(() => setCopiedAll(false), 2500);
                    }; copy();
                  }} style={{ width: "100%", padding: 12, borderRadius: 10, border: "none", background: inst.color, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
                    {copiedAll ? "✓ 복사 완료!" : "📋 전체 복사 (제목+본문+해시태그)"}
                  </button>
                </div>

                {error && <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, padding: "10px 14px", color: "#DC2626", fontSize: 13 }}>{error}</div>}

                <div style={{ display: "flex", gap: 10 }}>
                  <button onClick={() => setSubStep("4a")} style={btnSecondary()}>← 제목으로</button>
                  <button onClick={reset} style={{ ...btnSecondary(), flex: 1 }}>✍️ 새 글 작성</button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Myeongjo&family=Nanum+Square&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
