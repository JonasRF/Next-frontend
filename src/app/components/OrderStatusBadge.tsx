import { Badge } from "flowbite-react";
import { OrderStatus } from "../models";

export function OrderStatusBadge(props: { status: OrderStatus }) {
  let color: string;
  let text: string;
  switch (props.status) {
    case OrderStatus.PENDING:
      color = "info";
      text = "Pendente";
      break;
    case OrderStatus.OPEN:
      color = "warning";
      text = "Aberta";
      break;
    case OrderStatus.CLOSED:
      color = "success";
      text = "Fechada";
      break;
    case OrderStatus.FAILED:
      color = "failure";
      text = "Falhou";
      break;
  }
  return <Badge color={color} className="w-fit">{text}</Badge>;
}
