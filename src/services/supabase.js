import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rclkmftpfmnyfunjfhxm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjbGttZnRwZm1ueWZ1bmpmaHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMjg4NTYsImV4cCI6MjAxNjcwNDg1Nn0.XeTtf-6_RYWBrjGw9mW5ByNB5hCM0TUwe6EJscrPrd0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
