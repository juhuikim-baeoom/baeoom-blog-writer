import React, { useState, useEffect } from "react";

// ══════════════════════════════════════════════════════════════
// Supabase 설정
// ══════════════════════════════════════════════════════════════
const SB_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SB_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

async function sbFetch(path, options = {}) {
  const res = await fetch(SB_URL + "/rest/v1" + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      apikey: SB_KEY,
      Authorization: "Bearer " + SB_KEY,
      ...(options.headers || {}),
    },
  });
  if (!res.ok) throw new Error(await res.text());
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// ══════════════════════════════════════════════════════════════
// 기관 데이터
// ══════════════════════════════════════════════════════════════
const INST = {
  baeoom: {
    id: "baeoom", name: "배움사이버평생교육원", short: "배움",
    color: "#F7941D", colorDark: "#d4790f", bg: "#FFF7EE", textColor: "#7a3d00",
    slogan: "배우는 즐거움", theme: "기초와 신뢰의 배움",
    keywords: ["기초", "안정", "신뢰"],
    tone: "친근하고 명확한 설명형. 해요체 중심. 따뜻함·안정 감정 톤.",
    cta: "지금 시작하기", ctaMsg: "배움사이버평생교육원과 함께, 지금 바로 시작해 보세요.",
    brandMsg: "배우는 즐거움으로 시작되는 배움. 누구나 쉽게 시작할 수 있는 평생학습.",
    address: "서울특별시 강남구 언주로 727, 7층 (트리스빌딩)",
    tel: "1661-9149", url: "https://career.baeoom.com/",
    hashtags: "#배움사이버평생교육원 #배우는즐거움 #기초부터차근히 #학점은행제 #평생교육원",
    imageStyle: {
      thumb: `A square illustration with a photorealistic style. Warm, sunlit interior with orange accent tones. Korean adult learner in a cozy, trustworthy setting. Natural morning light, shallow depth of field, high quality DSLR photography feel. Korean text {TITLE} displayed in a straight horizontal line, inside a semi-transparent white rectangular overlay box, centered in the image, straight and flat layout, no curve, no arc. Size: 750x750 pixels, square format.`,
      mid: `Generate an image without any text or letters. Photorealistic lifestyle photography. A Korean adult woman in her 30s~40s in a warm, bright environment related to {TOPIC}. Orange color accents, cozy and trustworthy atmosphere. Natural lighting, high resolution. Size: 1200x900 pixels, landscape format.`,
      cta: `Generate an image without any text or letters. Photorealistic style. A smiling Korean woman at a bright home desk or cafe, cheerfully engaged with learning. Warm orange tones, welcoming atmosphere. Size: 1200x900 pixels, landscape format.`,
    },
  },
  baeron: {
    id: "baeron", name: "배론원격평생교육원", short: "배론",
    color: "#0076BE", colorDark: "#005a8e", bg: "#EEF6FF", textColor: "#003366",
    slogan: "배우며 논하다", theme: "깊이 배우고 함께 사유하는 배움",
    keywords: ["탐구", "성찰", "성장"],
    tone: "진중하고 지적인 사유 중심형. 입니다·합니다체. 통찰·분석 감정 톤.",
    cta: "과정 살펴보기", ctaMsg: "배론원격평생교육원에서 배움의 깊이를 경험해 보시기 바랍니다.",
    brandMsg: "배우며 논하다, 생각이 자라는 배움.",
    address: "서울특별시 강서구 양천로 583, A-710호 (염창동, 우림블루나인비즈니스센터)",
    tel: "1688-2465", url: "https://www.baeron.com/",
    hashtags: "#배론원격평생교육원 #배우며논하다 #생각이자라는배움 #학점은행제 #원격평생교육",
    imageStyle: {
      thumb: `A square image divided into two sections. Top section: a navy blue (#0076BE) full-width banner strip occupying about 25% of the top, containing large bold Korean text {TITLE} in white, centered. Bottom section: a clean line drawing illustration of a Korean adult learner related to {TOPIC}. Soft navy blue pastel background. Black outline strokes, flat colors, no shading or gradients. Size: 750x750 pixels, square format.`,
      mid: `Generate an image without any text or letters. Clean line drawing illustration style. A Korean adult in a quiet study setting, engaged with {TOPIC}. Books, notebook, pen as props. Soft navy blue pastel background. Black outline strokes, flat colors, no gradients. Calm and intellectual mood. Size: 1200x900 pixels, landscape format.`,
      cta: `Generate an image without any text or letters. Clean line drawing illustration. A Korean adult looking forward with a confident expression, educational items around them. Navy blue pastel tones, thoughtful and inspiring mood. Black outline strokes, flat editorial style. Size: 1200x900 pixels, landscape format.`,
    },
  },
  hub: {
    id: "hub", name: "허브원격평생교육원", short: "허브",
    color: "#6CB33F", colorDark: "#4e8a2b", bg: "#F0F8E8", textColor: "#2d5016",
    slogan: "배움으로 나아가다", theme: "변화를 배우는 새로운 시작",
    keywords: ["변화", "도전", "확장"],
    tone: "밝고 공감형. 감성적·실천 중심. 유연함·활기 감정 톤.",
    cta: "나의 변화 시작하기", ctaMsg: "허브원격평생교육원과 함께 변화의 첫 걸음을 내딛어 보세요.",
    brandMsg: "배움으로 나아가다. 지금, 나의 변화를 배우다.",
    address: "서울특별시 강서구 양천로 583, 에이-510호 (염창동, 우림블루나인비즈니스센터)",
    tel: "1661-4453", url: "https://www.hubedu.net/",
    hashtags: "#허브원격평생교육원 #배움으로나아가다 #나의새로운시작 #학점은행제 #커리어변화",
    imageStyle: {
      thumb: `A square image divided into left and right sections. Left section (40% width): bright green (#6CB33F) background, large bold Korean text {TITLE} in white, vertically centered. Right section (60% width): a 3D rendered illustration of a cheerful Korean woman in her 30s related to {TOPIC}, smiling brightly. Soft light green pastel background. Rounded glossy 3D character style. Size: 750x750 pixels, square format.`,
      mid: `Generate an image without any text or letters. 3D rendered illustration style. A cheerful Korean adult character engaged with {TOPIC}. Bright green (#6CB33F) color accents. Soft pastel background, rounded glossy 3D character style. Energetic and motivating mood. Size: 1200x900 pixels, landscape format.`,
      cta: `Generate an image without any text or letters. 3D rendered illustration. A Korean adult character looking forward with an energetic, confident expression. Green color tones, dynamic composition. Cute rounded 3D style, bright and action-oriented mood. Size: 1200x900 pixels, landscape format.`,
    },
  },
};

const BLOG_TYPES = [
  { id: "course", label: "과정형", icon: "📚", desc: "자격증·과정 소개, 취득 방법 안내", inputs: ["기관명", "과정/자격증명", "대상 독자"], placeholder: ["예) 사회복지사 2급", "예) 직장인 30대 여성"] },
  { id: "info", label: "정보형", icon: "📋", desc: "정책·법령·통계 기반 공신력 콘텐츠", inputs: ["기관명", "정책·법령·주제", "대상 독자"], placeholder: ["예) 학점은행제 2025 개정", "예) 성인학습자, 직장인"] },
  { id: "issue", label: "시기·이슈형", icon: "📰", desc: "절기·행사·사회 이슈와 배움 연결", inputs: ["기관명", "시기·이슈", "대상 독자", "문체 유형"], placeholder: ["예) 봄, 입학시즌, 수능 후", "예) 2030 여성, 취준생"] },
  { id: "promo", label: "프로모션형", icon: "🎁", desc: "이벤트·행사 공식 안내 콘텐츠", inputs: ["기관명", "이벤트 유형", "이벤트 주제"], placeholder: ["예) 경품 이벤트, 기대평 이벤트", "예) 봄맞이 수강신청 이벤트"] },
];

