import { Table, TableHead, TableHeadCell } from "flowbite-react";

export default function MyWalletList() {
  return (
    
      <div className="flex flex-col">
        <article className="format">
          <h1>Minha carteira</h1>
        </article>

        <div className="overflow-x-auto w-full">
          <Table>
          <TableHead>
              <TableHeadCell>Ativo</TableHeadCell>
              <TableHeadCell>Cotação</TableHeadCell>
              <TableHeadCell>Quantidade</TableHeadCell>
              <TableHeadCell>Comprar/Vender</TableHeadCell>
            </TableHead>
          </Table>
        </div>
      </div>
   
  );
}
