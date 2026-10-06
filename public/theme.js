// Apply the saved theme before the page paints. New visitors start in dark mode.
function applyTheme(theme){
  document.documentElement.dataset.theme=theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#10171f':'#f6f7f9');
  const button=document.getElementById('theme-toggle');
  if(button){button.textContent=theme==='dark'?'☀ Light mode':'☾ Dark mode';button.setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode');}
}
function toggleTheme(){
  const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
  applyTheme(theme);
  try{localStorage.setItem('lh-theme',theme);}catch{/* Keep the selected theme for this visit. */}
}
let initialTheme='dark';
try{if(localStorage.getItem('lh-theme')==='light')initialTheme='light';}catch{}
applyTheme(initialTheme);