const ISSUE_STYLES = ["감성 에세이형", "블로그형", "정보 전달형"];

// ══════════════════════════════════════════════════════════════
// 프롬프트 생성기
// ══════════════════════════════════════════════════════════════
function buildPrompt(typeId, inst, values, issueStyle) {
  const isBaeoom = inst.id === "baeoom";
  const isBaeron = inst.id === "baeron";
  const isHub    = inst.id === "hub";

  const base = `[기관 정보]
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
- 공식 출처 최소 2개 이상 포함
- 기관 공식 URL 하이퍼링크 1회 이상 포함`;

  const courseBody = isBaeron
    ? `① Q/A형 서론 ② 문제 제기 ③ 핵심 논거 3가지 ④ 반론과 재반론 ⑤ 배론 관점 메시지 ⑥ 성찰 유도 질문 ⑦ 요약 카드 ⑧ CTA ⑨ 기관 기본정보`
    : isHub
    ? `① Q/A형 서론 ② 공감 도입 ③ 변화 스토리 ④ 제도·정책 근거 ⑤ 실천 가이드 ⑥ 허브 브랜드 메시지 ⑦ 요약 카드 ⑧ CTA ⑨ 기관 기본정보`
    : `① Q/A형 서론(160자 이내 메타 디스크립션 겸용) ② 과정·자격 설명(트렌드·시의성 연결 가능 시 도입부 반영) ③ 제도·정책 근거(출처·연도 명시 필수) ④ 비교·사례·통계 ⑤ 반론 대응 문장 ⑥ FAQ 섹션(Q: / A: 형식 3문항, GEO 스니펫 대응) ⑦ 배움 브랜드 메시지 ⑧ 요약 카드 ⑨ CTA ⑩ 기관 기본정보`;

  const infoBody = isBaeron
    ? `① Q/A형 서론 ② 칼럼형 현황 진단 ③ 쟁점 분석 2~3가지 ④ 정책 근거·인용·출처 ⑤ 요약 카드 ⑥ 성찰 질문 ⑦ 배론 관점 메시지 ⑧ CTA ⑨ 기관 기본정보`
    : isHub
    ? `① Q/A형 서론 ② 트렌드 연결 ③ 핵심 포인트 ④ 정책 근거·출처 ⑤ 내 이야기로 ⑥ 요약 카드 ⑦ 허브 브랜드 메시지 ⑧ CTA ⑨ 기관 기본정보`
    : `① Q/A형 서론 ② 배경 및 의의 설명 ③ 주요 내용·핵심 포인트 ④ 정책 근거·인용·출처 ⑤ 요약 카드 ⑥ 학습자 사례 ⑦ 배움 브랜드 메시지 ⑧ CTA ⑨ 기관 기본정보`;

  const issueBody = isBaeron
    ? `① Q/A형 서론 ② 인용 또는 통계 ③ 사유의 전개 ④ 배움과의 연결 ⑤ 배론 철학 메시지 ⑥ 성찰 질문 ⑦ CTA ⑧ 기관 기본정보`
    : isHub
    ? `① Q/A형 서론 ② 공감 도입 ③ 이슈 설명 ④ 변화 계기 스토리 ⑤ 허브 브랜드 메시지 ⑥ 관련 과정 안내 ⑦ CTA ⑧ 기관 기본정보`
    : `① Q/A형 서론 ② 시기 공감 도입 ③ 이슈 설명 ④ 배움 연결 단락 ⑤ 배움 브랜드 메시지 ⑥ 관련 과정 안내 ⑦ CTA ⑧ 기관 기본정보`;

  const promoBody = isBaeron
    ? `① Q/A형 서론 ② 이벤트 취지·의미 ③ 기본 정보 ④ 참여 방법 ⑤ 경품·혜택·발표 ⑥ 유의사항 ⑦ 요약 카드 ⑧ 배론 브랜드 메시지 ⑨ CTA ⑩ 기관 기본정보`
    : isHub
    ? `① Q/A형 서론 ② 설렘 감성 도입 ③ 기본 정보 ④ 참여 방법 ⑤ 경품·혜택·발표 ⑥ 유의사항 ⑦ 요약 카드 ⑧ 허브 브랜드 메시지 ⑨ CTA ⑩ 기관 기본정보`
    : `① Q/A형 서론 ② 이벤트 배경·취지 ③ 기본 정보 ④ 참여 방법 ⑤ 혜택 명확 나열 ⑥ 유의사항 ⑦ 요약 카드 ⑧ 배움 브랜드 메시지 ⑨ CTA ⑩ 기관 기본정보`;

  const titleJson = `반드시 아래 JSON 배열 형식으로만 출력:\n[\n  {"title": "제목1", "tag": "정보형·GEO✓"},\n  {"title": "제목2", "tag": "전환형·SEO✓"},\n  {"title": "제목3", "tag": "과정형·GEO✓"},\n  {"title": "제목4", "tag": "감성형·GEO△"},\n  {"title": "제목5", "tag": "정보형·SEO✓"},\n  {"title": "제목6", "tag": "전환형·GEO✓"},\n  {"title": "제목7", "tag": "과정형·SEO✓"}\n]\n★ 추천: 번호와 근거 1줄`;

  if (typeId === "course") return `당신은 ㈜배움 소속 원격평생교육원 전문 블로그 콘텐츠 라이터입니다.\n\n${base}\n\n[입력값]\n- 과정/자격증명: ${values[0]}\n- 대상 독자: ${values[1]}\n\n[SEO·GEO 작성 지침]\n- H1 제목에 핵심 키워드(과정/자격증명) 반드시 포함\n- 도입부 첫 단락을 160자 이내 메타 디스크립션 대용으로 작성\n- 본문 내 핵심 키워드 자연스럽게 3회 이상 반복\n- 공식 출처(기관명·연도 명시) 및 수치 근거 최소 2개 포함\n- FAQ 섹션(Q: / A: 형식, 3문항 이상) 본문 내 반드시 포함\n- 참고 자료에 트렌드·시의성 키워드가 있을 경우 도입부에 자연스럽게 반영\n\n## 1단계. 검색자 심리 분석\n## 2단계. SEO·GEO 최적화 제목 7개\n${titleJson}\n## 3단계. 자료 조사 패킷\n## 4단계. 본문 (약 1,500자)\n${courseBody}\n\n${inst.hashtags}`;

  if (typeId === "info") return `당신은 ㈜배움 소속 원격평생교육원 전문 블로그 콘텐츠 라이터입니다.\n\n${base}\n\n[입력값]\n- 정책·법령·주제: ${values[0]}\n- 대상 독자: ${values[1]}\n\n## 1단계. 정책 주제 분류\n## 2단계. GEO 인식형 제목 7개\n${titleJson}\n## 3단계. 정책 인용·출처 패킷\n## 4단계. 본문 (약 1,500자)\n${infoBody}\n\n${inst.hashtags}`;

  if (typeId === "issue") {
    const sg = { "감성 에세이형": "서정적·묘사 중심·철학적 어조.", "블로그형": "해요체 중심, 짧은 단락, 자연스러운 대화체.", "정보 전달형": "객관적·단정한 어조, 입니다·됩니다 중심." }[issueStyle] || "";
    return `당신은 ㈜배움 소속 원격평생교육원 전문 블로그 콘텐츠 라이터입니다.\n\n${base}\n\n[입력값]\n- 시기·이슈: ${values[0]}\n- 대상 독자: ${values[1]}\n- 문체 유형: ${issueStyle}\n- 문체 규칙: ${sg}\n\n## 1단계. 시기·이슈 의미 분석\n## 2단계. GEO 인식형 제목 5개\n${titleJson}\n## 3단계. 본문 (약 1,500자)\n${issueBody}\n\n${inst.hashtags}`;
  }

  if (typeId === "promo") return `당신은 ㈜배움 소속 원격평생교육원 전문 블로그 콘텐츠 라이터입니다.\n\n${base}\n\n[입력값]\n- 이벤트 유형: ${values[0]}\n- 이벤트 주제: ${values[1]}\n\n## 1단계. 이벤트 유형 분류\n## 2단계. GEO 인식형 제목 7개\n${titleJson}\n## 3단계. 이미지 삽입 위치 안내\n## 4단계. 본문 (약 1,500자)\n${promoBody}\n\n${inst.hashtags}`;

  return "";
}


