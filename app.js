
// The SCORE Booster
// Supabase connection

if (!window.SUPABASE_URL || !window.SUPABASE_KEY) {
  console.error("Supabase configuration missing.");
} else if (!window.supabase) {
  console.error("Supabase library not loaded.");
} else {
  window.sb = window.supabase.createClient(
    window.SUPABASE_URL,
    window.SUPABASE_KEY
  );

  console.log("The SCORE Booster connection initialized.");
}
