-- ============================================================
-- Quiz Mounjaro — Schema completo v2
-- Execute no SQL Editor do Supabase
-- Seguro para re-executar: usa IF NOT EXISTS em tudo
-- ============================================================

-- ------------------------------------------------------------
-- Tabela principal de tracking por passo
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.quiz_tracking (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id   TEXT NOT NULL,
    step         INTEGER NOT NULL,
    created_at   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    utm_source   TEXT,
    utm_medium   TEXT,
    utm_campaign TEXT,
    utm_content  TEXT,
    utm_term     TEXT,
    referrer     TEXT,
    device_type  TEXT,     -- 'mobile' | 'desktop' | 'tablet'
    screen_width INTEGER
);

-- Índices para performance nas queries do dashboard
CREATE INDEX IF NOT EXISTS idx_quiz_tracking_session  ON public.quiz_tracking(session_id);
CREATE INDEX IF NOT EXISTS idx_quiz_tracking_step     ON public.quiz_tracking(step);
CREATE INDEX IF NOT EXISTS idx_quiz_tracking_campaign ON public.quiz_tracking(utm_campaign);
CREATE INDEX IF NOT EXISTS idx_quiz_tracking_device   ON public.quiz_tracking(device_type);
CREATE INDEX IF NOT EXISTS idx_quiz_tracking_created  ON public.quiz_tracking(created_at);

-- ------------------------------------------------------------
-- Migração segura: adiciona colunas à tabela existente
-- (ignorado se as colunas já existirem)
-- ------------------------------------------------------------
ALTER TABLE public.quiz_tracking
  ADD COLUMN IF NOT EXISTS utm_source   TEXT,
  ADD COLUMN IF NOT EXISTS utm_medium   TEXT,
  ADD COLUMN IF NOT EXISTS utm_campaign TEXT,
  ADD COLUMN IF NOT EXISTS utm_content  TEXT,
  ADD COLUMN IF NOT EXISTS utm_term     TEXT,
  ADD COLUMN IF NOT EXISTS device_type  TEXT,
  ADD COLUMN IF NOT EXISTS screen_width INTEGER,
  ADD COLUMN IF NOT EXISTS referrer     TEXT;

-- ------------------------------------------------------------
-- Tabela de sessões que completaram o quiz (chegaram ao checkout)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.quiz_completions (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id   TEXT NOT NULL UNIQUE,
    utm_source   TEXT,
    utm_campaign TEXT,
    device_type  TEXT,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_completions_campaign ON public.quiz_completions(utm_campaign);
CREATE INDEX IF NOT EXISTS idx_completions_device   ON public.quiz_completions(device_type);
CREATE INDEX IF NOT EXISTS idx_completions_created  ON public.quiz_completions(completed_at);
