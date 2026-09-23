"use client";

import { useEffect, useState } from "react";
import { plans, whatsappUrl } from "../data/profile";

export default function ContactForm() {
  const [plan, setPlan] = useState("conversar");
  useEffect(() => {
    function selectPlan(event: Event) { setPlan((event as CustomEvent<string>).detail); }
    window.addEventListener("hian:plan", selectPlan);
    return () => window.removeEventListener("hian:plan", selectPlan);
  }, []);
  return (
    <form className="contact-form" onSubmit={(event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const selected = plans.find((item) => item.id === plan);
      const message = `Olá, Hian! Meu nome é ${String(data.get("name")).trim()}. Quero saber mais sobre o acompanhamento. Meu objetivo: ${data.get("objective")}. Plano: ${selected ? `${selected.frequency} vezes por semana (${selected.lessons} aulas/mês)` : "Gostaria de orientação para escolher"}.`;
      window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    }}>
      <h3>Vamos conversar sobre seu treino.</h3>
      <label htmlFor="name">Como você se chama?</label>
      <input id="name" name="name" autoComplete="given-name" required minLength={2} maxLength={80} pattern=".*\S.*" placeholder="Seu nome" />
      <label htmlFor="objective">Qual é o seu objetivo?</label>
      <select id="objective" name="objective" required defaultValue=""><option value="" disabled>Selecione seu objetivo</option><option>Ganhar força e massa muscular</option><option>Emagrecer</option><option>Melhorar o condicionamento</option><option>Criar uma rotina de treino</option><option>Conversar sobre outro objetivo</option></select>
      <label htmlFor="plan">Frequência de interesse</label>
      <select id="plan" name="plan" value={plan} onChange={(event) => setPlan(event.target.value)}><option value="conversar">Quero ajuda para escolher</option>{plans.map((item) => <option key={item.id} value={item.id}>{item.frequency} vezes por semana · {item.lessons} aulas/mês</option>)}</select>
      <button className="button" type="submit">Continuar no WhatsApp <span aria-hidden="true">↗</span></button>
      <p className="form-disclosure">Abre uma nova aba com uma mensagem para você revisar e enviar. Estes dados não são armazenados pelo site.</p>
    </form>
  );
}
