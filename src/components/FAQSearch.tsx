import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  tags: string[];
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "O que faz o Conselho Tutelar?",
    tags: ["o que e", "funcao", "papel", "eca", "protege", "atribuicoes", "serve pra que", "ajuda", "o que faz", "concelho", "tutor", "protecao", "direito"],
    answer: `O Conselho Tutelar protege os direitos das crianças e dos adolescentes, conforme o que está previsto no Estatuto da Criança e do Adolescente (ECA).\n\nO Conselho:\n– Atende situações de violência, negligência ou abandono.\n– Atua quando a criança ou adolescente está em situação de risco.\n– Encaminha famílias para serviços como CRAS, CREAS, saúde, escola ou Ministério Público.\n\nO Conselho NÃO:\n– NÃO prende ninguém.\n– NÃO decide guarda ou pensão.\n– NÃO substitui juiz ou advogado.\n\nO papel do Conselho é proteger, orientar e encaminhar.`,
  },
  {
    id: 2,
    question: "Como fazer uma denúncia",
    tags: ["denunciar", "ligar", "telefone", "anonima", "disque 100", "urgente", "urgencia", "onde ir", "contato", "numero", "whatsapp", "watsap", "zap", "chamar", "dinuncia", "reclamar"],
    answer: `Você pode:\n– Procurar diretamente o Conselho Tutelar do município.\n– Ligar para o Disque 100 (ligação gratuita e nacional).\n\nTelefones: 0800 400 0126 RAMAL 5012\nPlantão para URGÊNCIAS: 55 99782049\nA denúncia pode ser anônima.\n\nInforme:\n– Endereço\n– Nome das pessoas envolvidas\n– O que está acontecendo\n– Há quanto tempo ocorre a situação\n\nQuanto mais informações, melhor será o atendimento. Denunciar é um ato de proteção.`,
  },
  {
    id: 3,
    question: "Em que casos devo procurar o Conselho Tutelar?",
    tags: ["quando chamar", "motivos", "casos", "agressao", "agrecao", "violencia", "abandono", "perigo", "risco", "bater", "apanhar", "maus tratos", "socorro"],
    answer: `Procure o Conselho quando houver:\n– Suspeita de violência física, psicológica ou sexual.\n– Negligência ou abandono.\n– Situação de risco ou vulnerabilidade grave.\n\nSe há risco para a criança ou adolescente, o Conselho deve ser acionado.`,
  },
  {
    id: 4,
    question: "O Conselho pode retirar a criança da família?",
    tags: ["tirar", "perder a guarda", "abrigo", "afastar", "levar embora", "orfanato", "roubar filho", "perder filho", "toma a crianca", "retira", "remover", "separar", "conselho"] ,
    answer: `Somente em situações graves e de risco imediato.\n\nO afastamento é uma medida excepcional e temporária.\n\nO objetivo sempre é proteger e buscar o fortalecimento da família.\n\nO Conselho não retira criança da família por qualquer motivo.`,
  },
  {
    id: 5,
    question: "Como funcionam guarda, visitação e pensão alimentícia?",
    tags: ["pensao", "pencao", "dinheiro", "guarda", "pai", "mae", "visita", "juiz", "advogado", "pensao atrasada", "final de semana", "com quem fica", "fds"],
    answer: `Esses assuntos são resolvidos pela Justiça.\n\nQuem decide é o juiz, com apoio da Defensoria Pública ou advogado.\n\nO Conselho pode orientar, mas não decide nem altera acordos judiciais.`,
  },
  {
    id: 6,
    question: "O Conselho resolve conflitos entre pais separados?",
    tags: ["briga de casal", "separacao", "divorcio", "marido", "ex", "mulher", "briga familiar", "desentendimento"],
    answer: `Não.\n\nDiscussões entre pais, desacordos sobre visitas ou conflitos conjugais devem ser resolvidos na Justiça.\n\nO Conselho atua somente quando há violação dos direitos da criança ou do adolescente.`,
  },
  {
    id: 7,
    question: "Qual a diferença entre Conselho Tutelar, CRAS, CREAS e Ministério Público?",
    tags: ["cras", "creas", "mp", "promotor", "diferenca", "quem faz o que", "assistencia social"],
    answer: `Conselho Tutelar: Atende situações em que direitos de crianças e adolescentes estão sendo ameaçados ou violados.\n\nCRAS: Atende famílias em situação de vulnerabilidade social, oferecendo apoio e orientação.\n\nCREAS: Atende casos mais graves de violação de direitos, como situações de violência.\n\nMinistério Público: Fiscaliza o cumprimento das leis e pode entrar com ações judiciais quando necessário.\n\nCada órgão tem uma função específica. Eles trabalham em conjunto para proteger crianças e adolescentes.`,
  },
];

