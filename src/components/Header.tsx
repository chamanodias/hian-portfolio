"use client";

import { useState } from "react";

const links = [["Sobre mim", "sobre"], ["Planos e políticas", "planos"], ["Social", "acompanhe"], ["Contato", "contato"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  function toggleTheme() {
    const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("hv-theme", theme); } catch { /* O tema continua disponível sem armazenamento. */ }
  }
  return (
    <header className="site-header">
      <a className="wordmark" href="#topo" onClick={() => setOpen(false)} aria-label="Hian Vieira, início">HIAN<span>VIEIRA</span><small>PERSONAL TRAINER</small></a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? "Fechar" : "Menu"}</button>
      <nav id="main-nav" aria-label="Navegação principal" className={open ? "is-open" : ""} onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}>
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar entre tema claro e escuro"><span aria-hidden="true">◐</span></button>
      <a className="button header-cta" href="#contato">Vamos treinar <span aria-hidden="true">↗</span></a>
    </header>
  );
}
