# 배포 설정 가이드

## 1. Supabase 설정

### 1-1. 프로젝트 생성
1. https://supabase.com 접속 → 새 프로젝트 생성

### 1-2. allowed_users 테이블 생성
Supabase Dashboard → SQL Editor에서 아래 실행:

```sql
-- 허용된 사용자 테이블
CREATE TABLE allowed_users (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  name text,
  created_at timestamptz DEFAULT now()
);

-- 본인만 읽기 가능 (Row Level Security)
ALTER TABLE allowed_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "허용 사용자 본인 확인"
  ON allowed_users FOR SELECT
  USING (auth.jwt() ->> 'email' = email);

-- 허용할 이메일 추가
INSERT INTO allowed_users (email, name) VALUES
  ('your-email@gmail.com', '주희'),
  ('another@gmail.com', '팀원이름');
  -- 추가할 이메일 계속 추가
```

### 1-3. Google OAuth 설정
1. Supabase Dashboard → Authentication → Providers → Google 활성화
2. Google Cloud Console (https://console.cloud.google.com) 에서:
   - 새 프로젝트 생성 (또는 기존 프로젝트 사용)
   - APIs & Services → OAuth consent screen 설정
   - APIs & Services → Credentials → OAuth 2.0 Client ID 생성
   - Authorized redirect URIs에 추가:
     `https://<your-supabase-project>.supabase.co/auth/v1/callback`
3. Client ID, Client Secret을 Supabase Google Provider에 입력

### 1-4. Supabase 키 확인
Dashboard → Settings → API에서:
- `VITE_SUPABASE_URL`: Project URL
- `VITE_SUPABASE_ANON_KEY`: anon public key

---

## 2. Vercel 환경변수 설정

Vercel Dashboard → 프로젝트 → Settings → Environment Variables에 추가:

| 변수명 | 값 |
|---|---|
| `VITE_ANTHROPIC_API_KEY` | `sk-ant-api03-...` |
| `VITE_SUPABASE_URL` | `https://xxxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGc...` |

추가 후 **Redeploy** 필수!

---

## 3. Supabase Redirect URL 설정

Supabase Dashboard → Authentication → URL Configuration:
- Site URL: `https://baeoom-blog-writer.vercel.app`
- Redirect URLs에 추가: `https://baeoom-blog-writer.vercel.app`

---

## 4. GitHub 배포

```
src/
  App.jsx        ← blog-generator-v2 (API키 UI 제거, 환경변수 적용)
  AuthGate.jsx   ← Google OAuth + 이메일 허용 목록 체크
  main.jsx       ← AuthGate로 App 감싸기
  supabase.js    ← Supabase 클라이언트
index.html
vite.config.js
package.json
```

---

## 5. 허용 이메일 추가/제거

Supabase Dashboard → Table Editor → allowed_users 테이블에서
직접 행 추가/삭제하면 돼요.
