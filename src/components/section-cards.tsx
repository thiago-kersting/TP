import {
  IconTrendingDown,
  IconTrendingUp,
  IconTarget,
  IconCategory,
  IconReceipt,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Gasto no Mês</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            R$1.250,00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium items-center">
            Aumentou neste mês <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Baseado no mês anterior</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription> Meta de Gasto Mensal</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            R$ 3.000,00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTarget />
              78% atingido
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium items-center">
            Meta que você definiu para o mês <IconTarget className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Meta opcional personalizada
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription> Categoria Mais Ativa</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Alimentação
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconCategory />
              Atualizado diariamente
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium items-center">
            Categorias onde você mais gastou <IconCategory className="size-4" />
          </div>
          <div className="text-muted-foreground">Baseado nos seus gastos</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Número de Transações</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            48 registros
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconReceipt />
              Média de 1,6 por dia
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium items-center">
            Quantidade de comandos enviados <IconReceipt className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Comandos enviados no WhatsApp
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
