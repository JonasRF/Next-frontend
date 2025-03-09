import { AssetShow } from "@/app/components/AssetShow";
import { OrderForm } from "@/app/components/OrderForm";
import { TabsItem } from "@/app/components/Tabs";
import { OrderType } from "@/app/models";
import { Card, Tabs } from "flowbite-react";
import { AssetChartComponent } from "./AssetChartComponent";
import { WalletList } from "@/app/components/WalletList";
import { getMyWallet } from "@/app/queries/queries";

export async function getAsset(symbol: string) {
  const response = await fetch(`http://localhost:3000/assets/${symbol}`);
  return response.json();
}

export default async function AssetDashboard({
  params,
  searchParams,
}: {
  params: Promise<{ assetSymbol: string }>;
  searchParams: Promise<{ wallet_id: string }>;
}) {
  const { assetSymbol } = await params;
  const { wallet_id: walletId } = await searchParams;

  if (!walletId) {
    return <WalletList />;
  }

  const wallet = await getMyWallet(walletId);

  if (!wallet) {
    return <WalletList />;
  }

  const asset = await getAsset(assetSymbol);

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <div className="flex flex-col space-y-2">
        <AssetShow asset={asset} />
        <div className="ml-2 font-bold text-2xl">{asset.price}</div>
      </div>
      <div className="grid grid-cols-5 flex-grow gap-2">
        <div className="col-span-2">
          <Card>
            <Tabs>
              <TabsItem
                active
                title={<div className="text-blue-700">Compra</div>}
              >
                <OrderForm
                  asset={asset}
                  wallet_id={walletId}
                  type={OrderType.BUY}
                />
              </TabsItem>
              <TabsItem title={<div className="text-red-700">Venda</div>}>
                <OrderForm
                  asset={asset}
                  wallet_id={walletId}
                  type={OrderType.SELL}
                />
              </TabsItem>
            </Tabs>
          </Card>
        </div>
        <div className="col-span-3 flex flex-grow">
          <AssetChartComponent asset={asset} />
        </div>
      </div>
    </div>
  );
}
