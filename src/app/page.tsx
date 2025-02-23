import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Image from "next/image";
import { Wallet } from "./models";

export async function getMyWallet(walletId: string): Promise<Wallet> {
  const response = await fetch(`http://localhost:3000/wallets/${walletId}`);
  return response.json();
}

export default async function MyWalletList({
  searchParams,
}: {
  searchParams: Promise<{ wallet_id: string }>;
}) {
  const { wallet_id } = await searchParams;
  const wallet = await getMyWallet(wallet_id);
  console.log(wallet);
  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Minha carteira</h1>
      </article>

      <div className="overflow-x-auto w-full">
        <Table className="h-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Quantidade</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {wallet.assets.map((walletAsset, key) => (
              <TableRow key={key}>
                <TableCell>
                  <div className="flex space-x-1">
                    <div className="content-center">
                      <Image
                        src={walletAsset.asset.image_url}
                        alt={walletAsset.asset.symbol}
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <span>{walletAsset.asset.name}</span>
                      <span>{walletAsset.asset.symbol}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{walletAsset.asset.name}</TableCell>
                <TableCell>{walletAsset.asset.price}</TableCell>
                <TableCell>{walletAsset.shares}</TableCell>
                <Button color="light">Comprar/Vender</Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
