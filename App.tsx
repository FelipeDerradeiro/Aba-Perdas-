
import React, { useState } from 'react';
import { 
  Bell, 
  Menu, 
  LayoutGrid, 
  Leaf, 
  Plus, 
  DollarSign, 
  Target, 
  AlertCircle, 
  ChevronDown, 
  RotateCcw, 
  Search, 
  Clock, 
  CheckCircle2, 
  FileText,
  Package,
  Trash2,
  TrendingDown,
  ChevronUp
} from 'lucide-react';

// --- Types ---

interface StatItem {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  colorClass: string;
}

interface ProductAlert {
  id: string;
  name: string;
  quantity: string;
  category: string;
  tag: string;
  tagColor: string;
  isRisk?: boolean;
  value?: string;
}

// --- Components ---

const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white border-b border-slate-100 px-4 py-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
        <Leaf className="text-white w-5 h-5" />
      </div>
      <span className="text-xl font-bold text-slate-800 tracking-tight">Horti.</span>
    </div>
    <div className="flex items-center gap-4 text-slate-500">
      <button className="p-1 hover:bg-slate-50 rounded-full transition-colors relative">
        <Bell className="w-6 h-6" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
      <button className="p-1 hover:bg-slate-50 rounded-full transition-colors">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  </header>
);