// ══════════════════════════════════════════════════════════════
// 본문 전용 프롬프트 생성기 (1~3단계 분석 없이 본문만)
// ══════════════════════════════════════════════════════════════
function buildBodyPrompt(typeId, inst, values, issueStyle) {
  const isBaeoom = inst.id === 'baeoom';
  const isBaeron = inst.id === 'baeron';
  const isHub    = inst.id === 'hub';

  const base = `[기관 정보]
- 기관명: ${inst.name}
- 슬로건: "${inst.slogan}" / 테마: ${inst.theme}
- 핵심 키워드: ${inst.keywords.join('·')}
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
- 공식 출처 최소 2개 이상 포함
- 기관 공식 URL 하이퍼링크 1회 이상 포함`;

  const courseBody = isBaeron
    ? `① Q/A형 서론 ② 문제 제기 ③ 핵심 논거 3가지 ④ 반론과 재반론 ⑤ 배론 관점 메시지 ⑥ 성찰 유도 질문 ⑦ 요약 카드 ⑧ CTA ⑨ 기관 기본정보`
    : isHub
    ? `① Q/A형 서론 ② 공감 도입 ③ 변화 스토리 ④ 제도·정책 근거 ⑤ 실천 가이드 ⑥ 허브 브랜드 메시지 ⑦ 요약 카드 ⑧ CTA ⑨ 기관 기본정보`
    : `① Q/A형 서론(160자 이내 메타 디스크립션 겸용) ② 과정·자격 설명(트렌드·시의성 연결 가능 시 도입부 반영) ③ 제도·정책 근거(출처·연도 명시 필수) ④ 비교·사례·통계 ⑤ 반론 대응 문장 ⑥ FAQ 섹션(Q: / A: 형식 3문항, GEO 스니펫 대응) ⑦ 배움 브랜드 메시지 ⑧ 요약 카드 ⑨ CTA ⑩ 기관 기본정보`;

  const infoBody = isBaeron
    ? `① Q/A형 서론 ② 칼럼형 현황 진단 ③ 쟁점 분석 2~3가지 ④ 정책 근거·인용·출처 ⑤ 요약 카드 ⑥ 성찰 질문 ⑦ 배론 관점 메시지 ⑧ CTA ⑨ 기관 기본정보`
    : isHub
    ? `① Q/A형 서론 ② 트렌드 연결 ③ 핵심 포인트 ④ 정책 근거·출처 ⑤ 내 이야기로 ⑥ 요약 카드 ⑦ 허브 브랜드 메시지 ⑧ CTA ⑨ 기관 기본정보`
    : `① Q/A형 서론 ② 배경 및 의의 설명 ③ 주요 내용·핵심 포인트 ④ 정책 근거·인용·출처 ⑤ 요약 카드 ⑥ 학습자 사례 ⑦ 배움 브랜드 메시지 ⑧ CTA ⑨ 기관 기본정보`;

  const issueBody = isBaeron
    ? `① Q/A형 서론 ② 인용 또는 통계 ③ 사유의 전개 ④ 배움과의 연결 ⑤ 배론 철학 메시지 ⑥ 성찰 질문 ⑦ CTA ⑧ 기관 기본정보`
    : isHub
    ? `① Q/A형 서론 ② 공감 도입 ③ 이슈 설명 ④ 변화 계기 스토리 ⑤ 허브 브랜드 메시지 ⑥ 관련 과정 안내 ⑦ CTA ⑧ 기관 기본정보`
    : `① Q/A형 서론 ② 시기 공감 도입 ③ 이슈 설명 ④ 배움 연결 단락 ⑤ 배움 브랜드 메시지 ⑥ 관련 과정 안내 ⑦ CTA ⑧ 기관 기본정보`;

  const promoBody = isBaeron
    ? `① Q/A형 서론 ② 이벤트 취지·의미 ③ 기본 정보 ④ 참여 방법 ⑤ 경품·혜택·발표 ⑥ 유의사항 ⑦ 요약 카드 ⑧ 배론 브랜드 메시지 ⑨ CTA ⑩ 기관 기본정보`
    : isHub
    ? `① Q/A형 서론 ② 설렘 감성 도입 ③ 기본 정보 ④ 참여 방법 ⑤ 경품·혜택·발표 ⑥ 유의사항 ⑦ 요약 카드 ⑧ 허브 브랜드 메시지 ⑨ CTA ⑩ 기관 기본정보`
    : `① Q/A형 서론 ② 이벤트 배경·취지 ③ 기본 정보 ④ 참여 방법 ⑤ 혜택 명확 나열 ⑥ 유의사항 ⑦ 요약 카드 ⑧ 배움 브랜드 메시지 ⑨ CTA ⑩ 기관 기본정보`;

  const bodyMap = { course: courseBody, info: infoBody, issue: issueBody, promo: promoBody };
  const inputDesc = typeId === 'course' ? `과정/자격증명: ${values[0]}
대상 독자: ${values[1]}`
    : typeId === 'info' ? `정책·법령·주제: ${values[0]}
대상 독자: ${values[1]}`
    : typeId === 'issue' ? `시기·이슈: ${values[0]}
대상 독자: ${values[1]}
문체 유형: ${issueStyle}`
    : `이벤트 유형: ${values[0]}
이벤트 주제: ${values[1]}`;

  return `당신은 ㈜배움 소속 원격평생교육원 전문 블로그 콘텐츠 라이터입니다.

${base}

[입력값]
${inputDesc}

[본문 구성]
${bodyMap[typeId] || ''}

위 본문 구성 순서대로 약 1,500자의 완성된 블로그 본문을 작성하세요.
- Markdown 형식, 각 ## 섹션 제목에는 이모지를 앞에 붙여주세요
- 해시태그는 포함하지 마세요
- 분석, 단계 번호, 제목 후보 등 작성 과정은 출력하지 마세요. 본문만 출력하세요`;
}

