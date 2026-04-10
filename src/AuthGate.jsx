import React, { useEffect, useState } from 'react'
import { supabase } from './supabase.js'

export default function AuthGate({ children }) {
  const [session, setSession] = useState(null)
  const [allowed, setAllowed] = useState(null) // null=확인중, true=허용, false=거부
  const [loading, setLoading] = useState(true)
  const [signingIn, setSigningIn] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // 세션 초기 로드
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session) checkAllowed(session.user.email)
      else setLoading(false)
    })

    // 세션 변화 감지
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) checkAllowed(session.user.email)
      else { setAllowed(null); setLoading(false) }
    })

    return () => subscription.unsubscribe()
  }, [])

  async function checkAllowed(email) {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('allowed_users')
        .select('email')
        .eq('email', email)
        .single()
      setAllowed(!error && !!data)
    } catch {
      setAllowed(false)
    } finally {
      setLoading(false)
    }
  }

  async function signInWithGoogle() {
    setSigningIn(true)
    setError("")
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    })
    if (error) { setError(error.message); setSigningIn(false) }
  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  const s = {
    wrap: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F1F5F9", fontFamily: "'Noto Sans KR', sans-serif" },
    card: { background: "#fff", borderRadius: 16, padding: "40px 36px", maxWidth: 400, width: "100%", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center" },
    title: { margin: "0 0 8px", fontSize: 20, fontWeight: 800, color: "#1E293B" },
    sub: { margin: "0 0 28px", fontSize: 13, color: "#64748B" },
    btn: { width: "100%", padding: "12px 16px", borderRadius: 10, border: "none", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 },
    err: { marginTop: 12, fontSize: 12, color: "#DC2626", background: "#FEF2F2", borderRadius: 8, padding: "8px 12px" },
  }

  // 로딩 중
  if (loading) return (
    <div style={s.wrap}>
      <div style={{ fontSize: 14, color: "#64748B" }}>확인 중...</div>
    </div>
  )

  // 미로그인
  if (!session) return (
    <div style={s.wrap}>
      <div style={s.card}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>✍️</div>
        <h2 style={s.title}>(주)배움 블로그 작성기</h2>
        <p style={s.sub}>Google 계정으로 로그인해주세요</p>
        <button
          onClick={signInWithGoogle}
          disabled={signingIn}
          style={{ ...s.btn, background: signingIn ? "#CBD5E1" : "#fff", color: "#1E293B", border: "1.5px solid #E2E8F0", cursor: signingIn ? "not-allowed" : "pointer" }}
        >
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          {signingIn ? "로그인 중..." : "Google로 로그인"}
        </button>
        {error && <div style={s.err}>{error}</div>}
      </div>
    </div>
  )

  // 로그인했지만 허용되지 않은 이메일
  if (!allowed) return (
    <div style={s.wrap}>
      <div style={s.card}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🚫</div>
        <h2 style={s.title}>접근 권한 없음</h2>
        <p style={s.sub}>
          <b>{session.user.email}</b>은<br />
          허용된 사용자 목록에 없습니다.<br />
          관리자에게 문의해주세요.
        </p>
        <button onClick={signOut} style={{ ...s.btn, background: "#F1F5F9", color: "#64748B", border: "none" }}>
          로그아웃
        </button>
      </div>
    </div>
  )

  // 로그인 + 허용된 사용자 → 블로그 작성기 렌더
  return (
    <div>
      {/* 로그아웃 버튼 — 우측 상단 고정 */}
      <div style={{ position: "fixed", top: 12, right: 16, zIndex: 1000, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>{session.user.email}</span>
        <button onClick={signOut} style={{ fontSize: 11, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "4px 10px", borderRadius: 6, cursor: "pointer" }}>
          로그아웃
        </button>
      </div>
      {children}
    </div>
  )
}
