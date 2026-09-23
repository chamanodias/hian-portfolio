import Image from "next/image";
import Header from "../components/Header";
import Plans from "../components/Plans";
import ContactForm from "../components/ContactForm";
import Marquee from "../components/Marquee";
import { profile, whatsappUrl } from "../data/profile";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <section className="hero" id="topo" aria-labelledby="hero-title">
          <Image src="/assets/academia-conceitual.webp" alt="" fill priority sizes="100vw" className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content wrap">
            <p className="eyebrow">Hian Vieira / Personal Trainer</p>
            <h1 id="hero-title">SEU PRÓXIMO<br /><span>PASSO É AGORA.</span></h1>
            <p>Um treino que respeita quem você é.<br />Um acompanhamento para ir além.</p>
            <div className="hero-actions"><a href="#contato" className="button">Começar minha jornada <span aria-hidden="true">↗</span></a><a href="#planos" className="text-link">Conheça os planos <span aria-hidden="true">↘</span></a></div>
          </div>
          <p className="image-caption">Ambiente ilustrativo gerado por IA. Foto profissional em breve.</p>
        </section>

        <section id="sobre" className="section about wrap" aria-labelledby="about-title">
          <div className="about-title"><h2 id="about-title">TREINO É PESSOAL.<br /><span className="muted">O ACOMPANHAMENTO<br />TAMBÉM.</span></h2></div>
          <div className="portrait-slot">
            {profile.portrait ? <Image src={profile.portrait} alt="Hian Vieira, personal trainer" fill sizes="(max-width: 767px) 90vw, 40vw" /> : <><span className="portrait-monogram" aria-hidden="true">HV</span><div><strong>Hian Vieira</strong><p>Espaço reservado para o retrato profissional</p></div></>}
          </div>
          <div className="about-copy"><p className="intro">Seu ponto de partida importa.</p><p>Sou Hian Vieira, personal trainer. Minha proposta é construir um treinamento personalizado, respeitando a individualidade e os objetivos de cada aluno.</p><p>{profile.education}</p><div className="credential"><span>Registro profissional</span><strong>{profile.cref ?? "CREF a informar"}</strong></div><p className="pending-note">Trajetória, especializações e fotos profissionais serão adicionadas após o envio do material.</p><a href="#contato" className="text-link">Vamos nos conhecer <span aria-hidden="true">↗</span></a></div>
        </section>

        <section id="planos" className="section plans-section" aria-labelledby="plans-title">
          <div className="wrap">
            <h2 id="plans-title">ENCONTRE<br />SEU RITMO.</h2><p className="section-lead">Escolha uma frequência para começar a conversa.<br />O melhor plano é aquele que faz sentido para você.</p>
            <Plans />
            <div className="service-details"><h3>Como você quer treinar?</h3><details><summary>Personal presencial <span aria-hidden="true">+</span></summary><p>Aulas personalizadas com acompanhamento do professor. Local de atendimento, duração e horários serão confirmados com Hian.</p></details><details><summary>Consultoria online <span aria-hidden="true">+</span></summary><p>Formato previsto no material inicial. Aplicativo, entrega dos treinos, frequência de ajustes, suporte e valores ainda serão definidos.</p></details><details><summary>Objetivos e metodologia <span aria-hidden="true">+</span></summary><p>Há espaço para apresentar programas de hipertrofia, emagrecimento e condicionamento após confirmação dos serviços. Avaliação inicial, periodização e entregáveis serão detalhados por Hian.</p><p>Parceria com nutricionista e orientação alimentar: informações ainda não fornecidas.</p></details></div>
            <div className="policies"><h3>Combinados do acompanhamento.</h3><p>Condições transcritas do material inicial, a confirmar antes da contratação.</p><details><summary>Preciso cancelar uma aula. Como funciona? <span aria-hidden="true">+</span></summary><p>Avise com pelo menos 2 horas de antecedência. Para aulas antes das 9h, o aviso deve acontecer até as 22h do dia anterior.</p></details><details><summary>Posso repor uma aula? <span aria-hidden="true">+</span></summary><p>A reposição acontece em até 30 dias, em data e horário definidos de acordo com a disponibilidade de ambos.</p></details><details><summary>E se houver atraso? <span aria-hidden="true">+</span></summary><p>Se o aluno se atrasar, a aula termina no horário contratado. Se o atraso for do professor, o aluno pode aceitar uma aula mais curta ou remarcar.</p></details></div>
          </div>
        </section>

        <section className="results-section section" aria-labelledby="results-title"><div className="wrap"><p className="eyebrow">Cada trajetória é única</p><h2 id="results-title">HISTÓRIAS REAIS.<br />CONQUISTAS PESSOAIS.</h2><div className="results-grid"><div className="testimonial-empty"><span className="quote-mark" aria-hidden="true">“</span><h3>Quem treina conta.</h3><p>Em breve, experiências de alunos acompanhados por Hian.</p><span className="pending-label">Depoimentos aguardando envio</span></div><div className="transformation-empty"><div className="before-after"><span>ANTES</span><span>DEPOIS</span></div><h3>Evolução com contexto.</h3><p>Este espaço receberá casos reais, com autorização de uso de imagem dos alunos.</p><span className="pending-label">Nenhum resultado publicado ainda</span></div></div></div></section>

        <section id="acompanhe" className="section social-section wrap" aria-labelledby="social-title"><div><h2 id="social-title">O TREINO<br />CONTINUA<br /><span className="muted">POR AQUI.</span></h2><p>Acompanhe meu trabalho e conheça mais<br />do dia a dia do treinamento.</p><a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="text-link">{profile.instagramHandle} <span aria-hidden="true">↗</span><span className="sr-only"> (abre em nova aba)</span></a></div><div className="social-panel"><div className="social-profile"><span className="social-avatar" aria-hidden="true">HV</span><div><strong>Hian Vieira</strong><span>{profile.instagramHandle}</span></div><span className="social-arrow" aria-hidden="true">↗</span></div><h3>ACOMPANHE<br />MEU TRABALHO.</h3><p>Treino, rotina e movimento.<br />Encontre Hian no Instagram.</p><a className="button" href={profile.instagram} target="_blank" rel="noopener noreferrer">Abrir Instagram <span aria-hidden="true">↗</span></a><small>Abre em uma nova aba. Publicações não são reproduzidas nesta prévia.</small></div></section>

        <section id="contato" className="section contact-section" aria-labelledby="contact-title"><div className="wrap contact-grid"><div><p className="eyebrow">Vamos começar?</p><h2 id="contact-title">O PRIMEIRO<br />PASSO<br /><span className="muted">É SEU.</span></h2><p>Conte o que você busca.<br />Vamos conversar sobre como chegar lá.</p><a className="text-link" href={whatsappUrl("Olá, Hian! Quero conhecer seu acompanhamento.")} target="_blank" rel="noopener noreferrer">{profile.phone} <span aria-hidden="true">↗</span><span className="sr-only"> (WhatsApp, nova aba)</span></a><div className="anamnesis"><strong>Avaliação inicial</strong><p>{profile.anamnesisUrl ? "Preencha o formulário de avaliação antes da conversa." : "O link de anamnese será disponibilizado aqui. Por enquanto, fale diretamente com Hian."}</p>{profile.anamnesisUrl && <a className="text-link" href={profile.anamnesisUrl} target="_blank" rel="noopener noreferrer">Preencher anamnese (nova aba) ↗</a>}</div></div><ContactForm /></div></section>
      </main>
      <Marquee />
      <footer className="site-footer wrap"><a className="wordmark" href="#topo">HIAN<span>VIEIRA</span><small>PERSONAL TRAINER</small></a><p>Um treino que faz sentido para você.</p><a href="#acompanhe">Instagram ↗</a><a href="#topo">Voltar ao início ↑</a><small className="draft-disclaimer">Prévia em desenvolvimento. Identidade visual, informações profissionais e condições comerciais aguardam validação de Hian.</small></footer>
    </>
  );
}
