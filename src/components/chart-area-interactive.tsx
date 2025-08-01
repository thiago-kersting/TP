"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const description = "Um gráfico interativo";

const chartData = [
  {
    date: "2025-04-01",
    expenses: 222,
    category: "Alimentação",
    description: "Supermercado",
  },
  {
    date: "2025-04-02",
    expenses: 97,
    category: "Lazer",
    description: "Cinema",
  },
  {
    date: "2025-04-03",
    expenses: 167,
    category: "Transporte",
    description: "Uber",
  },
  {
    date: "2025-04-04",
    expenses: 242,
    category: "Alimentação",
    description: "Sushi",
  },
  {
    date: "2025-04-05",
    expenses: 373,
    category: "Compras",
    description: "Roupas",
  },
  {
    date: "2025-04-06",
    expenses: 301,
    category: "Saúde",
    description: "Farmácia",
  },
  {
    date: "2025-04-07",
    expenses: 245,
    category: "Lazer",
    description: "Bar com amigos",
  },
  {
    date: "2025-04-08",
    expenses: 409,
    category: "Alimentação",
    description: "Churrasco",
  },
  {
    date: "2025-04-09",
    expenses: 59,
    category: "Transporte",
    description: "Ônibus",
  },
  { date: "2025-04-10", expenses: 261, category: "Casa", description: "Luz" },
  {
    date: "2025-04-11",
    expenses: 327,
    category: "Alimentação",
    description: "Pizza",
  },
  {
    date: "2025-04-12",
    expenses: 292,
    category: "Lazer",
    description: "Teatro",
  },
  {
    date: "2025-04-13",
    expenses: 342,
    category: "Alimentação",
    description: "Restaurante japonês",
  },
  {
    date: "2025-04-14",
    expenses: 137,
    category: "Transporte",
    description: "Gasolina",
  },
  {
    date: "2025-04-15",
    expenses: 120,
    category: "Alimentação",
    description: "Lanche rápido",
  },
  {
    date: "2025-04-16",
    expenses: 138,
    category: "Educação",
    description: "Livro",
  },
  {
    date: "2025-04-17",
    expenses: 446,
    category: "Casa",
    description: "Aluguel",
  },
  {
    date: "2025-04-18",
    expenses: 364,
    category: "Compras",
    description: "Eletrônicos",
  },
  {
    date: "2025-04-19",
    expenses: 243,
    category: "Alimentação",
    description: "Padaria",
  },
  {
    date: "2025-04-20",
    expenses: 89,
    category: "Lazer",
    description: "Sorvete",
  },
  {
    date: "2025-04-21",
    expenses: 137,
    category: "Transporte",
    description: "Estacionamento",
  },
  { date: "2025-04-22", expenses: 224, category: "Casa", description: "Água" },
  {
    date: "2025-04-23",
    expenses: 138,
    category: "Educação",
    description: "Curso online",
  },
  {
    date: "2025-04-24",
    expenses: 387,
    category: "Lazer",
    description: "Viagem curta",
  },
  {
    date: "2025-04-25",
    expenses: 215,
    category: "Alimentação",
    description: "Hamburgueria",
  },
  {
    date: "2025-04-26",
    expenses: 75,
    category: "Transporte",
    description: "Passagem de ônibus",
  },
  {
    date: "2025-04-27",
    expenses: 383,
    category: "Compras",
    description: "Tênis",
  },
  {
    date: "2025-04-28",
    expenses: 122,
    category: "Alimentação",
    description: "Café da manhã",
  },
  {
    date: "2025-04-29",
    expenses: 315,
    category: "Lazer",
    description: "Show ao vivo",
  },
  {
    date: "2025-04-30",
    expenses: 454,
    category: "Casa",
    description: "Condomínio",
  },
  {
    date: "2025-05-01",
    expenses: 165,
    category: "Alimentação",
    description: "Jantar fora",
  },
  {
    date: "2025-05-02",
    expenses: 293,
    category: "Saúde",
    description: "Consulta médica",
  },
  {
    date: "2025-05-03",
    expenses: 247,
    category: "Compras",
    description: "Presentes",
  },
  {
    date: "2025-05-04",
    expenses: 385,
    category: "Alimentação",
    description: "Rodízio de pizza",
  },
  {
    date: "2025-05-05",
    expenses: 481,
    category: "Lazer",
    description: "Parque aquático",
  },
  {
    date: "2025-05-06",
    expenses: 498,
    category: "Casa",
    description: "Móveis",
  },
  {
    date: "2025-05-07",
    expenses: 388,
    category: "Alimentação",
    description: "Delivery",
  },
  {
    date: "2025-05-08",
    expenses: 149,
    category: "Transporte",
    description: "Manutenção carro",
  },
  {
    date: "2025-05-09",
    expenses: 227,
    category: "Lazer",
    description: "Jogos",
  },
  {
    date: "2025-05-10",
    expenses: 293,
    category: "Alimentação",
    description: "Mercado",
  },
  {
    date: "2025-05-11",
    expenses: 335,
    category: "Compras",
    description: "Calçados",
  },
  {
    date: "2025-05-12",
    expenses: 197,
    category: "Alimentação",
    description: "Feira orgânica",
  },
  {
    date: "2025-05-13",
    expenses: 197,
    category: "Lazer",
    description: "Assinatura Netflix",
  },
  {
    date: "2025-05-14",
    expenses: 448,
    category: "Saúde",
    description: "Exames",
  },
  {
    date: "2025-05-15",
    expenses: 473,
    category: "Casa",
    description: "Reparos",
  },
  {
    date: "2025-05-16",
    expenses: 338,
    category: "Transporte",
    description: "Combustível",
  },
  {
    date: "2025-05-17",
    expenses: 499,
    category: "Compras",
    description: "Notebook",
  },
  {
    date: "2025-05-18",
    expenses: 315,
    category: "Lazer",
    description: "Piscina",
  },
  {
    date: "2025-05-19",
    expenses: 235,
    category: "Alimentação",
    description: "Pastel na feira",
  },
  {
    date: "2025-05-20",
    expenses: 177,
    category: "Transporte",
    description: "Táxi",
  },
  {
    date: "2025-05-21",
    expenses: 82,
    category: "Alimentação",
    description: "Açaí",
  },
  {
    date: "2025-05-22",
    expenses: 81,
    category: "Casa",
    description: "Produtos de limpeza",
  },
  {
    date: "2025-05-23",
    expenses: 252,
    category: "Alimentação",
    description: "Jantar romântico",
  },
  {
    date: "2025-05-24",
    expenses: 294,
    category: "Lazer",
    description: "Museu",
  },
  {
    date: "2025-05-25",
    expenses: 201,
    category: "Compras",
    description: "Livros",
  },
  {
    date: "2025-05-26",
    expenses: 213,
    category: "Educação",
    description: "Curso de idioma",
  },
  {
    date: "2025-05-27",
    expenses: 420,
    category: "Casa",
    description: "Reforma",
  },
  {
    date: "2025-05-28",
    expenses: 233,
    category: "Transporte",
    description: "Pedágio",
  },
  {
    date: "2025-05-29",
    expenses: 78,
    category: "Alimentação",
    description: "Café",
  },
  {
    date: "2025-05-30",
    expenses: 340,
    category: "Compras",
    description: "Smartwatch",
  },
  {
    date: "2025-05-31",
    expenses: 178,
    category: "Alimentação",
    description: "Esfirra",
  },
  {
    date: "2025-06-01",
    expenses: 178,
    category: "Transporte",
    description: "Bike compartilhada",
  },
  {
    date: "2025-06-02",
    expenses: 470,
    category: "Lazer",
    description: "Resort",
  },
  {
    date: "2025-06-03",
    expenses: 103,
    category: "Alimentação",
    description: "Salada",
  },
  {
    date: "2025-06-04",
    expenses: 439,
    category: "Compras",
    description: "Mesa de escritório",
  },
  {
    date: "2025-06-05",
    expenses: 88,
    category: "Educação",
    description: "E-book",
  },
  {
    date: "2025-06-06",
    expenses: 294,
    category: "Lazer",
    description: "Escape room",
  },
  {
    date: "2025-06-07",
    expenses: 323,
    category: "Alimentação",
    description: "Pad Thai",
  },
  {
    date: "2025-06-08",
    expenses: 385,
    category: "Casa",
    description: "Cortinas",
  },
  {
    date: "2025-06-09",
    expenses: 438,
    category: "Lazer",
    description: "Trilha",
  },
  {
    date: "2025-06-10",
    expenses: 155,
    category: "Transporte",
    description: "Recarga cartão",
  },
  {
    date: "2025-06-11",
    expenses: 92,
    category: "Alimentação",
    description: "Marmita",
  },
  {
    date: "2025-06-12",
    expenses: 492,
    category: "Casa",
    description: "Geladeira",
  },
  {
    date: "2025-06-13",
    expenses: 81,
    category: "Alimentação",
    description: "Tapioca",
  },
  {
    date: "2025-06-14",
    expenses: 426,
    category: "Lazer",
    description: "Espetáculo",
  },
  {
    date: "2025-06-15",
    expenses: 307,
    category: "Compras",
    description: "Jaqueta",
  },
  {
    date: "2025-06-16",
    expenses: 371,
    category: "Alimentação",
    description: "Festival de comida",
  },
  {
    date: "2025-06-17",
    expenses: 475,
    category: "Saúde",
    description: "Plano de saúde",
  },
  {
    date: "2025-06-18",
    expenses: 107,
    category: "Educação",
    description: "Plataforma de estudos",
  },
  {
    date: "2025-06-19",
    expenses: 341,
    category: "Transporte",
    description: "Troca de óleo",
  },
  {
    date: "2025-06-20",
    expenses: 408,
    category: "Casa",
    description: "Decoração",
  },
  {
    date: "2025-06-21",
    expenses: 169,
    category: "Alimentação",
    description: "Self-service",
  },
  {
    date: "2025-06-22",
    expenses: 317,
    category: "Lazer",
    description: "Stand-up comedy",
  },
  {
    date: "2025-06-23",
    expenses: 480,
    category: "Compras",
    description: "Cadeira gamer",
  },
  {
    date: "2025-06-24",
    expenses: 132,
    category: "Transporte",
    description: "Ônibus intermunicipal",
  },
  {
    date: "2025-06-25",
    expenses: 141,
    category: "Alimentação",
    description: "Pão e leite",
  },
  {
    date: "2025-06-26",
    expenses: 434,
    category: "Casa",
    description: "Aquecedor",
  },
  {
    date: "2025-06-27",
    expenses: 448,
    category: "Saúde",
    description: "Psicólogo",
  },
  {
    date: "2025-06-28",
    expenses: 149,
    category: "Alimentação",
    description: "Temaki",
  },
  {
    date: "2025-06-29",
    expenses: 103,
    category: "Transporte",
    description: "Estacionamento shopping",
  },
  {
    date: "2025-06-30",
    expenses: 446,
    category: "Compras",
    description: "Smartphone",
  },
];

const chartConfig = {
  expenses: {
    label: "Gastos",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2025-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total de Gastos</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total dos últimos 3 meses
          </span>
          <span className="@[540px]/card:hidden">Últimos 3 meses</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Últimos 3 meses</ToggleGroupItem>
            <ToggleGroupItem value="30d">Últimos 30 dias</ToggleGroupItem>
            <ToggleGroupItem value="7d">Últimos 7 dias</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Últimos 3 meses" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Últimos 3 meses
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Últimos 30 dias
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Últimos 7 dias
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillexpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const [year, month, day] = value.split("-").map(Number);
                const date = new Date(year, month - 1, day);
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value, name, props) => {
                    return [
                      <div key="tooltip-content" className="space-y-1">
                        <div className="font-medium text-foreground">
                          {value.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <div>Categoria: {props.payload.category}</div>
                          <div>Descrição: {props.payload.description}</div>
                        </div>
                      </div>,
                    ];
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="expenses"
              type="natural"
              fill="url(#fillexpenses)"
              stroke="var(--color-expenses)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
