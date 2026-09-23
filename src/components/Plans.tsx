"use client";

import { useState } from "react";
import { plans } from "../data/profile";

export default function Plans() {
  const [selected, setSelected] = useState("3x");
  const plan = plans.find((item) => item.id === selected)!;
  return (
    <div className="plan-picker">
      <fieldset>
        <legend>Quantas vezes por semana?</legend>
        <div className="plan-options">
          {plans.map((item) => <label key={item.id} className={selected === item.id ? "selected" : ""}>
            <input type="radio" name="frequency" value={item.id} checked={selected === item.id} onChange={() => setSelected(item.id)} />
            <strong>{item.frequency}<span>×</span></strong><span>por semana</span>
          </label>)}
        </div>
      </fieldset>
      <div className="plan-result" aria-live="polite" aria-atomic="true">
        <div><p className="eyebrow">Acompanhamento presencial</p><h3>{plan.lessons} aulas <span>/ mês</span></h3><p>Treino personalizado para a sua rotina.<br />Horários e disponibilidade a combinar.</p></div>
        <div className="plan-price"><span>Investimento mensal</span><strong>{plan.price ? new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(plan.price) : "A consultar"}</strong><small>{plan.price ? "Valor do material inicial, sujeito à confirmação." : "Valor ainda não informado no material."}</small><a className="button" href={`#contato`} onClick={() => window.dispatchEvent(new CustomEvent("hian:plan", { detail: selected }))}>Tenho interesse <span aria-hidden="true">↗</span></a></div>
      </div>
      <p className="pending-note">Planos trimestrais, semestrais e formas de pagamento: condições a definir. Nenhuma cobrança é feita neste site.</p>
    </div>
  );
}