const LossSummaryCards: React.FC = () => {
  const cards = [
    { 
      label: 'TAXA DE PERDAS', 
      value: '0.7%', 
      sub: 'Meta: 3%', 
      icon: <TrendingDown className="w-5 h-5" />, 
      bg: 'bg-slate-700', 
      textColor: 'text-white' 
    },
    { 
      label: 'VALOR EM RISCO', 
      value: 'R$ 0,00', 
      sub: 'Clique para ver produtos', 
      icon: <DollarSign className="w-5 h-5" />, 
      bg: 'bg-orange-500', 
      textColor: 'text-white' 
    },
    { 
      label: 'CRÍTICOS + ALTOS', 
      value: '0', 
      sub: 'Clique para ver alertas', 
      icon: <AlertCircle className="w-5 h-5" />, 
      bg: 'bg-rose-500', 
      textColor: 'text-white' 
    },
    { 
      label: 'RECUPERÁVEL', 
      value: 'R$ 0,00', 
      sub: 'Clique para registrar perda', 
      icon: <Target className="w-5 h-5" />, 
      bg: 'bg-emerald-500', 
      textColor: 'text-white' 
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      {cards.map((card, idx) => (
        <div key={idx} className={`${card.bg} ${card.textColor} p-4 rounded-2xl shadow-sm flex flex-col justify-between h-40 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 p-3 opacity-20">
             {card.icon}
          </div>
          <div className="flex items-start justify-between">
            <div className="p-1.5 bg-white/20 rounded-lg">
              {card.icon}
            </div>
            {card.label === 'CRÍTICOS + ALTOS' && <div className="bg-white/30 px-2 py-0.5 rounded-full text-[10px] font-bold">0</div>}
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-wider uppercase opacity-80 mb-1">{card.label}</p>
            <h3 className="text-2xl font-bold mb-1">{card.value}</h3>
            <p className="text-[10px] font-medium opacity-90">{card.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const MiniStatsList: React.FC = () => {
  const stats = [
    { label: 'TOTAL MONITORADO', value: '0', icon: <Target className="w-5 h-5" />, color: 'bg-slate-100 text-slate-500' },
    { label: 'OCORRÊNCIAS (7D)', value: '0', icon: <AlertCircle className="w-5 h-5" />, color: 'bg-rose-50 text-rose-500' },
    { label: 'RESOLVIDAS', value: '0', icon: <CheckCircle2 className="w-5 h-5" />, color: 'bg-emerald-50 text-emerald-500' },
    { label: 'VENCENDO HOJE', value: '0', icon: <Clock className="w-5 h-5" />, color: 'bg-amber-50 text-amber-500' },
  ];

  return (
    <div className="px-4 pb-4 space-y-3">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white border border-slate-100 p-4 rounded-xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${stat.color}`}>
              {stat.icon}
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</span>
          </div>
          <span className="text-xl font-bold text-slate-800">{stat.value}</span>
        </div>
      ))}
    </div>
  );
};

const CriticalAlertBanner: React.FC = () => (
  <div className="mx-4 p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-between gap-4 mb-4">
    <div className="flex items-center gap-3">
      <div className="bg-rose-500 p-2 rounded-lg">
        <AlertCircle className="text-white w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-rose-800">4 Alertas Críticos</h4>
        <p className="text-[11px] text-rose-600 font-medium leading-tight line-clamp-2">
          Banana Da Terra, Lote N/A | Banana - Lote N/A | Mas - Lote N/A +1 mais
        </p>
      </div>
    </div>
    <button className="bg-rose-500 text-white px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap shadow-md shadow-rose-200">
      Ver Detalhes
    </button>
  </div>
);

const SectionContainer: React.FC<{ title: string; subtitle: string; icon: React.ReactNode; children: React.ReactNode; isCollapsible?: boolean }> = ({ 
  title, subtitle, icon, children, isCollapsible = true 
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mx-4 mb-4 bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
      <div 
        className="p-4 flex items-center justify-between cursor-pointer active:bg-slate-50 transition-colors"
        onClick={() => isCollapsible && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-50 rounded-lg text-slate-600 border border-slate-100">
            {icon}
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-800">{title}</h3>
            <p className="text-[11px] text-slate-500 font-medium">{subtitle}</p>
          </div>
        </div>
        {isCollapsible && (
          <div className="text-slate-400">
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        )}
      </div>
      {isOpen && (
        <div className="border-t border-slate-50 p-4">
          {children}
        </div>
      )}
    </div>
  );
};

const ActiveAlertsContent: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = [
    { name: 'Todos (4)', id: 'Todos' },
    { name: 'Vencidos (0)', id: 'Vencidos', icon: <AlertCircle className="w-3 h-3" /> },
    { name: 'Vencendo (0)', id: 'Vencendo', icon: <Clock className="w-3 h-3" /> },
    { name: 'Estoque Baixo (4)', id: 'Estoque', icon: <Package className="w-3 h-3" /> },
  ];

  const items: ProductAlert[] = [
    { id: '1', name: 'Banana Da Te...', quantity: '1/10 caixa', category: 'Frutas', tag: 'ESTOQUE', tagColor: 'bg-amber-500' },
    { id: '2', name: 'Banana', quantity: '3/10 caixa', category: 'Recente', tag: 'ESTOQUE', tagColor: 'bg-amber-500' },
    { id: '3', name: 'Mas', quantity: '1/10 caixa', category: 'Recente', tag: 'ESTOQUE', tagColor: 'bg-amber-500' },
    { id: '4', name: 'Banan...', quantity: '1/10 caixa', category: 'Recente', tag: 'ESTOQUE', tagColor: 'bg-amber-500' },
  ];

  return (
    <div>
      <div className="flex overflow-x-auto gap-2 mb-6 no-scrollbar pb-1">
        {filters.map(f => (
          <button 
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`whitespace-nowrap px-3 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeFilter === f.id 
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
                : 'bg-slate-50 text-slate-500 border border-slate-100 hover:bg-slate-100'
            }`}
          >
            {f.icon}
            {f.name}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between pb-4 border-b border-slate-50 last:border-0 last:pb-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h5 className="text-sm font-bold text-slate-800">{item.name}</h5>
                  <span className={`${item.tagColor} text-white text-[9px] px-1.5 py-0.5 rounded font-bold`}>{item.tag}</span>
                </div>
                <p className="text-[11px] text-slate-500">{item.quantity} • {item.category}</p>
              </div>
            </div>
            <button className="text-[11px] font-bold text-slate-500 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
              Fazer pedido
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const HistoryContent: React.FC = () => {
  const cards = [
    { label: 'Pendentes', value: '0', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
    { label: 'Resolvidos', value: '0', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
    { label: 'Perdas Totais', value: 'R$ 0', color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100' },
    { label: 'Recuperado', value: 'R$ 0', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {cards.map((c, i) => (
          <div key={i} className={`${c.bg} ${c.border} border p-2 rounded-xl text-center`}>
            <p className={`text-sm font-bold ${c.color}`}>{c.value}</p>
            <p className="text-[9px] text-slate-500 font-medium leading-tight">{c.label}</p>
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs outline-none focus:ring-1 focus:ring-slate-300 transition-all"
          />
        </div>
        <select className="bg-slate-50 border border-slate-100 rounded-lg text-[11px] font-medium px-2 py-2 outline-none appearance-none pr-8 relative bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat">
          <option>Todos Motivos</option>
        </select>
      </div>

      <div className="py-10 flex flex-col items-center justify-center text-slate-400 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
        <FileText className="w-10 h-10 mb-2 opacity-50" />
        <p className="text-xs font-semibold">Nenhuma ocorrência encontrada</p>
      </div>
    </div>
  );
};

const BottomNav: React.FC = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-2 pb-6 flex items-center justify-between z-50">
    <div className="flex flex-col items-center gap-1 text-slate-400">
      <LayoutGrid className="w-6 h-6" />
      <span className="text-[10px] font-semibold">Painel</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-slate-400">
      <Leaf className="w-6 h-6" />
      <span className="text-[10px] font-semibold">Estoque</span>
    </div>
    
    <div className="relative -mt-10">
      <button className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-200 border-4 border-white active:scale-95 transition-transform">
        <Plus className="w-8 h-8" />
      </button>
    </div>

    <div className="flex flex-col items-center gap-1 text-slate-400">
      <DollarSign className="w-6 h-6" />
      <span className="text-[10px] font-semibold">Finanças</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-emerald-600">
      <div className="relative">
        <Target className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></div>
      </div>
      <span className="text-[10px] font-bold">Perdas</span>
    </div>
  </nav>
);

// --- Main Application ---

const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen pb-24 shadow-2xl relative border-x border-slate-100 overflow-hidden">
      <Header />
      
      <main className="animate-in fade-in duration-700">
        <div className="p-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Gestão de Quebras</h1>
            <p className="text-xs font-medium text-slate-500">Monitore riscos e perdas em tempo real</p>
          </div>
          <button className="p-2 bg-white border border-slate-100 rounded-xl shadow-sm hover:bg-slate-50 transition-colors">
            <RotateCcw className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* A1: Summary Cards */}
        <LossSummaryCards />

        {/* A2: Mini Stats Vertical List */}
        <MiniStatsList />

        {/* A3: High Alert Context */}
        <CriticalAlertBanner />

        {/* A4 & A7: Section - Alert Details */}
        <SectionContainer 
          title="Alertas Ativos" 
          subtitle="4 alertas • 0 críticos" 
          icon={<AlertCircle className="w-5 h-5" />}
        >
          <ActiveAlertsContent />
        </SectionContainer>

        {/* A5: Section - Products at Risk */}
        <SectionContainer 
          title="Produtos em Risco" 
          subtitle="0 itens • 0 críticos/altos" 
          icon={<AlertCircle className="w-5 h-5 text-amber-500" />}
        >
          <div className="flex flex-col items-center justify-center py-8 text-slate-400">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-3">
               <Package className="w-8 h-8 opacity-40" />
            </div>
            <p className="text-xs font-semibold">Nenhum produto em risco nesta categoria</p>
          </div>
        </SectionContainer>

        {/* Intermediate Section seen in A5 - Manual Registration */}
        <SectionContainer 
          title="Registrar Perda Manual" 
          subtitle="Para itens não listados no radar" 
          icon={<Trash2 className="w-5 h-5 text-rose-500" />}
        >
          <button className="w-full py-3 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors">
            Adicionar nova quebra manual
          </button>
        </SectionContainer>

        {/* A6: Section - History */}
        <SectionContainer 
          title="Histórico de Ocorrências" 
          subtitle="0 registros no total" 
          icon={<FileText className="w-5 h-5 text-blue-500" />}
          isCollapsible={false}
        >
          <HistoryContent />
        </SectionContainer>
      </main>

      <BottomNav />
    </div>
  );
};

export default App;