export function FAQSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState<FAQItem | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState<FAQItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isListExpanded, setIsListExpanded] = useState(false);

  const normalizeText = (text: string): string =>
    text.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").trim();

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResult(null);
      setHasSearched(false);
      return;
    }

    const queryWords = normalizeText(query)
      .split(/\s+/)
      .filter((w) => w.length > 2);

    const scores = faqData.map((item) => {
      const question = normalizeText(item.question);
      const tags = item.tags.map((tag) => normalizeText(tag));
      let score = 0;

      queryWords.forEach((word) => {
        if (question.includes(word)) score += 3;
        if (tags.some((tag) => tag.includes(word))) score += 1;
      });

      return { item, score };
    });

    const best = scores.reduce((prev, cur) => (cur.score > prev.score ? cur : prev), scores[0]);
    setSearchResult(best.score > 0 ? best.item : null);
    setHasSearched(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchInput(query);

    if (!query.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const queryWords = normalizeText(query).split(/\s+/).filter((w) => w.length > 1);

    const scores = faqData.map((item) => {
      const question = normalizeText(item.question);
      const tags = item.tags.map((tag) => normalizeText(tag));
      let score = 0;

      queryWords.forEach((word) => {
        if (question.includes(word)) score += 3;
        if (tags.some((tag) => tag.includes(word))) score += 1;
      });

      return { item, score };
    });

    const matched = scores
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((s) => s.item);

    setSuggestions(matched);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (item: FAQItem) => {
    setSearchInput(item.question);
    setShowSuggestions(false);
    setSearchResult(item);
    setHasSearched(true);
  };

  const toggleCard = (id: number) => setExpandedCardId((curr) => (curr === id ? null : id));

  return (
    <div className="w-full space-y-8 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white drop-shadow-md mb-4">Dúvidas Frequentes</h2>
          <p className="text-white/80 text-lg">Digite sua pergunta e encontre a resposta que procura.</p>
        </div>

        <div className="relative z-20 max-w-3xl mx-auto">
          <div className="relative flex items-center">
            <input
              value={searchInput}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(searchInput);
                  setShowSuggestions(false);
                }
              }}
              onFocus={() => {
                if (suggestions.length > 0) setShowSuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Ex: quando devo procurar o Conselho Tutelar?"
              className="w-full rounded-full border border-white/30 bg-white/10 backdrop-blur-md pl-8 pr-[120px] py-4 text-white placeholder-white/70 shadow-lg outline-none transition focus:bg-white/20 focus:border-white/50"
            />
            <button
              onClick={() => handleSearch(searchInput)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white px-6 py-2.5 font-bold text-[#f7186a] shadow-lg transition hover:bg-white/90 hover:scale-105"
            >
              Buscar
            </button>
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 top-full z-30 mt-2 rounded-[1.5rem] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl max-h-60 overflow-y-auto divide-y divide-white/10 animate-fade-in">
                {suggestions.map((item) => (
                  <li
                    key={item.id}
                    onMouseDown={() => handleSuggestionClick(item)}
                    className="cursor-pointer px-6 py-4 text-slate-100 transition hover:bg-white/10"
                  >
                    {item.question}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {hasSearched && searchResult && (
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-xl">
            <h3 className="font-semibold text-white">{searchResult.question}</h3>
            <p className="text-white/80 whitespace-pre-wrap mt-2" dangerouslySetInnerHTML={{ __html: searchResult.answer }} />
          </div>
        )}

        {hasSearched && !searchResult && (
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 text-center text-white">
            <p className="font-medium text-white">😕 Não encontramos uma resposta para sua pergunta.</p>
            <p className="text-white/80 mt-2">Tente buscar com termos diferentes ou entre em contato nos canais oficiais.</p>
          </div>
        )}
      </div>

      <div className="px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(isListExpanded ? faqData : faqData.slice(0, 3)).map((item) => (
            <div key={item.id} className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition hover:-translate-y-1 hover:bg-white/20 hover:border-white/30">
              <button
                className="w-full p-6 text-left flex justify-between items-center gap-4"
                onClick={() => toggleCard(item.id)}
              >
                <span className="font-bold text-white">{item.question}</span>
                <ChevronDown className={`w-6 h-6 shrink-0 text-white transition-transform ${expandedCardId === item.id ? "rotate-180" : ""}`} />
              </button>
              {expandedCardId === item.id ? (
                <div className="border-t border-white/10 p-6 pt-4 text-white/80 text-sm whitespace-pre-wrap animate-fade-in" dangerouslySetInnerHTML={{ __html: item.answer }} />
              ) : null}
            </div>
          ))}
        </div>

        {faqData.length > 3 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsListExpanded(!isListExpanded)}
              className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg px-8 py-4 text-base font-bold text-white transition hover:bg-white/30 hover:scale-105"
            >
              {isListExpanded ? "Mostrar menos" : "Ver todas as dúvidas"}
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isListExpanded ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
