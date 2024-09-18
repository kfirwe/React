import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ywxdzpslzblsusnzctpi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3eGR6cHNsemJsc3VzbnpjdHBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NTA4MDgsImV4cCI6MjA0MjEyNjgwOH0.KXrH26zp_3emsL6YTw1GPJkZAwkGMWzexeHoOAjCpUg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
