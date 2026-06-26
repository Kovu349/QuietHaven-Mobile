import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jwuwfkwrtqixihfvmwli.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dXdma3dydHFpeGloZnZtd2xpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyOTk0NDgsImV4cCI6MjA4Njg3NTQ0OH0.0kO7wtC4N6zuc89StRepz3DTq2VTaJ2vqDimD0nuw8M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);