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

  const toggleCard = (id: number) => setExpandedCardId((curr) => (curr === id ? null : id));

  return (
    <div className="w-full space-y-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground">Digite sua pergunta e encontre a resposta que procura.</p>
        </div>

        <div className="space-y-3">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSearch(searchInput); }}
            placeholder="Ex: quando devo procurar o Conselho Tutelar?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleSearch(searchInput)}
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Buscar
          </button>
        </div>

        {hasSearched && searchResult && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-800">{searchResult.question}</h3>
            <p className="text-gray-700 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: searchResult.answer }} />
          </div>
        )}

        {hasSearched && !searchResult && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 text-center">
            <p className="font-medium text-yellow-800">😕 Não encontramos uma resposta para sua pergunta.</p>
            <p className="text-yellow-700">Tente buscar com termos diferentes ou entre em contato nos canais oficiais.</p>
          </div>
        )}
      </div>

      <div className="px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border border-gray-200 shadow hover:shadow-lg transition-shadow">
              <button
                className="w-full p-5 text-left flex justify-between items-center"
                onClick={() => toggleCard(item.id)}
              >
                <span className="font-semibold text-gray-800">{item.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${expandedCardId === item.id ? "rotate-180" : ""}`} />
              </button>
              {expandedCardId === item.id ? (
                <div className="p-5 border-t border-gray-200 text-gray-700 text-sm whitespace-pre-wrap animate-fade-in" dangerouslySetInnerHTML={{ __html: item.answer }} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
