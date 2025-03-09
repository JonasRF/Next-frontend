import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { AssetShow } from "../components/AssetShow";
import { getAssets, getMyWallet } from "../queries/queries";
import { WalletList } from "../components/WalletList";

export default async function AssetsListPage({
  searchParams,
}: {
  searchParams: Promise<{ wallet_id: string }>;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { wallet_id } = await searchParams;

  if(!wallet_id) {
    return <WalletList />;
  }

  const wallet = await getMyWallet(wallet_id);

  if (!wallet) {
    return <WalletList />;
  }

  const assets = await getAssets();

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Ativos</h1>
      </article>

      <div className="overflow-x-auto w-full">
        <Table className="h-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {assets.map((asset, key) => (
              <TableRow key={key}>
                <TableCell>
                  <AssetShow asset={asset} />
                </TableCell>             
                <TableCell>{asset.price}</TableCell>     
                <TableCell>
                  <Button color="light">Comprar/Vender</Button> 
                </TableCell>         
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