// ══════════════════════════════════════════════════════════════
// 대시보드 컴포넌트
// ══════════════════════════════════════════════════════════════
function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => { loadPosts(); }, []);

  async function loadPosts() {
    if (!SB_URL || !SB_KEY) { setError("환경변수 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY 미설정"); return; }
    setLoading(true); setError("");
    try {
      const data = await sbFetch("/blog_posts?select=*&order=created_at.desc");
      setPosts(data || []);
    } catch (e) { setError("불러오기 실패: " + e.message); }
    finally { setLoading(false); }
  }

  async function toggleStatus(id, current) {
    const next = current === "draft" ? "published" : "draft";
    try {
      await sbFetch("/blog_posts?id=eq." + id, { method: "PATCH", body: JSON.stringify({ status: next }) });
      setPosts(prev => prev.map(p => p.id === id ? { ...p, status: next } : p));
    } catch (e) { alert("상태 변경 실패: " + e.message); }
  }

  async function deletePost(id) {
    if (!window.confirm("이 글을 삭제할까요?")) return;
    try {
      await sbFetch("/blog_posts?id=eq." + id, { method: "DELETE" });
      setPosts(prev => prev.filter(p => p.id !== id));
    } catch (e) { alert("삭제 실패: " + e.message); }
  }

  const filtered = posts.filter(p => {
    if (filter === "all") return true;
    if (filter === "draft" || filter === "published") return p.status === filter;
    return p.institution === filter;
  });

  const instColor = { baeoom: "#F7941D", baeron: "#0076BE", hub: "#6CB33F" };
  const instBg    = { baeoom: "#FFF7EE", baeron: "#EEF6FF", hub: "#F0F8E8" };
  const instLabel = { baeoom: "배움", baeron: "배론", hub: "허브" };

  const stats = {
    total: posts.length,
    draft: posts.filter(p => p.status === "draft").length,
    published: posts.filter(p => p.status === "published").length,
    avg: posts.length ? Math.round(posts.reduce((s, p) => s + (p.char_count || 0), 0) / posts.length) : 0,
  };

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 20 }}>
        {[{ label: "전체 글", value: stats.total }, { label: "초안", value: stats.draft }, { label: "발행", value: stats.published }, { label: "평균 글자 수", value: stats.avg.toLocaleString() }].map((s, i) => (
          <div key={i} style={{ background: "#F8FAFC", borderRadius: 10, padding: "12px 14px", border: "1px solid #E2E8F0" }}>
            <div style={{ fontSize: 11, color: "#94A3B8", marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#1E293B" }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {[{ k: "all", l: "전체" }, { k: "baeoom", l: "배움" }, { k: "baeron", l: "배론" }, { k: "hub", l: "허브" }, { k: "draft", l: "초안" }, { k: "published", l: "발행" }].map(f => (
          <button key={f.k} onClick={() => setFilter(f.k)} style={{ padding: "5px 14px", fontSize: 12, borderRadius: 20, border: "1.5px solid " + (filter === f.k ? "#334155" : "#E2E8F0"), background: filter === f.k ? "#334155" : "#fff", color: filter === f.k ? "#fff" : "#64748B", cursor: "pointer", fontWeight: filter === f.k ? 700 : 400 }}>{f.l}</button>
        ))}
        <button onClick={loadPosts} style={{ padding: "5px 14px", fontSize: 12, borderRadius: 20, border: "1.5px solid #E2E8F0", background: "#fff", color: "#94A3B8", cursor: "pointer", marginLeft: "auto" }}>새로고침</button>
      </div>

      {error && <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, padding: "10px 14px", color: "#DC2626", fontSize: 13, marginBottom: 12 }}>{error}</div>}
      {loading && <div style={{ textAlign: "center", padding: 24, color: "#94A3B8", fontSize: 13 }}>불러오는 중...</div>}
      {!loading && filtered.length === 0 && <div style={{ textAlign: "center", padding: "2rem", color: "#94A3B8", fontSize: 13 }}>저장된 글이 없습니다.</div>}

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map(p => (
          <div key={p.id} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 10, background: instBg[p.institution] || "#F1F5F9", color: instColor[p.institution] || "#64748B", fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>{instLabel[p.institution] || p.institution}</span>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: "#1E293B", flex: 1, lineHeight: 1.5 }}>{p.title || "제목 없음"}</div>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 10, background: p.status === "published" ? "#ECFDF5" : "#F1F5F9", color: p.status === "published" ? "#059669" : "#64748B", fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>{p.status === "published" ? "발행" : "초안"}</span>
              </div>
              <div style={{ display: "flex", gap: 12, fontSize: 11, color: "#94A3B8", marginBottom: 10 }}>
                <span>{p.topic || ""}</span>
                {p.char_count ? <span>{p.char_count.toLocaleString()}자</span> : null}
                <span>{new Date(p.created_at).toLocaleDateString("ko-KR")}</span>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button onClick={() => setOpenId(openId === p.id ? null : p.id)} style={{ padding: "4px 12px", fontSize: 11, borderRadius: 6, border: "1px solid #E2E8F0", background: openId === p.id ? "#F1F5F9" : "#fff", color: "#475569", cursor: "pointer" }}>{openId === p.id ? "접기" : "내용 보기"}</button>
                <button onClick={() => toggleStatus(p.id, p.status)} style={{ padding: "4px 12px", fontSize: 11, borderRadius: 6, border: "1px solid " + (p.status === "draft" ? "#059669" : "#E2E8F0"), background: "#fff", color: p.status === "draft" ? "#059669" : "#64748B", cursor: "pointer" }}>{p.status === "draft" ? "발행 처리" : "초안으로"}</button>
                <button onClick={() => navigator.clipboard.writeText(p.content || "")} style={{ padding: "4px 12px", fontSize: 11, borderRadius: 6, border: "1px solid #E2E8F0", background: "#fff", color: "#64748B", cursor: "pointer" }}>복사</button>
                <button onClick={() => deletePost(p.id)} style={{ padding: "4px 12px", fontSize: 11, borderRadius: 6, border: "1px solid #FCA5A5", background: "#fff", color: "#EF4444", cursor: "pointer" }}>삭제</button>
              </div>
            </div>

            {openId === p.id && (
              <div style={{ borderTop: "1px solid #F1F5F9", padding: "16px", background: "#FAFAFA" }}>
                {p.image_prompts && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", marginBottom: 6 }}>이미지 프롬프트</div>
                    <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 8, padding: "12px 14px", fontSize: 12, lineHeight: 1.8, color: "#475569", whiteSpace: "pre-wrap", maxHeight: 200, overflowY: "auto" }}>{p.image_prompts}</div>
                  </div>
                )}
                <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", marginBottom: 6 }}>본문</div>
                <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 8, padding: "16px", fontSize: 13.5, lineHeight: 1.9, color: "#1E293B", whiteSpace: "pre-wrap", maxHeight: 480, overflowY: "auto" }}>
                  {(p.content || "").split("\n").map((line, i) => {
                    const clean = line.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
                    if (clean.startsWith("## ")) return <div key={i} style={{ fontSize: 15, fontWeight: 700, margin: "12px 0 6px" }}>{clean.replace("## ", "")}</div>;
                    if (clean.startsWith("# ")) return <div key={i} style={{ fontSize: 16, fontWeight: 800, margin: "0 0 10px", color: instColor[p.institution] || "#334155" }}>{clean.replace("# ", "")}</div>;
                    if (clean.startsWith("---")) return <hr key={i} style={{ border: "none", borderTop: "1px solid #E2E8F0", margin: "10px 0" }} />;
                    if (clean.trim() === "") return <div key={i} style={{ height: 6 }} />;
                    return <div key={i} style={{ marginBottom: 4 }}>{clean}</div>;
                  })}
                </div>
                {p.hashtags && (
                  <div style={{ marginTop: 12 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", marginBottom: 6 }}>해시태그</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {p.hashtags.split(/\s+/).filter(t => t.startsWith("#")).map((tag, i) => (
                        <span key={i} style={{ fontSize: 12, color: instColor[p.institution] || "#334155", background: instBg[p.institution] || "#F1F5F9", borderRadius: 20, padding: "2px 10px", fontWeight: 600 }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// 메인 컴포넌트
// ══════════════════════════════════════════════════════════════
const LS_KEY = "blog_writer_state";

function loadLS() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch { return {}; }
}

export default function BlogGenerator() {
  const _ls = loadLS();
  const [activeTab, setActiveTab] = useState("writer");
  const [step, setStep] = useState(_ls.step || 1);
  const [instId, setInstId] = useState(_ls.instId || null);
  const [typeId, setTypeId] = useState(_ls.typeId || null);
  const [values, setValues] = useState(_ls.values || ["", ""]);
  const [issueStyle, setIssueStyle] = useState(_ls.issueStyle || "블로그형");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedImg, setCopiedImg] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [links, setLinks] = useState(_ls.links || [""]);
  const [refText, setRefText] = useState(_ls.refText || "");
  const [keyword, setKeyword] = useState(_ls.keyword || "");
  const [subStep, setSubStep] = useState(_ls.subStep || "4a");
  const [titleCandidates, setTitleCandidates] = useState(_ls.titleCandidates || []);
  const [selectedTitleIdx, setSelectedTitleIdx] = useState(_ls.selectedTitleIdx ?? null);
  const [editedTitle, setEditedTitle] = useState(_ls.editedTitle || "");
  const [analysisText, setAnalysisText] = useState(_ls.analysisText || "");
  const [imagePrompts, setImagePrompts] = useState(_ls.imagePrompts || "");
  const [bodyText, setBodyText] = useState(_ls.bodyText || "");
  const [hashtagText, setHashtagText] = useState(_ls.hashtagText || "");
  const [verifying, setVerifying] = useState(false);
  const [saved, setSaved] = useState(false);

  // state 변경될 때마다 localStorage에 저장
  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({
        step, instId, typeId, values, issueStyle,
        links, refText, keyword, subStep,
        titleCandidates, selectedTitleIdx, editedTitle,
        analysisText, imagePrompts, bodyText, hashtagText,
      }));
    } catch {}
  }, [step, instId, typeId, values, issueStyle, links, refText, keyword, subStep, titleCandidates, selectedTitleIdx, editedTitle, analysisText, imagePrompts, bodyText, hashtagText]);

  const inst = instId ? INST[instId] : null;
  const blogType = typeId ? BLOG_TYPES.find(t => t.id === typeId) : null;
  const accentColor = inst ? inst.color : "#555";

  function addLink() { if (links.length < 5) setLinks([...links, ""]); }
  function removeLink(i) { setLinks(links.filter((_, idx) => idx !== i)); }
  function updateLink(i, v) { const l = [...links]; l[i] = v; setLinks(l); }

  function refSuffix() {
    const vl = links.filter(l => l.trim());
    let s = "";
    if (keyword.trim()) s += "\n\n[작성 방향·주요 키워드]\n" + keyword.trim();
    if (vl.length > 0) s += "\n\n[참고 링크]\n" + vl.map((l, i) => (i+1) + ". " + l).join("\n");
    if (refText.trim()) s += "\n\n[참고 자료]\n" + refText.trim().slice(0, 3000);
    return s;
  }

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

  async function saveToSupabase(finalTitle, body, imgPrompts, hashtags) {
    if (!SB_URL || !SB_KEY) return;
    const charCount = body.replace(/\s/g, "").length;
    try {
      await sbFetch("/blog_posts", {
        method: "POST",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({ institution: instId, topic: values[0], keyword: keyword || null, title: finalTitle, content: body, image_prompts: imgPrompts || null, hashtags: hashtags || null, char_count: charCount, status: "draft" }),
      });
      setSaved(true);
    } catch (e) { console.error("Supabase 저장 실패:", e.message); }
  }

  async function generateTitles() {
    setLoading(true); setError("");
    const prompt = buildBodyPrompt(typeId, inst, values, issueStyle) + refSuffix() + `\n\n확정 제목: "${ft}"\n\n위 지침대로 본문만 작성하세요. 분석·단계 번호는 출력하지 마세요.`;
    try {
      const text = await callAPI(prompt, 1200);
      const m = text.match(/\[[\s\S]*?\]/);
      if (m) setTitleCandidates(JSON.parse(m[0]));
      setAnalysisText(text);
      setStep(4); setSubStep("4a");
    } catch(e) { setError("제목 생성 중 오류가 발생했습니다."); }
    finally { setLoading(false); }
  }

  async function verifyTitle() {
    if (!editedTitle.trim()) return;
    setVerifying(true); setError("");
    try {
      const text = await callAPI(`아래 블로그 제목을 분석해서 태그를 붙여주세요.\n\n제목: "${editedTitle}"\n기관: ${inst ? inst.name : ""}\n\nJSON만 출력하세요:\n{"tag": "정보형·GEO✓·SEO✓", "chars": 42, "feedback": "한 줄 평가 20자 이내"}`, 300);
      const m = text.match(/\{[\s\S]*?\}/);
      if (m) {
        const parsed = JSON.parse(m[0]);
        setTitleCandidates(prev => [{ title: editedTitle.trim(), tag: parsed.tag, feedback: parsed.feedback, isCustom: true }, ...prev.filter(t => !t.isCustom)]);
        setSelectedTitleIdx(0);
      }
    } catch(e) { setError("검증 중 오류가 발생했습니다."); }
    finally { setVerifying(false); }
  }

  async function callImagePrompts(finalTitle) {
    const shortTitle = finalTitle.length > 15 ? finalTitle.slice(0, 15) : finalTitle;
    const s = inst.imageStyle;
    const thumb = s.thumb.replace("{TITLE}", `"${shortTitle}"`).replace("{TOPIC}", values[0] || "평생교육");
    const mid = s.mid.replace("{TOPIC}", values[0] || "평생교육");
    const cta = s.cta.replace("{TOPIC}", values[0] || "평생교육");
    return await callAPI(`아래 블로그 포스팅에 사용할 이미지 프롬프트 3개를 작성해주세요.\n\n기관: ${inst.name} | 제목: "${finalTitle}" | 주제: ${values[0]}\n\n각 구간 제목(썸네일 / 본문중간 / CTA)을 한국어로 표시하고 스타일 가이드 기반으로 영어 장면 묘사를 작성하세요.\n\n[썸네일]\n${thumb}\n\n[본문중간]\n${mid}\n\n[CTA]\n${cta}`, 1200);
  }

  async function generateImagePrompts() {
    setLoading(true); setError("");
    const ft = editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "");
    setImagePrompts(await callImagePrompts(ft));
    setLoading(false);
  }

  async function generateBody() {
    setLoading(true); setError(""); setSaved(false);
    const ft = editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "");
    const basePrompt = buildBodyPrompt(typeId, inst, values, issueStyle) + refSuffix() + `\n\n확정 제목: "${ft}"\n\n위 지침대로 본문만 작성하세요. 분석·단계 번호는 출력하지 마세요.`;
    try {
      const [bodyResult, imgResult] = await Promise.all([callAPI(basePrompt, 2500), callImagePrompts(ft)]);
      setBodyText(bodyResult); setImagePrompts(imgResult);
      const hashResult = await callAPI(`기관: ${inst.name} | 슬로건: ${inst.slogan}\n제목: "${ft}" | 주제: ${values[0]}\n\n3단계 해시태그 생성:\n① 브랜드 식별태그 5개\n② 정보/검색 태그 5개\n③ 전환유도 태그 5개\n\n총 15개, 줄바꿈으로 구분해 출력.`, 400);
      setHashtagText(hashResult);
      setSubStep("4c");
      await saveToSupabase(ft, bodyResult, imgResult, hashResult);
    } catch(e) { setError("본문 생성 오류"); }
    finally { setLoading(false); }
  }

  async function regenerateBodyOnly() {
    setLoading(true); setError(""); setSaved(false);
    const ft = editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "");
    const prompt = buildBodyPrompt(typeId, inst, values, issueStyle) + refSuffix() + `\n\n확정 제목: "${ft}"\n\n위 지침대로 본문만 작성하세요. 분석·단계 번호는 출력하지 마세요.`;
    try { setBodyText(await callAPI(prompt, 2500)); }
    catch(e) { setError("본문 재생성 오류"); }
    finally { setLoading(false); }
  }

  async function generateHashtags() {
    setLoading(true); setError("");
    const ft = editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "");
    try { setHashtagText(await callAPI(`기관: ${inst.name} | 슬로건: ${inst.slogan}\n제목: "${ft}" | 주제: ${values[0]}\n\n3단계 해시태그:\n① 브랜드 식별태그 5개\n② 정보/검색 태그 5개\n③ 전환유도 태그 5개\n\n총 15개, 줄바꿈으로 구분.`, 400)); }
    catch(e) { setError("해시태그 재생성 오류"); }
    finally { setLoading(false); }
  }

  function fullContent() {
    const ft = editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "");
    return "# " + ft + "\n\n" + bodyText.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1") + "\n\n---\n" + hashtagText;
  }

  function reset() {
    setStep(1); setInstId(null); setTypeId(null); setValues(["", ""]); setError(""); setIssueStyle("블로그형");
    setLinks([""]); setRefText(""); setKeyword(""); setSubStep("4a"); setTitleCandidates([]);
    setSelectedTitleIdx(null); setEditedTitle(""); setAnalysisText(""); setImagePrompts("");
    setBodyText(""); setHashtagText(""); setCopiedImg(false); setCopiedBody(false); setCopiedAll(false);
    setVerifying(false); setSaved(false);
    try { localStorage.removeItem(LS_KEY); } catch {}
  }

  const Pill = ({ label, active, color, onClick }) => (
    <button onClick={onClick} style={{ padding: "8px 16px", borderRadius: 20, border: "1.5px solid " + (active ? color : "#E2E8F0"), background: active ? color : "#fff", color: active ? "#fff" : "#64748B", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>{label}</button>
  );
  const Spinner = () => (
    <span style={{ display: "inline-block", width: 14, height: 14, border: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid #fff", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
  );

  const allSteps = [
    { label: "기관 선택", active: step >= 1, current: step === 1 },
    { label: "유형 선택", active: step >= 2, current: step === 2 },
    { label: "내용 입력", active: step >= 3, current: step === 3 },
    { label: "분석·제목", active: step === 4, current: step === 4 && subStep === "4a" },
    { label: "본문·완성", active: step === 4 && subStep === "4c", current: step === 4 && subStep === "4c" },
  ];

  const btnP = (d) => ({ flex: 1, padding: "12px 18px", borderRadius: 10, border: "none", background: d ? "#CBD5E1" : accentColor, color: "#fff", fontSize: 14, fontWeight: 700, cursor: d ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 });
  const btnS = (c) => ({ padding: "11px 16px", borderRadius: 10, border: "1.5px solid " + (c || "#E2E8F0"), background: "#fff", color: c || "#64748B", fontSize: 13, fontWeight: 600, cursor: "pointer" });

  return (
    <div style={{ fontFamily: "'Noto Sans KR','Apple SD Gothic Neo',sans-serif", minHeight: "100vh", background: "#F1F5F9" }}>
      {/* 헤더 */}
      <div style={{ background: inst ? ("linear-gradient(135deg," + inst.color + "EE," + inst.colorDark + ")") : "linear-gradient(135deg,#FCA5A5,#F9A8C9)", padding: "20px 24px 18px", color: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
              <span style={{ fontSize: 20 }}>✍️</span>
              <h1 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>(주)배움 블로그 작성기</h1>
              {inst && <span style={{ background: "rgba(255,255,255,0.25)", borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 700 }}>{inst.short}</span>}
            </div>
            <p style={{ margin: 0, fontSize: 12, opacity: 0.8 }}>브랜드 가이드 완전 반영 | SEO·GEO 최적화</p>
          </div>
          {step > 1 && activeTab === "writer" && (
            <button onClick={reset} style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "6px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer" }}>처음으로</button>
          )}
        </div>
      </div>

      {/* 탭 */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex" }}>
          {[{ key: "writer", label: "✍️ 블로그 작성" }, { key: "dashboard", label: "📋 저장 이력" }].map(t => (
            <button key={t.key} onClick={() => setActiveTab(t.key)} style={{ padding: "14px 20px", fontSize: 13, fontWeight: activeTab === t.key ? 700 : 400, color: activeTab === t.key ? "#1E293B" : "#94A3B8", background: "none", border: "none", borderBottom: "2px solid " + (activeTab === t.key ? "#1E293B" : "transparent"), cursor: "pointer" }}>{t.label}</button>
          ))}
        </div>
      </div>

      {/* 대시보드 */}
      {activeTab === "dashboard" && (
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 16px" }}>
          <Dashboard />
        </div>
      )}

      {/* 블로그 작성 */}
      {activeTab === "writer" && (
        <>
          {/* 진행 바 */}
          <div style={{ background: "#fff", borderBottom: "1px solid #E2E8F0", padding: "14px 24px" }}>
            <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "flex-start" }}>
              {allSteps.map((s, i) => (
                <React.Fragment key={i}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, flexShrink: 0 }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: s.current ? accentColor : s.active ? accentColor + "99" : "#E2E8F0", color: s.active ? "#fff" : "#94A3B8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, boxShadow: s.current ? ("0 0 0 3px " + accentColor + "33") : "none" }}>
                      {s.active && !s.current ? "✓" : i + 1}
                    </div>
                    <span style={{ fontSize: 9, color: s.current ? "#334155" : s.active ? "#64748B" : "#94A3B8", fontWeight: s.current ? 700 : 400, whiteSpace: "nowrap" }}>{s.label}</span>
                  </div>
                  {i < allSteps.length - 1 && <div style={{ flex: 1, height: 2, marginTop: 11, background: allSteps[i+1] && (allSteps[i+1].active || allSteps[i+1].current) ? accentColor + "88" : "#E2E8F0" }} />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 16px" }}>

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1E293B", marginBottom: 16 }}>기관을 선택해주세요</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                  {Object.values(INST).map(i => (
                    <button key={i.id} onClick={() => { setInstId(i.id); setStep(2); }}
                      style={{ background: "#fff", border: "2px solid " + i.color + "22", borderRadius: 14, padding: "22px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = i.color}
                      onMouseLeave={e => e.currentTarget.style.borderColor = i.color + "22"}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: i.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🏫</div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: i.color, marginBottom: 4 }}>{i.name}</div>
                        <div style={{ fontSize: 11, color: "#64748B" }}>"{i.slogan}"</div>
                        <div style={{ marginTop: 6, display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
                          {i.keywords.map(k => <span key={k} style={{ fontSize: 10, background: i.bg, color: i.color, borderRadius: 10, padding: "2px 7px", fontWeight: 600 }}>{k}</span>)}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 */}
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
                      style={{ background: "#fff", border: "2px solid #E2E8F0", borderRadius: 12, padding: "18px 16px", textAlign: "left", cursor: "pointer" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = inst.color}
                      onMouseLeave={e => e.currentTarget.style.borderColor = "#E2E8F0"}>
                      <div style={{ fontSize: 24, marginBottom: 8 }}>{t.icon}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#1E293B", marginBottom: 4 }}>{t.label}</div>
                      <div style={{ fontSize: 12, color: "#64748B" }}>{t.desc}</div>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} style={{ marginTop: 16, ...btnS() }}>← 이전</button>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && inst && blogType && (
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ background: inst.bg, borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>{blogType.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: inst.color }}>{inst.name} · {blogType.label}</span>
                </div>
                {blogType.inputs.filter(inp => inp !== "기관명" && inp !== "문체 유형").map((label, idx) => (
                  <div key={idx}>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", display: "block", marginBottom: 7 }}>{label} <span style={{ color: "#EF4444" }}>*</span></label>
                    <input value={values[idx] || ""} onChange={e => { const v = [...values]; v[idx] = e.target.value; setValues(v); }} placeholder={blogType.placeholder ? (blogType.placeholder[idx] || "") : ""}
                      style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: "1.5px solid " + (values[idx] ? inst.color : "#E2E8F0"), fontSize: 14, color: "#1E293B", outline: "none", boxSizing: "border-box", background: "#fff" }} />
                  </div>
                ))}
                {typeId === "issue" && (
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", display: "block", marginBottom: 8 }}>문체 유형</label>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {ISSUE_STYLES.map(s => <Pill key={s} label={s} active={issueStyle === s} color={inst.color} onClick={() => setIssueStyle(s)} />)}
                    </div>
                  </div>
                )}
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", display: "block", marginBottom: 7 }}>🎯 주요 키워드 <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 400 }}>(선택)</span></label>
                  <input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="예) 2026년 개정, 온라인 실습..."
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: "1.5px solid " + (keyword.trim() ? inst.color : "#E2E8F0"), fontSize: 13, outline: "none", boxSizing: "border-box", background: "#fff" }} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>🔗 참고 링크 <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 400 }}>(선택 · 최대 5개)</span></label>
                    {links.length < 5 && <button onClick={addLink} style={{ fontSize: 11, color: inst.color, background: inst.bg, border: "1px solid " + inst.color + "44", borderRadius: 6, padding: "3px 10px", cursor: "pointer", fontWeight: 700 }}>+ 추가</button>}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {links.map((link, i) => (
                      <div key={i} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <input value={link} onChange={e => updateLink(i, e.target.value)} placeholder="https://..."
                          style={{ flex: 1, padding: "10px 13px", borderRadius: 8, border: "1.5px solid " + (link.trim() ? inst.color : "#E2E8F0"), fontSize: 13, outline: "none", background: "#fff" }} />
                        {links.length > 1 && <button onClick={() => removeLink(i)} style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid #E2E8F0", background: "#F8FAFC", color: "#94A3B8", cursor: "pointer", fontSize: 16 }}>×</button>}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>📋 참고 자료 <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 400 }}>(선택)</span></label>
                    {refText && <button onClick={() => setRefText("")} style={{ fontSize: 11, color: "#94A3B8", background: "none", border: "none", cursor: "pointer" }}>지우기</button>}
                  </div>
                  <textarea value={refText} onChange={e => setRefText(e.target.value)} placeholder="이벤트 공지, 정책 문서, 통계 수치 등 복사해서 붙여넣으세요."
                    style={{ width: "100%", minHeight: 110, padding: "11px 14px", borderRadius: 9, border: "1.5px solid " + (refText.trim() ? inst.color : "#E2E8F0"), fontSize: 13, outline: "none", resize: "vertical", boxSizing: "border-box", lineHeight: 1.7, background: "#fff", fontFamily: "inherit" }} />
                </div>
                {error && <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, padding: "10px 14px", color: "#DC2626", fontSize: 13 }}>{error}</div>}
                <div style={{ display: "flex", gap: 10 }}>
                  <button onClick={() => setStep(2)} style={btnS()}>← 이전</button>
                  <button onClick={generateTitles} disabled={!values[0] || loading} style={btnP(!values[0] || loading)}>
                    {loading ? <><Spinner />분석 중...</> : "✨ 분석 · 제목 생성 시작"}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && inst && blogType && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                {/* 4a: 제목 선택 */}
                {subStep === "4a" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 16 }}>🔍</span>
                      <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1E293B" }}>제목을 선택하고 필요하면 수정·검증하세요</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {titleCandidates.length > 0 ? titleCandidates.map((t, i) => (
                        <div key={i} onClick={() => { setSelectedTitleIdx(i); setEditedTitle(t.title); }}
                          style={{ border: "2px solid " + (selectedTitleIdx === i ? inst.color : t.isCustom ? inst.color + "66" : "#E2E8F0"), borderRadius: 10, padding: "12px 14px", cursor: "pointer", background: selectedTitleIdx === i ? inst.bg : t.isCustom ? inst.color + "08" : "#fff", position: "relative" }}>
                          {t.isCustom && <span style={{ position: "absolute", top: 8, right: 10, fontSize: 10, background: inst.color, color: "#fff", borderRadius: 4, padding: "1px 6px", fontWeight: 700 }}>✏️ 내 제목</span>}
                          <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                            <div style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 1, background: selectedTitleIdx === i || t.isCustom ? inst.color : "#E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: selectedTitleIdx === i || t.isCustom ? "#fff" : "#94A3B8" }}>
                              {t.isCustom ? "★" : i + 1}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 13.5, fontWeight: t.isCustom ? 700 : 600, color: "#1E293B", lineHeight: 1.5 }}>{t.title}</div>
                              <div style={{ marginTop: 5, display: "flex", gap: 6, flexWrap: "wrap" }}>
                                {t.tag && <span style={{ fontSize: 11, color: inst.color, background: inst.color + "15", borderRadius: 4, padding: "1px 7px" }}>{t.tag}</span>}
                                {t.feedback && <span style={{ fontSize: 11, color: "#64748B", background: "#F1F5F9", borderRadius: 4, padding: "1px 7px" }}>{t.feedback}</span>}
                              </div>
                            </div>
                          </div>
                        </div>
                      )) : (
                        <div style={{ background: "#F8FAFC", borderRadius: 10, padding: 16, fontSize: 13, color: "#64748B", whiteSpace: "pre-wrap" }}>{analysisText}</div>
                      )}
                    </div>
                    <div style={{ background: "#F8FAFC", borderRadius: 12, padding: 14, border: "1px solid #E2E8F0" }}>
                      <label style={{ fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 8 }}>✏️ 제목 직접 수정 후 검증</label>
                      <div style={{ display: "flex", gap: 8 }}>
                        <input value={editedTitle} onChange={e => setEditedTitle(e.target.value)} placeholder="제목을 선택하거나 직접 입력하세요"
                          style={{ flex: 1, padding: "11px 14px", borderRadius: 9, border: "1.5px solid " + (editedTitle ? inst.color : "#E2E8F0"), fontSize: 13.5, fontWeight: 600, color: "#1E293B", outline: "none", boxSizing: "border-box", background: "#fff" }} />
                        <button onClick={verifyTitle} disabled={!editedTitle.trim() || verifying}
                          style={{ padding: "11px 16px", borderRadius: 9, border: "none", flexShrink: 0, background: !editedTitle.trim() || verifying ? "#CBD5E1" : inst.colorDark, color: "#fff", fontSize: 13, fontWeight: 700, cursor: !editedTitle.trim() || verifying ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: 6 }}>
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
                      <button onClick={() => setStep(3)} style={btnS()}>← 다시 입력</button>
                      <button onClick={generateTitles} disabled={loading} style={btnS(inst.color)}>🔄 재생성</button>
                      <button onClick={generateBody} disabled={selectedTitleIdx === null || loading} style={btnP(selectedTitleIdx === null || loading)}>
                        {loading ? <><Spinner />생성 중...</> : "본문 생성 →"}
                      </button>
                    </div>
                  </div>
                )}

                {/* 4c: 본문 완성 */}
                {subStep === "4c" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ background: inst.bg, borderRadius: 12, padding: "14px 18px", border: "1px solid " + inst.color + "44", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 16 }}>📌</span>
                        <div>
                          <div style={{ fontSize: 11, color: inst.color, fontWeight: 700, marginBottom: 3 }}>확정 제목</div>
                          <div style={{ fontSize: 15, fontWeight: 700, color: "#1E293B" }}>{editedTitle || (titleCandidates[selectedTitleIdx] ? titleCandidates[selectedTitleIdx].title : "")}</div>
                        </div>
                      </div>
                      {saved && <span style={{ fontSize: 11, color: "#059669", background: "#ECFDF5", borderRadius: 6, padding: "3px 10px", fontWeight: 700, flexShrink: 0 }}>✓ DB 저장됨</span>}
                    </div>

                    {/* 이미지 프롬프트 */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: 16 }}>🖼️</span><h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1E293B" }}>이미지 프롬프트</h3></div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button onClick={() => { navigator.clipboard.writeText(imagePrompts); setCopiedImg(true); setTimeout(() => setCopiedImg(false), 2000); }} style={{ padding: "5px 12px", borderRadius: 8, background: copiedImg ? "#10B981" : "#F1F5F9", color: copiedImg ? "#fff" : "#64748B", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{copiedImg ? "✓ 복사됨" : "📋 복사"}</button>
                          <button onClick={generateImagePrompts} disabled={loading} style={{ padding: "5px 12px", borderRadius: 8, background: "#fff", color: inst.color, border: "1.5px solid " + inst.color, fontSize: 12, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer" }}>{loading ? "생성 중..." : "🔄 재생성"}</button>
                        </div>
                      </div>
                      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid " + inst.color + "33", padding: 18, whiteSpace: "pre-wrap", fontSize: 12.5, lineHeight: 1.8, color: "#334155", maxHeight: 260, overflowY: "auto" }}>{imagePrompts || <span style={{ color: "#94A3B8" }}>생성 중...</span>}</div>
                    </div>

                    {/* 본문 */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: 16 }}>📝</span><h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1E293B" }}>본문</h3></div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button onClick={() => { navigator.clipboard.writeText(bodyText); setCopiedBody(true); setTimeout(() => setCopiedBody(false), 2000); }} style={{ padding: "5px 12px", borderRadius: 8, background: copiedBody ? "#10B981" : "#F1F5F9", color: copiedBody ? "#fff" : "#64748B", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{copiedBody ? "✓ 복사됨" : "📋 복사"}</button>
                          <button onClick={regenerateBodyOnly} disabled={loading} style={{ padding: "5px 12px", borderRadius: 8, background: "#fff", color: inst.color, border: "1.5px solid " + inst.color, fontSize: 12, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer" }}>{loading ? "생성 중..." : "🔄 재생성"}</button>
                        </div>
                      </div>
                      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid " + inst.color + "33", padding: "24px 28px", maxHeight: 680, overflowY: "auto", color: "#1E293B", fontFamily: instId === "baeoom" ? "'Nanum Myeongjo', serif" : instId === "baeron" ? "'Nanum Gothic', sans-serif" : "'Nanum Square', sans-serif" }}>
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

                    {/* 해시태그 */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: 16 }}>🏷️</span><h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1E293B" }}>해시태그</h3></div>
                        <button onClick={generateHashtags} disabled={loading} style={{ padding: "5px 12px", borderRadius: 8, background: "#fff", color: inst.color, border: "1.5px solid " + inst.color, fontSize: 12, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer" }}>{loading ? "생성 중..." : "🔄 재생성"}</button>
                      </div>
                      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid " + inst.color + "33", padding: "14px 18px" }}>
                        {hashtagText
                          ? <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{hashtagText.split(/\s+/).filter(t => t.startsWith("#")).map((tag, i) => <span key={i} style={{ fontSize: 13, color: inst.color, background: inst.color + "12", borderRadius: 20, padding: "3px 10px", fontWeight: 600 }}>{tag}</span>)}</div>
                          : <span style={{ color: "#94A3B8", fontSize: 13 }}>생성 중...</span>}
                      </div>
                    </div>

                    {/* 전체 복사 */}
                    <div style={{ background: inst.bg, borderRadius: 12, padding: 16, border: "1px solid " + inst.color + "22" }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: inst.color, marginBottom: 8 }}>🎉 완성! 전체 콘텐츠 복사</div>
                      <div style={{ fontSize: 12, color: inst.textColor, marginBottom: 12 }}>제목 + 본문 + 해시태그가 포함된 최종본을 복사합니다.</div>
                      <button onClick={() => { navigator.clipboard.writeText(fullContent()); setCopiedAll(true); setTimeout(() => setCopiedAll(false), 2500); }}
                        style={{ width: "100%", padding: 12, borderRadius: 10, border: "none", background: inst.color, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
                        {copiedAll ? "✓ 복사 완료!" : "📋 전체 복사 (제목+본문+해시태그)"}
                      </button>
                    </div>

                    {error && <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, padding: "10px 14px", color: "#DC2626", fontSize: 13 }}>{error}</div>}

                    <div style={{ display: "flex", gap: 10 }}>
                      <button onClick={() => setSubStep("4a")} style={btnS()}>← 제목으로</button>
                      <button onClick={reset} style={{ ...btnS(), flex: 1 }}>✍️ 새 글 작성</button>
                      <button onClick={() => setActiveTab("dashboard")} style={btnS(inst.color)}>📋 저장 이력 보기</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Myeongjo&family=Nanum+Square&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
