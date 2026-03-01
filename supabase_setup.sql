-- Execute este script no SQL Editor do seu projeto Supabase

CREATE TABLE IF NOT EXISTS public.quiz_tracking (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT NOT NULL,
    step INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Adiciona index para as consultas ficarem mais rápidas no painel
CREATE INDEX IF NOT EXISTS idx_quiz_tracking_session ON public.quiz_tracking(session_id);
CREATE INDEX IF NOT EXISTS idx_quiz_tracking_step ON public.quiz_tracking(step);
